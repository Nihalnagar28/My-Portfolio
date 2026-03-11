import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[var(--color-secondary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-[var(--color-primary)]">
            &lt;Resume /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-panel p-6 md:p-10 relative group">
          
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--color-primary)]/50 rounded-tl-xl transition-all group-hover:w-20 group-hover:h-20 group-hover:border-[var(--color-primary)]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--color-secondary)]/50 rounded-br-xl transition-all group-hover:w-20 group-hover:h-20 group-hover:border-[var(--color-secondary)]"></div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 border-b border-[var(--color-glass-border)] pb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <FileText className="text-[var(--color-primary)]" />
                Curriculum Vitae
              </h3>
              <p className="text-[var(--color-text-muted)]">
                A comprehensive overview of my skills, experience, and education.
              </p>
            </div>
            
            <div className="flex gap-4">
              <motion.a
                href="/MritunjayCVMain.pdf"
                download="Mritunjay_Nagar_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/50 rounded-lg hover:bg-[var(--color-primary)] hover:text-black transition-all font-semibold"
              >
                <Download size={20} />
                Download PDF
              </motion.a>
              <motion.a
                href="/MritunjayCVMain.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 glass-panel text-white hover:border-[var(--color-secondary)] transition-all font-semibold"
              >
                <ExternalLink size={20} />
                View Full
              </motion.a>
            </div>
          </div>

          {/* Embedded Resume Preview */}
          <div className="w-full mb-8 h-[500px] md:h-[800px] bg-[var(--color-dark-bg)] rounded-xl border border-[var(--color-glass-border)] overflow-hidden relative shadow-2xl">
             <object
                data="/MritunjayCVMain.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                type="application/pdf"
                width="100%"
                height="100%"
                className="w-full h-full"
             >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[var(--color-dark-bg)]">
                   <FileText size={64} className="mb-4 text-[var(--color-primary)] opacity-30" />
                   <h4 className="text-xl font-bold text-white mb-2">Resume Preview Not Available</h4>
                   <p className="text-[var(--color-text-muted)] mb-6 max-w-sm">
                      Your browser doesn't support inline PDF previews. No worries! You can still download it or view it in a new tab.
                   </p>
                   <div className="flex gap-4">
                      <a 
                        href="/MritunjayCVMain.pdf" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-2 bg-[var(--color-primary)] text-black rounded-lg font-bold hover:scale-105 transition-transform"
                      >
                        Open in New Tab
                      </a>
                   </div>
                </div>
             </object>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
