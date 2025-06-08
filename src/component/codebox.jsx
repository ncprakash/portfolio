'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Codebox() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      y: -60,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    // Add rotation animation
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <div
      ref={boxRef}
      className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden bg-gradient-to-br from-[#ff6a00] to-[#ffbb33] shadow-xl border-4 border-white/30 hover:border-white/50 transition-all duration-300"
    >
      <Image
        src="/download.jpg"
        alt="Floating Code"
        fill
        className="object-cover mix-blend-multiply shadow-2xl hover:scale-110 transition-transform duration-500"
      />
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full shadow-[0_0_30px_10px_rgba(255,106,0,0.5)] opacity-70 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default Codebox;
