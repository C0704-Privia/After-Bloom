
"use client";

import { useEffect, useState } from "react";

type Order = {
  orderNumber: string;
  customer: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
  };
  items: {
    product: {
      id: string;
      name: string;
      price: number;
    };
    quantity: number;
  }[];
  subtotal: number;
  createdAt: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("after-bloom-orders");
      setOrders(saved ? JSON.parse(saved) : []);
    } catch {
      setOrders([]);
    }
  }, []);

  const formatPrice = (price: number) =>
    `${price.toLocaleString("vi-VN")} ₫`;

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          After Bloom / Admin
        </p>

        <h1 className="mt-4 font-sans text-4xl md:text-5xl">
          Order Management
        </h1>

        <p className="mt-4 text-sm text-muted">
          Total orders: {orders.length}
        </p>

        {orders.length === 0 ? (
          <div className="mt-10 border-t border-line py-8">
            No orders found.
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {[...orders].reverse().map((order) => (
              <article
                key={order.orderNumber}
                className="border border-line p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      Order number
                    </p>
                    <h2 className="mt-2 text-lg font-medium">
                      {order.orderNumber}
                    </h2>
                    <p className="mt-2 text-sm text-muted">
                      {new Date(order.createdAt).toLocaleString("vi-VN")}
                    </p>
                  </div>

                  <p className="text-lg font-medium">
                    {formatPrice(order.subtotal)}
                  </p>
                </div>

                <div className="grid gap-8 py-6 md:grid-cols-2">
                  <section>
                    <h3 className="font-medium">
                      Customer Information
                    </h3>

                    <div className="mt-4 space-y-2 text-sm">
                      <p>Name: {order.customer.fullName}</p>
                      <p>Phone: {order.customer.phone}</p>
                      <p>Email: {order.customer.email}</p>
                      <p>Address: {order.customer.address}</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-medium">
                      Products Ordered
                    </h3>

                    <div className="mt-4 space-y-3">
                      {order.items.map((item, index) => (
                        <div
                          key={`${item.product.id}-${index}`}
                          className="flex justify-between gap-4 border-b border-line pb-3 text-sm"
                        >
                          <div>
                            <p>{item.product.name}</p>
                            <p className="mt-1 text-muted">
                              Quantity: {item.quantity}
                            </p>
                          </div>

                          <p className="whitespace-nowrap">
                            {formatPrice(
                              item.product.price * item.quantity
                            )}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex justify-between font-medium">
                      <span>Total</span>
                      <span>{formatPrice(order.subtotal)}</span>
                    </div>
                  </section>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
