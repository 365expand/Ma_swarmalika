"use client";

import { useRef } from "react";
import Image from "next/image";
import { buildWhatsAppLink, siteConfig } from "@/config/site";
import { User, Users, CheckCircle2, MessageSquare, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LearnSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const individualWhatsappUrl = buildWhatsAppLink(
    `Hello Mili Chakraborty,\n\nI would like to enquire about Individual Music Classes at ${siteConfig.siteName}.\n(Classical / Rabindra Sangeet / Modern Bengali & Hindi)\n\nPlease share details regarding syllabus and timings.\n\nThank you!`
  );

  const groupWhatsappUrl = buildWhatsAppLink(
    `Hello Mili Chakraborty,\n\nI would like to enquire about Group Music Classes at ${siteConfig.siteName}.\n(Classical / Rabindra Sangeet / Modern Bengali & Hindi)\n\nPlease share details regarding batch timings.\n\nThank you!`
  );

  return (
    <section
      id="learn"
      ref={sectionRef}
      className="relative min-h-[700px] w-full flex items-center overflow-hidden bg-[#181615] text-[#F6F2EB] py-16 sm:py-20 lg:py-24"
    >
      {/* 
        OPTIMIZED RESPONSIVE TEACHING IMAGES WITH PARALLAX (<680KB)
        - Mobile: 'teaching - mobile.jpg' (267 KB)
        - Desktop: 'teaching.jpg' (677 KB)
      */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[112%] -top-[6%] pointer-events-none transform-gpu will-change-transform"
      >
        {/* Mobile Portrait Image */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/img/teaching - mobile.jpg"
            alt="Mili Chakraborty teaching music at Swarmalika"
            fill
            sizes="100vw"
            className="object-cover object-[center_top] filter brightness-[0.62] contrast-[1.05]"
          />
        </div>

        {/* Desktop Landscape Image */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/img/teaching.jpg"
            alt="Mili Chakraborty teaching music at Swarmalika"
            fill
            sizes="100vw"
            className="object-cover object-[center_top] filter brightness-[0.65] contrast-[1.05]"
          />
        </div>

        {/* Studio-grade dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-[#181615]/75 to-[#181615]/70" />
      </motion.div>

      {/* OVERLAID CONTENT ON TOP */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#242120]/80 backdrop-blur-md border border-[#AD9165]/50 text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#AD9165] font-semibold mb-3 shadow-md">
            <Sparkles className="w-3 h-3 text-[#AD9165]" />
            <span>সঙ্গীত শিক্ষা &bull; MUSIC CLASSES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F6F2EB] font-normal tracking-tight leading-tight mb-3 drop-shadow-md">
            সঙ্গীতের সঠিক পাঠ ও কণ্ঠসাধন
          </h2>

          <p className="text-[#EDE6DA]/85 font-sans text-xs sm:text-sm max-w-xl mx-auto leading-relaxed drop-shadow-xs">
            <strong>ক্লাসিকাল, রবীন্দ্র সংগীত ও আধুনিক গান (হিন্দি ও বাংলা)</strong> শেখানো হয়। সঠিক সুরবোধ, তান ও রিয়াজের মাধ্যমে নিজের কণ্ঠকে বিকশিত করুন।
          </p>
        </motion.div>

        {/* Two Class Formats with staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-4">
          {/* INDIVIDUAL MUSIC CLASSES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-6 sm:p-8 bg-[#242120]/85 backdrop-blur-md border border-white/15 shadow-2xl hover:border-[#AD9165]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#713746]/40 text-[#AD9165] flex items-center justify-center mb-4">
                <User className="w-5 h-5" />
              </div>

              <span className="text-[10px] font-sans tracking-widest uppercase text-[#AD9165] font-semibold">
                ONE-ON-ONE GUIDANCE
              </span>

              <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EB] font-normal mt-1 mb-2">
                একক সঙ্গীত শিক্ষা (Individual Classes)
              </h3>

              <p className="text-[#EDE6DA]/85 text-xs sm:text-sm leading-relaxed mb-4">
                প্রতিটি শিক্ষার্থীর কণ্ঠের স্কেল ও মেধা অনুযায়ী ব্যক্তিগত মনোযোগ, ভয়েস ট্রেনিং ও রাগ-রিয়াজ।
              </p>

              <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-[#EDE6DA]/75">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165] shrink-0 mt-0.5" />
                  <span>ক্লাসিকাল স্বরসাধন ও ভয়েস মড্যুলেশন</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165] shrink-0 mt-0.5" />
                  <span>রবীন্দ্র সংগীত ও আধুনিক বাংলা-হিন্দি গান</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165] shrink-0 mt-0.5" />
                  <span>ব্যক্তিগত সময় ও অনুশীলনের সুবিধা</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4">
              <a
                href={individualWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-sans tracking-wider uppercase font-semibold bg-[#713746] text-[#F6F2EB] hover:bg-[#8E495B] transition-all shadow-lg hover:-translate-y-0.5 border border-[#AD9165]/40"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#AD9165]" />
                <span>একক ক্লাসের জন্য যোগাযোগ করুন</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#AD9165]" />
              </a>
            </div>
          </motion.div>

          {/* GROUP MUSIC CLASSES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-6 sm:p-8 bg-[#242120]/85 backdrop-blur-md border border-white/15 shadow-2xl hover:border-[#AD9165]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#AD9165]/20 text-[#AD9165] flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#AD9165]" />
              </div>

              <span className="text-[10px] font-sans tracking-widest uppercase text-[#AD9165] font-semibold">
                GROUP HARMONY
              </span>

              <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EB] font-normal mt-1 mb-2">
                দলগত সঙ্গীত শিক্ষা (Group Classes)
              </h3>

              <p className="text-[#EDE6DA]/85 text-xs sm:text-sm leading-relaxed mb-4">
                একসাথে সুর মেলানো, রিদম ও তালজ্ঞান বৃদ্ধি এবং সমবেত সঙ্গীত পরিবেশনার অভিজ্ঞতা।
              </p>

              <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-[#EDE6DA]/75">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165] shrink-0 mt-0.5" />
                  <span>দলীয় তালমেল, কোরাস ও রিদম চর্চা</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165] shrink-0 mt-0.5" />
                  <span>পরস্পরের সাথে সুর মেলানোর আত্মবিশ্বাস</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AD9165] shrink-0 mt-0.5" />
                  <span>আনন্দঘন ও বন্ধুত্বপূর্ণ পরিবেশ</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4">
              <a
                href={groupWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-sans tracking-wider uppercase font-semibold bg-white/10 hover:bg-white/20 text-[#F6F2EB] border border-white/25 transition-all shadow-md hover:-translate-y-0.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#AD9165]" />
                <span>দলগত ক্লাসের জন্য যোগাযোগ করুন</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#AD9165]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
