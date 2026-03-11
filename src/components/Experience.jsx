import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    role: "Full Stack Web Development Intern",
    company: "Kamal Fin cap PVT. LTD.",
    location: "Kota, Rajasthan",
    date: "June – August 2025",
    description: [
      "Designed and developed responsive UI screens and improved user experience using modern frontend practices.",
      "Built backend API endpoints, implemented server-side logic, and handled MySQL database operations with the team.",
      "Improved problem-solving, learned professional development workflows, and gained practical full-stack project experience."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MySQL", "Git"],
    color: "var(--color-primary)"
  },
  {
    role: "Digital Workflow Intern",
    company: "Pixel Vibe",
    location: "Remote / On-site",
    date: "May – July 2023",
    description: [
      "Gained hands-on exposure to real-world digital and technical workflows while contributing to project-based tasks.",
      "Developed practical skills through team collaboration, task execution, and applying problem-solving techniques.",
      "Strengthened understanding of creative digital solutions and built a solid foundation for future professional roles."
    ],
    techStack: ["Digital workflow tools", "Teamwork", "Communication", "Problem-solving"],
    color: "var(--color-secondary)"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-[var(--color-secondary)]">
            &lt;Work_Experience /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-primary)] before:via-[var(--color-secondary)] before:to-transparent">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Icon */}
              <div aria-hidden="true" className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-dark-bg)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 md:p-8 rounded-2xl hover:border-[var(--color-primary)]/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-2xl text-white">{job.role}</h3>
                  <div className="flex items-center gap-1 text-sm font-mono text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full w-max">
                    <Calendar size={14} />
                    {job.date}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-lg text-[var(--color-text-main)] mb-4 font-semibold">
                  <span>{job.company}</span>
                  <span className="text-[var(--color-text-muted)] hidden md:inline">|</span>
                  <span className="flex items-center gap-1 text-sm font-normal text-[var(--color-text-muted)]">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                </div>
                
                <ul className="text-[var(--color-text-muted)] mb-6 space-y-2 leading-relaxed">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[var(--color-secondary)] opacity-50 mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 rounded-md bg-[var(--color-dark-bg)] border border-[var(--color-glass-border)] text-[var(--color-text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
