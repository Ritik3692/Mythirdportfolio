"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

const FRAME_COUNT = 91;

interface ScrollyCanvasProps {
    onProgress?: (progress: number) => void;
    onLoaded?: () => void;
}

export default function ScrollyCanvas({ onProgress, onLoaded }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"],
    });

    // Map scroll (0 to 1) to frame index (0 to 90)
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const src = `/sequence/frame_${i.toString().padStart(2, "0")}.webp`;
            img.src = src;
            img.onload = () => {
                loadedCount++;
                const currentProgress = Math.round((loadedCount / FRAME_COUNT) * 100);
                if (onProgress) onProgress(currentProgress);

                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                    if (onLoaded) onLoaded();
                }
            };
            loadedImages.push(img);
        }
    }, [onProgress, onLoaded]);

    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Handle high pixel density (Retina displays)
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        // Scale context to match pixel density
        ctx.scale(dpr, dpr);

        // Provide style width/height
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        // Object-fit: cover logic
        const cw = window.innerWidth;
        const ch = window.innerHeight;
        const iw = img.width;
        const ih = img.height;

        const scale = Math.max(cw / iw, ch / ih);
        const x = (cw - iw * scale) / 2;
        const y = (ch - ih * scale) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (isLoaded) {
            const frameIndex = Math.round(latest);
            render(frameIndex);
        }
    });

    // Initial Render when loaded
    useEffect(() => {
        if (isLoaded) {
            render(0);
        }
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) {
                const current = currentIndex.get();
                render(Math.round(current));
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]);

    return (
        <div className="h-[500vh] w-full relative bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                <Overlay scrollYProgress={scrollYProgress} />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 animate-pulse">
                        Loading Experience...
                    </div>
                )}
            </div>
        </div>
    );
}
