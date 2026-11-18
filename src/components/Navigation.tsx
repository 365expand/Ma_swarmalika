"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#141211]/98 backdrop-blur-md py-2 border-b border-[#AD9165]/30 shadow-2xl"
            : "bg-transparent py-3 sm:py-4.5 border-b border-white/10"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand with Official Logo */}
          <Link
            href="#hero"
            className="group flex items-center gap-3 sm:gap-3.5 focus:outline-hidden drop-shadow-sm"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#AD9165]/60 bg-[#211F1D] shrink-0 p-0.5 group-hover:border-[#AD9165] transition-colors shadow-lg">
              <Image
                src="/image/logo/logo.png"
                alt="Swarmalika Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif text-lg sm:text-xl lg:text-2xl font-normal tracking-[0.18em] uppercase text-[#F6F2EB] group-hover:text-[#AD9165] transition-colors leading-tight">
                  {siteConfig.siteName}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#AD9165]" />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#AD9165] font-sans font-medium leading-tight">
                {siteConfig.artistName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 drop-shadow-sm">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] lg:text-xs tracking-[0.16em] uppercase text-[#EDE6DA] hover:text-[#AD9165] transition-colors duration-200 relative py-1 font-sans group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#AD9165] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-sans tracking-[0.14em] uppercase font-semibold bg-[#713746] text-[#F6F2EB] hover:bg-[#8E495B] transition-all duration-200 shadow-md hover:-translate-y-0.5 border border-[#AD9165]/40"
            >
              <span>Contact Now</span>
              <ArrowUpRight className="w-3 h-3 text-[#AD9165]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-[#F6F2EB] hover:bg-white/10 transition-colors focus:outline-hidden"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#AD9165]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[50px] sm:top-[54px] z-40 md:hidden bg-[#181615] border-b border-white/10 shadow-2xl px-6 py-5"
          >
            <nav className="flex flex-col space-y-3">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="font-serif text-base tracking-wider text-[#F6F2EB] hover:text-[#AD9165] transition-colors py-1 border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="#contact"
                  onClick={handleNavClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.14em] uppercase font-semibold bg-[#713746] text-[#F6F2EB] hover:bg-[#8E495B] transition-colors shadow-lg"
                >
                  <span>Contact Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AD9165]" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
