"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Music2, Calendar, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[640px] max-h-[1080px] flex items-center overflow-hidden bg-[#181615] text-[#F6F2EB]"
    >
      {/* 
        FULL-VIEWPORT RESPONSIVE ARTIST BACKGROUND
        - Desktop: 'hero.jpg' (Landscape, artist on right)
        - Mobile: 'hero - mobile.jpg' (Portrait, artist upper-center)
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Mobile Portrait Background */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/img/hero - mobile.jpg"
            alt="Mili Chakraborty - Singer & Music Mentor at Swarmalika"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_top] filter brightness-[0.72] contrast-[1.05]"
          />
          {/* Mobile Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-[#181615]/75 to-transparent" />
        </div>

        {/* Desktop Landscape Background */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/img/hero.jpg"
            alt="Mili Chakraborty - Singer & Music Mentor at Swarmalika"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[right_center] lg:object-[80%_center] filter brightness-[0.78] contrast-[1.05]"
          />
          {/* Desktop Left-to-Right Scrim to keep artist completely visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#181615] via-[#181615]/85 md:w-[62%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-transparent to-[#181615]/30" />
        </div>
      </div>

      {/* EDITORIAL CONTENT WITH ENTRANCE ANIMATIONS */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-8 flex flex-col justify-end md:justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl text-left"
        >
          {/* Branded Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#242120]/80 backdrop-blur-md border border-[#AD9165]/50 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#AD9165] font-semibold mb-3 sm:mb-4 shadow-lg"
          >
            <Sparkles className="w-3 h-3 text-[#AD9165]" />
            <span>{siteConfig.siteName}</span>
            <span>&bull;</span>
            <span className="font-serif italic text-[#F6F2EB]/90">মিলি চক্রবর্তী</span>
          </motion.div>

          {/* Main Artist Name */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F6F2EB] tracking-tight font-normal leading-[1.08] mb-2 sm:mb-3 drop-shadow-lg">
            Mili <span className="italic font-light text-[#AD9165]">Chakraborty</span>
          </h1>

          {/* Bengali Subheading */}
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#EDE6DA] font-normal leading-snug mb-3 drop-shadow-md">
            ক্লাসিকাল &bull; রবীন্দ্র সংগীত &bull; আধুনিক গান <span className="text-[#AD9165] text-base sm:text-lg">(বাংলা ও হিন্দি)</span>
          </p>

          {/* Concise Narrative */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed max-w-xl mb-6 sm:mb-7 drop-shadow-xs">
            একক ও দলগত সঙ্গীত শিক্ষা এবং অর্কেস্ট্রার সাথে নানান ধরনের লাইভ স্টেজ পারফরম্যান্স।
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#learn"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-sans tracking-[0.14em] uppercase font-semibold bg-[#713746] text-[#F6F2EB] hover:bg-[#8E495B] transition-all duration-200 shadow-xl hover:-translate-y-0.5 border border-[#AD9165]/40"
            >
              <Music2 className="w-3.5 h-3.5 text-[#AD9165]" />
              <span>সঙ্গীত শিক্ষা</span>
            </Link>

            <Link
              href="#performances"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-sans tracking-[0.14em] uppercase font-semibold bg-white/10 backdrop-blur-md text-[#F6F2EB] border border-white/25 hover:border-[#AD9165] hover:text-[#AD9165] hover:bg-white/20 transition-all duration-200 shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 text-[#AD9165]" />
              <span>লাইভ প্রোগ্রাম</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs font-sans tracking-[0.14em] uppercase font-semibold text-[#AD9165] hover:text-[#F6F2EB] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>যোগাযোগ করুন</span>
            </Link>
          </div>

          {/* Feature Badges */}
          <div className="mt-6 sm:mt-8 pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-[#EDE6DA]/75 font-sans">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD9165]" />
              শাস্ত্রীয় সঙ্গীত
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#713746]" />
              রবীন্দ্র সংগীত
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD9165]" />
              আধুনিক বাংলা ও হিন্দি
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#713746]" />
              লাইভ অর্কেস্ট্রা
            </span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 right-6 sm:right-10 hidden md:flex items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#EDE6DA]/70 font-sans">
          Scroll Down
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-[#AD9165] animate-bounce" />
      </motion.div>
    </section>
  );
}
