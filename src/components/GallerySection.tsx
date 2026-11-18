"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Music,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

// Verified gallery photographs with their EXACT native aspect ratios (width x height)
const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/img/1.jpeg",
    width: 717,
    height: 1131,
    ratio: 717 / 1131,
    title: "কণ্ঠসাধনা ও প্রতিকৃতি",
    subtitle: "Artist Portrait",
    genre: "সাধনা",
  },
  {
    id: 2,
    src: "/img/2.jpeg",
    width: 720,
    height: 1261,
    ratio: 720 / 1261,
    title: "রবীন্দ্র সংগীত পরিবেশনা",
    subtitle: "Rabindra Sangeet",
    genre: "রবীন্দ্র সংগীত",
  },
  {
    id: 3,
    src: "/img/3.jpeg",
    width: 720,
    height: 405,
    ratio: 720 / 405,
    title: "মঞ্চের স্মৃতি ও দর্শক সমাগম",
    subtitle: "Stage Performance",
    genre: "মঞ্চ",
  },
  {
    id: 4,
    src: "/img/4.jpeg",
    width: 720,
    height: 720,
    ratio: 720 / 720,
    title: "সুর ও স্বরসাধন",
    subtitle: "Classical Sadhana",
    genre: "ক্লাসিকাল",
  },
  {
    id: 5,
    src: "/img/5.jpeg",
    width: 612,
    height: 490,
    ratio: 612 / 490,
    title: "উৎসবের সঙ্গীতানুষ্ঠান",
    subtitle: "Festival Gala",
    genre: "উৎসব",
  },
  {
    id: 6,
    src: "/img/6.jpeg",
    width: 720,
    height: 405,
    ratio: 720 / 405,
    title: "অর্কেস্ট্রার সাথে লাইভ পরিবেশনা",
    subtitle: "Live with Orchestra",
    genre: "অর্কেস্ট্রা",
  },
  {
    id: 7,
    src: "/img/7.jpeg",
    width: 720,
    height: 1144,
    ratio: 720 / 1144,
    title: "মেলোডি ও ভায়োলিন সঙ্গত",
    subtitle: "Acoustic Harmony",
    genre: "সঙ্গীত",
  },
  {
    id: 8,
    src: "/img/8.jpeg",
    width: 720,
    height: 1286,
    ratio: 720 / 1286,
    title: "সঙ্গীত পাঠশালা ও কণ্ঠতালিম",
    subtitle: "Vocal Guidance",
    genre: "শিক্ষা",
  },
  {
    id: 9,
    src: "/img/9.jpeg",
    width: 720,
    height: 936,
    ratio: 720 / 936,
    title: "শ্রোতার সাথে সুরের সংযোগ",
    subtitle: "Live Resonance",
    genre: "মঞ্চানুষ্ঠান",
  },
  {
    id: 10,
    src: "/img/10.jpeg",
    width: 720,
    height: 1128,
    ratio: 720 / 1128,
    title: "স্বরমালিকা মুহূর্ত",
    subtitle: "Swarmalika Memories",
    genre: "স্মৃতি",
  },
];

