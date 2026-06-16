import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['MERN Stack Developer', 'MongoDB Specialist', 'Express.js Coder', 'React.js Innovator', 'Node.js Architect'];

  useEffect(() => {
    let timer: any;
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && typedText === currentWord) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex flex-col justify-center items-center relative overflow-hidden cyber-grid cyber-scanlines"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating particles background decoration */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-40 left-10 md:left-20 w-3 h-3 bg-cyber-primary rounded-full opacity-30 blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-40 right-10 md:right-20 w-4 h-4 bg-cyber-secondary rounded-full opacity-25 blur-[1px]"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Info Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="font-mono text-cyber-primary text-sm md:text-base tracking-[0.2em] uppercase font-bold block mb-3">
              // WELCOME TO SYSTEM PROFILE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2 font-sans">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary drop-shadow-[0_0_15px_rgba(70,245,180,0.15)]">Sudhanshu Tomar</span>
            </h1>
            <div className="h-10 md:h-12 flex items-center justify-center md:justify-start mb-6">
              <span className="font-mono text-xl md:text-2xl text-cyber-secondary font-bold">
                &gt; {typedText}
                <span className="animate-pulse text-cyber-primary">|</span>
              </span>
            </div>
            <p className="text-cyber-text-muted font-sans text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              I build scalable, secure, and high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Specializing in crafting next-generation digital experiences.
            </p>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
          >
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3 bg-gradient-to-r from-cyber-primary to-cyber-secondary hover:from-cyber-secondary hover:to-cyber-primary text-black font-semibold rounded font-sans tracking-wide hover:shadow-[0_0_20px_rgba(70,245,180,0.6)] active:scale-95 transition-all duration-300"
            >
              View Projects
            </button>
            <a
              href="/sudhanshut_s_resume.pdf"
              download="Sudhanshu_Tomar_Resume.pdf"
              className="px-6 py-3 bg-transparent border border-cyber-primary/60 hover:border-cyber-primary text-cyber-primary font-semibold rounded font-sans tracking-wide hover:bg-cyber-primary/10 hover:shadow-[0_0_15px_rgba(70,245,180,0.2)] active:scale-95 transition-all duration-300 flex items-center justify-center"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Socials Link Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-start space-x-6 text-xl text-cyber-text-muted"
          >
            <a
              href="https://github.com/sudhanshu7037"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-primary hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_transparent] hover:drop-shadow-[0_0_8px_#46F5B4]"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/sudhanshusinghtomar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-primary hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_transparent] hover:drop-shadow-[0_0_8px_#46F5B4]"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:tomarsudhanshu7037@gmail.com"
              className="hover:text-cyber-primary hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_transparent] hover:drop-shadow-[0_0_8px_#46F5B4]"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Profile Avatar with Hexagonal Border */}
        <div className="flex-1 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Hexagon floating backdrop animation */}
            <motion.div
              animate={{
                rotate: 360,
                y: [0, -8, 0],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                y: { duration: 6, repeat: Infinity, ease: [0.4, 0, 0.2, 1] },
              }}
              className="absolute inset-0 w-72 h-72 md:w-88 md:h-88 border border-dashed border-cyber-primary/20 hexagon-clip scale-110 pointer-events-none"
            />

            {/* Profile Card Wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
            >
              {/* Outer Neon Highlight hexagon */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary via-cyber-secondary to-transparent hexagon-clip p-[3px] shadow-neon-glow">
                {/* Inner bg hexagon */}
                <div className="w-full h-full bg-cyber-bg-sec hexagon-clip relative flex items-center justify-center overflow-hidden group">
                  {/* Cyber grid inside image block */}
                  <div className="absolute inset-0 cyber-grid-dense opacity-20 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Real Generated Avatar Image */}
                  <img
                    src="/avatar.png"
                    alt="Sudhanshu Tomar Profile"
                    className="w-[95%] h-[95%] object-cover hexagon-clip transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Glass shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer text-cyber-text-muted hover:text-cyber-primary transition-colors"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            window.scrollTo({
              top: aboutSection.offsetTop - 80,
              behavior: 'smooth',
            });
          }
        }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] mb-2 font-bold">Scroll Down</span>
        <HiArrowDown className="text-xl" />
      </motion.div>
    </section>
  );
}
