import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import PurchasePanel from "@/components/PurchasePanel";
import ProductCard from "@/components/ProductCard";
export function generateStaticParams() { return products.map(p => ({ id: p.id })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        id: string;
    }>;
}) { const { id } = await params; const product = products.find(p => p.id === id); return { title: product?.name ?? "Không tìm thấy sản phẩm" }; }
export default async function Detail({ params }: {
    params: Promise<{
        id: string;
    }>;
}) { const { id } = await params; const p = products.find(x => x.id === id); if (!p)
    notFound(); return <main id="main"><section className="section detail-section"><Link className="text-link breadcrumb" href="/shop">← Bộ sưu tập cà phê</Link><div className="detail-grid"><div className="detail-image"><span className="eyebrow">{p.number} / AFTER BLOOM COLLECTION</span><img src={p.image} alt={`Minh họa bao bì ${p.name}`} width="440" height="520"/><p className="image-caption">MINH HỌA BAO BÌ</p></div><div className="detail-copy"><p className="eyebrow">COFFEE FOR FOCUS · {p.category}</p><h1>{p.name}</h1><p className="detail-description">{p.description}</p><dl className="product-specs"><div><dt>Thành phần định hướng</dt><dd>{p.composition}</dd></div><div><dt>Mức rang dự kiến</dt><dd>{p.roast}</dd></div><div><dt>Định hướng hương vị</dt><dd>{p.notes}</dd></div></dl><PurchasePanel product={p}/><details className="product-disclosure"><summary>Về bộ sưu tập mới</summary><p>Hương vị và mức rang đang trong quá trình thử nghiệm. {p.id === "after-bloom-signature" ? "Signature là công thức R&D, chưa công bố tỷ lệ phối trộn cuối cùng." : "Thông số cuối cùng sẽ được cập nhật khi sản phẩm chính thức ra mắt."}</p></details><details className="product-disclosure"><summary>Gợi ý thưởng thức và bảo quản</summary><p>Bảo quản kín, khô ráo và tránh ánh nắng trực tiếp. Khám phá một nghi thức pha phù hợp với bạn.</p><Link className="text-link" href="/brew-guide">Xem nghi thức pha ↗</Link></details></div></div></section><section className="section related"><div className="section-heading"><h2>Thêm một lựa chọn.</h2><Link className="text-link" href="/shop">Xem tất cả ↗</Link></div><div className="product-grid">{products.filter(x => x.id !== id).slice(0, 3).map(x => <ProductCard key={x.id} product={x}/>)}</div></section></main>; }
