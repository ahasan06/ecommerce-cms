"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white/90 hover:text-white"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Slide-out Menu */}
      {open && (
        <div className="absolute top-[100%] left-0 w-full bg-neutral-950/95 backdrop-blur-sm border-t border-white/10 z-40">
          <nav className="flex flex-col px-4 py-4 space-y-4 text-white/90">
            <button className="flex items-center justify-between text-sm">
              Clicks for iPhone
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link href="#" className="text-sm">
              Clicks for Pixel
            </Link>
            <button className="flex items-center justify-between text-sm">
              Clicks for Razr
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link
              href="/shop"
              className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500 transition w-fit"
            >
              Shop All
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
