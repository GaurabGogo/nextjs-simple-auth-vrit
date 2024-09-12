/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

  // config for images for local host
  images: {
    domains: ["localhost:3000"],
  },
};

export default nextConfig;
