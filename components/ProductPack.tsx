import type { Product } from "@/lib/products";
export default function ProductPack({ product, weight = "250" }: { product: Product; weight?: "250" | "500" }) {
 return <div className="coffee-pack"><div className="coffee-pack-seal" aria-hidden="true" /><img src={product.labels[weight]} alt={`Label ${product.name} · ${weight} g đã duyệt`} width={1062} height={1222} loading="lazy" /></div>;
}
