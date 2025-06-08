'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

const FlairLine = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const word = "MY EXPERTISE";
  const lettersRef = useRef([]);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      backgroundPosition: '50% 100%',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.fromTo(lettersRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none none'
        }
      }
    );

    lettersRef.current.forEach((letter, index) => {
      gsap.to(letter, {
        y: -15,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.1
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-200 to-amber-200 py-20"
    >
      {/* Glow background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-400/20"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
              animation: `pulse ${8 + Math.random() * 10}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Main text */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-5 mb-20 px-4"
      >
        {word.split('').map((char, i) => (
          <div
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className={`text-5xl md:text-7xl font-extrabold select-none ${
              char === ' ' ? 'w-5' : 
              'w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg hover:shadow-xl transition-shadow duration-300'
            }`}
          >
            {char}
          </div>
        ))}
      </div>

      {/* Bottom underline */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70" />

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.1; transform: scale(0.8); }
          100% { opacity: 0.3; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

const skills = [
  {
    title: "Frontend",
    description: "React, Next.js, Tailwind, TypeScript, Redux",
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Backend",
    description: "Node.js, Express, MongoDB, PostgreSQL, Firebase",
    color: "from-amber-600 to-yellow-500"
  },
  {
    title: "UI/UX",
    description: "Figma, Adobe XD, User Research, Prototyping",
    color: "from-yellow-600 to-amber-400"
  },
  {
    title: "DevOps",
    description: "Docker, AWS, CI/CD, GitHub Actions",
    color: "from-amber-700 to-orange-600"
  },
  {
    title: "Mobile",
    description: "React Native, Flutter, Progressive Web Apps",
    color: "from-orange-700 to-amber-600"
  }
];

const SkillCards = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const splineRef = useRef(null);
  const splineContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = -(totalWidth - viewportWidth);

      gsap.to(containerRef.current, {
        x: scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      gsap.to(splineContainerRef.current, {
        x: scrollDistance * 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true
          },
          delay: i * 0.15
        });
      });

      gsap.from(splineContainerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  cardsRef.current = [];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-900 to-amber-800"
    >
      {/* Flair line intro inside SkillCards section */}
      <FlairLine />

      {/* Orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-400/30 z-0" />

      {/* Spline background with parallax */}
      <div
        ref={splineContainerRef}
        className="absolute inset-0 w-[150vw] h-full pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/20 to-orange-500/10" />
        <Spline
          scene="https://prod.spline.design/pi09gaFtStmeJ4zz/scene.splinecode"
          className="w-full h-full opacity-70"
          ref={splineRef}
        />
      </div>

      {/* Cards container */}
      <div
        ref={containerRef}
        className="relative flex space-x-8 px-[20vw] py-24 w-max z-10 h-full items-center"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className={`relative min-w-[320px] h-[380px] bg-gradient-to-br ${skill.color} rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center p-8 hover:scale-105 transition-transform duration-300 group backdrop-blur-md border border-white/10`}
          >
            <div className="relative bg-white/10 rounded-xl p-8 w-full h-full flex flex-col justify-center backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white mb-6">{skill.title}</h2>
              <p className="text-white/90 text-lg leading-relaxed">{skill.description}</p>

              <div className="absolute inset-0 rounded-3xl border-2 border-white/20 scale-95 group-hover:scale-100 group-hover:border-white/40 transition-all duration-500 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCards;
