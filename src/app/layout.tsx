import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoBengali = Noto_Serif_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#181615",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.artistName, url: siteConfig.url }],
  creator: siteConfig.artistName,
  publisher: siteConfig.siteName,
  manifest: "/site.webmanifest",
  keywords: [
    "মিলি চক্রবর্তী",
    "Mili Chakraborty",
    "স্বরমালিকা",
    "Swarmalika",
    "রবীন্দ্র সংগীত",
    "Rabindra Sangeet",
    "শাস্ত্রীয় সঙ্গীত",
    "Indian Classical Music",
    "আধুনিক গান",
    "Modern Bengali Songs",
    "হিন্দি গান",
    "Hindi Songs",
    "লাইভ অর্কেস্ট্রা",
    "Orchestra Singer",
    "সঙ্গীত শিক্ষা চাকদহ",
    "Music Teacher Chakdaha",
    "Music Classes Nadia",
    "Individual Music Classes",
    "Group Music Classes",
    "Cultural Programme Artist",
    "Kolkata Stage Singer",
    "Bengali Singer West Bengal",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    locale: "bn_IN",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/img/hero.jpg",
        width: 2752,
        height: 1536,
        alt: "Swarmalika - Mili Chakraborty Bengali Singer & Music Teacher",
        type: "image/jpeg",
      },
      {
        url: "/img/about.jpg",
        width: 2752,
        height: 1536,
        alt: "Mili Chakraborty Vocal Sadhana",
        type: "image/jpeg",
      },
      {
        url: "/img/liveperformance.jpg",
        width: 2752,
        height: 1536,
        alt: "Mili Chakraborty Stage & Live Orchestra Performance",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/img/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// Comprehensive JSON-LD Structured Data Schema for Rich Google Search Snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#artist`,
      name: siteConfig.artistName,
      alternateName: siteConfig.bengaliArtistName,
      jobTitle: "Classical & Bengali Vocalist, Music Mentor",
      description: siteConfig.description,
      image: `${siteConfig.url}/img/hero.jpg`,
      url: siteConfig.url,
      sameAs: [siteConfig.url],
      knowsAbout: [
        "Rabindra Sangeet",
        "Indian Classical Music",
        "Modern Bengali Songs",
        "Hindi Retro & Contemporary Melodies",
        "Live Orchestra Singing",
        "Vocal Pedagogy",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "CN10, Lalpur",
        addressLocality: "Chakdaha",
        addressRegion: "West Bengal",
        postalCode: "741222",
        addressCountry: "IN",
      },
    },
    {
      "@type": "MusicGroup",
      "@id": `${siteConfig.url}/#musicgroup`,
      name: siteConfig.siteName,
      alternateName: siteConfig.bengaliName,
      genre: [
        "Rabindra Sangeet",
        "Indian Classical",
        "Modern Bengali",
        "Hindi Melodies",
        "Live Orchestra",
      ],
      url: siteConfig.url,
      description:
        "Professional stage performances and cultural musical programmes by Mili Chakraborty with full live orchestra accompaniment.",
      member: {
        "@type": "Person",
        name: siteConfig.artistName,
      },
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${siteConfig.url}/#academy`,
      name: `${siteConfig.siteName} Music Classes`,
      alternateName: "স্বরমালিকা সঙ্গীত শিক্ষা",
      url: siteConfig.url,
      description:
        "Structured individual and group vocal coaching in Classical Music, Rabindra Sangeet, and Modern Bengali & Hindi songs by Mili Chakraborty.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "CN10, Lalpur",
        addressLocality: "Chakdaha",
        addressRegion: "West Bengal",
        postalCode: "741222",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.0805,
        longitude: 88.5204,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Music Classes & Performance Enquiries",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Individual Music Classes (একক সঙ্গীত শিক্ষা)",
              description: "Personalized voice training, classical riyaaz, and repertoire coaching.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Group Music Classes (দলগত সঙ্গীত শিক্ষা)",
              description: "Collaborative vocal harmony, rhythm training, and group singing classes.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Live Orchestra & Stage Performance",
              description: "Live vocal recitals with full orchestra accompaniment for cultural festivals and events.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.siteName,
      description: siteConfig.description,
      inLanguage: ["bn-IN", "en-US"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`${cormorant.variable} ${manrope.variable} ${notoBengali.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#181615] text-[#F6F2EB] font-sans antialiased selection:bg-[#713746] selection:text-[#F6F2EB]">
        {children}
      </body>
    </html>
  );
}
