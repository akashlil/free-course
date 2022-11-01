/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["learnwithsumit.com"],
  },

  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
