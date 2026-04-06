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
    default: SEO_CONFIG.site.title,
    template: `%s | ${SEO_CONFIG.personal.name}`,
  },
  description: SEO_CONFIG.site.description,
  keywords: SEO_CONFIG.site.keywords,
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
    type: "profile",
    firstName: SEO_CONFIG.personal.firstName,
    lastName: SEO_CONFIG.personal.lastName,
    username: SEO_CONFIG.social.twitter.replace("@", ""),
    gender: "male",
    url: SEO_CONFIG.site.url,
    siteName: SEO_CONFIG.site.name,
    title: SEO_CONFIG.site.title,
    description: SEO_CONFIG.site.description,
    images: [
      {
        url: SEO_CONFIG.personal.avatar, // Ensure this image is high quality
        width: 1200,
        height: 630,
        alt: `${SEO_CONFIG.personal.name} - ${SEO_CONFIG.personal.title}`,
      },
    ],
    locale: SEO_CONFIG.site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.site.title,
    description: SEO_CONFIG.site.description,
    creator: SEO_CONFIG.social.twitter,
    images: [SEO_CONFIG.personal.avatar],
  },
  alternates: {
    canonical: SEO_CONFIG.site.url,
  },
  icons: {
    icon: SEO_CONFIG.personal.avatar,
    shortcut: SEO_CONFIG.personal.avatar,
    apple: SEO_CONFIG.personal.avatar,
  },
  other: {
    "profile:username": SEO_CONFIG.social.twitter.replace("@", ""), // Open Graph Profile
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SEO_CONFIG.site.url}/#person`,
        "name": SEO_CONFIG.personal.name,
        "alternateName": ["Ritik Jha", "Ritik Kashyap Developer"],
        "url": SEO_CONFIG.site.url,
        "image": `${SEO_CONFIG.site.url}${SEO_CONFIG.personal.avatar}`,
        "sameAs": [
          SEO_CONFIG.social.github,
          SEO_CONFIG.social.linkedin,
          SEO_CONFIG.social.twitter,
          SEO_CONFIG.social.instagram,
          "https://mithilastack.com",
        ].filter(Boolean),
        "jobTitle": SEO_CONFIG.personal.title,
        "worksFor": {
          "@type": "Organization",
          "name": "Mithila Stack", // Updated to match overlay info
          "url": "https://mithilastack.com"
        },
        "knowsAbout": ["Next.js", "React", "TypeScript", "SEO", "Web Development", "System Design", "UI/UX Design"],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${SEO_CONFIG.site.url}/#website`,
        "url": SEO_CONFIG.site.url,
        "name": SEO_CONFIG.site.name,
        "description": SEO_CONFIG.site.description,
        "publisher": {
          "@id": `${SEO_CONFIG.site.url}/#person`
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SEO_CONFIG.site.url}/?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
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

