"use client";

import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="bg-brand px-5 py-3 text-sm text-panel transition hover:bg-brand/90"
    >
      Add to Cart
    </button>
  );
}