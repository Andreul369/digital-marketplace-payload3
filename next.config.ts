import type { NextConfig } from 'next';
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'wuhitftytkyuxvycdlfb.supabase.co' },
    ],
  },
};

export default withPayload(nextConfig);
