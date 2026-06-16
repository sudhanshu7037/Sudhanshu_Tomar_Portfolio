import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: ' Full Stack Developer',
      company: 'Infycore Payment Pvt Ltd',
      period: 'June 2026 - Present',
      description: [
        'Architected scalability updates for MERN platforms, optimizing database response times by 35% through custom MongoDB schemas and indexes.',
        'Supervised a frontend team developing complex, interactive UI dashboards in React and Tailwind CSS.',
        'Created custom secure API gateways in Node.js/Express, protecting user microservices and payment workflows.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'My Trip Destination',
      period: 'Nov 2025 - May 2026',
      description: [
        'Built dynamic glassmorphic administrative management platforms with Redux Toolkit and REST APIs.',
        'Configured CI/CD automation and containerized development servers using Docker to maximize system reliability.',
        'Designed database tables, triggers, and transactions using Mongoose for high schema validation compliance.',
      ],
    },
    {
      role: 'Junior Software Developer',
      company: 'Mohitraj Research Tech',
      period: 'June 2025 - Oct 2025',
      description: [
        'Translated Figma designs into pixel-perfect responsive HTML, CSS, and React layouts.',
        'Assisted backend teams in optimizing REST endpoints and testing application logic using Postman.',
        'Leveraged Git/GitHub for branching workflows, code reviews, and resolving conflicts.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-cyber-bg-sec/50 border-t border-cyber-border/40 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-cyber-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyber-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-cyber-primary text-xs md:text-sm tracking-[0.2em] uppercase font-bold block mb-2">
              // CAREER LOGS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
              Work History
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-cyber-border/45 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Glowing timeline dot */}
              <div className="absolute top-1.5 -left-[9px] w-[17px] h-[17px] bg-cyber-bg border-2 border-cyber-primary rounded-full group-hover:bg-cyber-primary transition-colors duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-cyber-primary group-hover:bg-cyber-bg rounded-full transition-colors duration-300" />
              </div>
              
              {/* Glowing halo behind dot */}
              <div className="absolute top-1.5 -left-[9px] w-[17px] h-[17px] bg-cyber-primary/20 rounded-full animate-ping pointer-events-none" />

              {/* Company & Date label on left (For Desktop) */}
              <div className="md:absolute md:top-1.5 md:-left-44 md:w-36 md:text-right hidden md:block">
                <span className="font-mono text-xs text-cyber-secondary font-bold uppercase tracking-wider block mb-1">
                  {exp.company}
                </span>
                <span className="font-mono text-[10px] text-cyber-text-muted flex items-center justify-end gap-1.5">
                  <FaCalendarAlt className="text-cyber-primary/70" />
                  {exp.period}
                </span>
              </div>

              {/* Timeline Card */}
              <div className="glass-card glass-card-hover p-6 md:p-8 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/[0.01] to-transparent pointer-events-none" />

                {/* Header info for Mobile (Inside card) */}
                <div className="md:hidden flex flex-wrap justify-between items-center gap-2 mb-4 border-b border-cyber-border/20 pb-3">
                  <span className="font-mono text-xs text-cyber-secondary font-bold uppercase tracking-wider">
                    {exp.company}
                  </span>
                  <span className="font-mono text-[10px] text-cyber-text-muted flex items-center gap-1.5">
                    <FaCalendarAlt className="text-cyber-primary/70" />
                    {exp.period}
                  </span>
                </div>

                {/* Job Title */}
                <div className="flex items-center gap-3 mb-4">
                  <FaBriefcase className="text-cyber-primary text-lg" />
                  <h3 className="text-lg md:text-xl font-bold font-sans text-white">
                    {exp.role}
                  </h3>
                </div>

                {/* Descriptions */}
                <ul className="space-y-3 list-none">
                  {exp.description.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-2 text-cyber-text-muted text-sm md:text-base font-sans leading-relaxed">
                      <span className="text-cyber-primary select-none mt-1.5 text-xs font-mono">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
