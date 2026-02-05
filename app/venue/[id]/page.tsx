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
}

function getDeviceType(userAgent: string): 'iOS' | 'Android' | 'Desktop' {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
  if (/Android/i.test(userAgent)) return 'Android';
  return 'Desktop';
}

export default async function VenuePage({ params }: PageProps) {
  const { id } = await params;
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';

  const deviceType = getDeviceType(userAgent);

  // Log the scan to Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log('QR Scan - Env vars present:', { hasUrl: !!supabaseUrl, hasKey: !!supabaseKey });

  if (supabaseUrl && supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from('qr_scans').insert({
      venue_id: id,
      device_type: deviceType,
      user_agent: userAgent,
      ip_address: ip,
    });
    if (error) {
      console.error('QR Scan insert error:', error);
    } else {
      console.log('QR Scan recorded for venue:', id);
    }
  } else {
    console.warn('QR Scan skipped - missing env vars');
  }

  // Redirect based on device
  if (deviceType === 'iOS') {
    redirect(APP_STORE_URL);
  }

  // For Android/Desktop, redirect to main site (or show a page)
  redirect(FALLBACK_URL);
}
