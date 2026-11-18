"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mic2,
  Music4,
  Sparkles,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const PERFORMANCE_HIGHLIGHTS = [
  {
    title: "অর্কেস্ট্রার সাথে লাইভ পারফরম্যান্স",
    subtitle: "Orchestra & Live Ensemble",
    description:
      "সম্পূর্ণ অর্কেস্ট্রা ও লাইভ বাদ্যযন্ত্রের মেলবন্ধনে পরিবেশিত হয় মনোমুগ্ধকর সঙ্গীতানুষ্ঠান।",
    icon: Music4,
  },
  {
    title: "সাংস্কৃতিক উৎসব ও মঞ্চানুষ্ঠান",
    subtitle: "Cultural Festivals & Stage Shows",
    description:
      "রবীন্দ্র জয়ন্তী, দুর্গোৎসব, নববর্ষ ও বিভিন্ন নাট্য-সঙ্গীত উৎসবের বিশেষ মঞ্চ পরিবেশনা।",
    icon: Mic2,
  },
  {
    title: "সামাজিক ও সান্ধ্য সঙ্গীতানুষ্ঠান",
    subtitle: "Private & Corporate Events",
    description:
      "পারিবারিক উৎসব, বিবাহ-অনুষ্ঠান ও বিশেষ ঘরোয়া সন্ধ্যায় গান ও সুরের আবহ।",
    icon: CalendarDays,
  },
];

export default function PerformanceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="performances"
      ref={sectionRef}
      className="relative min-h-[700px] w-full flex items-center overflow-hidden bg-[#181615] text-[#F6F2EB] py-16 sm:py-20 lg:py-24"
    >
      {/* 
        OPTIMIZED RESPONSIVE PERFORMANCE IMAGES WITH PARALLAX (<580KB):
        - Mobile: 'liveperformance - mobile.jpg' (269 KB)
        - Desktop: 'liveperformance.jpg' (573 KB)
      */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[112%] -top-[6%] pointer-events-none transform-gpu will-change-transform"
      >
        {/* Mobile Portrait Image */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/img/liveperformance - mobile.jpg"
            alt="Mili Chakraborty live performance on stage"
            fill
            sizes="100vw"
            className="object-cover object-[center_top] filter brightness-[0.62] contrast-[1.06]"
          />
        </div>

        {/* Desktop Landscape Image */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/img/liveperformance.jpg"
            alt="Mili Chakraborty live performance on stage"
            fill
            sizes="100vw"
            className="object-cover object-[center_top] filter brightness-[0.64] contrast-[1.06]"
          />
        </div>

        {/* Studio-grade dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-[#181615]/75 to-[#181615]/70" />
      </motion.div>

      {/* OVERLAID CONTENT ON TOP */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Header with reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#242120]/80 backdrop-blur-md border border-[#AD9165]/50 text-[10px] sm:text-xs font-sans tracking-[0.22em] uppercase text-[#AD9165] font-semibold mb-3 shadow-md">
            <Sparkles className="w-3 h-3 text-[#AD9165]" />
            <span>লাইভ পারফরম্যান্স &bull; STAGE &amp; CONCERTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight mb-2 text-[#F6F2EB] drop-shadow-md">
            অর্কেস্ট্রা ও মঞ্চ পরিবেশনা
          </h2>

          <p className="text-[#EDE6DA]/85 font-sans text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            <strong>অর্কেস্ট্রার সাথে ও নানান ধরনের প্রোগ্রাম করে থাকি।</strong> ক্লাসিকাল, রবীন্দ্র সংগীত এবং আধুনিক বাংলা ও হিন্দি গানের অনন্য পরিবেশনা।
          </p>
        </motion.div>

        {/* 3 Core Performance Highlights with staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {PERFORMANCE_HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#242120]/85 backdrop-blur-md border border-white/10 hover:border-[#AD9165]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#713746]/40 text-[#AD9165] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#AD9165] font-semibold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F6F2EB] mb-2 group-hover:text-[#AD9165] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EDE6DA]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Repertoire Features & Direct Booking Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#713746]/90 to-[#3A1823]/95 border border-[#AD9165]/40 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-sans tracking-widest uppercase text-[#AD9165] font-semibold block">
              REPERTOIRE ON STAGE &bull; স্টেজ গান
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F6F2EB]">
              প্রোগ্রাম বুকিং ও অনুষ্ঠান পরিকল্পনা
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE6DA]/90 max-w-2xl leading-relaxed">
              শাস্ত্রীয় খেয়াল ও বন্দিশ, রবীন্দ্র সংগীতের চিরন্তন মেলোডি, এবং আধুনিক বাংলা ও চিরসবুজ হিন্দি গানের সমৃদ্ধ সংকলন।
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-[#EDE6DA]/85">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165]" />
                লাইভ অর্কেস্ট্রা অ্যারেঞ্জমেন্ট
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165]" />
                অনুষ্ঠান উপযোগী গানের তালিকা
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165]" />
                পশ্চিমবঙ্গ ও দেশজুড়ে বুকিং
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-sans tracking-wider uppercase font-semibold bg-[#F6F2EB] text-[#211F1D] hover:bg-[#EDE6DA] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Contact Now</span>
              <ArrowRight className="w-4 h-4 text-[#713746]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
