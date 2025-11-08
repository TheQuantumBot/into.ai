/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
