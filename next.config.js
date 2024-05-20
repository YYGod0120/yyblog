/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/front/noweek/0",
        permanent: true,
      },
      // {
      //   source: "/:anything((?!/).*)",
      //   destination: "/front/0",
      //   permanent: true,
      // },
    ];
  },
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig;
