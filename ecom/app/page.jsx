import React from "react";
import StackedCard from "./components/Home/StackedCard";
import Hero from "./components/Home/Hero";

export const metadata = {
  title: "TubSense — Smart Bathtub Overflow Protection",
  description:
    "An intelligent safety device that prevents water damage by detecting rising water and automatically shutting off your bathtub’s supply. Easy to install, durable, and designed to keep your home safe and stress-free.",
};

const features = [
  {
    num: 1,
    title: "Smart Overflow Protection",
    desc:
      "Advanced sensor technology detects rising water at the overflow drain and instantly shuts off the supply, stopping floods before they start.",
    img: "/features/feature01.png",
  },
  {
    num: 2,
    title: "Quick & Universal Installation",
    desc:
      "Designed to fit any overflow drain cover, TubSense connects seamlessly with your existing plumbing without special tools or major changes.",
    img: "/features/feature02.png",
  },
  {
    num: 3,
    title: "Built to Last",
    desc:
      "Made with high-quality materials and rigorously tested, TubSense delivers reliable protection during everyday baths and long relaxing soaks.",
    img: "/features/feature03.png",
  },
];

export default function Page() {
  return (
    <main className="relative bg-[#0e0f12] text-white overflow-visible">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-[10%] h-[60vh] w-[60vh] rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,_#3042ff,_transparent_70%)]" />
      </div>

      <Hero />

      <section className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-blue-600/20 text-blue-400 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose TubSense?</h2>
          <p className="mt-4 text-white/70">
            Forget worries about bathroom flooding. TubSense combines smart protection, quick installation, and long-lasting
            reliability to keep your home safe and stress-free.
          </p>
        </div>

        <div className="relative space-y-8 pb-40">
          {features.map((f, i) => (
            <StackedCard key={f.num} feature={f} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
