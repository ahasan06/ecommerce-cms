"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, User2 } from "lucide-react";
import TopNav from "./TopNav";
import MobileMenu from "./MobileMenu";
import NavItem from "../ui/NavItem";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header data-scrolled={scrolled} className="fixed top-0 z-50 w-full">
      {/* Top promo bar */}
      <TopNav />

      {/* Main nav */}
      <div
        className="
          transition
          border-b border-transparent
          data-[scrolled=true]:border-white/10
          bg-transparent
          data-[scrolled=true]:bg-neutral-950/70
          backdrop-blur-[6px]
        "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-neutral-900 font-extrabold">
              C
            </div>
            <span className="text-lg font-semibold tracking-wide text-white">
              Clicks
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem
              label="Clicks for iPhone"
              items={[
                { label: "iPhone 16 Series", href: "#" },
                { label: "iPhone 15 Series", href: "#" },
                { label: "Older Models", href: "#" },
              ]}
            />
            <Link
              href="#"
              className="text-sm font-medium text-white/90 hover:text-white transition"
            >
              Clicks for Pixel
            </Link>
            <NavItem
              label="Clicks for Razr"
              items={[
                { label: "Razr 50", href: "#" },
                { label: "Razr 40", href: "#" },
              ]}
            />
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
   
            {/* Desktop buttons */}
            <Link
              href="/shop"
              className=" md:inline-flex rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500 transition"
            >
              Shop All
            </Link>

            <Link
              href="/account"
              className=" md:inline-flex p-2 text-white/90 hover:text-white"
            >
              <User2 className="h-5 w-5" />
            </Link>
            <Link
              href="/cart"
              className=" md:inline-flex p-2 text-white/90 hover:text-white"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
