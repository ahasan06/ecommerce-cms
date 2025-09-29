import React from "react";
import StackedCard from "./components/Home/StackedCard";
import Hero from "./components/Home/Hero";
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
       
      </div>

      {/* Hero */}
        <Hero />

      {/* Stacked features */}
      <section className="relative mx-auto max-w-6xl px-4 py-24">
    
        <div className="relative space-y-8 pb-40 ">
          {features.map((f, i) => (
            <StackedCard key={f.num} feature={f} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
