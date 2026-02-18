import { headers } from "next/headers";
import { supabaseServer } from "@/lib/supabase-server";
import { computeFingerprintHash } from "@/lib/fingerprint";
import InviteClient from "./InviteClient";

interface PageProps {
  params: Promise<{ code: string }>;
}

export default async function InvitePage({ params }: PageProps) {
  const { code } = await params;
  const headersList = await headers();

  // Extract IP from headers
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  // Extract user agent
  const userAgent = headersList.get("user-agent") || "";

  // Look up the referral code and referrer info
  let referrerName: string | null = null;
  let referrerAvatar: string | null = null;
  let pendingReferralId: string | null = null;
  let validCode = false;

  if (supabaseServer) {
    const { data: codeData } = await supabaseServer
      .from("referral_codes")
      .select("user_id, users(display_name, avatar_url)")
      .eq("code", code.toUpperCase())
      .single();

    if (codeData) {
      validCode = true;
      const user = codeData.users as unknown as {
        display_name: string | null;
        avatar_url: string | null;
      };
      referrerName = user?.display_name || null;
      referrerAvatar = user?.avatar_url || null;

      // Insert pending referral with server-side data (client data enriched later)
      const initialHash = await computeFingerprintHash(ip, "pending", "pending", "pending");

      const { data: pending } = await supabaseServer
        .from("pending_referrals")
        .insert({
          referral_code: code.toUpperCase(),
          ip_address: ip,
          user_agent: userAgent,
          fingerprint_hash: initialHash,
        })
        .select("id")
        .single();

      if (pending) {
        pendingReferralId = pending.id;
      }
    }
  }

  return (
    <InviteClient
      code={code.toUpperCase()}
      validCode={validCode}
      referrerName={referrerName}
      referrerAvatar={referrerAvatar}
      pendingReferralId={pendingReferralId}
    />
  );
}
