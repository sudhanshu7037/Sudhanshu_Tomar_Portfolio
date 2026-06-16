import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiDocker, SiPostman, SiFigma } from 'react-icons/si';

interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="text-xl text-cyber-primary" />,
      skills: [
        { name: 'React.js', level: 95, icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'JavaScript', level: 90, icon: <FaJsSquare className="text-[#F7DF1E]" /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Redux Toolkit', level: 80, icon: <SiRedux className="text-[#764ABC]" /> },
      ],
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs className="text-xl text-cyber-secondary" />,
      skills: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', level: 88, icon: <SiExpress className="text-[#FFFFFF]" /> },
      ],
    },
    {
      title: 'Database Architecture',
      icon: <FaDatabase className="text-xl text-cyber-primary" />,
      skills: [
        { name: 'MongoDB', level: 85, icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Mongoose ORM', level: 88, icon: <SiMongodb className="text-[#47A248]" /> },
      ],
    },
    {
      title: 'Developer Tools',
      icon: <FaTools className="text-xl text-cyber-secondary" />,
      skills: [
        { name: 'Git & GitHub', level: 90, icon: <FaGithub className="text-[#FFFFFF]" /> },
        { name: 'Docker', level: 75, icon: <SiDocker className="text-[#2496ED]" /> },
        { name: 'Postman', level: 85, icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: 'VS Code', level: 95, icon: <FaLaptopCode className="text-[#007ACC]" /> },
        { name: 'Figma', level: 70, icon: <SiFigma className="text-[#F24E1E]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-cyber-bg border-t border-cyber-border/40 relative">
      {/* Background visual decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyber-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-cyber-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-cyber-primary text-xs md:text-sm tracking-[0.2em] uppercase font-bold block mb-2">
              // TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
              Tech Stack Core
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.4, 0, 0.2, 1] as any }}
              className="glass-card p-8 rounded relative overflow-hidden group"
            >
              {/* Scanline pattern for tech cards */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-secondary/[0.01] via-transparent to-cyber-primary/[0.01] pointer-events-none" />
              
              {/* Title Block */}
              <div className="flex items-center gap-3 mb-8 border-b border-cyber-border/30 pb-4">
                <div className="w-10 h-10 bg-cyber-bg-sec rounded border border-cyber-border/40 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-sans text-white uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              {/* Skills Progress Grid */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-base text-cyber-text-muted">{skill.icon}</span>
                        <span className="font-sans text-sm md:text-base text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs md:text-sm text-cyber-primary font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-cyber-bg-sec rounded-full overflow-hidden border border-cyber-border/20">
                      {/* Animated inner bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIdx * 0.05, ease: [0.4, 0, 0.2, 1] as any }}
                        className="h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full shadow-[0_0_8px_#46F5B4]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
