/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st4.depositphotos.com",
        hostname: "www.hyderabaddutyfree.com",
      },
      {
        protocol: "https",
        hostname: "www.hyderabaddutyfree.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/signin",
        permanent: true,
      },
    ];
  },
};
//['admin','user','superadmin']
module.exports = nextConfig;
