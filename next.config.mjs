/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(nextConfig);
