import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap - Next.js Developer & React Specialist',
    description: 'Specialized Next.js Developer Ritik Kashyap. Expert in App Router, Server Actions, React Server Components, and Edge Runtime.',
    alternates: {
        canonical: 'https://ritikk.shop/ritik-kashyap-nextjs-developer',
    },
    openGraph: {
        title: 'Ritik Kashyap - Next.js Developer',
        description: 'Next.js Expert Developer Ritik Kashyap.',
        url: 'https://ritikk.shop/ritik-kashyap-nextjs-developer',
    }
}

export default function RitikKashyapNextjsDeveloperPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <Navbar />
            <h1 className="sr-only">Ritik Kashyap - Next.js Developer</h1>
            <ScrollyCanvas />
            <Projects />
        </main>
    );
}
