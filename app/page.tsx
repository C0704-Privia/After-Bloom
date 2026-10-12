"use client";

import { useState } from "react";

const navItems = ["Shop", "Our Coffee", "About", "Journal"];

const featuredCoffees = [
  {
    name: "Crescent Bloom",
    description: "Balanced and silky with notes of orange blossom and cacao.",
    roast: "Light roast",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "North Line",
    description: "A structured cup built for deep focus and long conversations.",
    roast: "Medium roast",
    price: "$27",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Evening Roast",
    description: "Dark caramel sweetness and a smooth finish for slow evenings.",
    roast: "Dark roast",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
];

const principles = [
  {
    title: "Thoughtfully sourced",
    description: "We work with trusted growers across Vietnam to source coffees with clarity, care, and character.",
  },
  {
    title: "Carefully roasted",
    description: "Each batch is roasted in small quantities to preserve sweetness, structure, and the natural personality of the bean.",
  },
  {
    title: "Made for everyday rituals",
    description: "Our coffee is designed for focused mornings, productive afternoons, and the quiet rhythm of a well-lived day.",
  },
];

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-label="Cart" className="h-5 w-5 stroke-current">
      <path d="M3 4h2l1.7 8.3a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L18 6H6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="17.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="17.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current" aria-label="Menu">
      <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#" className="text-lg font-medium tracking-[0.28em] text-foreground uppercase">
          After Bloom
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium tracking-[0.12em] text-muted md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition-opacity hover:opacity-70">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Shopping cart"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel/40 text-foreground transition-colors hover:bg-panel"
          >
            <CartIcon />
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel/40 text-foreground md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium tracking-[0.12em] text-muted uppercase">
            {navItems.map((item) => (
              <a key={item} href="#" className="py-1">
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-muted">
            Premium Vietnamese roasts
          </p>
          <h1 className="max-w-lg text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl lg:text-7xl">
            Start your day after the bloom.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
            Freshly roasted Vietnamese coffee for focused mornings and productive workdays — intentionally sourced, carefully brewed, and designed for the rhythm of modern life.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium tracking-[0.12em] text-panel uppercase transition-opacity hover:opacity-90"
            >
              Shop Coffee
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-line bg-panel/50 px-6 py-3 text-sm font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:bg-panel"
            >
              Our Story
            </a>
          </div>

          <div className="mt-10 grid gap-5 border-t border-line pt-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-foreground">4.9/5</p>
              <p className="mt-1 text-sm text-muted">Average rating</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">8–12</p>
              <p className="mt-1 text-sm text-muted">Days roasted</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">100%</p>
              <p className="mt-1 text-sm text-muted">Vietnam origin</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-brand-soft shadow-[0_30px_80px_rgba(23,42,43,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
              alt="Freshly roasted premium Vietnamese coffee beans and coffee brewing setup"
              className="h-[560px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-brand-soft bg-background/90 p-4 shadow-lg backdrop-blur-sm sm:left-10">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted">Featured single origin</p>
            <p className="mt-2 text-xl font-medium text-foreground">Da Lat Reserve</p>
            <p className="mt-1 text-sm text-muted">Citrus • Cocoa • Floral</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCoffee() {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">Our collection</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
            Coffee for the way you work.
          </h2>
        </div>
        <a href="#" className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
          View all coffees
        </a>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {featuredCoffees.map((coffee) => (
          <article key={coffee.name} className="group overflow-hidden rounded-[1.75rem] border border-line bg-panel p-3 shadow-[0_18px_40px_rgba(23,42,43,0.04)]">
            <div className="overflow-hidden rounded-[1.4rem] bg-brand-soft">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="px-2 pb-2 pt-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-medium text-foreground">{coffee.name}</h3>
                <span className="text-sm text-muted">{coffee.price}</span>
              </div>
              <p className="text-base leading-7 text-muted">{coffee.description}</p>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{coffee.roast}</span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-panel transition-opacity hover:opacity-90"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section id="story" className="bg-brand-soft py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12 lg:px-12">
        <div className="grid gap-5 sm:grid-cols-[1.1fr_0.9fr]">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
            alt="A warm cup of coffee on a desk during the morning"
            className="h-[420px] w-full rounded-[2rem] object-cover"
          />
          <div className="flex flex-col justify-between gap-5">
            <img
              src="https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80"
              alt="Coffee beans and equipment in a clean premium kitchen"
              className="h-[200px] w-full rounded-[2rem] object-cover"
            />
            <div className="rounded-[2rem] bg-panel p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Since 2021</p>
              <p className="mt-4 text-2xl font-medium tracking-[-0.04em] text-foreground">
                Coffee for intentional days.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">Our story</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
            Thoughtful coffee for a more deliberate morning.
          </h2>
          <p className="mt-6 text-base leading-8 text-muted">
            After Bloom began with a simple idea: great coffee should match the pace of the people who drink it. We source from Vietnamese growers with care, roast in small batches to highlight clarity and sweetness, and design every cup around focus, ritual, and presence.
          </p>
          <p className="mt-5 text-base leading-8 text-muted">
            From the first sip to the final task of the day, we believe coffee should support not just energy, but better work, calmer mornings, and a life made with intention.
          </p>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">Coffee philosophy</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
          Built around the rituals that shape your day.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {principles.map((principle, index) => (
          <div key={principle.title} className="rounded-[2rem] border border-line bg-panel p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">0{index + 1}</p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-foreground">{principle.title}</h3>
            <p className="mt-5 text-base leading-7 text-muted">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-4 sm:px-8 lg:px-12">
      <div className="rounded-[2.2rem] bg-brand px-6 py-10 text-panel sm:px-8 lg:px-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-panel/80">Stay in the loop</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-panel sm:text-4xl">
              Discover new coffees and the stories behind them.
            </h2>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="h-14 flex-1 rounded-full border border-line bg-panel px-5 text-base text-foreground placeholder:text-muted outline-none focus:border-panel"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-panel px-6 text-sm font-medium uppercase tracking-[0.18em] text-brand transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr] lg:px-12">
        <div>
          <p className="text-xl font-medium tracking-[0.24em] text-foreground uppercase">After Bloom</p>
          <p className="mt-4 max-w-xs text-base leading-7 text-muted">
            Premium Vietnamese coffee for focused mornings and inspired workdays.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Navigation</p>
          <ul className="mt-4 space-y-3 text-base text-foreground">
            <li><a href="#">Shop</a></li>
            <li><a href="#">Our Coffee</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Journal</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Contact</p>
          <ul className="mt-4 space-y-3 text-base text-foreground">
            <li><a href="mailto:hello@afterbloom.coffee">hello@afterbloom.coffee</a></li>
            <li><a href="tel:+84912345678">+84 (0) 912 345 678</a></li>
            <li>Ho Chi Minh City</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Instagram</p>
          <p className="mt-4 text-base text-foreground">@afterbloom.coffee</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 After Bloom. All rights reserved.</p>
          <p>Roasted with care in Vietnam.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <FeaturedCoffee />
        <BrandStory />
        <Philosophy />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
