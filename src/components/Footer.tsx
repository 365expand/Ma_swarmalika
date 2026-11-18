"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import { ArrowUp, MessageSquare, MapPin } from "lucide-react";

const emptySubscribe = () => () => {};
const getYearSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => 2026;

export default function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    getYearSnapshot,
    getServerSnapshot
  );

  const directWhatsappUrl = buildWhatsAppLink(
    "Hello Mili Chakraborty, I am reaching out from swarmalika.in."
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#181615] text-[#F6F2EB] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand with Official Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="#hero" className="inline-block group focus:outline-hidden">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#AD9165]/50 bg-[#211F1D] shrink-0 p-1 group-hover:border-[#AD9165] transition-colors shadow-lg">
                    <Image
                      src="/image/logo/logo.png"
                      alt="Swarmalika Logo"
                      fill
                      sizes="48px"
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.16em] uppercase text-[#F6F2EB] group-hover:text-[#AD9165] transition-colors block leading-tight">
                      {siteConfig.siteName}
                    </span>
                    <span className="block text-xs font-serif text-[#AD9165] mt-0.5">
                      {siteConfig.artistName} &bull; {siteConfig.bengaliArtistName}
                    </span>
                  </div>
                </div>

                <span className="block text-[10px] tracking-[0.25em] uppercase text-[#EDE6DA]/60 font-sans mt-2">
                  Rabindra Sangeet &bull; Modern Songs &bull; Vocal Mentor
                </span>
              </Link>

              <p className="font-serif italic text-base sm:text-lg text-[#EDE6DA]/75 max-w-sm mt-4 leading-relaxed border-l-2 border-[#AD9165] pl-3">
                &ldquo;{siteConfig.footerTagline}&rdquo;
              </p>
            </div>

            <div className="mt-6 flex items-start gap-2.5 text-xs text-[#EDE6DA]/70">
              <MapPin className="w-4 h-4 text-[#AD9165] shrink-0 mt-0.5" />
              <span>{siteConfig.location.address}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4">
            <span className="text-xs font-sans tracking-widest uppercase text-[#AD9165] font-semibold block mb-4">
              NAVIGATION &bull; মূল পাতা
            </span>
            <ul className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-sans tracking-wider uppercase text-[#EDE6DA]/80">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#AD9165] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Enquiries */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-widest uppercase text-[#AD9165] font-semibold block mb-4">
                QUICK CONNECT &bull; যোগাযোগ
              </span>
              <p className="text-xs text-[#EDE6DA]/70 leading-relaxed mb-4">
                সঙ্গীত শিক্ষা, লাইভ অনুষ্ঠান ও অর্কেস্ট্রা বুকিংয়ের জন্য যোগাযোগ করুন।
              </p>
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase font-semibold bg-[#713746] text-[#F6F2EB] hover:bg-[#8E495B] transition-colors shadow-md hover:-translate-y-0.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#AD9165]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-[#EDE6DA]/60 hover:text-[#AD9165] transition-colors focus:outline-hidden"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Copyright & Build Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDE6DA]/65 font-sans gap-4">
          <p>
            &copy; {currentYear} {siteConfig.siteName} &bull; {siteConfig.artistName}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-[#EDE6DA]/80">
            <span>Build by</span>
            <a
              href="https://365expand.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AD9165] hover:text-[#F6F2EB] transition-colors font-medium underline underline-offset-4"
            >
              365 Expand
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
