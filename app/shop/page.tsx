import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import CartLink from "@/components/CartLink";
import { products } from "../../lib/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
            Our Coffee
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Coffee for the way you work.
          </h1>

          <p className="mt-6 text-lg text-muted">
            Explore the current After Bloom collection.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-y border-line py-5">
          <p className="text-sm text-muted">
            {products.length} coffees
          </p>
          
          <CartLink />

          <div className="flex flex-wrap gap-2">
            <button className="border border-brand bg-brand px-5 py-2 text-sm text-panel">
              All
            </button>

            <button className="border border-line px-5 py-2 text-sm">
              Low Roast
            </button>

            <button className="border border-line px-5 py-2 text-sm">
              Medium Roast
            </button>

            <button className="border border-line px-5 py-2 text-sm">
              High Roast
            </button>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="group bg-panel">
              {/* Product image */}
              <div className="mb-6 aspect-square overflow-hidden bg-panel">
                <div className="flex h-full items-center justify-center bg-brand-soft">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
              </div>

              {/* Product info */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-sans text-2xl">
                    {product.name}
                  </h2>

                  <p className="whitespace-nowrap text-sm">
                    {product.price.toLocaleString("vi-VN")}đ
                  </p>
                </div>

                <p className="mt-3 text-sm text-muted">
                  {product.composition}
                </p>

                <p className="mt-5 text-sm text-muted">
                  Product description coming soon.
                </p>

                <div className="mt-6 grid grid-cols-2 border-t border-line pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted">
                      Roast
                    </p>
                    <p className="mt-2 text-sm">
                      {product.roast}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted">
                      Weight
                    </p>
                    <p className="mt-2 text-sm">
                      {product.weight}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <AddToCartButton product={product} />

                  <Link
                    href={`/shop/${product.id}`}
                    className="border border-line px-5 py-3 text-center text-sm transition hover:bg-panel"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}