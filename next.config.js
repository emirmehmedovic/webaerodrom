/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed this line to allow dynamic routes for CMS admin
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
