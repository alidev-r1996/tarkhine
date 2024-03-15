/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s8.uupload.ir",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
