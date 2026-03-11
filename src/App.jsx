import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-[var(--color-dark-bg)] min-h-screen font-sans text-[var(--color-text-main)] selection:bg-[var(--color-primary)] selection:text-black">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Intro />
        <Resume />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
