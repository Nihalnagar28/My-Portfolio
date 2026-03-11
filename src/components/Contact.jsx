import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="pt-24 pb-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-secondary)] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
            &lt;Get_In_Touch /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full"></div>
          <p className="text-[var(--color-text-muted)] mt-6 max-w-2xl mx-auto text-lg">
             Have a project in mind or just want to say hi? Feel free to drop a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="glass-panel p-8 rounded-2xl border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/50 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-white text-gradient inline-block">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:mritunjaynihalnagar@gmail.com" className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors group">
                  <div className="p-4 rounded-full bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] group-hover:border-[var(--color-primary)]/50 shadow-lg">
                    <Mail className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <span>mritunjaynihalnagar@gmail.com</span>
                  </div>
                </a>
                
                <a href="tel:+917851801364" className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors group">
                  <div className="p-4 rounded-full bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] group-hover:border-[var(--color-secondary)]/50 shadow-lg">
                    <Phone className="text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <span>+91-7851801364</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-[var(--color-secondary)]/20">
              <h3 className="text-xl font-bold mb-6 text-white">Social Profiles</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Nihalnagar28" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] text-[var(--color-text-muted)] hover:text-white hover:border-white transition-all hover:-translate-y-1 shadow-lg">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/nihalnagar" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] text-[var(--color-text-muted)] hover:text-[#0077B5] hover:border-[#0077B5] transition-all hover:-translate-y-1 shadow-lg">
                  <Linkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              {/* Form glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-all font-mono text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none font-mono text-sm"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(170,0,255,0.4)] transition-all disabled:opacity-70 group/btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                       <span className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                       Sending...
                    </span>
                  ) : isSubmitted ? (
                    "Message Sent Successfully!"
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 border-t border-[var(--color-glass-border)] pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[var(--color-text-muted)]">
         <p>© {new Date().getFullYear()} Mritunjay Nagar. All rights reserved.</p>
         <p className="mt-2 md:mt-0 flex items-center gap-1 block">
           Designed & Built with <span className="text-[var(--color-secondary)] animate-pulse">❤</span>
         </p>
      </div>
    </section>
  );
};

export default Contact;
