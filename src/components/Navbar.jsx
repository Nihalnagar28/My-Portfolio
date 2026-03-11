import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Resume', href: '#resume' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] origin-left z-50"
        style={{ scaleX }}
      />
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-5xl glass-panel px-6 py-3 flex justify-between items-center transition-all duration-300">
        <div className="text-2xl font-bold tracking-tighter">
          <span className="text-[var(--color-primary)]">&lt;</span>
          <span className="text-white">Mritunjay</span>
          <span className="text-[var(--color-secondary)]">/&gt;</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-primary)] pb-1 relative ${
                  activeTab === link.name ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'
                }`}
              >
                {link.name}
                {activeTab === link.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-primary)] rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button could go here */}
        <div className="md:hidden">
            <button className="text-[var(--color-text-main)] hover:text-[var(--color-primary)]">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
