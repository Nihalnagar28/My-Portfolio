import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: "Bachelor of Technology",
    subtitle: "Lovely Professional University, Phagwara, Punjab",
    date: "Since August 2024",
    description: "Computer Science and Engineering | CGPA: 6.83",
    icon: <GraduationCap />,
    color: "var(--color-primary)"
  },
  {
    title: "Polytechnic Diploma",
    subtitle: "Pacific University, Udaipur, Rajasthan",
    date: "2021 - 2024",
    description: "Computer Science and Engineering | CGPA: 6.73",
    icon: <BookOpen />,
    color: "var(--color-secondary)"
  },
  {
    title: "Matriculation",
    subtitle: "Swami Vivekanand Govt. Model School, Baran, Rajasthan",
    date: "2020 - 2021",
    description: "Percentage: 81%",
    icon: <Award />,
    color: "var(--color-accent)"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-[var(--color-secondary)]">
            &lt;Education /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <VerticalTimeline lineColor="var(--color-glass-border)">
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education group"
              contentStyle={{ background: 'var(--color-glass)', color: '#fff', border: '1px solid var(--color-glass-border)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)', borderRadius: '1rem' }}
              contentArrowStyle={{ borderRight: '7px solid var(--color-glass)' }}
              date={edu.date}
              dateClassName="text-[var(--color-text-muted)] font-mono ml-4 mr-4 xl:text-lg"
              iconStyle={{ background: 'var(--color-dark-bg)', color: edu.color, border: `2px solid ${edu.color}`, boxShadow: `0 0 15px ${edu.color}40` }}
              icon={edu.icon}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-secondary)] transition-all">
                {edu.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-[var(--color-primary)] font-medium mt-1">
                {edu.subtitle}
              </h4>
              <p className="text-[var(--color-text-muted)] !font-light leading-relaxed">
                {edu.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
