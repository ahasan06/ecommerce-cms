import React from "react";
import StackedCard from "./components/Home/StackedCard";

export const metadata = {
  title: "Clicks — Your phone is better with buttons",
  description: "Premium, protective case that gives your phone superpowers.",
};

const features = [
  { num: 1, title: "Feel satisfying real buttons", desc: "Pressing real buttons and hearing that little clicking sound feels more natural and rewarding.", img: "/feature-1.png" },
  { num: 2, title: "Elevated premium protection", desc: "Brushed metal side keys, a microfibre lining, and a new enclosure that adds protection inside and out.", img: "/feature-2.png" },
  { num: 3, title: "Type faster. See more.", desc: "Free up on-screen space for content while your thumbs fly over the keyboard.", img: "/feature-3.png" },
];

export default function Page() {
  return (
    <main className="relative bg-[#0e0f12] text-white overflow-visible">
      {/* Background glow without inline style */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-[10%] h-[60vh] w-[60vh] rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,_#3042ff,_transparent_70%)]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[70vh] w-[70vh] rounded-full blur-3xl opacity-20 bg-[radial-gradient(closest-side,_#00c2ff,_transparent_70%)]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
            <span className="opacity-80">Introducing Clicks for iPhone 17</span>
            <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
              <path fill="currentColor" d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="text-[38px] font-bold leading-[1.15] tracking-tight md:text-[56px]">
            Your phone is better
            <br className="hidden md:block" /> with buttons.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            Premium, protective case that gives your phone superpowers.
          </p>

          <div className="mt-8">
            <a
              href="#shop"
              className="inline-flex items-center rounded-full bg-[#ff6a2b] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:translate-y-[-1px] active:translate-y-[0]"
            >
              Shop All
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 opacity-90 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3 6h18v12H3z" opacity=".25"/>
                  <path fill="currentColor" d="M5 8h14v8H5z"/>
                </svg>
              </span>
              <span className="text-sm">30 Day Test Drive</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3 7h13l5 5v5H3z" opacity=".25"/>
                  <path fill="currentColor" d="M3 16h18v2H3z"/>
                </svg>
              </span>
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" fill="currentColor" opacity=".25"/>
                  <path fill="currentColor" d="M12 7v6l4 2" />
                </svg>
              </span>
              <span className="text-sm">1 Year Warranty</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-40">
            <span className="text-sm tracking-wide">THE VERGE</span>
            <span className="text-sm tracking-wide">THE TIMES</span>
            <span className="text-sm tracking-wide">CNN</span>
            <span className="text-sm tracking-wide">THE WALL STREET</span>
          </div>
        </div>
      </section>

      {/* Stacked features */}
      <section className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-[#0e0f12] to-transparent" />
        <div className="relative space-y-8 pb-40 overflow-visible">
          {features.map((f, i) => (
            <StackedCard key={f.num} feature={f} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
