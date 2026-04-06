import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap - Expert Web Developer & SEO Specialist',
    description: 'Hire Ritik Kashyap, a top-tier Web Developer offering custom website development, performance optimization, and SEO services.',
    alternates: {
        canonical: 'https://ritikk.shop/ritik-kashyap-web-developer',
    },
    openGraph: {
        title: 'Ritik Kashyap - Expert Web Developer',
        description: 'Professional Web Developer Ritik Kashyap.',
        url: 'https://ritikk.shop/ritik-kashyap-web-developer',
    }
}

export default function RitikKashyapWebDeveloperPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <Navbar />
            <h1 className="sr-only">Ritik Kashyap - Web Developer</h1>
            <ScrollyCanvas />
            <Projects />
        </main>
    );
}
