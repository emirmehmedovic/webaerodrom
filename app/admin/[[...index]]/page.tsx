"use client";

import React from 'react';

// Simplified component.
// It only renders the root div. The CMS should be loaded by
// the script in `public/admin/index.html` which looks for `public/admin/config.yml`.
export default function AdminPage() {
  // No useEffect or CMS.init needed here for the standard setup
  return <div id="nc-root">Loading CMS...</div>;
}
