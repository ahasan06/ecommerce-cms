"use client";
import Link from "next/link";
import { Phone, Mail } from "lucide-react"; 
export default function TopNav() {
  return (
    <div className=" mx-auto w-full bg-[#0a0a0a] text-white text-sm">
      <div className="flex max-w-7xl md:mx-auto items-center justify-between gap-3 px-4 py-2">
        <span className="font-medium max-w-[60%]">
          Prevent costly water damage TubSense stops bathtub overflows before they start.
        </span>
        <Link
            href={`mailto:tubsense25@gmail.com?subject=${encodeURIComponent("TubSense inquiry")}&body=${encodeURIComponent("Hi,\n\nI’d like to know more about TubSense.")}`}
              rel="noopener noreferrer"
              className="flex items-center gap-2  transition rounded bg-white text-blue-700 hover:bg-amber-50 px-2 py-1  font-semibold"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </Link> 
      </div>
    </div>
  );
}
