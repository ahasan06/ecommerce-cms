"use client";

import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

export default function Footer() {
  const linkGroups = [
    {
      title: "Help",
      alinks: [
        ["Getting Started Guide", "#"],
        ["Support", "#"],
        ["FAQs", "#"],
        ["Track Your Clicks", "#"],
        ["Shipping", "#"],
        ["Returns", "#"],
        ["Download The Clicks App", "#"],
        ["Where To Buy Clicks", "#"],
        ["Report a Bug", "#"],
      ],
    },
    {
      title: "Company",
      alinks: [
        ["Blog", "#"],
        ["Shop All", "#"],
        ["About Clicks", "#"],
        ["Media Inquiries", "#"],
        ["Partners & Enterprise", "#"],
        ["Careers", "#"],
        ["Affiliates", "#"],
      ],
    },
    {
      title: "Legal",
      alinks: [
        ["Terms & Conditions", "#"],
        ["Terms of Sale", "#"],
        ["Privacy Policy", "#"],
      ],
    },
  ];

  const socials = [
    ["X", "#"],
    ["IG", "#"],
    ["FB", "#"],
    ["YT", "#"],
    ["TT", "#"],
    ["Pin", "#"],
    ["In", "#"],
  ];

  const payments = ["VISA", "MC", "AMEX", "PayPal", "Apple Pay", "G Pay"];

  return (
    <footer className="bg-[#0e0f12] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c0f]">
          {/* sheen */}
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(1200px_400px_at_20%_0%,rgba(255,255,255,0.06),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

          <div className="relative grid gap-10 px-6 py-12 md:grid-cols-12 md:gap-12 md:px-10">
            {/* Brand + Newsletter */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b0c0f] font-black">
                  C
                </div>
                <span className="text-2xl font-semibold tracking-tight">Clicks</span>
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
                  className="m-1 inline-flex items-center justify-center rounded-lg bg-[#ff6a2b] p-2.5 text-white hover:bg-[#ff7b45] transition"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Link groups */}
            <div className="md:col-span-7 grid gap-10 sm:grid-cols-3">
              {linkGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm font-semibold">{group.title}</h4>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    {group.alinks.map(([label, href]) => (
                      <li key={label}>
                        <Link href={href} className="hover:text-white transition">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="md:col-span-12">
              <div className="h-px w-full bg-white/10" />
            </div>

            {/* Bottom */}
            <div className="md:col-span-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* Socials */}
              <div>
                <p className="text-sm font-semibold">Join Our Click</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {socials.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-xs font-semibold ring-1 ring-white/10 hover:bg-white/10 transition"
                      aria-label={label}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Locale */}
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-white/90 hover:bg-white/10 transition">
                <span className="text-base leading-none">🇺🇸</span>
                <span>United States</span>
                <Globe className="h-4 w-4 opacity-70" />
              </button>

              {/* Payments */}
              <div className="flex flex-wrap items-center gap-3 opacity-70">
                {payments.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-semibold ring-1 ring-white/10"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="md:col-span-12 text-xs text-white/60">
              © {new Date().getFullYear()}, Clicks Technology.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
