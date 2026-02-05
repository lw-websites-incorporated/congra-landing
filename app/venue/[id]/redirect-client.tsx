'use client';

import { useEffect } from 'react';

interface SmartAppRedirectProps {
  venueId: string;
  venueName: string;
  appStoreUrl: string | null;
  deviceType: 'iOS' | 'Android' | 'Desktop';
}

export function SmartAppRedirect({ venueId, venueName, appStoreUrl, deviceType }: SmartAppRedirectProps) {
  useEffect(() => {
    // Only attempt on mobile devices
    if (deviceType !== 'iOS' && deviceType !== 'Android') {
      return;
    }

    // Build the deep link URL with venue info
    const deepLink = `congra://venue/${venueId}?name=${encodeURIComponent(venueName)}`;

    // Track if we've left the page (app opened)
    let hasLeftPage = false;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hasLeftPage = true;
      }
    };

    const handleBlur = () => {
      hasLeftPage = true;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);

    // Try to open the app via custom scheme
    const startTime = Date.now();
    window.location.href = deepLink;

    // After a delay, check if we're still here
    // If we are, the app isn't installed
    const fallbackTimer = setTimeout(() => {
      // Only redirect if we haven't left the page and have a valid App Store URL
      if (!hasLeftPage && appStoreUrl && Date.now() - startTime < 3000) {
        window.location.href = appStoreUrl;
      }
      // If no App Store URL, just stay on the landing page
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
    };
  }, [venueId, venueName, appStoreUrl, deviceType]);

  return null;
}

// Keep the old component for backwards compatibility
export function RedirectToAppStore({ appStoreUrl, deviceType }: { appStoreUrl: string | null; deviceType: 'iOS' | 'Android' | 'Desktop' }) {
  return null;
}
