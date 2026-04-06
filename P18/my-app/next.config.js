/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.uniqlo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d29c1z66frfv6c.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
