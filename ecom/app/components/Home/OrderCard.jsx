import Image from "next/image";
import Link from "next/link";
import tubs from "../../../public/tubsense.png";

export default function OrderCard() {
  return (
    <section className="relative mx-auto max-w-xl px-4  md:mt-16">
      <div className="relative overflow-visible rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d0e12] to-[#0a0a0a] p-5 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        
        {/* Top-left image */}
        <div className="absolute -left-16 -top-14 md:-left-20 md:-top-16 pointer-events-none select-none">
          <div className="relative h-36 w-36 md:h-48 md:w-48 rotate-[20deg]">
            <Image
              src={tubs}
              alt="TubSense device top"
              fill
              className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>
        </div>

        {/* Bottom-right rotated image */}
        <div className="absolute -bottom-14 -right-14 md:-bottom-20 md:-right-20 pointer-events-none select-none">
          <div className="relative h-36 w-36 md:h-48 md:w-48 rotate-[200deg]">
            <Image
              src={tubs}
              alt="TubSense device bottom"
              fill
              className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 md:px-8 text-center flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            Interested in Ordering?
          </h3>
          <p className="mt-2 text-white/70 text-sm w-[60%] md:max-w-sm md:text-base">
            Click below to email our team. We will reply with pricing, availability, and delivery options.
          </p>

          <div className="mt-5">
            <Link
              href={`mailto:tubsense25@gmail.com?subject=TubSense%20Order%20Inquiry&body=Hi%20TubSense%20Team%2C%0A%0AI%27m%20interested%20in%20ordering%20TubSense.%20Please%20share%20pricing%2C%20availability%2C%20and%20delivery%20details.%0A%0AThanks%2C%0A`}
              className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm md:text-base font-medium hover:opacity-90 transition"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
