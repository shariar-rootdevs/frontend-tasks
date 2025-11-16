/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all domains
      },
      {
        protocol: 'http',
        hostname: '**', // allow all http domains too
      },
    ],
  },
}

export default nextConfig
