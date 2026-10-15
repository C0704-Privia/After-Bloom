import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetails from "@/components/ProductDetails";
import ProductCard from "@/components/ProductCard";
export function generateStaticParams() { return products.map(p => ({ id: p.id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params; const product = products.find(p => p.id === id);
 return { title: product?.name ?? "Không tìm thấy sản phẩm", description: product?.description };
}
export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params; const product = products.find(p => p.id === id);
 if (!product) notFound();
 return <main id="main"><section className="section detail-section"><Link className="text-link breadcrumb" href="/shop">← Bộ sưu tập cà phê</Link><ProductDetails product={product} /></section><section className="section related"><div className="section-heading"><h2>Thêm một lựa chọn.</h2><Link className="text-link" href="/shop">Xem tất cả ↗</Link></div><div className="product-grid">{products.filter(p => p.id !== id).slice(0, 3).map(p => <ProductCard key={p.id} product={p} />)}</div></section></main>;
}
