"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import logo from '@/public/logo/logo.png'
export default function Footer() {
  const primaryLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
  ];

  return (
    <footer className="bg-[#0e0f12] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c0f]">
          {/* sheen */}
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(1200px_400px_at_20%_0%,rgba(255,255,255,0.06),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

          <div className="relative grid gap-10 px-6 py-12 md:grid-cols-12 md:gap-12 md:px-10">
            {/* Brand + Newsletter */}
            <div className="md:col-span-5">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src={logo}
                  alt="Clicks Logo"
                  width={128}
                  height={50}
                  className="h-auto w-auto"
                  priority
                />
              </Link>

              <h3 className="mt-8 text-lg font-semibold">Sign up to our newsletter.</h3>

              <form
                className="mt-4 flex w-full items-center rounded-xl bg-white/5 ring-1 ring-white/10 focus-within:ring-white/30"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="m-1 inline-flex items-center justify-center rounded-lg bg-blue-600 p-2.5 text-white hover:bg-blue-500 transition"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Simple Links + Contact */}
            <div className="md:col-span-7 grid gap-10 sm:grid-cols-2">
              {/* Links */}
              <div>
                <h4 className="text-sm font-semibold">Links</h4>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {primaryLinks.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="hover:text-white transition">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-sm font-semibold">Contact</h4>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 opacity-80" />
                    <span>
                      1234 Main Street, Vancouver, BC V5K 0A1
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 opacity-80" />
                    <a href="mailto:hello@tubsense.com" className="hover:text-white transition">
                      hello@tubsense.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 opacity-80" />
                    <a href="tel:+16045550123" className="hover:text-white transition">
                      +1 (604) 555-0123
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="md:col-span-12">
              <div className="h-px w-full bg-white/10" />
            </div>

            {/* Map Embed */}
            <div className="md:col-span-12">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <iframe
                  title="TubSense Location"
                  src={
                    "https://www.google.com/maps?q=Vancouver,BC&output=embed"
                  }
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Bottom row */}
            <div className="md:col-span-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Payments removed as not requested; add back later if needed */}

              {/* Copyright */}
              <div className="text-xs text-white/60">
                © {new Date().getFullYear()}, TubSense.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
