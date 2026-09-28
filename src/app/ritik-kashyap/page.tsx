import { Metadata } from 'next';
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap | Full Stack Developer, AI & ML Expert',
    description: 'Portfolio of Ritik Kashyap, a Full Stack Developer specializing in AI, ML, Java, and modern web technologies. Explore innovative software solutions.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap',
    },
    openGraph: {
        title: 'Ritik Kashyap | Full Stack Developer, AI & ML Expert',
        description: 'Portfolio of Ritik Kashyap, a Full Stack Developer specializing in AI, ML, Java, and modern web technologies. Explore innovative software solutions.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap',
        siteName: 'ritik -prof3',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Kashyap | Full Stack Developer, AI & ML Expert',
        description: 'Portfolio of Ritik Kashyap, a Full Stack Developer specializing in AI, ML, Java, and modern web technologies.',
    },
    robots: { index: true, follow: true },
};

export default function RitikKashyapPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Ritik Kashyap Portfolio",
                        "url": "https://my-secondportfolio-so5v.vercel.app/ritik-kashyap",
                        "author": {
                            "@type": "Person",
                            "name": "Ritik Kashyap",
                            "jobTitle": "Full Stack Developer"
                        }
                    })
                }}
            />
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Ritik Kashyap - Full Stack Developer</h1>
            <ScrollyCanvas />
            <section id="projects">
                <h2 className="sr-only">Projects and Software Solutions</h2>
                <Projects />
            </section>
        </main>
    );
}