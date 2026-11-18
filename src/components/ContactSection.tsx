"use client";

import { useState } from "react";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import {
  MapPin,
  MessageCircle,
  Send,
  ExternalLink,
  CheckCircle,
  Sparkles,
  Phone,
} from "lucide-react";

type EnquiryType =
  | "Individual Music Classes"
  | "Group Music Classes"
  | "Live Performance & Orchestra"
  | "Cultural Programme"
  | "Other";

type MusicalFocus =
  | "Classical (শাস্ত্রীয়)"
  | "Rabindra Sangeet (রবীন্দ্র সংগীত)"
  | "Modern Bengali & Hindi (আধুনিক গান)"
  | "All Streams (সবকটি)";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] =
    useState<EnquiryType>("Individual Music Classes");
  const [classFocus, setClassFocus] =
    useState<MusicalFocus>("All Streams (সবকটি)");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const isClassEnquiry =
    enquiryType === "Individual Music Classes" ||
    enquiryType === "Group Music Classes";

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) {
      errs.name = "অনুগ্রহ করে আপনার নাম লিখুন (Please enter your name)";
    }
    if (!phone.trim()) {
      errs.phone =
        "অনুগ্রহ করে ফোন বা হোয়াটসঅ্যাপ নম্বর লিখুন (Enter phone number)";
    } else if (phone.trim().length < 8) {
      errs.phone = "সঠিক ফোন নম্বর লিখুন (At least 8 digits)";
    }
    if (!message.trim()) {
      errs.message = "অনুগ্রহ করে সংক্ষিপ্ত বার্তা লিখুন (Write your message)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let formattedMessage = `Hello Mili Chakraborty,\n\nI would like to make an enquiry regarding ${siteConfig.siteName}.\n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nEnquiry Type: ${enquiryType}`;

    if (isClassEnquiry) {
      formattedMessage += `\nPreferred Musical Stream: ${classFocus}`;
    }

    formattedMessage += `\nMessage: ${message.trim()}\n\nPlease contact me regarding this enquiry.\n\nSent via swarmalika.in`;

    const whatsappUrl = buildWhatsAppLink(formattedMessage);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#181615] text-[#F6F2EB] relative overflow-hidden border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-radial from-[#713746]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#242120]/80 backdrop-blur-md border border-[#AD9165]/50 text-[10px] sm:text-xs font-sans tracking-[0.22em] uppercase text-[#AD9165] font-semibold mb-3 shadow-md">
            <Sparkles className="w-3 h-3 text-[#AD9165]" />
            <span>যোগাযোগ &bull; GET IN TOUCH</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F6F2EB] font-normal tracking-tight leading-tight mb-3">
            সুরের মেলবন্ধনে যুক্ত হোন
          </h2>

          <p className="text-[#EDE6DA]/80 font-sans text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            সঙ্গীত শিক্ষা, অর্কেস্ট্রা শো বা সাংস্কৃতিক অনুষ্ঠানের জন্য সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Details & Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#211F1D] border border-white/10 shadow-2xl">
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#AD9165] font-semibold block mb-2">
                LOCATION &amp; STUDIO
              </span>
              <h3 className="font-serif text-2xl text-[#F6F2EB] font-normal mb-3">
                Chakdaha, West Bengal
              </h3>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#EDE6DA]/85 leading-relaxed mb-6">
                <MapPin className="w-4 h-4 text-[#AD9165] shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}</span>
              </div>

              <a
                href={siteConfig.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-wider uppercase font-semibold text-[#AD9165] hover:text-[#EDE6DA] transition-colors"
              >
                <span>Google Maps-এ দেখুন</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#AD9165]" />
              </a>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#713746]/40 via-[#211F1D] to-[#211F1D] border border-[#AD9165]/40 shadow-2xl">
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#AD9165] font-semibold block mb-2">
                DIRECT WHATSAPP &bull; সরাসরি বার্তা
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EB] font-normal mb-2">
                সরাসরি বার্তা পাঠান
              </h3>
              <p className="text-xs text-[#EDE6DA]/75 leading-relaxed mb-5">
                ফর্মটি পূরণ করলে সরাসরি হোয়াটসঅ্যাপে প্রি-ফিল্ড মেসেজ তৈরি হয়ে যাবে, যা আপনি এক ক্লিকেই পাঠাতে পারবেন।
              </p>

              <div className="flex items-center gap-2 text-xs text-[#EDE6DA]/90 pt-3 border-t border-white/10">
                <Phone className="w-3.5 h-3.5 text-[#AD9165]" />
                <span>পশ্চিমবঙ্গ ও দেশজুড়ে সমস্ত অনুষ্ঠানের বুকিং নেওয়া হয়।</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#242120] border border-white/15 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#713746]/40 text-[#AD9165] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F6F2EB] font-normal">
                    অনুসন্ধান ও বার্তা (Send Enquiry)
                  </h3>
                  <p className="text-xs text-[#EDE6DA]/60 font-sans">
                    হোয়াটসঅ্যাপে তাৎক্ষণিক বার্তা পাঠাতে নিচের ফর্মটি পূরণ করুন
                  </p>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#713746]/30 border border-[#AD9165]/50 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#AD9165] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#F6F2EB]">
                    <p className="font-medium text-[#AD9165]">
                      হোয়াটসঅ্যাপ লিঙ্ক তৈরি হয়েছে!
                    </p>
                    <p className="text-xs text-[#EDE6DA]/80 mt-1">
                      যদি হোয়াটসঅ্যাপ স্বয়ংক্রিয়ভাবে ওপেন না হয়, তবে নিচের বাটনে পুনরায় ক্লিক করে বার্তাটি পাঠিয়ে দিন।
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-sans tracking-wider uppercase text-[#EDE6DA] font-medium mb-1.5"
                  >
                    আপনার নাম (Full Name) <span className="text-[#AD9165]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="যেমন: অনির্বাণ সেনগুপ্ত"
                    className={`w-full px-4 py-3 rounded-xl bg-[#181615] border ${
                      errors.name ? "border-red-500" : "border-white/20"
                    } text-[#F6F2EB] placeholder-[#8C8680] text-sm focus:border-[#AD9165] focus:outline-hidden focus:ring-1 focus:ring-[#AD9165] transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-sans tracking-wider uppercase text-[#EDE6DA] font-medium mb-1.5"
                  >
                    ফোন বা হোয়াটসঅ্যাপ নম্বর (Phone / WhatsApp) <span className="text-[#AD9165]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="যেমন: +91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-[#181615] border ${
                      errors.phone ? "border-red-500" : "border-white/20"
                    } text-[#F6F2EB] placeholder-[#8C8680] text-sm focus:border-[#AD9165] focus:outline-hidden focus:ring-1 focus:ring-[#AD9165] transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Enquiry Type */}
                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-xs font-sans tracking-wider uppercase text-[#EDE6DA] font-medium mb-1.5"
                  >
                    অনুসন্ধানের ধরন (Enquiry Type) <span className="text-[#AD9165]">*</span>
                  </label>
                  <select
                    id="enquiryType"
                    value={enquiryType}
                    onChange={(e) =>
                      setEnquiryType(e.target.value as EnquiryType)
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#181615] border border-white/20 text-[#F6F2EB] text-sm focus:border-[#AD9165] focus:outline-hidden focus:ring-1 focus:ring-[#AD9165] transition-colors"
                  >
                    <option value="Individual Music Classes" className="bg-[#181615] text-[#F6F2EB]">
                      Individual Music Classes (একক সঙ্গীত শিক্ষা)
                    </option>
                    <option value="Group Music Classes" className="bg-[#181615] text-[#F6F2EB]">
                      Group Music Classes (দলগত সঙ্গীত শিক্ষা)
                    </option>
                    <option value="Live Performance & Orchestra" className="bg-[#181615] text-[#F6F2EB]">
                      Live Performance &amp; Orchestra (অর্কেস্ট্রা ও স্টেজ শো)
                    </option>
                    <option value="Cultural Programme" className="bg-[#181615] text-[#F6F2EB]">
                      Cultural Programme (সাংস্কৃতিক উৎসব ও মঞ্চ)
                    </option>
                    <option value="Other" className="bg-[#181615] text-[#F6F2EB]">
                      Other Enquiry (অন্যান্য)
                    </option>
                  </select>
                </div>

                {/* Optional Musical Stream Selector */}
                {isClassEnquiry && (
                  <div className="p-4 rounded-xl bg-[#181615] border border-white/10">
                    <label className="block text-xs font-sans tracking-wider uppercase text-[#AD9165] font-semibold mb-2.5">
                      সঙ্গীতের পছন্দের ধারা (Preferred Musical Stream)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(
                        [
                          "Classical (শাস্ত্রীয়)",
                          "Rabindra Sangeet (রবীন্দ্র সংগীত)",
                          "Modern Bengali & Hindi (আধুনিক গান)",
                          "All Streams (সবকটি)",
                        ] as const
                      ).map((focus) => (
                        <button
                          key={focus}
                          type="button"
                          onClick={() => setClassFocus(focus)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-sans text-center transition-all ${
                            classFocus === focus
                              ? "bg-[#713746] text-[#F6F2EB] font-medium border border-[#AD9165]/70 shadow-md"
                              : "bg-[#211F1D] text-[#EDE6DA]/75 border border-white/10 hover:border-white/25 hover:text-[#F6F2EB]"
                          }`}
                        >
                          {focus}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message Box */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-sans tracking-wider uppercase text-[#EDE6DA] font-medium mb-1.5"
                  >
                    বার্তা বা বিবরণ (Message / Details) <span className="text-[#AD9165]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="আপনার অনুষ্ঠান বা ক্লাসের সময়সূচি সম্পর্কে লিখুন..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#181615] border ${
                      errors.message ? "border-red-500" : "border-white/20"
                    } text-[#F6F2EB] placeholder-[#8C8680] text-sm focus:border-[#AD9165] focus:outline-hidden focus:ring-1 focus:ring-[#AD9165] transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold bg-gradient-to-r from-[#713746] to-[#8E495B] hover:from-[#8E495B] hover:to-[#A35569] text-[#F6F2EB] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 border border-[#AD9165]/50 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#AD9165]" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#EDE6DA]/60 font-sans">
                  কোনো পাসওয়ার্ড বা লগইনের প্রয়োজন নেই। সরাসরি হোয়াটসঅ্যাপে বার্তা চলে যাবে।
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
