import { Metadata } from 'next';
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap: Full Stack Next.js & AI/ML Developer',
    description: 'Expert Full Stack Developer Ritik Kashyap specializes in Next.js, AI, ML, and scalable web solutions. Build high-performance apps with modern tech.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-nextjs-developer',
    },
    openGraph: {
        title: 'Ritik Kashyap: Full Stack Next.js & AI/ML Developer',
        description: 'Expert Full Stack Developer Ritik Kashyap specializes in Next.js, AI, ML, and scalable web solutions.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-nextjs-developer',
        siteName: 'ritik -prof3',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Kashyap: Full Stack Next.js & AI/ML Developer',
        description: 'Expert Full Stack Developer Ritik Kashyap specializes in Next.js, AI, ML, and scalable web solutions.',
    },
    robots: { index: true, follow: true },
};

export default function RitikKashyapNextjsDeveloperPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Ritik Kashyap",
                        "jobTitle": "Full Stack Developer",
                        "url": "https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-nextjs-developer"
                    })
                }}
            />
            <Navbar />
            <h1>Ritik Kashyap - Next.js Developer</h1>
            <ScrollyCanvas />
            <Projects />
            <section className="p-8">
                <h2>Frequently Asked Questions</h2>
                <p><strong>What technologies do you use?</strong> I specialize in Next.js, React, AI, ML, and Full Stack development.</p>
                <a href="/contact" className="cta-button">Contact Me for Projects</a>
            </section>
        </main>
    );
}