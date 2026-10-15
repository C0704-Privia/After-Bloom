"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { money, type Product } from "@/lib/products";
export default function PurchasePanel({ product }: {
    product: Product;
}) { const [quantity, setQuantity] = useState(1); const [added, setAdded] = useState(false); const { addToCart } = useCart(); return <div className="purchase-panel"><div className="purchase-price">{money(product.price)} <span>/ {product.weight}</span></div><div className="purchase-row"><div className="quantity"><button aria-label="Giảm số lượng" disabled={quantity <= 1} onClick={() => { setQuantity(q => q - 1); setAdded(false); }}>−</button><span aria-live="polite">{quantity}</span><button aria-label="Tăng số lượng" disabled={quantity >= 99} onClick={() => { setQuantity(q => q + 1); setAdded(false); }}>+</button></div><button className="button" disabled={product.price === null} onClick={() => { addToCart(product, quantity); setAdded(true); }}>Thêm vào giỏ <span>↗</span></button></div><div className="add-feedback" role="status">{added && <>Đã thêm {quantity} sản phẩm. <Link className="text-link" href="/cart">Xem giỏ hàng →</Link></>}</div><p className="small-note">Bản trải nghiệm trước ra mắt. Bạn có thể lưu đơn tạm; đơn chưa được gửi đến cửa hàng.</p></div>; }
