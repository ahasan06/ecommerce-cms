import React from "react";
import HeroInteractive from "./HeroInteractive";
import AnimatedGlowTitle from "../ui/AnimatedGlowTitle";
import RotatingWords from "../ui/RotatingWords";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo/logo2.png'
export default function Hero() {
  return (
    <section className="relative  bg-[#0a0a0a] mx-auto px-4  py-10  md:pb-10  min-h-screen flex flex-col items-center justify-between text-white ">
      <Link href="/" className="flex items-center gap-3 z-10 pb-10 md:pb-0">
          <Image
            src={logo}
            alt="tubsense Logo"
            className=" w-[250px]"
            priority
          />
      </Link>
      {/* Desktop bg video (decorative) */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl md:rounded-3xl hidden md:block">
        <video className="h-full w-full object-cover" autoPlay muted playsInline preload="metadata">
          <source src="/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" />
      </div>

      {/* SEO-friendly content (server-rendered) */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <span className="opacity-80">Smart Protection for Every Bath</span>
          <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80" aria-hidden="true">
            <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>


        <div aria-hidden="true">
          <AnimatedGlowTitle text="TubSense" className="text-[38px] md:text-[200px] font-bold leading-[1.15] tracking-tight" />
        </div>

        {/* Decorative animated brand will be rendered by client child; this is the real H1 for SEO */}
        <h1 className="text-[30px] md:text-[40px] font-bold leading-[1.15] max-w-xl mx-auto">
          Stop Overflow Before It Becomes a Disaster
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Your bathtub should bring comfort, not costly damage. TubSense is the intelligent safety device that detects rising water
          and instantly shuts off the supply, preventing flooding, protecting your home, and giving you complete peace of mind.
        </p>

        {/* Client interactivity: animated title, buttons, modal */}
        <HeroInteractive />
      </div>

      {/* Mobile inline video (decorative) */}
      <div className="mt-10 w-full max-w-5xl md:hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <video className="w-full h-full aspect-[16/9] object-cover" autoPlay muted loop playsInline preload="metadata">
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* Rotating words */}

      <div className="max-w-2xl pt-10">
        <RotatingWords
          words={["Smart", "Protective", "Reliable", "Durable", "Innovative", "Safe"]}
          interval={2000}
        />
      </div>

    </section>
  );
}
