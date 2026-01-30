/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lovable.dev',
      },
    ],
  },
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },
};

export default nextConfig;
