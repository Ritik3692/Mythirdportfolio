"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SEO_CONFIG } from "@/lib/seo-config";

const projects = [
    {
        id: 1,
        title: "Prarik",
        link: "https://prarik.vercel.app/",
        category: "Full Stack Travel Booking",
        description: "Travel platform with React, Node.js, and MongoDB. Features real-time listings, user booking flow, and a comprehensive admin dashboard.",
        image: "/project/prarik.png",
        gradient: "from-pink-500 to-violet-500",
    },
    {
        id: 2,
        title: "Nivyasa.ai",
        link: "https://nivyasa.ai",
        category: "Content Automation",
        description: "AI-powered LinkedIn post automation platform. Schedules posts, analyzes engagement, and optimizes content strategy for professionals.",
        image: "/project/nivyasa.png",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        id: 3,
        title: "Lumas Clouds",
        link: "https://lumasclouds.com",
        category: "Enterprise Cloud Solutions",
        description: "Multi-section corporate website for cloud services and staff augmentation. Built with Next.js and Tailwind for maximum SEO and performance.",
        image: "/projects/lumas.png",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        id: 4,
        title: "Turant Logistics",
        link: "https://turantlogistics.com",
        category: "Delivery Platform",
        description: "City-based delivery service platform. Implemented shipment scheduling, order management, and partner registration flows.",
        image: "/project/turant.png",
        gradient: "from-orange-500 to-red-500",
    },
];

export default function Projects() {
    return (
        <section className="relative z-10 min-h-screen bg-[#121212] py-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {projects.map((project, index) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors"
                            >
                                {/* Image Background with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply`} />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                    {/* Hover Indicator */}
                                    <div className="w-full flex justify-end">
                                        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-white opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                            Visit Website <span>↗</span>
                                        </div>
                                    </div>

                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className={`text-sm font-bold tracking-wider uppercase mb-3 block text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                                            {project.category}
                                        </span>
                                        <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md">{project.title}</h3>
                                        <p className="text-white/90 text-lg line-clamp-2 md:line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>

                <footer className="border-t border-white/10 pt-16 flex flex-col items-center text-center">
                    <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
                    <div className="flex gap-8 mb-8 text-white/60">
                        <a href={`mailto:${SEO_CONFIG.personal.email}`} className="hover:text-white transition-colors text-2xl"><FaEnvelope /></a>
                        <a href={SEO_CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-2xl"><FaGithub /></a>
                        <a href={SEO_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-2xl"><FaLinkedin /></a>
                    </div>
                    <p className="text-white/40">© {new Date().getFullYear()} Ritik Kashyap. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
