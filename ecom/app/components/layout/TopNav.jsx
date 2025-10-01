"use client";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="w-full bg-orange-600 text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2">
        <span className="font-medium">
          Prevent costly water damage TubSense stops bathtub overflows before they start.
        </span>
        <Link
          href="/product/tubsense"
          className="rounded-md bg-white text-orange-700 px-3 py-1 text-xs font-semibold"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
