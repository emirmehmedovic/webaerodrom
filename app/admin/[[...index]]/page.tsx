"use client";

import React from 'react';

// Simplified component.
// It only renders the root div. The CMS should be loaded by
// the script in `public/admin/index.html` which looks for `public/admin/config.yml`.
export default function AdminPage() {
  console.log("Rendering simplified AdminPage component for standard Decap setup.");
  // Decap CMS script will mount its UI in the div with id="nc-root"
  // defined in public/admin/index.html.
  return <div id="nc-root">Loading CMS...</div>;
}
