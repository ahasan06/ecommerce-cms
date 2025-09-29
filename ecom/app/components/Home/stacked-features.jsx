// StackedFeatures.jsx
import React from 'react';
import StackedCard from './StackedCard';

const features = [
  { num: 1, title: 'Feel satisfying real buttons', desc: 'Pressing real buttons and hearing that little clicking sound feels more natural and rewarding.', img: '/feature-1.png' },
  { num: 2, title: 'Elevated premium protection', desc: 'Brushed metal side keys, a microfibre lining, and a new enclosure that adds protection inside and out.', img: '/feature-2.png' },
  { num: 3, title: 'Type faster. See more.', desc: 'Free up on-screen space for content while your thumbs fly over the keyboard.', img: '/feature-3.png' }
];

export default function StackedFeatures() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24">
      
      {/* Important: allow scroll and give height */}
       <div className="relative space-y-8 pb-40 overflow-visible">
        {features.map((f, i) => (
          <StackedCard key={f.num} feature={f} index={i} />
        ))}
      </div>
    </section>
  );
}
