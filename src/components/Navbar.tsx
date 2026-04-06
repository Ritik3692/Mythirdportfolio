"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none"
            >
                {/* Logo / Name */}
                <div className="text-xl font-bold tracking-tighter text-white pointer-events-auto cursor-pointer mix-blend-difference">
                    Ritik.
                </div>

                <div className="flex items-center gap-6 pointer-events-auto">
                    {/* Social Icons */}
                    <div className="hidden md:flex items-center gap-6 text-white/80">
                        <a
                            href="https://github.com/Ritik3692"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/ritik-kashyap-0a7178248/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:ritikkashyap.kr@gmail.com"
                            className="hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <FaEnvelope size={20} />
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white font-medium text-sm transition-colors"
                        >
                            Resume
                        </a>

                        {/* Contact Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </motion.nav>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
