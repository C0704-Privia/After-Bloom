"use client";
import {useState} from "react";
import Link from "next/link";
import {products} from "@/lib/products";
import ProductCard from "./ProductCard";
export default function ShopCollection({selection=""}:{selection?:string}) {
 const [category,setCategory]=useState("Tất cả");
 const selected=products.filter(p=>selection==="slow" ? p.id==="morning-light" : selection==="signature" ? ["signature-flow","evening-wind"].includes(p.id) : true);
 const filtered=selected.filter(p=>category==="Tất cả"||p.category===category);
 return <>{selection && <div className="collection-selection"><p>{selection==="slow" ? "Dành thời gian pha · Morning Light cho một bình cold brew chuẩn bị từ hôm trước." : "Gu đặc trưng · Signature Flow và Evening Wind, hai sắc thái để tìm khoảng riêng của bạn."}</p><Link className="text-link" href="/shop">Xem tất cả cà phê ↗</Link></div>}<div className="collection-toolbar"><div className="filter-group" aria-label="Lọc loại cà phê">{["Tất cả",...Array.from(new Set(selected.map(p=>p.category)))].map(c=><button key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><span className="small-note">Hai quy cách · 250 g / 500 g</span></div><p className="result-count" aria-live="polite">{filtered.length} lựa chọn cà phê</p><div className="product-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div></>;
}
