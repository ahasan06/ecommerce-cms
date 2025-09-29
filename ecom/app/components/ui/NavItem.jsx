"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function NavItem({ label, items = [] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition">
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>

      {items.length > 0 && (
        <div
          className="invisible opacity-0 group-hover:visible group-hover:opacity-100
                     absolute left-0 mt-3 min-w-[220px] rounded-xl border border-white/10
                     bg-neutral-900/95 backdrop-blur-sm shadow-lg p-3 transition"
        >
          <ul className="text-sm text-white/90 space-y-2">
            {items.map((it, i) => (
              <li key={i}>
                <Link href={it.href || "#"} className="block hover:text-white">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
