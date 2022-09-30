module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/**",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        pathname: "/animals/**",
      },
      {
        protocol: "https",
        hostname: "americanminipigassociation.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};
