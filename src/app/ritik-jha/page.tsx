import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Jha: Full Stack Developer | AI & Software Expert',
    description: 'Explore the portfolio of Ritik Jha, a Full Stack Developer specializing in AI, ML, and scalable web solutions. View projects in Java, JS, and HTML.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-jha',
    },
    openGraph: {
        title: 'Ritik Jha: Full Stack Developer | AI & Software Expert',
        description: 'Explore the portfolio of Ritik Jha, a Full Stack Developer specializing in AI, ML, and scalable web solutions.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-jha',
        siteName: 'ritik -prof3',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Jha: Full Stack Developer | AI & Software Expert',
        description: 'Explore the portfolio of Ritik Jha, a Full Stack Developer specializing in AI, ML, and scalable web solutions.',
    },
    robots: { index: true, follow: true },
}

export default function RitikJhaPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Ritik Jha Portfolio",
                        "url": "https://my-secondportfolio-so5v.vercel.app/ritik-jha"
                    })
                }}
            />
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Ritik Jha - Full Stack Developer</h1>
            <ScrollyCanvas />
            <Projects />
            <section className="p-8">
                <h2 className="text-2xl">Frequently Asked Questions</h2>
                <div className="mt-4">
                    <p><strong>What technologies does Ritik Jha use?</strong> Ritik specializes in Full Stack development, including AI, ML, Java, and JavaScript.</p>
                </div>
            </section>
        </main>
    );
}