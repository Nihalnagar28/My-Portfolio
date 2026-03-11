import React, { useRef, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// 3D Floating Elements Component
const FloatingShapes = () => {
  const group = useRef();
  
  // Create some random positions for "code blocks"
  const shapes = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      position: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 5 - 5],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#00f0ff' : '#aa00ff'
    }));
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
      group.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={shape.color} wireframe emissive={shape.color} emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

// Simple Typing Animation Hook
const useTypingEffect = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};

const Intro = () => {
  const titleText = useTypingEffect("Full Stack Web Developer", 100);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
          <FloatingShapes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block glass-panel px-4 py-2 w-max rounded-full text-sm font-medium text-[var(--color-primary)] border border-[var(--color-primary)]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            Welcome to my creative space
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Mritunjay Nagar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-[var(--color-text-muted)] h-10 flex items-center">
            &gt; {titleText}
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-8 bg-[var(--color-primary)] ml-2"
            />
          </h2>
          
          <p className="text-lg text-[var(--color-text-muted)] max-w-lg mt-2 leading-relaxed">
            I craft immersive digital experiences, combining modern web technologies with interactive 3D design to build scalable and visually stunning applications.
          </p>

          <div className="flex gap-4 mt-4">
            <motion.a 
              href="#resume" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold rounded-lg shadow-[0_0_20px_rgba(170,0,255,0.4)] transition-all flex items-center gap-2"
            >
              View Resume
            </motion.a>
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-panel text-white font-bold rounded-lg hover:border-[var(--color-primary)]/50 transition-all"
            >
              Explore Work
            </motion.a>
          </div>
        </motion.div>

        {/* 3D Model Placeholder Container */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="hidden md:flex justify-center items-center h-[500px] relative"
        >
            <div className="w-full h-full relative group perspective-1000">
                <motion.div 
                    animate={{ y: [0, -20, 0], rotateZ: [0, 2, -2, 0] }} 
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="w-full h-full glass-panel border-[var(--color-primary)]/20 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.1)] overflow-hidden relative"
                >
                   {/* Abstract representation of a developer workspace inside the glass card */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[#10192b]/80 to-[#0a0f1d]/80 z-0"></div>
                   
                   {/* Glowing grid */}
                   <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                   <div className="relative z-10 flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full border-4 border-dashed border-[var(--color-secondary)]/50 flex items-center justify-center p-2 mb-6 shadow-[0_0_30px_rgba(170,0,255,0.2)]">
                             <div className="w-full h-full rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-4xl font-bold text-white shadow-inner">
                                MN
                             </div>
                        </div>
                        <div className="text-2xl font-bold text-[var(--color-text-main)] mb-2 inline-flex items-center gap-2">
                             <span className="text-[var(--color-primary)]">const</span> developer <span className="text-[var(--color-secondary)]">=</span> "awesome";
                        </div>
                   </div>
                </motion.div>
            </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-text-muted)] flex flex-col items-center gap-2"
      >
        <span className="text-sm tracking-widest uppercase">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-[var(--color-text-muted)] rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-[var(--color-primary)] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
