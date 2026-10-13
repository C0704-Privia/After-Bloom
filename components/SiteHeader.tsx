"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
import { useCart } from "@/lib/cart-context";
const links = [
    { href: "/about", label: "Về chúng tôi" },
    { href: "/shop", label: "Sản phẩm" },
    { href: "/#story", label: "Câu chuyện" },
    { href: "/brew-guide", label: "Nghi thức" },
];
export default function SiteHeader() {
    const { totalItems } = useCart();
    const path = usePathname();
    const [open, setOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const toggle = useRef<HTMLButtonElement>(null);
    useEffect(() => { if (!open)
        return; const close = (e: KeyboardEvent) => { if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
    } }; document.addEventListener("keydown", close); return () => document.removeEventListener("keydown", close); }, [open]);
    useEffect(() => {
        if (!open) return;
        const outside = (event: PointerEvent) => {
            if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
        };
        const wide = window.matchMedia("(min-width: 901px)");
        const resize = () => { if (wide.matches) setOpen(false); };
        document.addEventListener("pointerdown", outside);
        wide.addEventListener("change", resize);
        return () => { document.removeEventListener("pointerdown", outside); wide.removeEventListener("change", resize); };
    }, [open]);
    return <><a className="skip-link" href="#main">Đến nội dung chính</a><header ref={headerRef} className="site-header"><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "Đóng −" : "Menu +"}</button><nav className="desktop-nav" aria-label="Điều hướng chính">{links.map(x => <Link key={x.href} href={x.href} aria-current={path === x.href ? "page" : undefined}>{x.label}</Link>)}</nav><Link href="/" className="header-brand" aria-label="After Bloom — Trang chủ" onClick={() => setOpen(false)}><Brand /></Link><div className="header-right"><Link href="/cart" className="cart-link" onClick={() => setOpen(false)} aria-label={`Giỏ hàng, ${totalItems} sản phẩm`}><svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg><span className="cart-label">Giỏ hàng</span><span className="cart-count" aria-live="polite">{totalItems}</span></Link></div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label="Menu di động">{links.map(x => <Link key={x.href} href={x.href} aria-current={path === x.href ? "page" : undefined} onClick={() => setOpen(false)}>{x.label}<span>↗</span></Link>)}</nav>}</header></>;
}
