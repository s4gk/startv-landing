import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: ["./src/styles"],
    prependData: `@import "variables";`,
  },
};

export default nextConfig;
