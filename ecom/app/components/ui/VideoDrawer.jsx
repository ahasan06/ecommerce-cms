"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function VideoDrawer({ open, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100]" aria-modal="true" role="dialog" aria-label="TubSense Demo Video">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        className={`
          absolute left-1/2 bottom-1/2 translate-y-1/2  -translate-x-1/2 w-full max-w-5xl
          rounded-3xl bg-[#0b0c0f] ring-1 ring-white/10 shadow-2xl
    
       
        `}
      >
        {/* Handle + close */}
        <div className="relative flex items-center justify-center py-3">
          <span className="h-1.5 w-12 rounded-full bg-white/20" />
          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-3 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Header */}
        <div className="px-4 pb-3 text-center">
          <h3 className="text-lg font-semibold text-white">See TubSense in Action</h3>
          
        </div>

        {/* Player */}
        <div className="px-4 pb-5">
          <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/10 bg-black/30">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dna6wnekt&public_id=Tubsense_Rev1_jyqexn&profile=cld-default"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 20%); }
          to { transform: translate(-50%, 0%); }
        }
      `}</style>
    </div>,
    document.body
  );
}
