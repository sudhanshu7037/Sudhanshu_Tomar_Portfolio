import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { FiCode, FiFolder, FiCpu } from 'react-icons/fi';

interface StatItem {
  icon: ReactNode;
  value: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 15 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref} className="font-mono text-3xl md:text-5xl font-extrabold text-white">0</span>;
}

export default function About() {
  const stats: StatItem[] = [
    {
      icon: <FiCpu className="text-2xl text-cyber-primary" />,
      value: 1,
      suffix: '+',
      label: 'Years of Experience',
    },
    {
      icon: <FiFolder className="text-2xl text-cyber-secondary" />,
      value: 25,
      suffix: '+',
      label: 'Projects Delivered',
    },
    {
      icon: <FiCode className="text-2xl text-cyber-primary" />,
      value: 4,
      suffix: '+',
      label: 'Technologies Mastered',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
    },
  };

  return (
    <section id="about" className="py-24 bg-cyber-bg-sec/50 border-t border-cyber-border/40 relative">
      <div className="absolute top-0 right-10 w-72 h-72 bg-cyber-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyber-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-cyber-primary text-xs md:text-sm tracking-[0.2em] uppercase font-bold block mb-2">
              // CORE METRICS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
              About My System
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as any }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-cyber-primary font-sans">
              Designing high-performance full-stack web architectures.
            </h3>
            <p className="text-cyber-text-muted text-base md:text-lg leading-relaxed font-sans">
              Hello! I am a passionate Full Stack Software Developer who loves creating responsive, robust, and intuitive web systems. Leveraging the MERN Stack, I write clean, optimized code for both backend infrastructure and frontend user interfaces.
            </p>
            <p className="text-cyber-text-muted text-base md:text-lg leading-relaxed font-sans">
              With a background focused heavily on JavaScript, TypeScript, and modern ecosystem patterns, I build web APIs with Node.js and Express, manage databases using MongoDB/Mongoose, and render highly dynamic layouts with React and Tailwind CSS.
            </p>
            <p className="text-cyber-text-muted text-base md:text-lg leading-relaxed font-sans">
              I focus on creating maintainable systems, utilizing tools like Git/GitHub, Docker, and Postman to ensure high software quality standards throughout the deployment process.
            </p>
          </motion.div>

          {/* Stats Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card glass-card-hover p-6 rounded flex items-center gap-6 relative overflow-hidden"
              >
                {/* Visual scanline texture inside stats card */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-primary/[0.02] to-transparent pointer-events-none" />
                
                {/* Glowing status light */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-cyber-primary rounded-full animate-ping shadow-[0_0_8px_#46F5B4]" />

                <div className="w-14 h-14 bg-cyber-bg-sec rounded border border-cyber-border/40 flex items-center justify-center shadow-inner">
                  {stat.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-cyber-primary font-mono text-xl md:text-2xl font-bold ml-0.5">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-cyber-text-muted font-sans text-xs md:text-sm tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
