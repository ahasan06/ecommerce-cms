"use client";
import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
});
export default function RotatingWords({
    words = [],
    speed = 25,
    height = 72,
}) {
    const doubled = [...words, ...words];

    return (
        <div
            className="relative w-full bg-gradient-to-r from-[#1e1f25] via-[#111827] to-[#0e0f12] rounded-[999px] flex items-center overflow-hidden  shadow-inner shadow-gray-500"
            style={{ height }}
        >
            <div
                className="animate-marquee"
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((word, i) => (
                    <span
                        key={i}
                        className={`${bebas.className} stroke-text mx-10  font-bold tracking-wide text-2xl md:text-3xl`}
                    >
                        {word}
                    </span>

                ))}
            </div>

            {/* Fade edges */}
            <div
                className="pointer-events-none absolute inset-0 rounded-[999px]"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
                    maskImage:
                        "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
                }}
            />
        </div>
    );
}





// RotatingWords