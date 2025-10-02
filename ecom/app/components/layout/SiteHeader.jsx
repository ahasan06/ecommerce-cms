"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react"; // phone + email icons
import TopNav from "./TopNav";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import logo from '@/public/logo/logo.png'

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
            <Image
              src={logo}
              alt="tubsense Logo"
              width={128}
              height={50}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-white/90 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/90 hover:text-white transition"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/90 hover:text-white transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Phone */}
            <Link
              href="tel:+13475587831"
              className="flex items-center gap-2 text-white/90 hover:text-white transition text-sm"
            >
              <Phone className="h-5 w-5" />
              +1 347-558-7831
            </Link>

            {/* Email */}
            <Link
              href="mailto:info@clicks.com"
              className="flex items-center gap-2 text-white/90 hover:text-white transition text-sm"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </Link>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
