import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Terminal, Database, Users } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={24} />,
    color: "var(--color-primary)",
    skills: [
      { name: "C / C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "PHP", level: 75 }
    ]
  },
  {
    title: "Frameworks & UI",
    icon: <Server size={24} />,
    color: "var(--color-secondary)",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js & Express", level: 82 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    title: "Databases & Tools",
    icon: <Database size={24} />,
    color: "var(--color-accent)",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 85 }
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users size={24} />,
    color: "#ff00a0",
    skills: [
      { name: "Problem-Solving", level: 95 },
      { name: "Team Collaboration", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Adaptability", level: 90 }
    ]
  }
];

const SkillBar = ({ name, level, color, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-[var(--color-text-main)]">{name}</span>
        <span className="text-sm font-mono text-[var(--color-text-muted)]">{level}%</span>
      </div>
      <div className="w-full bg-[var(--color-glass-border)] rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[var(--color-dark-bg)]/50 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-[var(--color-primary)]">
            &lt;Skills_Matrix /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="glass-panel p-8 hover:border-[var(--color-glass-border)]/80 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-3 rounded-xl bg-gradient-to-br"
                  style={{ backgroundImage: `linear-gradient(to bottom right, ${category.color}40, transparent)`, color: category.color, border: `1px solid ${category.color}40` }}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level} 
                    color={category.color} 
                    index={index} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
