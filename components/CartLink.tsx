"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartLink() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm transition hover:bg-panel"
    >
      Cart
      <span>({totalItems})</span>
    </Link>
  );
}