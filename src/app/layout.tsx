import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SEO_CONFIG } from "@/lib/seo-config";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.site.url),
  title: {
    default: "Ritik Kashyap | Full Stack Developer, AI & ML Expert",
    template: `%s | ${SEO_CONFIG.personal.name}`,
  },
  description: "Expert Full Stack Developer specializing in AI, ML, and modern web technologies. Building scalable software solutions with React, Next.js, and Java. Explore my portfolio.",
  keywords: ["software", "ai", "ml", "full stack", "frontend", "backend", "HTML", "CSS", "JAVA", "javascript"],
  authors: [{ name: SEO_CONFIG.personal.name, url: SEO_CONFIG.site.url }],
  creator: SEO_CONFIG.personal.name,
  publisher: SEO_CONFIG.personal.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SEO_CONFIG.site.url,
    siteName: "Ritik Kashyap Portfolio",
    title: "Ritik Kashyap | Full Stack Developer, AI & ML Expert",
    description: "Expert Full Stack Developer specializing in AI, ML, and modern web technologies. Building scalable software solutions with React, Next.js, and Java.",
    images: [
      {
        url: SEO_CONFIG.personal.avatar,
        width: 1200,
        height: 630,
        alt: "Ritik Kashyap Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Kashyap | Full Stack Developer, AI & ML Expert",
    description: "Expert Full Stack Developer specializing in AI, ML, and modern web technologies. Building scalable software solutions with React, Next.js, and Java.",
    creator: SEO_CONFIG.social.twitter,
    images: [SEO_CONFIG.personal.avatar],
  },
  alternates: {
    canonical: "https://my-secondportfolio-so5v.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://my-secondportfolio-so5v.vercel.app/#person",
        "name": "Ritik Kashyap",
        "url": "https://my-secondportfolio-so5v.vercel.app",
        "jobTitle": "Full Stack Developer",
        "knowsAbout": ["AI", "ML", "Full Stack", "Java", "JavaScript"]
      },
      {
        "@type": "WebSite",
        "@id": "https://my-secondportfolio-so5v.vercel.app/#website",
        "url": "https://my-secondportfolio-so5v.vercel.app",
        "name": "Ritik Kashyap Portfolio"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#121212] text-white antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}