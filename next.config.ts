import type { NextConfig } from "next";
const nextConfig: NextConfig = {
 async redirects() {
  return ["focus-blend", "balance-blend", "strong-focus", "after-bloom-signature"].map(id => ({ source: `/shop/${id}`, destination: "/shop", permanent: true }));
 }
};
export default nextConfig;
