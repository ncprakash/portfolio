'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';
import { animate } from 'animejs';

// Import icons (using react-icons)
import { FaReact, FaNodeJs, FaFigma, FaDocker, FaMobile } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiFlutter, SiGithubactions } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "Frontend",
    description: "Building responsive, interactive user interfaces with modern frameworks and tools.",
    color: "from-orange-500 to-amber-500",
    icon: <FaReact className="text-5xl mb-4 text-white" />,
    tech: [
      { icon: <FaReact className="text-2xl" />, name: "React" },
      { icon: <SiNextdotjs className="text-2xl" />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-2xl" />, name: "Tailwind" },
      { icon: <SiTypescript className="text-2xl" />, name: "TypeScript" },
      { icon: <SiRedux className="text-2xl" />, name: "Redux" }
    ],
    pattern: "pattern-circuit-board-orange-500/50"
  },
  {
    title: "Backend",
    description: "Developing robust server-side applications, APIs, and database solutions.",
    color: "from-amber-600 to-yellow-500",
    icon: <FaNodeJs className="text-5xl mb-4 text-white" />,
    tech: [
      { icon: <FaNodeJs className="text-2xl" />, name: "Node.js" },
      { icon: <SiExpress className="text-2xl" />, name: "Express" },
      { icon: <SiMongodb className="text-2xl" />, name: "MongoDB" },
      { icon: <SiPostgresql className="text-2xl" />, name: "PostgreSQL" },
      { icon: <SiFirebase className="text-2xl" />, name: "Firebase" }
    ],
    pattern: "pattern-bricks-amber-600/50"
  },
  {
    title: "UI/UX",
    description: "Creating intuitive user experiences with research-driven design principles.",
    color: "from-yellow-600 to-amber-400",
    icon: <FaFigma className="text-5xl mb-4 text-white" />,
    tech: [
      { icon: <FaFigma className="text-2xl" />, name: "Figma" },
      { icon: <GiArtificialIntelligence className="text-2xl" />, name: "Adobe XD" },
      { icon: <div className="text-2xl">🔍</div>, name: "User Research" },
      { icon: <div className="text-2xl">✏️</div>, name: "Prototyping" },
      { icon: <div className="text-2xl">🎨</div>, name: "Wireframing" }
    ],
    pattern: "pattern-floating-cogs-yellow-600/50"
  },
  {
    title: "DevOps",
    description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure.",
    color: "from-amber-700 to-orange-600",
    icon: <FaDocker className="text-5xl mb-4 text-white" />,
    tech: [
      { icon: <FaDocker className="text-2xl" />, name: "Docker" },
      {icon:"v", name: "AWS" },
      { icon: <SiGithubactions className="text-2xl" />, name: "CI/CD" },
      { icon: <div className="text-2xl">🔄</div>, name: "GitHub Actions" },
      { icon: <div className="text-2xl">☁️</div>, name: "Cloud" }
    ],
    pattern: "pattern-tic-tac-toe-amber-700/50"
  },
  {
    title: "Mobile",
    description: "Building cross-platform mobile applications with native performance.",
    color: "from-orange-700 to-amber-600",
    icon: <FaMobile className="text-5xl mb-4 text-white" />,
    tech: [
      { icon: <FaReact className="text-2xl" />, name: "React Native" },
      { icon: <SiFlutter className="text-2xl" />, name: "Flutter" },
      { icon: <div className="text-2xl">🌐</div>, name: "PWA" },
      { icon: <div className="text-2xl">📱</div>, name: "iOS/Android" },
      { icon: <div className="text-2xl">⚡</div>, name: "Performance" }
    ],
    pattern: "pattern-wiggle-orange-700/50"
  }
];

const SkillCards = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const splineRef = useRef(null);
  const splineContainerRef = useRef(null);

  useEffect(() => {
    const animation = animate('#card', {
      y: '1.5rem',
      delay: 50,
      loop: true,
      duration: 2000,
      easing: 'easeInOutSine',
      alternate: true
    });

    const ctx = gsap.context(() => {
      const totalWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = -(totalWidth - viewportWidth);

      // Main horizontal scroll animation
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

      // Parallax effect for Spline background
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

      // Card entrance animations with staggered effects
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          rotate: 5,
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

        // Hover animation for each card
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

      // Spline entrance animation
      gsap.from(splineContainerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Clear ref array on each render
  cardsRef.current = [];

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-900 to-amber-800">
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
            className={`relative min-w-[340px] h-[420px] bg-gradient-to-br ${skill.color} rounded-3xl shadow-2xl flex flex-col justify-between items-center text-center p-6 hover:scale-105 transition-transform duration-300 group backdrop-blur-md border-2 border-white/20 overflow-hidden`}
          >
            {/* Background pattern */}
            <div className={`absolute inset-0 ${skill.pattern} opacity-30`} />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div id='card' className="relative bg-white/10 rounded-xl p-6 w-full h-full flex flex-col justify-between backdrop-blur-sm">
              {/* Card header */}
              <div>
                <div className="flex justify-center">
                  <div className="p-3 bg-white/20 rounded-full mb-4">
                    {skill.icon}
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white mb-3">{skill.title}</h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">{skill.description}</p>
              </div>
              
              {/* Tech stack */}
              <div className="mt-auto">
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {skill.tech.map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="bg-white/20 p-2 rounded-full text-white">
                        {item.icon}
                      </div>
                      <span className="text-xs text-white/80 mt-1">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/30 scale-95 group-hover:scale-100 group-hover:border-white/60 transition-all duration-500 pointer-events-none" />
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bg-white rounded-full opacity-20"
                    style={{
                      width: `${Math.random() * 6 + 2}px`,
                      height: `${Math.random() * 6 + 2}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 5 + 5}s linear infinite`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        
        .pattern-circuit-board-orange-500\/50 {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 20px 20px;
          background-color: transparent;
          color: rgba(249, 115, 22, 0.5);
        }
        
        .pattern-bricks-amber-600\/50 {
          background-image: linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 30px 15px;
          background-color: transparent;
          color: rgba(217, 119, 6, 0.5);
        }
        
        .pattern-floating-cogs-yellow-600\/50 {
          background-image: radial-gradient(circle at 10px 10px, currentColor 2px, transparent 2px),
                           radial-gradient(circle at 30px 30px, currentColor 2px, transparent 2px);
          background-size: 40px 40px;
          background-color: transparent;
          color: rgba(202, 138, 4, 0.5);
        }
        
        .pattern-tic-tac-toe-amber-700\/50 {
          background-image: linear-gradient(currentColor 1px, transparent 1px),
                           linear-gradient(90deg, currentColor 1px, transparent 1px);
          background-size: 20px 20px;
          background-color: transparent;
          color: rgba(180, 83, 9, 0.5);
        }
        
        .pattern-wiggle-orange-700\/50 {
          background-image: 
            radial-gradient(circle at center, transparent 0%, rgba(194, 65, 12, 0.3) 100%),
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          background-size: 200% 200%;
          background-position: center;
        }
      `}</style>
    </section>
  );
};

export default SkillCards;