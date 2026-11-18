"use client";

import Link from "next/link";
import { Music, Mic2, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

const REPERTOIRE_ITEMS = [
  {
    title: "রবীন্দ্র সংগীত",
    tag: "TRADITIONAL DEVOTION",
    description:
      "পূজা, প্রেম ও প্রকৃতির অনুভূতির গভীর প্রকাশ। বিশুদ্ধ সুর, তান ও উচ্চারণের ওপর বিশেষ গুরুত্ব।",
    features: "পূজা • প্রেম • প্রকৃতি",
    icon: Music,
    iconBg: "bg-[#713746]/40",
  },
  {
    title: "আধুনিক গান (বাংলা ও হিন্দি)",
    tag: "BENGALI & HINDI",
    description:
      "জনপ্রিয় ক্লাসিক মেলোডি ও সমকালীন গানের প্রাণবন্ত পরিবেশনা ও মাইক্রোফোন ভয়েস ট্রেনিং।",
    features: "বাংলা আধুনিক • হিন্দি মেলোডি",
    icon: Mic2,
    iconBg: "bg-[#AD9165]/20",
  },
  {
    title: "ক্লাসিকাল সংগীত",
    tag: "PURE HERITAGE",
    description:
      "স্বরসাধন, কণ্ঠসাধনা ও প্রাথমিক রাগসঙ্গীতের ভিত তৈরি। সঠিক সুরবোধ ও তালজ্ঞান অর্জনের ক্লাস।",
    features: "রাগসঙ্গীত • স্বরসাধনা • তালজ্ঞান",
    icon: Sparkles,
    iconBg: "bg-[#713746]/40",
  },
];

export default function MusicSection() {
  return (
    <section
      id="music"
      className="py-16 sm:py-20 lg:py-24 bg-[#181615] text-[#F6F2EB] border-t border-white/5 relative overflow-hidden"
    >
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial from-[#713746]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242120]/80 border border-[#AD9165]/50 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#AD9165] font-semibold mb-3">
            <Sparkles className="w-3 h-3 text-[#AD9165]" />
            <span>সঙ্গীতের ধারা &bull; REPERTOIRE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight mb-2 text-[#F6F2EB]">
            সুরের ত্রিবেণী সঙ্গম
          </h2>

          <p className="text-[#EDE6DA]/75 font-sans text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            {siteConfig.siteName}-এ নিষ্ঠা ও ভালোবাসার সাথে চর্চা ও পরিবেশন করা হয়।
          </p>
        </motion.div>

        {/* 3 Focused Repertoire Cards with staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {REPERTOIRE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group rounded-2xl p-6 bg-[#211F1D] border border-white/10 hover:border-[#AD9165]/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl ${item.iconBg} text-[#AD9165] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-[#AD9165] font-semibold block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F6F2EB] mb-2.5 group-hover:text-[#AD9165] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EDE6DA]/75 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#AD9165]/90 font-medium">
                    {item.features}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs text-[#AD9165] hover:text-[#EDE6DA] transition-colors uppercase tracking-wider font-sans font-medium hover:gap-3"
          >
            <span>ক্লাস অথবা প্রোগ্রামের বিস্তারিত জানতে যোগাযোগ করুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
