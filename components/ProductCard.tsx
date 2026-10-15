import Link from "next/link";
import { money, type Product } from "@/lib/products";
import ProductPack from "./ProductPack";
export default function ProductCard({ product }: { product: Product }) {
 return <article className="product-card"><Link className="product-visual" href={`/shop/${product.id}`} aria-label={`Khám phá ${product.name}`}><span className="product-category">{product.category}</span><ProductPack product={product} /></Link><div className="product-heading"><Link href={`/shop/${product.id}`}><h3>{product.name}</h3></Link><p className="product-sizes">250 g / 500 g</p><span className="product-price">{money(product.price)}</span></div></article>;
}
