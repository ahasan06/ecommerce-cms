"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import VideoDrawer from "../ui/VideoDrawer";

export default function HeroInteractive() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

      {/* New bottom-sheet drawer */}
      <VideoDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
