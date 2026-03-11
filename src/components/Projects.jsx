import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

const projectsData = [
  {
    title: "Virtual Study Room",
    date: "February 2026",
    description: "Built a real-time virtual study platform enabling collaborative study sessions with video calling, screen sharing, and in-session note-taking to enhance remote learning productivity.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.io"],
    github: "#",
    color: "var(--color-primary)"
  },
  {
    title: "Spotify Clone",
    date: "October 2025",
    description: "Built a responsive Spotify-style music player with playback, play/pause, and dynamic song listing. Used DOM manipulation and event handling to recreate a smooth listening experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "#",
    color: "var(--color-secondary)"
  },
  {
    title: "AI Packing Assistant",
    date: "April 2025",
    description: "Built an AI-powered packing assistant that generates personalized packing lists using real-time weather insights. Integrated Weatherstack API for accurate clothing recommendations.",
    techStack: ["HTML", "CSS", "JavaScript", "Weatherstack API"],
    github: "#",
    color: "var(--color-accent)"
  },
  {
    title: "Dynamic Resume Builder",
    date: "April 2025",
    description: "Built a dynamic resume builder web app that lets users create professional resumes via a clean interface. Added customizable sections and PDF generation functionality.",
    techStack: ["HTML", "CSS", "JavaScript", "PDF Generation"],
    github: "#",
    color: "#ff00a0"
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full glass-panel p-6 rounded-2xl border border-[var(--color-glass-border)] cursor-pointer group transition-colors duration-300"
      >
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 z-0"
          style={{ background: `radial-gradient(circle at center, ${project.color} 0%, transparent 70%)` }}
        />
        
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-lg shadow-lg" style={{ backgroundColor: `${project.color}20`, border: `1px solid ${project.color}50` }}>
              <Code size={24} color={project.color} />
            </div>
            
            <div className="flex gap-3">
              <a href={project.github} className="text-[var(--color-text-muted)] hover:text-white transition-colors" title="GitHub Repository">
                <Github size={20} />
              </a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors" title="Live Demo">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
            {project.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-4 font-mono">
            <Calendar size={14} />
            {project.date}
          </div>

          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--color-glass-border)]">
            {project.techStack.map((tech, i) => (
              <span key={i} className="text-xs font-mono px-2 py-1 rounded-md bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] text-[var(--color-text-main)] group-hover:border-[var(--color-primary)]/30 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-[var(--color-accent)]">
            &lt;Featured_Projects /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[#ff00a0] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <motion.a 
              href="https://github.com/Nihalnagar28" 
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 glass-panel text-white font-bold rounded-lg hover:border-white/50 transition-all border-[var(--color-glass-border)]"
            >
              <Github size={20} />
              View More on GitHub
            </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
