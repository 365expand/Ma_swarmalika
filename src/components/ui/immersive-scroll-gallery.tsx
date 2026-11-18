"use client";

import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Types
export interface iIPicture {
  src: string;
  scale?: MotionValue<number> | null;
  alt?: string;
}

export interface iImmersiveScrollGalleryProps {
  images?: iIPicture[];
  className?: string;
  heading?: string;
  quote?: string;
}

// Verified gallery photographs from /public/img/
const DEFAULT_IMAGES: iIPicture[] = [
  { src: "/img/1.jpeg", scale: null, alt: "Mili Chakraborty portrait" },
  { src: "/img/2.jpeg", scale: null, alt: "Mili Chakraborty Rabindra Sangeet recital" },
  { src: "/img/3.jpeg", scale: null, alt: "Mili Chakraborty stage performance" },
  { src: "/img/4.jpeg", scale: null, alt: "Mili Chakraborty concert elegance" },
  { src: "/img/5.jpeg", scale: null, alt: "Mili Chakraborty cultural celebration" },
  { src: "/img/6.jpeg", scale: null, alt: "Mili Chakraborty modern Bengali song recital" },
  { src: "/img/7.jpeg", scale: null, alt: "Mili Chakraborty vocal artistry" },
];

// Responsive, non-overflowing placements with controlled viewport bounds
const IMAGE_STYLES = [
  "w-[24vw] sm:w-[20vw] h-[22vh] sm:h-[26vh]",
  "w-[28vw] sm:w-[24vw] h-[22vh] sm:h-[26vh] -top-[25vh] sm:-top-[26vh] left-[4vw]",
  "w-[20vw] sm:w-[17vw] h-[34vh] sm:h-[38vh] -top-[12vh] -left-[24vw] sm:-left-[26vw]",
  "w-[22vw] sm:w-[19vw] h-[22vh] sm:h-[26vh] left-[26vw] sm:left-[27vw]",
  "w-[20vw] sm:w-[17vw] h-[22vh] sm:h-[26vh] top-[24vh] sm:top-[26vh] left-[4vw]",
  "w-[26vw] sm:w-[22vw] h-[20vh] sm:h-[24vh] top-[22vh] sm:top-[24vh] -left-[22vw] sm:-left-[24vw]",
  "w-[18vw] sm:w-[15vw] h-[16vh] sm:h-[18vh] top-[18vh] sm:top-[20vh] left-[22vw] sm:left-[24vw]",
];

/**
 * ImmersiveScrollGallery Component
 *
 * Optimized scroll-based image zoom effect that runs smoothly at 60fps
 * without freezing or thrashing Chrome's compositor texture memory.
 */
const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
  images = DEFAULT_IMAGES,
  className = "",
  heading = "A Musical Tapestry in Motion",
  quote = "সঙ্গীত শুধু একটি পরিবেশনা নয়, সুর ও আবেগের গভীর সংযোগ — স্বরলিপির প্রতিটি তানে প্রাণের প্রকাশ।",
}) => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Controlled, GPU-friendly scale transforms (capped to prevent texture thrashing)
  const scaleCenter = useTransform(scrollYProgress, [0, 1], [1, 2.1]);
  const scaleTop = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const scaleLeft = useTransform(scrollYProgress, [0, 1], [1, 1.9]);
  const scaleRight = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const scaleBottom = useTransform(scrollYProgress, [0, 1], [1, 2.0]);
  const scaleBottomLeft = useTransform(scrollYProgress, [0, 1], [1, 1.75]);
  const scaleBottomRight = useTransform(scrollYProgress, [0, 1], [1, 1.85]);

  const opacityImage = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const opacitySection2 = useTransform(scrollYProgress, [0.5, 0.82], [0, 1]);
  const scaleContent = useTransform(scrollYProgress, [0.5, 0.82], [0.92, 1]);

  const pictureScales = [
    scaleCenter,
    scaleTop,
    scaleLeft,
    scaleRight,
    scaleBottom,
    scaleBottomLeft,
    scaleBottomRight,
  ];

  const pictures = images.slice(0, 7).map((img, index) => {
    return {
      ...img,
      scale: pictureScales[index % 7],
    };
  });

  return (
    <div ref={container} className={`relative h-[180vh] sm:h-[200vh] bg-[#181615] ${className}`}>
      <div className="sticky top-0 h-[100vh] overflow-hidden flex items-center justify-center">
        {/* Subtle background ambient overlay */}
        <div className="absolute inset-0 bg-radial from-[#713746]/20 via-transparent to-transparent pointer-events-none" />

        {/* Zooming Images with GPU hardware acceleration */}
        {pictures.map(({ src, scale, alt }, index) => {
          return (
            <motion.div
              key={index}
              style={{
                scale,
                opacity: opacityImage,
                willChange: "transform, opacity",
              }}
              className="absolute flex items-center justify-center w-full h-full top-0 pointer-events-none transform-gpu"
            >
              <div
                className={`relative overflow-hidden rounded-xl shadow-2xl border border-[#AD9165]/35 bg-[#211F1D] ${IMAGE_STYLES[index]}`}
              >
                <Image
                  src={src}
                  alt={alt || `Mili Chakraborty gallery photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 30vw, 25vw"
                  className="object-cover w-full h-full filter brightness-95 contrast-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          );
        })}

        {/* Content Section Revealed on Scroll */}
        <motion.div
          style={{
            opacity: opacitySection2,
            scale: scaleContent,
          }}
          className="w-full h-full flex flex-col items-center justify-center max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10 pointer-events-auto"
        >
          <span className="text-[#AD9165] font-serif uppercase tracking-[0.25em] text-xs sm:text-sm mb-4">
            {heading}
          </span>
          <h2 className="text-[#F6F2EB] font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed tracking-tight max-w-2xl">
            &ldquo;{quote}&rdquo;
          </h2>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#AD9165]" />
            <span className="text-[#EDE6DA]/70 font-sans text-xs tracking-widest uppercase">
              Mili Chakraborty &bull; Swarmalika
            </span>
            <span className="h-[1px] w-8 bg-[#AD9165]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveScrollGallery;
