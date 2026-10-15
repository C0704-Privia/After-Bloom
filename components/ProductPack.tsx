import type { Product } from "@/lib/products";
import Brand from "./Brand";
export default function ProductPack({ product, weight = "250" }: { product: Product; weight?: "250" | "500" }) {
 return <div className="pack-photo" role="img" aria-label={`Túi ${product.name} ${weight} g, mặt kem và hông xanh đậm`}><img className="pack-photo-base" src="/products/cream-teal-pouch-v6.png" alt="" width={1024} height={1536} loading="lazy" /><div className="pack-photo-brand" aria-hidden="true"><Brand /></div><div className="pack-photo-label" aria-hidden="true"><img src={product.labels[weight]} alt="" width={1087} height={1250} loading="lazy" /></div></div>;
}
