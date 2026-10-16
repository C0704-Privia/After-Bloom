"use client";
import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
export default function ShopCollection() {
 const [category, setCategory] = useState("Tất cả");
 const filtered = products.filter(p => category === "Tất cả" || p.category === category);
 return <><div className="collection-toolbar"><div className="filter-group" aria-label="Lọc loại cà phê">{["Tất cả", "Arabica", "Blend"].map(c => <button key={c} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}</div><span className="small-note">Hai quy cách · 250 g / 500 g</span></div><p className="result-count" aria-live="polite">{filtered.length} lựa chọn cà phê</p><div className="product-grid">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div><p className="image-caption">Mô phỏng bao bì với label đã duyệt. Chọn sản phẩm để xem giá theo khối lượng.</p></>;
}
