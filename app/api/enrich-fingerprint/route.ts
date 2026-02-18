import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { computeFingerprintHash } from "@/lib/fingerprint";

export async function POST(request: Request) {
  try {
    const { pending_referral_id, screen_info, language, timezone } =
      await request.json();

    if (!pending_referral_id || !screen_info || !language || !timezone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Fetch existing row to get ip_address
    const { data: existing, error: fetchError } = await supabaseServer
      .from("pending_referrals")
      .select("ip_address")
      .eq("id", pending_referral_id)
      .single();

    if (fetchError || !existing) {
      return NextResponse.json(
        { error: "Pending referral not found" },
        { status: 404 }
      );
    }

    // Compute fingerprint hash: ip|screenInfo|language|timezone (no user agent)
    const fingerprintHash = await computeFingerprintHash(
      existing.ip_address || "unknown",
      screen_info,
      language,
      timezone
    );

    // Update the pending referral with client data
    const { error: updateError } = await supabaseServer
      .from("pending_referrals")
      .update({
        screen_info,
        language,
        timezone,
        fingerprint_hash: fingerprintHash,
      })
      .eq("id", pending_referral_id);

    if (updateError) {
      console.error("Error enriching fingerprint:", updateError);
      return NextResponse.json(
        { error: "Failed to update" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enrich fingerprint error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