export default function GallerySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll bounds
  const checkScrollBounds = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScrollBounds();
    el.addEventListener("scroll", checkScrollBounds, { passive: true });
    window.addEventListener("resize", checkScrollBounds);
    return () => {
      el.removeEventListener("scroll", checkScrollBounds);
      window.removeEventListener("resize", checkScrollBounds);
    };
  }, [checkScrollBounds]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") setActiveModalIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveModalIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1
        );
      }
      if (e.key === "ArrowRight") {
        setActiveModalIndex((prev) =>
          prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0
        );
      }
    },
    [activeModalIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const activePhoto =
    activeModalIndex !== null ? GALLERY_ITEMS[activeModalIndex] : null;

  return (
    <section
      id="gallery"
      className="bg-[#181615] text-[#F6F2EB] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t border-white/5"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-[#713746]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#242120]/80 backdrop-blur-md border border-[#AD9165]/50 text-[10px] sm:text-xs font-sans tracking-[0.22em] uppercase text-[#AD9165] font-semibold mb-3 shadow-md">
              <Sparkles className="w-3 h-3 text-[#AD9165]" />
              <span>ফটো গ্যালারি &bull; GALLERY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F6F2EB] font-normal tracking-tight leading-tight mb-2">
              সঙ্গীতযাত্রার স্থিরচিত্র
            </h2>

            <p className="text-[#EDE6DA]/80 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
              মিলি চক্রবর্তীর লাইভ মঞ্চ পরিবেশনা, অর্কেস্ট্রা শো ও সঙ্গীত শিক্ষার মুহূর্ত। প্রতিটি ছবি তার নিজস্ব সঠিক অনুপাতে (Actual Aspect Ratio) প্রদর্শিত।
            </p>
          </div>

          {/* Interactive Scroll Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-sans text-[#EDE6DA]/60 hidden sm:inline-block">
              Scroll or Click to expand
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous photos"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "bg-[#242120] border-[#AD9165]/50 text-[#F6F2EB] hover:bg-[#713746] shadow-md"
                    : "bg-[#181615] border-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next photos"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "bg-[#242120] border-[#AD9165]/50 text-[#F6F2EB] hover:bg-[#713746] shadow-md"
                    : "bg-[#181615] border-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 
          HORIZONTAL SMOOTH SCROLL TRACK:
          Each image keeps its exact native aspect ratio!
          Height is set consistently (~380px desktop, ~300px mobile), 
          and width dynamically adjusts to aspect ratio without cropping.
        */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {GALLERY_ITEMS.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveModalIndex(idx)}
                className="group relative shrink-0 snap-center rounded-2xl overflow-hidden bg-[#211F1D] border border-white/10 hover:border-[#AD9165]/70 transition-all duration-300 shadow-xl cursor-pointer"
                style={{
                  height: "380px",
                  width: `${Math.round(380 * item.ratio)}px`,
                  minWidth: "220px",
                  maxWidth: "540px",
                }}
              >
                {/* Genuine Uncropped Photograph */}
                <div className="relative w-full h-full bg-[#1c1a19]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 400px"
                    className="object-contain w-full h-full p-1.5 transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Subtle Hover Gradient & Information Pill */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/95 via-[#181615]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-4 pointer-events-none">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans tracking-wider uppercase font-semibold bg-[#242120]/80 backdrop-blur-md border border-[#AD9165]/50 text-[#AD9165]">
                      {item.genre}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#181615]/80 backdrop-blur-md border border-white/20 text-[#EDE6DA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-[#AD9165]" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-sans tracking-widest uppercase text-[#AD9165] font-semibold block mb-0.5">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base text-[#F6F2EB] font-normal leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll helper footnote */}
        <div className="flex items-center justify-between text-xs text-[#EDE6DA]/60 pt-4 border-t border-white/10 mt-4">
          <span className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-[#AD9165]" />
            <span>১০টি নির্বাচিত মুহূর্ত &bull; Swarmalika Repertoire</span>
          </span>
          <span className="font-sans text-[11px] text-[#AD9165]">
            ছবিতে ক্লিক করে বড় আকারে দেখুন
          </span>
        </div>
      </div>

      {/* 
        INTERACTIVE LIGHTBOX MODAL (ON CLICK)
        Displays uncropped image at actual ratio with full caption and controls
      */}
      <AnimatePresence>
        {activeModalIndex !== null && activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setActiveModalIndex(null)}
          >
            {/* Modal Card */}
            <div
              className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalIndex(null)}
                aria-label="Close photo view"
                className="absolute -top-12 right-0 sm:right-2 text-[#EDE6DA] hover:text-[#AD9165] p-2 rounded-full bg-[#242120]/80 border border-white/20 transition-colors shadow-lg z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                type="button"
                onClick={() =>
                  setActiveModalIndex((prev) =>
                    prev !== null && prev > 0
                      ? prev - 1
                      : GALLERY_ITEMS.length - 1
                  )
                }
                aria-label="Previous photo"
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 text-[#EDE6DA] hover:text-[#AD9165] p-2.5 rounded-full bg-[#242120]/80 border border-white/20 transition-colors shadow-lg z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setActiveModalIndex((prev) =>
                    prev !== null && prev < GALLERY_ITEMS.length - 1
                      ? prev + 1
                      : 0
                  )
                }
                aria-label="Next photo"
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 text-[#EDE6DA] hover:text-[#AD9165] p-2.5 rounded-full bg-[#242120]/80 border border-white/20 transition-colors shadow-lg z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Uncropped Image Display */}
              <div
                className="relative max-h-[75vh] w-auto max-w-full rounded-xl overflow-hidden border border-[#AD9165]/50 shadow-2xl bg-[#181615]"
                style={{
                  aspectRatio: `${activePhoto.width} / ${activePhoto.height}`,
                }}
              >
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  width={activePhoto.width}
                  height={activePhoto.height}
                  priority
                  className="w-auto h-[75vh] max-h-[75vh] max-w-full object-contain mx-auto"
                />
              </div>

              {/* Caption Footer */}
              <div className="mt-4 text-center">
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#AD9165] font-semibold block mb-1">
                  {activePhoto.subtitle} &bull; {activePhoto.genre} ({activeModalIndex + 1} / {GALLERY_ITEMS.length})
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#F6F2EB] font-normal">
                  {activePhoto.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
