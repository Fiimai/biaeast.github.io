/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export for GitHub Pages
  basePath: '', // No base path for user/org site (biaeast.github.io)
  assetPrefix: '', // No asset prefix for user/org site
  trailingSlash: true, // Add trailing slashes for GitHub Pages
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
