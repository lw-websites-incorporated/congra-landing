import { supabase } from '@/lib/supabase';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

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
  await supabase.from('qr_scans').insert({
    venue_id: id,
    device_type: deviceType,
    user_agent: userAgent,
    ip_address: ip,
  });

  // Redirect based on device
  if (deviceType === 'iOS') {
    redirect(APP_STORE_URL);
  }

  // For Android/Desktop, redirect to main site (or show a page)
  redirect(FALLBACK_URL);
}
