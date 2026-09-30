import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn2.thecatapi.com/images/**"),
      new URL(
        "https://s3.us-west-2.amazonaws.com/cdn2.thecatapi.com/images/**",
      ),
    ],
  },
};

export default nextConfig;
