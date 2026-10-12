import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pt-12 lg:px-16">
        <Link
          href="/shop"
          className="inline-flex py-2 text-sm text-muted transition hover:text-foreground"
        >
          Back to Shop
        </Link>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="aspect-square overflow-hidden bg-brand-soft p-6 md:p-10">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div className="py-4 md:py-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              After Bloom Coffee
            </p>

            <h1 className="mt-4 font-sans text-5xl leading-tight md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted">
              {product.description}
            </p>

            <p className="mt-6 text-2xl">
              {product.price.toLocaleString("vi-VN")}đ
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-x-8 border-y border-line py-5 sm:grid-cols-2">
              <div className="py-3">
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  Composition
                </dt>
                <dd className="mt-2 text-sm">{product.composition}</dd>
              </div>

              <div className="py-3">
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  Roast
                </dt>
                <dd className="mt-2 text-sm">{product.roast}</dd>
              </div>

              <div className="py-3">
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  Weight
                </dt>
                <dd className="mt-2 text-sm">{product.weight}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end">
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted"
                >
                  Quantity
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="h-12 w-full border border-line bg-panel px-3 text-sm sm:w-24"
                />
              </div>

              <button
                type="button"
                className="h-12 flex-1 bg-brand px-6 text-sm text-panel transition hover:bg-brand/90"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}