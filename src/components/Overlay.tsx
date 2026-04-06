"use client";

import Link from "next/link";
import { MotionValue, motion, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const o1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [50, 0, -50]);
    const o2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0, 1, 0]);

    const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [50, 0, -50]);
    const o3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center">
            {/* Section 1 */}
            <motion.div
                style={{ y: y1, opacity: o1 }}
                className="absolute inset-0 flex items-center justify-center px-4"
            >
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">Ritik Kashyap</h1>
                    <p className="text-lg md:text-2xl mt-4 font-light text-gray-300">Full Stack Developer & Designer</p>
                    <p className="text-lg md:text-2xl mt-2 font-light text-gray-300">Developer @ <Link href="https://mithilastack.com" target="_blank" rel="noopener noreferrer" className="text-white font-bold font-light text-stone-500 pointer-events-auto hover:text-blue-400 transition-colors">Mithila Stack</Link></p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ y: y2, opacity: o2 }}
                className="absolute inset-0 flex items-center justify-start px-6 md:pl-20"
            >
                <h2 className="text-4xl md:text-7xl font-extrabold max-w-2xl leading-tight drop-shadow-lg">
                    Building <br /> <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">scalable</span> <br /> full-stack solutions.
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ y: y3, opacity: o3 }}
                className="absolute inset-0 flex items-center justify-end px-6 md:pr-20"
            >
                <h2 className="text-4xl md:text-7xl font-bold max-w-lg text-right leading-tight">
                    Crafting <span className="text-purple-500">exceptional</span> <br /> digital experiences.
                </h2>
            </motion.div>
        </div>
    );
}
