'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Project data
const projects = [
  {
    title: "second brain app",
    description:
      "A powerful tool for organizing your knowledge, tasks, and creativity — essentially functioning like an external memory system.",
    tags: ["React", "Node.js", "MongoDB"],
    hueA: 340,
    hueB: 10,
    github: "https://github.com/ncprakash/second-brain"
  },
  {
    title: "share cycle",
    description:
      "Share Cycle is a sustainable community platform that enables people to share, reuse, rent, and donate items.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    hueA: 20,
    hueB: 40,
    github: "https://github.com/ncprakash/ShareCycle"
  },
  {
    title: "AI -Based Electricity Controller sed",
    description:
      "An AI-powered smart electricity controller system that monitors, predicts, and optimizes electricity consumption in real-time.",
    tags: ["API", "Chart.js", "CSS"],
    hueA: 80,
    hueB: 120,
    github: "https://github.com/ncprakash/volt"
  }
];

// HSL color helper
const hue = (h) => `hsl(${h}, 100%, 75%)`;

// Motion animation variants
const cardVariants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Main Projects Section
export default function ProjectsSection() {
  return (
    <div style={container}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={sectionTitle}
      >
        My Projects
      </motion.h2>

      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
          hueA={project.hueA}
          hueB={project.hueB}
          github={project.github}
          i={i}
        />
      ))}
    </div>
  );
}

// Card for individual project
function ProjectCard({ title, description, tags, hueA, hueB, github, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <Link href={github} target="_blank" rel="noopener noreferrer">
      <motion.div
        className={`project-container-${i}`}
        style={cardContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.5, once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div style={{ ...splash, background }} />
        <motion.div style={card} variants={cardVariants}>
          <h3 style={cardTitle}>{title}</h3>
          <p style={cardDescription}>{description}</p>
          <div style={tagsContainer}>
            {tags.map((tag) => (
              <span key={tag} style={tagStyle}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

// ================== STYLES ==================

const container = {
  margin: "100px auto",
  maxWidth: 800,
  padding: "0 20px 100px",
  width: "100%",
};

const sectionTitle = {
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "4rem",
  color: "#ff6600",
  fontWeight: "700",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: 40,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
  borderRadius: 20,
  opacity: 0.15,
  filter: "blur(15px)",
  zIndex: 0,
};

const card = {
  width: "100%",
  maxWidth: 500,
  minHeight: 300,
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: 20,
  background: "#fff7f0",
  boxShadow: "0 10px 30px -10px rgba(255,102,0,0.3)",
  transformOrigin: "10% 60%",
  position: "relative",
  zIndex: 1,
};

const cardTitle = {
  fontSize: "1.8rem",
  marginBottom: "1rem",
  color: "#cc4c00",
  fontWeight: "700",
};

const cardDescription = {
  fontSize: "1rem",
  marginBottom: "2rem",
  color: "#994d00",
  lineHeight: 1.6,
};

const tagsContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
};

const tagStyle = {
  padding: "0.3rem 0.8rem",
  background: "#ffd8b3",
  borderRadius: "20px",
  fontSize: "0.8rem",
  color: "#cc6600",
  fontWeight: "600",
};
