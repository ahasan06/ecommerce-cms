import React from "react";
import StackedCard from "./components/Home/StackedCard";
import Hero from "./components/Home/Hero";
export const metadata = {
  title: "Clicks — Your phone is better with buttons",
  description: "Premium, protective case that gives your phone superpowers.",
};

const features = [
  { 
    num: 1, 
    title: 'Smart Overflow Protection', 
    desc: 'Advanced sensor technology detects rising water at the overflow drain and instantly shuts off the supply — stopping floods before they start.', 
    img: '/feature-1.png' 
  },
  { 
    num: 2, 
    title: 'Quick & Universal Installation', 
    desc: 'Designed to fit any overflow drain cover, TubSense connects seamlessly with your existing plumbing without special tools or major changes.', 
    img: '/feature-2.png' 
  },
  { 
    num: 3, 
    title: 'Built to Last', 
    desc: 'Made with high-quality materials and rigorously tested, TubSense delivers reliable protection during everyday baths and long relaxing soaks.', 
    img: '/feature-3.png' 
  }
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
