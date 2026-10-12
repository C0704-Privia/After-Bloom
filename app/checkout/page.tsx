"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, subtotal, clearCart  } = useCart();
  const [orderNumber, setOrderNumber] = useState("");
  const [customer, setCustomer] = useState({
  fullName: "",
  phone: "",
  email: "",
  address: "",
});

const [orderPlaced, setOrderPlaced] = useState(false);
  if (orderPlaced) {
  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-muted">
          After Bloom
        </p>

        <h1 className="mt-4 font-sans text-5xl leading-tight">
          Thank You!
        </h1>

        <div className="mt-10 border-t border-line pt-8">
          <p className="text-lg">
            Your order has been received.
          </p>

          <p className="mt-3 text-sm">
            Order number: <strong>{orderNumber}</strong>
          </p>

          <p className="mt-3 text-sm text-muted">
            Thank you for choosing After Bloom.
          </p>

          <Link
            href="/shop"
            className="mt-8 inline-block bg-brand px-6 py-3 text-sm text-panel transition hover:bg-brand/90"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
            After Bloom
          </p>

          <h1 className="font-sans text-5xl leading-tight md:text-6xl">
            Checkout
          </h1>

          <div className="mt-12 border-t border-line pt-8">
            <p className="text-lg text-muted">
              Your cart is empty.
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
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
          After Bloom
        </p>

        <h1 className="font-sans text-5xl leading-tight md:text-6xl">
          Checkout
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_360px]">
          {/* Customer Information */}
          <form
            id="checkout-form"
            onSubmit={(e) => {
              e.preventDefault();

              const newOrderNumber = `AB-${Date.now()}`;

              const order = {
                orderNumber: newOrderNumber,
                customer,
                items,
                subtotal,
                createdAt: new Date().toISOString(),
              };

              try {
                const savedOrders = JSON.parse(
                  localStorage.getItem("after-bloom-orders") || "[]"
                );

                savedOrders.push(order);

                localStorage.setItem(
                  "after-bloom-orders",
                  JSON.stringify(savedOrders)
                );

                setOrderNumber(newOrderNumber);
                clearCart();
                setOrderPlaced(true);
              } catch {
                alert("Unable to save your order. Please try again.");
              }
            }}
         >
            <h2 className="text-xl font-medium">
              Customer Information
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm">
                  Full Name
                </label>
                
<input
  type="text"
  className="w-full border border-line bg-transparent px-4 py-3 outline-none"
  placeholder="Your name"
  value={customer.fullName}
  onChange={(e) =>
    setCustomer({ ...customer, fullName: e.target.value })
  }
  required
/>

              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Phone
                </label>

                <input
                  type="tel"
                  className="w-full border border-line bg-transparent px-4 py-3 outline-none"
                  placeholder="Your phone number"
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                  required
                />

              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-line bg-transparent px-4 py-3 outline-none"
                  placeholder="you@example.com"
                  value={customer.email}
                  onChange={(e) =>
                    setCustomer({ ...customer, email: e.target.value })
                  }
                  required
                />

              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Delivery Address
                </label>

                <textarea
                  rows={4}
                  className="w-full border border-line bg-transparent px-4 py-3 outline-none"
                  placeholder="Your delivery address"
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({ ...customer, address: e.target.value })
                  }
                  required
                />

              </div>
            </div>
          </form>

          {/* Order Summary */}
          <aside className="border border-line p-6">
            <h2 className="text-xl font-medium">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between gap-4 text-sm"
                >
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>

                  <span>
                    {(item.product.price * item.quantity).toLocaleString(
                      "vi-VN"
                    )}
                    ₫
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>
                  {subtotal.toLocaleString("vi-VN")} ₫
                </span>
              </div>

              <div className="mt-4 flex justify-between">
                <span>Shipping</span>
                <span>Calculated later</span>
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <div className="flex justify-between text-lg">
                  <span>Total</span>

                  <span>
                    {subtotal.toLocaleString("vi-VN")} ₫
                  </span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="mt-6 w-full bg-brand px-6 py-4 text-sm text-panel transition hover:bg-brand/90"
              >
                Place Order
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}