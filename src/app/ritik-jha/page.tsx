import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Jha - Full Stack Developer Profile',
    description: 'Ritik Jha (also known as Ritik Kashyap) is a proficient Full Stack Developer. Discover his work in Web Development and Software Engineering.',
    alternates: {
        canonical: 'https://ritikk.shop/ritik-jha',
    },
    openGraph: {
        title: 'Ritik Jha - Developer Profile',
        description: 'Portfolio and projects of Ritik Jha (Ritik Kashyap).',
        url: 'https://ritikk.shop/ritik-jha',
    }
}

export default function RitikJhaPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <Navbar />
            <h1 className="sr-only">Ritik Jha - Full Stack Developer</h1>
            <ScrollyCanvas />
            <Projects />
        </main>
    );
}
