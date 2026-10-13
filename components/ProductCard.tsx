import Link from "next/link";
import { money, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <article className="product-card">
            <Link className="product-visual" href={`/shop/${product.id}`} aria-label={`Khám phá ${product.name}`}>
                <span className="product-category">{product.category}</span>
                <img src={product.image} alt={`Minh họa bao bì ${product.name} tối giản trong hệ màu kem–xanh`} width="1254" height="1254" loading="lazy" />
            </Link>
            <div className="product-heading">
                <Link href={`/shop/${product.id}`}><h3>{product.name}</h3></Link>
                <span className="product-price">{money(product.price)}</span>
            </div>
        </article>
    );
}
