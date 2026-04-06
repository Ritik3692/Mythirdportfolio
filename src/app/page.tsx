"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Prevent scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            progress={progress}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <Navbar />
      <ScrollyCanvas
        onProgress={setProgress}
        onLoaded={() => setProgress(100)}
      />
      <Projects />
    </main>
  );
}
