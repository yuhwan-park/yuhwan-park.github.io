/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  output: 'export',
};

export default withContentlayer(nextConfig);
