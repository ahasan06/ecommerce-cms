"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react"; // phone + email icons
import TopNav from "./TopNav";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import logo from '@/public/logo/logo2.png'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header data-scrolled={scrolled} className=" z-50 w-full">
      <TopNav />
    </header>
  );
}
