import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap: Full Stack Web Developer & AI Specialist',
    description: 'Hire Ritik Kashyap, a professional full stack developer specializing in AI, ML, frontend, and backend solutions. Expert in HTML, CSS, and JavaScript.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-web-developer',
    },
    openGraph: {
        title: 'Ritik Kashyap: Full Stack Web Developer & AI Specialist',
        description: 'Hire Ritik Kashyap, a professional full stack developer specializing in AI, ML, frontend, and backend solutions. Expert in HTML, CSS, and JavaScript.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-web-developer',
        siteName: 'ritik -prof3',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Kashyap: Full Stack Web Developer & AI Specialist',
        description: 'Hire Ritik Kashyap, a professional full stack developer specializing in AI, ML, frontend, and backend solutions.'
    },
    robots: {
        index: true,
        follow: true
    }
}

export default function RitikKashyapWebDeveloperPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Ritik Kashyap Portfolio",
                        "url": "https://my-secondportfolio-so5v.vercel.app/"
                    })
                }}
            />
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Ritik Kashyap - Full Stack Web Developer</h1>
            <ScrollyCanvas />
            <Projects />
        </main>
    );
}