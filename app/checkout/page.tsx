"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { money } from "@/lib/products";
export default function Checkout() {
    const { items, subtotal, clearCart } = useCart();
    const [saved, setSaved] = useState("");
    const [error, setError] = useState("");
    function save() { try {
        const orderNumber = `AB-DRAFT-${Date.now()}`;
        const raw: unknown = JSON.parse(localStorage.getItem("after-bloom-draft-orders") || "[]");
        const orders = Array.isArray(raw) ? raw : [];
        orders.push({ orderNumber, items, subtotal, status: "draft", createdAt: new Date().toISOString() });
        localStorage.setItem("after-bloom-draft-orders", JSON.stringify(orders));
        setSaved(orderNumber);
        clearCart();
    }
    catch {
        setError("Chưa thể lưu trên trình duyệt này. Vui lòng kiểm tra cài đặt lưu trữ và thử lại.");
    } }
    return <main id="main" className="section commerce-page"><p className="eyebrow">AFTER BLOOM · PREVIEW</p><h1>{saved ? "Đã lưu lựa chọn của bạn." : "Lưu một đơn tạm."}</h1>{saved ? <div className="empty-state"><p>Mã lưu: <strong>{saved}</strong></p><p>Đơn tạm chỉ được lưu trên trình duyệt này, chưa gửi đến cửa hàng và chưa phát sinh thanh toán.</p><Link className="button" href="/shop">Tiếp tục khám phá ↗</Link></div> : !items.length ? <div className="empty-state"><p>Giỏ hàng đang trống.</p><Link className="button" href="/shop">Chọn cà phê ↗</Link></div> : <div className="commerce-grid"><div className="checkout-explanation"><h2>Bộ sưu tập đang được hoàn thiện.</h2><p>Bạn có thể lưu lựa chọn để xem lại trong bản trải nghiệm. After Bloom chưa nhận đơn hoặc thanh toán qua website này.</p><p>Không cần cung cấp thông tin cá nhân ở bước này.</p><Link className="text-link" href="/cart">← Chỉnh sửa giỏ hàng</Link></div><aside className="order-summary"><h2>Lựa chọn của bạn</h2>{items.map(i => <div key={i.product.id}><span>{i.product.name} × {i.quantity}</span><span>{money((i.product.price ?? 0) * i.quantity)}</span></div>)}<div><strong>Tạm tính</strong><strong>{money(subtotal)}</strong></div><p className="small-note">Chưa bao gồm phí giao hàng.</p><button className="button" onClick={save}>Lưu đơn tạm trên thiết bị →</button>{error && <p role="alert">{error}</p>}</aside></div>}<DraftHistory /></main>;
}
function DraftHistory() { const [drafts, setDrafts] = useState<{
    orderNumber: string;
    subtotal: number;
    createdAt: string;
}[]>([]); const [opened, setOpened] = useState(false); return <section className="draft-history"><button className="text-link" aria-expanded={opened} onClick={() => { setOpened(!opened); try {
    const data = JSON.parse(localStorage.getItem("after-bloom-draft-orders") || "[]");
    setDrafts(Array.isArray(data) ? data.filter(d => typeof d.orderNumber === "string" && typeof d.subtotal === "number") : []);
}
catch {
    setDrafts([]);
} }}>{opened ? "Ẩn" : "Xem"} đơn tạm đã lưu {opened ? "−" : "+"}</button>{opened && <div>{drafts.length ? drafts.map(d => <p key={d.orderNumber}>{d.orderNumber} · {money(d.subtotal)}</p>) : <p>Chưa có đơn tạm nào trên thiết bị này.</p>}</div>}</section>; }
