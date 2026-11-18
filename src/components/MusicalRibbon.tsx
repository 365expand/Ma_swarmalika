"use client";

import { Sparkles } from "lucide-react";

interface MusicalRibbonProps {
  className?: string;
  reverse?: boolean;
}

const ITEMS = [
  "শাস্ত্রীয় সঙ্গীত",
  "রবীন্দ্র সংগীত",
  "আধুনিক বাংলা ও হিন্দি",
  "লাইভ অর্কেস্ট্রা",
  "SWARMALIKA",
  "একনিষ্ঠ স্বরসাধন",
  "মঞ্চ পরিবেশনা",
  "কণ্ঠসাধনা ও রিয়াজ",
  "সাংস্কৃতিক অনুষ্ঠান",
  "সুরের মেলবন্ধন",
];

export default function MusicalRibbon({
  className = "",
  reverse = false,
}: MusicalRibbonProps) {
  return (
    <div
      className={`relative w-full overflow-hidden py-3 bg-[#131110] border-y border-[#AD9165]/30 select-none ${className}`}
    >
      {/* Subtle gold glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#713746]/20 via-transparent to-[#713746]/20 pointer-events-none" />

      <div
        className={`flex w-max items-center gap-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-[#EDE6DA]/85 font-medium shrink-0"
          >
            <span className="hover:text-[#AD9165] transition-colors">
              {item}
            </span>
            <Sparkles className="w-2.5 h-2.5 text-[#AD9165] opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
}
