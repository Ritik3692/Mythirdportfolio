import { Metadata } from 'next';
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap Portfolio | Full Stack AI & Web Developer',
    description: 'Explore Ritik Kashyap\'s portfolio. Expert in AI, ML, full stack development, Java, and JavaScript. Building scalable web solutions and modern applications.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-portfolio',
    },
    openGraph: {
        title: 'Ritik Kashyap Portfolio | Full Stack AI & Web Developer',
        description: 'Explore Ritik Kashyap\'s portfolio. Expert in AI, ML, full stack development, Java, and JavaScript. Building scalable web solutions and modern applications.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-portfolio',
        siteName: 'ritik -prof3',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Kashyap Portfolio | Full Stack AI & Web Developer',
        description: 'Explore Ritik Kashyap\'s portfolio. Expert in AI, ML, full stack development, Java, and JavaScript.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RitikKashyapPortfolioPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ritik Kashyap Portfolio",
        "url": "https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-portfolio"
    };

    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Ritik Kashyap Portfolio</h1>
            <ScrollyCanvas />
            <Projects />
        </main>
    );
}