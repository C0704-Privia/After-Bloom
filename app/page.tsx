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
    <header className="sticky top-0 z-50 border-b border-[#d7d2ca] bg-[#f7f2ea]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#" className="text-lg font-medium tracking-[0.28em] text-[#1b2d2c] uppercase">
          After Bloom
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium tracking-[0.12em] text-[#23413f] md:flex">
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7d2ca] bg-white/40 text-[#1b2d2c] transition-colors hover:bg-white"
          >
            <CartIcon />
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d7d2ca] bg-white/40 text-[#1b2d2c] md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#d7d2ca] bg-[#f7f2ea] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium tracking-[0.12em] text-[#23413f] uppercase">
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
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#567a79]">
            Premium Vietnamese roasts
          </p>
          <h1 className="max-w-lg text-4xl font-semibold tracking-[-0.06em] text-[#1d2a2b] sm:text-5xl lg:text-7xl">
            Start your day after the bloom.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#4a5d5f] sm:text-lg">
            Freshly roasted Vietnamese coffee for focused mornings and productive workdays — intentionally sourced, carefully brewed, and designed for the rhythm of modern life.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#featured"
              className="inline-flex items-center justify-center rounded-full bg-[#1d4f4c] px-6 py-3 text-sm font-medium tracking-[0.12em] text-[#f5f1eb] uppercase transition-opacity hover:opacity-90"
            >
              Shop Coffee
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-[#c8d1d0] bg-white/50 px-6 py-3 text-sm font-medium tracking-[0.12em] text-[#1d2a2b] uppercase transition-colors hover:bg-white"
            >
              Our Story
            </a>
          </div>

          <div className="mt-10 grid gap-5 border-t border-[#d7d2ca] pt-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-[#1d2a2b]">4.9/5</p>
              <p className="mt-1 text-sm text-[#647678]">Average rating</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#1d2a2b]">8–12</p>
              <p className="mt-1 text-sm text-[#647678]">Days roasted</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#1d2a2b]">100%</p>
              <p className="mt-1 text-sm text-[#647678]">Vietnam origin</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-[#dfe7e6] shadow-[0_30px_80px_rgba(22,45,48,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
              alt="Freshly roasted premium Vietnamese coffee beans and coffee brewing setup"
              className="h-[560px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-[#dfe7e6] bg-[#f7f2ea]/90 p-4 shadow-lg backdrop-blur-sm sm:left-10">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#5d7d7b]">Featured single origin</p>
            <p className="mt-2 text-xl font-medium text-[#1d2a2b]">Da Lat Reserve</p>
            <p className="mt-1 text-sm text-[#4a5d5f]">Citrus • Cocoa • Floral</p>
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
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#567a79]">Our collection</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#1d2a2b] sm:text-4xl">
            Coffee for the way you work.
          </h2>
        </div>
        <a href="#" className="text-sm font-medium uppercase tracking-[0.18em] text-[#1d4f4c]">
          View all coffees
        </a>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {featuredCoffees.map((coffee) => (
          <article key={coffee.name} className="group overflow-hidden rounded-[1.75rem] border border-[#dfe2df] bg-[#fbf8f3] p-3 shadow-[0_18px_40px_rgba(32,48,50,0.04)]">
            <div className="overflow-hidden rounded-[1.4rem] bg-[#dde7e5]">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="px-2 pb-2 pt-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-medium text-[#1d2a2b]">{coffee.name}</h3>
                <span className="text-sm text-[#5e7a78]">{coffee.price}</span>
              </div>
              <p className="text-base leading-7 text-[#4d5d5f]">{coffee.description}</p>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#e4dfd7] pt-4">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#5f7c7b]">{coffee.roast}</span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[#1d2a2b] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#f4f0ea] transition-opacity hover:opacity-90"
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
    <section id="story" className="bg-[#edf2f1] py-16 sm:py-20">
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
            <div className="rounded-[2rem] bg-[#f5f0ea] p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5c7c7c]">Since 2021</p>
              <p className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#1d2a2b]">
                Coffee for intentional days.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#567a79]">Our story</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#1d2a2b] sm:text-4xl">
            Thoughtful coffee for a more deliberate morning.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4a5d5f]">
            After Bloom began with a simple idea: great coffee should match the pace of the people who drink it. We source from Vietnamese growers with care, roast in small batches to highlight clarity and sweetness, and design every cup around focus, ritual, and presence.
          </p>
          <p className="mt-5 text-base leading-8 text-[#4a5d5f]">
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
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#567a79]">Coffee philosophy</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#1d2a2b] sm:text-4xl">
          Built around the rituals that shape your day.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {principles.map((principle, index) => (
          <div key={principle.title} className="rounded-[2rem] border border-[#dfe2df] bg-[#fbf8f3] p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#5a7e7a]">0{index + 1}</p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[#1d2a2b]">{principle.title}</h3>
            <p className="mt-5 text-base leading-7 text-[#4a5d5f]">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-4 sm:px-8 lg:px-12">
      <div className="rounded-[2.2rem] bg-[#1d4f4c] px-6 py-10 text-[#f5f1eb] sm:px-8 lg:px-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#cfe0dd]">Stay in the loop</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#f5f1eb] sm:text-4xl">
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
              className="h-14 flex-1 rounded-full border border-[#b9d0ce] bg-[#f5f1eb] px-5 text-base text-[#1d2a2b] placeholder:text-[#738180] outline-none focus:border-[#d9e6e4]"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-[#f5f1eb] px-6 text-sm font-medium uppercase tracking-[0.18em] text-[#1d4f4c] transition-opacity hover:opacity-90"
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
    <footer className="border-t border-[#d7d2ca] bg-[#f7f2ea]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr] lg:px-12">
        <div>
          <p className="text-xl font-medium tracking-[0.24em] text-[#1d2a2b] uppercase">After Bloom</p>
          <p className="mt-4 max-w-xs text-base leading-7 text-[#4a5d5f]">
            Premium Vietnamese coffee for focused mornings and inspired workdays.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a7a78]">Navigation</p>
          <ul className="mt-4 space-y-3 text-base text-[#334748]">
            <li><a href="#">Shop</a></li>
            <li><a href="#">Our Coffee</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Journal</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a7a78]">Contact</p>
          <ul className="mt-4 space-y-3 text-base text-[#334748]">
            <li><a href="mailto:hello@afterbloom.coffee">hello@afterbloom.coffee</a></li>
            <li><a href="tel:+84912345678">+84 (0) 912 345 678</a></li>
            <li>Ho Chi Minh City</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a7a78]">Instagram</p>
          <p className="mt-4 text-base text-[#334748]">@afterbloom.coffee</p>
        </div>
      </div>

      <div className="border-t border-[#d7d2ca]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-[#51686a] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 After Bloom. All rights reserved.</p>
          <p>Roasted with care in Vietnam.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#1d2a2b]">
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
