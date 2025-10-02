"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

function VideoModal({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
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
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          aria-label="Close video"
        >
          ✕
        </button>

        <div className="aspect-video w-full">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dza52gwgg&public_id=WhatsApp_Video_2025-10-01_at_13.04.26_b5b03707_filyrr&profile=cld-default"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroInteractive() {
  const [open, setOpen] = useState(false);

  return (
    <>
   

      {/* Actions: left Watch Video, right WhatsApp */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="group cursor-pointer inline-flex items-center gap-3 rounded-full bg-white text-[#0b0c0f] px-6 py-3 text-base font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <span className="h-3 w-3 rounded-full bg-[#0b0c0f] ring-4 ring-[#0b0c0f]/20 relative">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#0b0c0f]/60" />
          </span>
          Watch video
        </button>

        <Link
          href="https://wa.me/13475587831"
          target="_blank"
          className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-base font-bold text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/60 hover:scale-[1.02] active:scale-95"
        >
          <FaWhatsapp size={22} />
          Talk to Us
        </Link>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
