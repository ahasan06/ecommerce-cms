"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Mail, Loader2 } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo/logo2.png";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg(null);

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMsg({ type: "err", text: "Please enter a valid email." });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");

      setMsg({ type: "ok", text: "Thanks for subscribing!" });
      setEmail("");
    } catch (error) {
      setMsg({ type: "err", text: "Something went wrong. Try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c0f]">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(1200px_400px_at_20%_0%,rgba(255,255,255,0.06),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

          <div className="relative grid gap-10 px-6 py-12 md:grid-cols-12 md:gap-12 md:px-10">
            {/* Brand + Newsletter */}
            <div className="md:col-span-5">
              <Link href="/" className="flex items-center gap-3">
                <Image src={logo} alt="tubsense logo" width={128} height={50} className="h-auto w-auto" priority />
              </Link>

              <h3 className="mt-8 text-lg font-semibold">Sign up to our newsletter.</h3>

              <form
                className="mt-4 flex w-full items-center rounded-xl bg-white/5 ring-1 ring-white/10 focus-within:ring-white/30"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="m-1 cursor-pointer inline-flex items-center justify-center rounded-lg bg-blue-600 p-2.5 text-white hover:bg-blue-500 transition disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </button>

              </form>

              {msg && (
                <p className={`mt-2 text-sm ${msg.type === "ok" ? "text-green-400" : "text-red-400"}`}>
                  {msg.text}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="md:col-span-7">
              <h4 className="text-sm font-semibold">Contact (USA)</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 opacity-80" />
                  <span>New York</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 opacity-80" />
                  <a href="mailto:tubsense25@gmail.com" className="text-white/90 hover:text-white transition text-sm">
                    tubsense25@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-12">
              <div className="h-px w-full bg-white/10" />
            </div>

            <div className="md:col-span-12">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <iframe
                  title="TubSense USA Location"
                  src="https://www.google.com/maps?q=New+York,USA&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="md:col-span-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="text-xs text-white/60">© {new Date().getFullYear()}, TubSense.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
