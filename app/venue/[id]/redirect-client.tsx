'use client';

import { useEffect } from 'react';

interface RedirectToAppStoreProps {
  appStoreUrl: string;
  deviceType: 'iOS' | 'Android' | 'Desktop';
}

export function RedirectToAppStore({ appStoreUrl, deviceType }: RedirectToAppStoreProps) {
  useEffect(() => {
    // Only redirect iOS users to the App Store
    if (deviceType === 'iOS') {
      // Small delay to ensure the page renders (fallback visible)
      const timer = setTimeout(() => {
        window.location.href = appStoreUrl;
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [appStoreUrl, deviceType]);

  return null;
}
