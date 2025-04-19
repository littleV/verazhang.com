/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/",
  images: {
    unoptimized: true, // For static export
  },
};

export default nextConfig;
