"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ progress, onComplete }: { progress: number; onComplete: () => void }) {
    const [displayedProgress, setDisplayedProgress] = useState(0);

    // Smoothly increment displayed progress to match actual progress
    useEffect(() => {
        const timer = setInterval(() => {
            setDisplayedProgress((prev) => {
                if (prev < progress) {
                    return Math.min(prev + 1, progress); // Increment by 1 until generic match
                }
                return prev;
            });
        }, 20); // Adjust speed of counter

        return () => clearInterval(timer);
    }, [progress]);

    useEffect(() => {
        if (displayedProgress === 100) {
            setTimeout(onComplete, 500); // Small delay before unmounting
        }
    }, [displayedProgress, onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212] text-white"
        >
            <div className="flex flex-col items-center">
                {/* Elegant Counter */}
                <h1 className="text-9xl md:text-[12rem] font-bold tracking-tighter opacity-80">
                    {displayedProgress}%
                </h1>

                {/* Optional decorative bar or text */}
                <div className="w-64 h-1 bg-white/10 mt-8 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${displayedProgress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
                <p className="mt-4 text-white/40 font-light tracking-widest text-sm uppercase">
                    Loading Experience
                </p>
            </div>
        </motion.div>
    );
}
