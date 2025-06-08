'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

function Profile() {
  const profileRef = useRef(null);

  useEffect(() => {
    // Pulsing animation
    gsap.to(profileRef.current, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div 
      ref={profileRef}
      className="relative h-60 w-60 md:h-80 md:w-80 rounded-full mb-8 overflow-hidden border-4 border-white/50 shadow-2xl group"
    >
      <Image
        src="/image.jpg" // Replace with your profile image
        alt="Profile Picture"
        fill
        className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-400/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
      
      {/* Decorative rings */}
      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-reverse" style={{ animationDuration: '25s' }}></div>
    </div>
  )
}

export default Profile;