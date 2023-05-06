/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mongoDbUrl: "mongodb://127.0.0.1:27017/test1",
  },
};

module.exports = nextConfig;
