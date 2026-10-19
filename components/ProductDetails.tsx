"use client";
import { useState } from "react";
import Link from "next/link";
import { money, type Product } from "@/lib/products";
import { useCart, grinds, type Grind } from "@/lib/cart-context";
import ProductPack from "./ProductPack";
export default function ProductDetails({ product: p }: { product: Product }) {
 const [weight, setWeight] = useState<"250" | "500">("250");
 const [grind,setGrind]=useState<Grind>("Nguyên hạt");
 const [quantity,setQuantity]=useState(1);
 const [added,setAdded]=useState("");
 const {addToCart,ready}=useCart();
 return <div className="detail-grid"><div className="detail-image"><span className="eyebrow">{p.number} / AFTER BLOOM COLLECTION</span><ProductPack product={p} weight={weight} /></div><div className="detail-copy"><p className="eyebrow">COFFEE FOR FOCUS · {p.category}</p><h1>{p.name}</h1><p className="detail-description">{p.description}</p><dl className="product-specs"><div><dt>Thành phần</dt><dd>{p.composition}</dd></div><div><dt>Mức rang</dt><dd>{p.roast}</dd></div><div><dt>Hương vị</dt><dd>{p.notes}</dd></div><div><dt>Gợi ý pha</dt><dd>{p.brew}</dd></div></dl><fieldset className="weight-options"><legend>Khối lượng</legend>{(["250", "500"] as const).map(w => <button type="button" key={w} aria-pressed={weight === w} onClick={() => {setWeight(w);setAdded("");}}>{w} g</button>)}</fieldset><div className="purchase-panel"><div className="purchase-price">{money(p.prices[weight])} <span>/ {weight} g</span></div><fieldset className="grind-options"><legend>Cách xay</legend>{grinds.map(g=><label key={g}><input type="radio" name="grind" value={g} checked={grind===g} onChange={()=>{setGrind(g);setAdded("");}}/>{g}</label>)}</fieldset><div className="purchase-row"><div className="quantity"><button type="button" aria-label="Giảm số lượng" disabled={quantity<=1} onClick={()=>{setQuantity(q=>q-1);setAdded("");}}>−</button><span aria-live="polite">{quantity}</span><button type="button" aria-label="Tăng số lượng" disabled={quantity>=99} onClick={()=>{setQuantity(q=>q+1);setAdded("");}}>+</button></div><button className="button" disabled={!ready} onClick={()=>{addToCart(p,quantity,weight,grind);setAdded(`Đã thêm ${quantity} túi ${weight} g · ${grind}.`);}}>Thêm vào giỏ hàng ↗</button></div><div className="add-feedback" role="status">{added && <>{added} <Link className="text-link" href="/cart">Xem giỏ hàng →</Link></>}</div></div><details className="product-disclosure"><summary>Bảo quản cà phê</summary><p>Bảo quản kín, khô ráo và tránh ánh nắng trực tiếp.</p><Link className="text-link" href="/brew-guide">Xem nghi thức pha ↗</Link></details></div></div>;
}
