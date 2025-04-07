"use client";

import { useEffect } from 'react';
import config from '@/lib/decap-config'; // Import the config object

// This component ensures the route exists and initializes Decap CMS
export default function AdminPage() {
  useEffect(() => {
    // Dynamically import decap-cms-app only on the client-side
    (async () => {
      const CMS = (await import('decap-cms-app')).default; // Use .default for dynamic import
      // Initialize Decap CMS with the imported config
      // Use 'any' for config type assertion if strict types cause issues with the library
      CMS.init({ config: config as any });
    })();
  }, []);

  // Decap CMS needs a root element to mount onto.
  return <div id="nc-root">Loading CMS...</div>; // Render the mount point
}
