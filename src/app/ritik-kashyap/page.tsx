import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap - Senior Full Stack Developer & Software Engineer',
    description: 'Official portfolio of Ritik Kashyap. Expert in Next.js, React, and Scalable Web Architecture. View projects and case studies.',
    alternates: {
        canonical: 'https://ritikk.shop/ritik-kashyap',
    },
    openGraph: {
        title: 'Ritik Kashyap - Senior Full Stack Developer',
        description: 'Explore the portfolio of Ritik Kashyap, a top-rated Full Stack Developer.',
        url: 'https://ritikk.shop/ritik-kashyap',
    }
}

export default function RitikKashyapPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <Navbar />
            <h1 className="sr-only">Ritik Kashyap - Full Stack Developer</h1>
            <ScrollyCanvas />
            <Projects />
        </main>
    );
}
