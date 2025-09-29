import React from 'react';

// Safelist top offsets so Tailwind keeps them
const TOPS = ['top-[200px]', 'top-[240px]', 'top-[280px]', 'top-[320px]', 'top-[360px]'];

export default function StackedCard({ feature, index = 0 }) {
  const top = TOPS[index] || 'top-[40px]';

  return (
    <article className={`sticky ${top} rounded-3xl bg-[#141517] ring-1 ring-white/10`}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* copy */}
        <div className="flex items-center p-8 md:p-10">
          <div className="flex items-start gap-6">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-black/40 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,.05)]">
              <span className="text-2xl font-semibold text-[#ff6a2b]">{feature.num}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">{feature.desc}</p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="relative p-6">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10">
            <img
              src={feature.img}
              alt={feature.title}
              className="h-[320px] w-full object-contain md:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
