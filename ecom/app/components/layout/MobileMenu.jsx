"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        className="p-2 text-white/90 hover:text-white cursor-pointer"
      >
        {open ? <X className="h-6 w-6 cursor-pointer" /> : <Menu className="h-6 w-6 cursor-pointer" />}
      </button>

      {/* Overlay */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
        />
      )}

      {/* Slide-down Menu */}
      <div
        className={`absolute left-0 right-0 top-full z-50 transform transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <nav className="bg-neutral-950/95 border-t border-white/10 backdrop-blur-sm">
          <div className="flex flex-col px-4 py-4 space-y-3 text-white">
            {/* Primary links */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base text-white/90 hover:text-white hover:bg-white/5 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base text-white/90 hover:text-white hover:bg:white/5 hover:bg-white/5 transition"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base text-white/90 hover:text:white hover:bg-white/5 transition"
            >
              Contact Us
            </Link>

      
            
          </div>
        </nav>
      </div>
    </div>
  );
}
