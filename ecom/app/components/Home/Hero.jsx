"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-24 min-h-screen flex flex-col items-center justify-center text-white ">
      {/* Desktop/Large: background video */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl md:rounded-3xl hidden md:block ">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="metadata"
        >
          <source src="/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" />
      
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center ">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <span className="opacity-80">Introducing Clicks for iPhone 17</span>
          <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
            <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-[38px] font-bold leading-[1.15] tracking-tight md:text-[56px]">
          Your phone is better
          <br className="hidden md:block" /> with buttons.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          Premium, protective case that gives your phone superpowers.
        </p>

        <div className="mt-8">
          <Link
            href="#shop"
            className="inline-flex items-center rounded-full bg-[#ff6a2b] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:translate-y-[-1px] active:translate-y-[0]"
          >
            Shop All
          </Link>
        </div>
      </div>

      {/* Mobile: inline video BELOW content */}
      <div className="mt-10 w-full max-w-5xl md:hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <video
            className="w-full h-full aspect-[16/9] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
