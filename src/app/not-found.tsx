"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/50 via-[#121212] to-[#121212]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center z-10"
            >
                <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4 animate-pulse">
                    404
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h2>
                <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-md mx-auto leading-relaxed">
                    The page you are looking for has drifted into the digital void.
                </p>

                <Link
                    href="/"
                    className="inline-block px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                >
                    Return Home
                </Link>
            </motion.div>
        </div>
    );
}
