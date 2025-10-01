"use client";
import React from "react";

export default function AnimatedGlowTitle({
    text = "TubSense",
    className = "w-full",
    fill = "#ffffff"
}) {
    // NEW: split into words + total duration
    const words = text.split(" ");
    const totalMs = 10000; // total reveal time for all words

    return (
        <div className={className} style={{ filter: "drop-shadow(0 8px 28px rgba(120,180,255,.35))" }}>
            {/* NEW: local CSS for word-by-word fade */}
            <style jsx>{`
        @keyframes wordFade {
          from { opacity: 0; transform: translateY(8px); filter: blur(3px); }
          to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
        }
        .word {
          opacity: 0;
          animation: wordFade 420ms ease forwards; /* per-word anim length */
        }
      `}</style>

            <svg
                viewBox="0 0 1200 250"
                width="100%"
                height="auto"
                role="img"
                aria-label={text}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Gradient fill for a wet look */}
                    <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                        <stop offset="60%" stopColor="#dff1ff" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#b6dbff" stopOpacity="0.9" />
                    </linearGradient>

                    {/* Glow behind text */}
                    <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Liquid wobble using turbulence + displacement */}
                    <filter id="liquid" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.013 0.018"
                            numOctaves="2"
                            seed="3"
                            result="noise"
                        >
                            <animate
                                attributeName="baseFrequency"
                                dur="8s"
                                values="0.020 0.028;0.010 0.016;0.020 0.028"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="16"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        >
                            <animate
                                attributeName="scale"
                                dur="8s"
                                values="10;22;10"
                                repeatCount="indefinite"
                            />
                        </feDisplacementMap>
                    </filter>

                    {/* Optional gooey smoothing if you want thicker, more syrupy edges */}
                    <filter id="goo" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 24 -12"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>

                {/* Group with effects */}
                <g filter="url(#glow)">
                    <g filter="url(#liquid)">
                        {/* Main text (word-by-word reveal with tspans) */}
                        {/* Main text (word-by-word reveal using SVG <animate>) */}
                        <text
                            x="50%"
                            y="55%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontWeight="800"
                            fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial"
                            fontSize="200"
                            fill="url(#liquidGrad)"
                            stroke={fill}
                            strokeWidth="1"
                            paintOrder="stroke"
                            style={{ letterSpacing: ".02em" }}
                        >
                            
                            {(() => {
                                const words = text.split(" ");
                                const totalMs = 4000; // total reveal time
                                const step = totalMs / Math.max(words.length, 1);

                                return words.map((w, i) => {
                                    const beginSec = (step * i) / 1000; // seconds
                                    return (
                                        <tspan key={i}>
                                            {/* Fade this word from 0 -> 1 starting at its delay */}
                                            <animate
                                                attributeName="opacity"
                                                from="0"
                                                to="1"
                                                dur="6.20s"
                                                begin={`${beginSec}s`}
                                                fill="freeze"
                                            />
                                            {w}
                                            {i < words.length - 1 ? " " : ""}
                                        </tspan>
                                    );
                                });
                            })()}
                        </text>

                    </g>
                </g>
            </svg>
        </div>
    );
}
