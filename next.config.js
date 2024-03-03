/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/0",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
