"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductPack from "./ProductPack";
export default function ProductDetails({ product: p }: { product: Product }) {
 const [weight, setWeight] = useState<"250" | "500">("250");
 return <div className="detail-grid"><div className="detail-image"><span className="eyebrow">{p.number} / AFTER BLOOM COLLECTION</span><ProductPack product={p} weight={weight} /><p className="image-caption">MÔ PHỎNG TÚI · LABEL ĐÃ DUYỆT</p><a className="text-link" href={p.labels[weight]} target="_blank" rel="noopener noreferrer">Xem label {weight} g ↗</a></div><div className="detail-copy"><p className="eyebrow">COFFEE FOR FOCUS · {p.category}</p><h1>{p.name}</h1><p className="detail-description">{p.description}</p><dl className="product-specs"><div><dt>Thành phần</dt><dd>{p.composition}</dd></div><div><dt>Mức rang</dt><dd>{p.roast}</dd></div><div><dt>Hương vị</dt><dd>{p.notes}</dd></div><div><dt>Gợi ý pha</dt><dd>{p.brew}</dd></div></dl><fieldset className="weight-options"><legend>Khối lượng</legend>{(["250", "500"] as const).map(w => <button type="button" key={w} aria-pressed={weight === w} onClick={() => setWeight(w)}>{w} g</button>)}</fieldset><div className="purchase-panel"><div className="purchase-price">Liên hệ <span>/ {weight} g</span></div><a className="button" href="tel:+84868357464">Liên hệ After Bloom ↗</a><p className="small-note">Giá đang được hoàn thiện. Liên hệ +84 868 357 464 để được tư vấn.</p></div><details className="product-disclosure"><summary>Bảo quản cà phê</summary><p>Bảo quản kín, khô ráo và tránh ánh nắng trực tiếp.</p><Link className="text-link" href="/brew-guide">Xem nghi thức pha ↗</Link></details></div></div>;
}
