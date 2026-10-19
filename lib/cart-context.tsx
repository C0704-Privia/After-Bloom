"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./products";
export const grinds = ["Nguyên hạt", "Xay pha phin", "Xay pour-over", "Xay cold brew", "Xay espresso"] as const;
export type Grind = typeof grinds[number];
export type Weight = "250" | "500";
export type CartItem = { key: string; product: Product; quantity: number; weight: Weight; grind: Grind; unitPrice: number };
type CartValue = { items: CartItem[]; ready: boolean; addToCart: (p: Product, quantity?: number, weight?: Weight, grind?: Grind) => void; removeFromCart: (key: string) => void; updateQuantity: (key: string, q: number) => void; clearCart: () => void; totalItems: number; subtotal: number };
const Context = createContext<CartValue | undefined>(undefined);
const KEY = "after-bloom-cart-v4";
const itemKey = (id: string, weight: Weight, grind: Grind) => `${id}:${weight}:${grind}`;
export function CartProvider({ children }: { children: ReactNode }) {
 const [items, setItems] = useState<CartItem[]>([]);
 const [ready, setReady] = useState(false);
 useEffect(() => {
  try {
   const stored: unknown = JSON.parse(localStorage.getItem(KEY) || localStorage.getItem("after-bloom-cart-v3") || "[]");
   if (Array.isArray(stored)) {
    const valid: CartItem[] = [];
    for (const entry of stored) {
     const p = products.find(p => p.id === entry?.id);
     const weight: Weight = entry?.weight === "500" ? "500" : "250";
     const grind: Grind = grinds.includes(entry?.grind) ? entry.grind : "Nguyên hạt";
     if (!p || !Number.isInteger(entry.quantity) || entry.quantity < 1) continue;
     const key = itemKey(p.id, weight, grind);
     if (!valid.some(i => i.key === key)) valid.push({ key, product:p, quantity:Math.min(99,entry.quantity), weight, grind, unitPrice:p.prices[weight] });
    }
    setItems(valid);
   }
  } catch {} finally { setReady(true); }
 }, []);
 useEffect(() => { if (ready) try { localStorage.setItem(KEY,JSON.stringify(items.map(i => ({ id:i.product.id, quantity:i.quantity, weight:i.weight, grind:i.grind })))); } catch {} }, [items,ready]);
 function addToCart(product: Product, quantity=1, weight: Weight="250", grind: Grind="Nguyên hạt") {
  if (!ready || !Number.isInteger(quantity) || quantity<1) return;
  const key=itemKey(product.id,weight,grind);
  setItems(prev => prev.some(i=>i.key===key) ? prev.map(i=>i.key===key ? {...i,quantity:Math.min(99,i.quantity+quantity)} : i) : [...prev,{key,product,quantity:Math.min(99,quantity),weight,grind,unitPrice:product.prices[weight]}]);
 }
 const removeFromCart=(key:string)=>setItems(prev=>prev.filter(i=>i.key!==key));
 function updateQuantity(key:string,q:number) { if (!Number.isInteger(q)) return; if(q<=0) {removeFromCart(key);return;} setItems(prev=>prev.map(i=>i.key===key?{...i,quantity:Math.min(99,q)}:i)); }
 return <Context.Provider value={{items,ready,addToCart,removeFromCart,updateQuantity,clearCart:()=>setItems([]),totalItems:items.reduce((s,i)=>s+i.quantity,0),subtotal:items.reduce((s,i)=>s+i.quantity*i.unitPrice,0)}}>{children}</Context.Provider>;
}
export function useCart() { const c=useContext(Context);if(!c) throw new Error("CartProvider required");return c; }
