"use client";
import React from "react";

export default function VideoSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide uppercase 
          bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-blue-300 rounded-full shadow-sm">
          Live Demo
        </span>

        {/* Title */}
        <h2 className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 drop-shadow-lg">
          See TubSense in Action
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
          Experience how TubSense instantly detects rising water at the overflow drain 
          and shuts off the supply before it turns into costly damage.
        </p>
      </div>

      {/* Cloudinary Embed */}
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/30 shadow-xl">
        <div className="aspect-video w-full">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dza52gwgg&public_id=WhatsApp_Video_2025-10-01_at_13.04.26_b5b03707_filyrr&profile=cld-default"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
