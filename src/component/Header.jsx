'use client';
import Profile from './profile'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

function Header() {
  const text = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    // Background animation
    gsap.from(containerRef.current, {
      backgroundPosition: '0% 50%',
      duration: 3,
      ease: "power2.inOut"
    });

    const split = new SplitText(text.current, {
      type: "chars,words",
    });

    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.05,
      delay: 0.5
    });

    return () => split.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative mb-8 w-full max-w-4xl h-auto bg-gradient-to-br from-white/20 to-white/30 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-400/20 blur-xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-amber-400/20 blur-xl"></div>
      
      <Profile />
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
       Hello, I'm <span className="text-amber-200">Prakash</span>, a Creative Coder crafting engaging digital experiences

      </h1>
      <p ref={text} className="text-lg md:text-xl text-white/80 leading-relaxed">
 Building intuitive apps that blend creativity and logic to make technology feel natural and fun.
      </p>
      
      {/* Animated CTA button */}
      <button className="mt-8 px-8 py-3 bg-white text-orange-600 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      onClick={()=>{
        const element=document.getElementById("contact");
        element?.scrollIntoView({
          behavior:"smooth"
        })
      }}
      >
        <span className="relative z-10">Get in Touch</span>
        <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></span>
      </button>
    </div>
  )
}

export default Header;