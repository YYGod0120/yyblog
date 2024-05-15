/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/front/0",
        permanent: true,
      },
      // {
      //   source: "/:anything((?!/).*)",
      //   destination: "/front/0",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
