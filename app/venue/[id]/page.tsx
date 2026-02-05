import { createClient } from '@supabase/supabase-js';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

// Placeholder - replace with your actual App Store URL
const APP_STORE_URL = 'https://apps.apple.com/app/congra/id123456789';

// Fallback for non-iOS devices
const FALLBACK_URL = 'https://congra.app';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ debug?: string }>;
}

function getDeviceType(userAgent: string): 'iOS' | 'Android' | 'Desktop' {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
  if (/Android/i.test(userAgent)) return 'Android';
  return 'Desktop';
}

export default async function VenuePage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { debug } = await searchParams;
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';

  const deviceType = getDeviceType(userAgent);

  // Log the scan to Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let insertResult = 'not attempted';
  let insertError = null;

  if (supabaseUrl && supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from('qr_scans').insert({
      venue_id: id,
      device_type: deviceType,
      user_agent: userAgent,
      ip_address: ip,
    });
    if (error) {
      insertResult = 'error';
      insertError = error.message;
    } else {
      insertResult = 'success';
    }
  } else {
    insertResult = 'skipped - missing env vars';
  }

  // Debug mode - show what's happening instead of redirecting
  if (debug === 'true') {
    return (
      <div style={{ fontFamily: 'monospace', padding: 20 }}>
        <h1>QR Scan Debug</h1>
        <pre>{JSON.stringify({
          venueId: id,
          deviceType,
          hasSupabaseUrl: !!supabaseUrl,
          hasSupabaseKey: !!supabaseKey,
          supabaseUrlPrefix: supabaseUrl?.substring(0, 30) + '...',
          insertResult,
          insertError,
          ip,
        }, null, 2)}</pre>
      </div>
    );
  }

  // Redirect based on device
  if (deviceType === 'iOS') {
    redirect(APP_STORE_URL);
  }

  // For Android/Desktop, redirect to main site (or show a page)
  redirect(FALLBACK_URL);
}
