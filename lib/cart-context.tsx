"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./products";
export type CartItem = {
    product: Product;
    quantity: number;
};
type CartValue = {
    items: CartItem[];
    addToCart: (p: Product, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, q: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
};
const Context = createContext<CartValue | undefined>(undefined);
const KEY = "after-bloom-cart-v3";
export function CartProvider({ children }: {
    children: ReactNode;
}) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [ready, setReady] = useState(false);
    useEffect(() => { try {
        const stored: unknown = JSON.parse(localStorage.getItem(KEY) || "[]");
        if (Array.isArray(stored)) {
            const valid: CartItem[] = [];
            for (const entry of stored) {
                const p = products.find(p => p.id === entry?.id);
                if (p && p.price !== null && Number.isInteger(entry.quantity) && entry.quantity > 0 && !valid.some(v => v.product.id === p.id))
                    valid.push({ product: p, quantity: Math.min(99, entry.quantity) });
            }
            setItems(valid);
        }
    }
    catch { } setReady(true); }, []);
    useEffect(() => { if (ready)
        try {
            localStorage.setItem(KEY, JSON.stringify(items.map(i => ({ id: i.product.id, quantity: i.quantity }))));
        }
        catch { } }, [items, ready]);
    const addToCart = (product: Product, quantity = 1) => { if (product.price === null || !Number.isInteger(quantity) || quantity < 1)
        return; setItems(prev => { const existing = prev.find(i => i.product.id === product.id); return existing ? prev.map(i => i.product.id === product.id ? { ...i, quantity: Math.min(99, i.quantity + quantity) } : i) : [...prev, { product, quantity: Math.min(99, quantity) }]; }); };
    const removeFromCart = (id: string) => setItems(prev => prev.filter(i => i.product.id !== id));
    const updateQuantity = (id: string, q: number) => { if (!Number.isInteger(q))
        return; if (q <= 0) {
        removeFromCart(id);
        return;
    } setItems(prev => prev.map(i => i.product.id === id ? { ...i, quantity: Math.min(99, q) } : i)); };
    return <Context.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart: () => setItems([]), totalItems: items.reduce((s, i) => s + i.quantity, 0), subtotal: items.reduce((s, i) => s + i.quantity * (i.product.price ?? 0), 0) }}>{children}</Context.Provider>;
}
export function useCart() { const c = useContext(Context); if (!c)
    throw new Error("CartProvider required"); return c; }
