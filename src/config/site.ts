export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  siteName: "Swarmalika",
  artistName: "Mili Chakraborty",
  bengaliName: "স্বরমালিকা",
  bengaliArtistName: "মিলি চক্রবর্তী",
  title: "Swarmalika | Mili Chakraborty - Classical, Rabindra Sangeet, Modern Songs & Live Orchestra",
  description:
    "স্বরমালিকা — মিলি চক্রবর্তী। ক্লাসিকাল, রবীন্দ্র সংগীত, আধুনিক গান (বাংলা ও হিন্দি) শেখানো হয়। অর্কেস্ট্রার সাথে নানান ধরনের লাইভ প্রোগ্রামের জন্য যোগাযোগ করুন।",
  url: "https://swarmalika.in",
  tagline: "ক্লাসিকাল, রবীন্দ্র সংগীত ও আধুনিক গান (বাংলা ও হিন্দি)",
  subTagline:
    "একক ও দলগত সঙ্গীত শিক্ষা এবং অর্কেস্ট্রার সাথে নানান ধরনের লাইভ স্টেজ প্রোগ্রাম।",
  footerTagline: "সুরের সাধনা, সঙ্গীত শিক্ষা ও স্মরণীয় লাইভ পারফরম্যান্স।",

  // Contact details
  // Artist's verified WhatsApp phone number
  whatsappNumber: "919046183330",

  location: {
    address: "CN10, Lalpur, Chakdaha, Nadia, 741222, West Bengal, India",
    city: "Chakdaha",
    state: "West Bengal",
    pincode: "741222",
    country: "India",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=CN10+Lalpur+Chakdaha+Nadia+741222+West+Bengal+India",
  },

  navItems: [
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Learn Music", href: "#learn" },
    { label: "Performances", href: "#performances" },
    { label: "Gallery", href: "#gallery" },
  ] as NavItem[],

  socialLinks: [
    { label: "YouTube", href: "", isAvailable: false },
    { label: "Facebook", href: "", isAvailable: false },
    { label: "Instagram", href: "", isAvailable: false },
  ],
};

/**
 * Builds a direct wa.me link with encoded pre-filled text.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  const phone = siteConfig.whatsappNumber
    ? siteConfig.whatsappNumber.replace(/[^0-9]/g, "")
    : "";
  if (phone) {
    return `https://wa.me/${phone}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}
