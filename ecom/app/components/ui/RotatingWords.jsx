"use client";
import React from "react";

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
                        className={`stroke-text px-3  border-l border-dotted text-gray-400 font-bold tracking-wide text-2xl md:text-3xl`}
                    >
                        {word}
                    </span>

                ))}
            </div>

            
        </div>
    );
}





// RotatingWords