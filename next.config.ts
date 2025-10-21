import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/rc.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
