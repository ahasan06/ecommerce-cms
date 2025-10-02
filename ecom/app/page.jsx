import React from "react";
import StackedCard from "./components/Home/StackedCard";
import Hero from "./components/Home/Hero";
import VideoSection from "./components/Home/VideoSection";


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

      <section className="relative mx-auto max-w-6xl px-4 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide uppercase 
    bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-blue-300 rounded-full shadow-sm">
            Features
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 leading-16 via-cyan-300 to-indigo-400 drop-shadow-lg">
            Why Choose TubSense?
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
            No more bathroom flooding worries. TubSense brings together smart protection,
            quick installation, and proven durability keeping your home safe, dry,
            and stress-free every single day.
          </p>
        </div>


        <div className="relative space-y-8 pb-40">
          {features.map((f, i) => (
            <StackedCard key={f.num} feature={f} index={i} />
          ))}
        </div>
      </section>
      <VideoSection
        title="See TubSense in Action"
        desc="From first drip to instant shutoff. This short demo shows exactly how TubSense prevents overflow."
        src="/videos/tubsense-demo.mp4"
        poster="/videos/tubsense-poster.jpg"
      />
    </main>
  );
}
