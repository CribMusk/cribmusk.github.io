/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/i,
      use: "raw-loader",
    });

    return config;
  },
  images: {
    domains: ["cf.shopee.vn"],
  },
};

module.exports = nextConfig;
