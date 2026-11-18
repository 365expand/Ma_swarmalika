"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Music, Mic2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Gentle, GPU-accelerated background parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[660px] lg:min-h-[740px] w-full flex items-center overflow-hidden bg-[#181615] text-[#F6F2EB] py-16 sm:py-20 lg:py-24"
    >
      {/* 
        OPTIMIZED RESPONSIVE ABOUT IMAGES WITH GENTLE PARALLAX (<450KB)
        - Mobile: 'about - mobile.jpg' (221 KB)
        - Desktop: 'about.jpg' (441 KB)
      */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[112%] -top-[6%] pointer-events-none transform-gpu will-change-transform"
      >
        {/* Mobile Portrait Image */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/img/about - mobile.jpg"
            alt="Mili Chakraborty - Bengali Singer and Teacher at Swarmalika"
            fill
            sizes="100vw"
            className="object-cover object-[center_top] filter brightness-[0.66] contrast-[1.05]"
          />
        </div>

        {/* Desktop Landscape Image */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/img/about.jpg"
            alt="Mili Chakraborty - Bengali Singer and Teacher at Swarmalika"
            fill
            sizes="100vw"
            className="object-cover object-[right_top] md:object-[center_top] filter brightness-[0.72] contrast-[1.05]"
          />
        </div>

        {/* Studio-grade gradient scrim for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181615] via-[#181615]/85 to-transparent md:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-[#181615]/30 to-[#181615]/60" />
      </motion.div>

      {/* OVERLAID CONTENT WITH SCROLL REVEAL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 xl:col-span-6 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242120]/80 backdrop-blur-md border border-[#AD9165]/50 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#AD9165] font-semibold shadow-md">
              <Sparkles className="w-3 h-3 text-[#AD9165]" />
              <span>পরিচিতি &bull; ABOUT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F6F2EB] font-normal tracking-tight leading-tight">
              সুরের সাধনা ও <span className="italic text-[#AD9165]">সঙ্গীতের শুদ্ধ রূপ</span>
            </h2>

            <p className="font-serif text-base sm:text-lg text-[#EDE6DA] italic border-l-2 border-[#AD9165] pl-3.5 leading-relaxed">
              &ldquo;ক্লাসিকাল, রবীন্দ্র সংগীত ও আধুনিক গান — হিন্দি ও বাংলা উভয় ধারাতেই শুদ্ধ তাল ও লয়ের প্রকাশ।&rdquo;
            </p>

            <div className="space-y-3 text-[#EDE6DA]/85 font-sans text-xs sm:text-sm leading-relaxed">
              <p>
                <strong className="text-[#F6F2EB]">{siteConfig.siteName}</strong>-এর মাধ্যমে মিলি চক্রবর্তী দীর্ঘদিন ধরে শাস্ত্রীয় ও লঘু সঙ্গীতের ঐতিহ্যকে নতুন প্রজন্মের কাছে পৌঁছে দিচ্ছেন। প্রতিটি গানের ভাব, উচ্চারণ ও স্বরভঙ্গির শুদ্ধতাই তাঁর প্রধান লক্ষ্য।
              </p>
              <p>
                শিক্ষকতার পাশাপাশি তিনি অর্কেস্ট্রার সাথে নানান ধরনের মঞ্চ ও সাংস্কৃতিক অনুষ্ঠানে গান গেয়ে দর্শকদের হৃদয়ে স্থান করে নিয়েছেন।
              </p>
            </div>

            {/* Concise Feature Cards with gentle hover lift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#242120]/85 backdrop-blur-md border border-white/10 hover:border-[#AD9165]/50 transition-all duration-300 shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[#713746]/40 text-[#AD9165] flex items-center justify-center">
                    <Music className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-serif text-xs sm:text-sm font-medium text-[#F6F2EB]">
                    সঙ্গীত শিক্ষা (Teaching)
                  </h4>
                </div>
                <p className="text-[11px] text-[#EDE6DA]/75 leading-normal">
                  ক্লাসিকাল, রবীন্দ্র সংগীত ও আধুনিক বাংলা-হিন্দি গান (একক ও দলগত)।
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#242120]/85 backdrop-blur-md border border-white/10 hover:border-[#AD9165]/50 transition-all duration-300 shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[#713746]/40 text-[#AD9165] flex items-center justify-center">
                    <Mic2 className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-serif text-xs sm:text-sm font-medium text-[#F6F2EB]">
                    লাইভ প্রোগ্রাম ও অর্কেস্ট্রা
                  </h4>
                </div>
                <p className="text-[11px] text-[#EDE6DA]/75 leading-normal">
                  অর্কেস্ট্রার সাথে বিভিন্ন ধরনের সাংস্কৃতিক ও সামাজিক স্টেজ শো।
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#learn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.12em] uppercase font-semibold bg-[#713746] text-[#F6F2EB] hover:bg-[#8E495B] transition-all shadow-lg hover:-translate-y-0.5 border border-[#AD9165]/40"
              >
                <span>ক্লাস ও রিয়াজ সম্পর্কে জানুন</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#AD9165]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
