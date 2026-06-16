import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: ' Numerology Web Application',
      description: 'A futuristic cyber-storefront with live telemetry sales dashboards, Stripe secure payment gateways, inventory management system, and comprehensive admin configuration panels.',
      image: '/project_ecommerce.png',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS'],
      liveLink: 'https://numerology-opal-pi.vercel.app/',
      githubLink: 'https://github.com/sudhanshu7037/Numerology.git',
    },
    {
      title: 'Task Management App',
      description: 'A glassmorphic Kanban task board featuring drag-and-drop mechanics, real-time sync with Socket.io, user task assignments, deadlines tracking, and progress bar notifications.',
      image: '/project_taskboard.png',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Framer Motion'],
      liveLink: 'https://team-task-manager-xi-cyan.vercel.app/',
      githubLink: 'https://github.com/sudhanshu7037/Team-Task-Manager-.git',
    },
    {
      title: 'HRMS - Human Resource Management System',
      description: 'A comprehensive enterprise human resource workspace managing employee directories, onboarding pipelines, real-time leaves tracking, automatic payroll processing, and department performance metrics.',
      image: '/project_hrms.png',
      tags: ['PHP', 'Laravel', 'Bootstrap', 'Ajax', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      liveLink: 'https://github.com/sudhanshu7037',
      githubLink: 'https://github.com/sudhanshu7037',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as any },
    },
  };

  return (
    <section id="projects" className="py-24 bg-cyber-bg border-t border-cyber-border/40 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyber-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyber-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-cyber-primary text-xs md:text-sm tracking-[0.2em] uppercase font-bold block mb-2">
              // PRODUCTION DEPLOYMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
              Featured Work
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded overflow-hidden flex flex-col group transition-all duration-400 hover:border-cyber-primary/40 hover:shadow-neon-glow-hover"
            >
              {/* Project Image Container */}
              <div className="h-48 md:h-52 w-full overflow-hidden relative border-b border-cyber-border/20">
                {/* Cyber scanner overlay on images */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent z-10 pointer-events-none" />
                <div className="absolute top-2 right-2 z-10 w-2 h-2 bg-cyber-primary rounded-full animate-pulse shadow-[0_0_8px_#46F5B4]" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-sans mb-3 tracking-wide group-hover:text-cyber-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-cyber-text-muted text-sm font-sans mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[10px] md:text-xs font-mono px-2.5 py-1 bg-cyber-bg-sec border border-cyber-border/40 text-cyber-secondary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links and Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-cyber-border/20">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded text-xs md:text-sm font-semibold font-sans bg-transparent border border-cyber-primary/60 text-cyber-primary hover:bg-cyber-primary/10 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded text-xs md:text-sm font-semibold font-sans bg-cyber-bg-sec border border-cyber-border/40 text-cyber-text-muted hover:text-white hover:border-cyber-primary/40 transition-colors duration-300"
                    >
                      <FaGithub className="text-sm" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
