"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AnimatedGlowTitle from "../ui/AnimatedGlowTitle";
import { FaWhatsapp } from "react-icons/fa";

// Simple modal component
function VideoModal({ open, onClose }) {
  const dialogRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="TubSense Demo Video"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0b0c0f] ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
        ref={dialogRef}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          aria-label="Close video"
        >
          ✕
        </button>

        {/* Responsive player */}
        <div className="aspect-video w-full">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dza52gwgg&public_id=WhatsApp_Video_2025-10-01_at_13.04.26_b5b03707_filyrr&profile=cld-default"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-24 min-h-screen flex flex-col items-center justify-center text-white">
      {/* Desktop bg video */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl md:rounded-3xl hidden md:block">
        <video className="h-full w-full object-cover" autoPlay muted playsInline preload="metadata">
          <source src="/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <span className="opacity-80">Smart Protection for Every Bath</span>
          <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
            <path
              d="M13 5l7 7-7 7M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <AnimatedGlowTitle text="TubSense" className="text-[38px] font-bold leading-[1.15] tracking-tight md:text-[200px]" />

        <h1 className="text-[30px] font-bold leading-[1.15] max-w-xl mx-auto tracking-tight md:text-[40px]">
          Stop Overflow Before It Becomes a Disaster
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Your bathtub should bring comfort, not costly damage. TubSense is the intelligent safety device that detects rising
          water and instantly shuts off the supply preventing flooding, protecting your home, and giving you complete peace of mind.
        </p>

        {/* Actions: left Watch Video, right WhatsApp */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {/* Left: Watch Video */}
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 rounded-full bg-white text-[#0b0c0f] px-6 py-3 text-base font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <span className="h-3 w-3 rounded-full bg-[#0b0c0f] ring-4 ring-[#0b0c0f]/20 relative">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#0b0c0f]/60"></span>
            </span>
            Watch video
          </button>

          {/* Right: WhatsApp */}
          <Link
            href="https://wa.me/13475587831"
            target="_blank"
            className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-base font-bold text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/60 hover:scale-[1.02] active:scale-95"
          >
            <FaWhatsapp size={22} />
            Talk to Us
          </Link>
        </div>
      </div>

      {/* Mobile inline video */}
      <div className="mt-10 w-full max-w-5xl md:hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <video className="w-full h-full aspect-[16/9] object-cover" autoPlay muted loop playsInline preload="metadata">
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Modal */}
      <VideoModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
