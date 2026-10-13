import type { Metadata } from "next";
import ShopCollection from "@/components/ShopCollection";
export const metadata: Metadata = { title: "Bộ sưu tập cà phê" };
export default function Shop() { return <main id="main" className="section shop-page"><div className="page-intro"><p className="eyebrow">THE AFTER BLOOM COLLECTION</p><h1>Một gu cà phê.<br />Một nhịp riêng.</h1><p>Năm lựa chọn cho hành trình tìm gu của bạn.<br />Từ Arabica thanh nhẹ đến những blend đậm sâu.</p></div><ShopCollection /></main>; }
