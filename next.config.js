/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      child_process: false,
      http2: false,
      net: false,
      tls: false,
    };

    return config;
  },
};

module.exports = nextConfig;
