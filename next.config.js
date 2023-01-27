module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dghscys28/image/fetch/**",
      },
    ],
  },
  output: "standalone",
};
