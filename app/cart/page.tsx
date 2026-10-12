"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.15em] text-muted">
            After Bloom
          </p>

          <h1 className="mt-4 font-sans text-5xl leading-tight md:text-6xl">
            Your Cart
          </h1>

          <div className="mt-12 border-t border-line pt-10">
            <p className="text-lg text-muted">
              Your cart is currently empty.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-block bg-brand px-6 py-3 text-sm !text-white"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.15em] text-muted">
          After Bloom
        </p>

        <h1 className="mt-4 font-sans text-5xl leading-tight md:text-6xl">
          Your Cart
        </h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* Cart Items */}
          <div>
            <div className="border-t border-line">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="grid gap-6 border-b border-line py-8 md:grid-cols-[140px_1fr_auto]"
                >
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-panel">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div>
                    <h2 className="text-xl font-medium">
                      {item.product.name}
                    </h2>

                    <p className="mt-2 text-sm text-muted">
                      {item.product.composition}
                    </p>

                    <p className="mt-1 text-sm text-muted">
                      {item.product.roast} · {item.product.weight}
                    </p>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="mt-6 text-xs uppercase tracking-[0.12em] text-muted underline underline-offset-4 transition hover:text-foreground"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Quantity + Price */}
                  <div className="flex items-center justify-between gap-8 md:flex-col md:items-end md:justify-between">
                    <div className="flex items-center border border-line">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                        className="px-4 py-2 text-lg transition hover:bg-panel"
                      >
                        −
                      </button>

                      <span className="min-w-10 text-center text-sm">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                        className="px-4 py-2 text-lg transition hover:bg-panel"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-medium">
                      {(item.product.price * item.quantity).toLocaleString(
                        "vi-VN"
                      )}
                      ₫
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <aside className="h-fit border border-line p-6">
            <h2 className="text-lg font-medium">
              Order Summary
            </h2>

            <div className="mt-8 flex items-center justify-between border-b border-line pb-4 text-sm">
              <span className="text-muted">
                Subtotal
              </span>

              <span>
                {subtotal.toLocaleString("vi-VN")} ₫
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted">
                Shipping
              </span>

              <span>
                Calculated at checkout
              </span>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
              <span className="font-medium">
                Total
              </span>

              <span className="text-lg font-medium">
                {subtotal.toLocaleString("vi-VN")} ₫
              </span>
            </div>

            <Link
              href="/checkout"
              className="mt-8 block bg-brand px-6 py-4 text-center text-sm text-panel transition hover:bg-brand/90"
            >
              Checkout
            </Link>

            <Link
              href="/shop"
              className="mt-4 block text-center text-sm text-muted underline underline-offset-4"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}