import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const certificatesData = [
  { title: "Master Generative AI and toot", issuer: "Infosys | SpringBoard", date: "August 2025" },
  { title: "Build Generative AI apps", issuer: "Infosys | SpringBoard", date: "August 2025" },
  { title: "Computational Theory", issuer: "Infosys | SpringBoard", date: "August 2025" },
  { title: "ChatGPT-4 Prompt Engineering", issuer: "Infosys | SpringBoard", date: "August 2025" },
  { title: "DSA Summer Bootcamp", issuer: "Lovely Professional University", date: "June-July 2025" },
  { title: "Java Programming", issuer: "Iamneo Platform", date: "January-May 2025" },
  { title: "Object Oriented Programming", issuer: "Iamneo Platform", date: "August-December 2024" },
  { title: "Data Structures and Algorithm", issuer: "Iamneo Platform", date: "August-December 2024" }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-[var(--color-dark-bg)]/50 relative">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-glass-border) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono flex items-center justify-center gap-4 text-white">
            <Award className="text-[var(--color-accent)] w-10 h-10" />
            Certifications
            <Award className="text-[var(--color-accent)] w-10 h-10" />
          </h2>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,163,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-panel p-6 flex flex-col justify-between h-full group border-t-2 border-t-transparent hover:border-t-[var(--color-accent)] transition-all bg-gradient-to-b from-[var(--color-glass)] to-[var(--color-dark-bg)]"
            >
              <div>
                <Star className="text-[var(--color-accent)]/50 mb-4 group-hover:text-[var(--color-accent)] transition-colors w-8 h-8" />
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-[var(--color-primary)] mb-4">
                  {cert.issuer}
                </p>
              </div>
              <div className="text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-dark-bg)]/80 inline-block px-3 py-1 rounded w-max">
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
