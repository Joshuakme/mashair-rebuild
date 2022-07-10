/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "mashair_rebuild",
    mongodb_password: "mashair_rebuild_password",
    mongodb_dbname: "mashair_rebuild",
  },
  future: { webpack5: true },
};

module.exports = nextConfig;
