"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if it's the first visit in this session
    const hasVisited = sessionStorage.getItem("hasVisitedPradaBC");
    
    if (hasVisited) {
      setShowSplash(false);
      return;
    }
      
    // Start fade out after 2.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Completely remove splash screen from DOM after fade out completes
    const removeTimer = setTimeout(() => {
      setShowSplash(false);
      sessionStorage.setItem("hasVisitedPradaBC", "true");
      document.documentElement.classList.remove("splash-active");
      document.documentElement.classList.add("splash-hidden");
    }, 3000); // 2500ms + 500ms fade transition

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div 
      id="splash-screen"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface via-ink to-ink text-snow transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="relative flex flex-col items-center justify-center">
         {/* Subtle gold glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+2rem)] w-32 h-32 md:w-48 md:h-48 bg-gold/10 blur-[50px] rounded-full animate-pulse-slow"></div>

        {/* Logo with smooth scale + fade */}
        <div className="relative z-10 animate-fade-in-scale">
           <Image 
             src="/pradabc.png"
             alt="PRADA BC Logo"
             width={140}
             height={140}
             className="object-contain w-28 h-28 md:w-36 md:h-36 mb-6 drop-shadow-2xl"
             priority
           />
        </div>

        {/* Brand Text */}
        <h1 className="text-2xl md:text-3xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-snow via-gold to-snow animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] text-center drop-shadow-sm">
          PRADA BC <span className="font-light">Surabaya</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-xs md:text-sm text-snow/60 tracking-[0.25em] uppercase font-sans animate-fade-in-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards] text-center">
          Elite Premium Badminton Club
        </p>

        {/* Progress Line */}
        <div className="mt-12 w-48 h-[1px] bg-snow/10 relative overflow-hidden animate-fade-in-up [animation-delay:1200ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent animate-progress-line"></div>
        </div>
      </div>
    </div>
  );
}
