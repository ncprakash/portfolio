'use client'

import Header from "@/component/Header";
import Codebox from "@/component/codebox";
import Proficiency from "@/component/FlairLine";
import SkillCards from "@/component/SkillCard";
import ProjectsSection from "@/component/projects";
import ContactSection from "@/component/footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section with Floating Elements */}
      <div className='relative bg-gradient-to-br from-[#ff6a00] to-[#ffbb33] h-screen w-screen flex flex-col items-center justify-center pt-10 overflow-hidden'>
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out alternate`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-8 md:gap-16 z-10">
          <Codebox/>
          <Header />
          <Codebox/>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
      
      <SkillCards/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  );
}
