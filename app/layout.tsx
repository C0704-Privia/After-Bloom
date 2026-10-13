import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
const manrope = localFont({ src: [{ path: "../public/fonts/manrope-400.ttf", weight: "400" }, { path: "../public/fonts/manrope-500.ttf", weight: "500" }, { path: "../public/fonts/manrope-600.ttf", weight: "600" }, { path: "../public/fonts/manrope-700.ttf", weight: "700" }], variable: "--font-manrope", display: "swap" });
const montserrat = localFont({ src: [{ path: "../public/fonts/montserrat-400.ttf", weight: "400" }, { path: "../public/fonts/montserrat-500.ttf", weight: "500" }, { path: "../public/fonts/montserrat-600.ttf", weight: "600" }], variable: "--font-montserrat", display: "swap" });
export const metadata: Metadata = { title: { default: "After Bloom — Coffee for Focus", template: "%s | After Bloom" }, description: "Một khoảng dừng cho điều quan trọng. Khám phá bộ sưu tập cà phê After Bloom và tìm một gu phù hợp với nhịp ngày của bạn." };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) { return <html lang="vi" className={`${manrope.variable} ${montserrat.variable}`}><body><CartProvider><SiteHeader />{children}<SiteFooter /></CartProvider></body></html>; }
