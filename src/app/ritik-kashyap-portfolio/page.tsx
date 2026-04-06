import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap Portfolio - Web Development Projects',
    description: 'View the complete development portfolio of Ritik Kashyap. Featuring full-stack applications, Next.js projects, and open source contributions.',
    alternates: {
        canonical: 'https://ritikk.shop/ritik-kashyap-portfolio',
    },
    openGraph: {
        title: 'Ritik Kashyap Portfolio',
        description: 'Showcase of web development projects by Ritik Kashyap.',
        url: 'https://ritikk.shop/ritik-kashyap-portfolio',
    }
}

export default function RitikKashyapPortfolioPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <Navbar />
            <h1 className="sr-only">Ritik Kashyap Portfolio</h1>
            <ScrollyCanvas />
            <Projects />
        </main>
    );
}
