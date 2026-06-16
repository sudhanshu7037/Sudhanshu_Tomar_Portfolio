import type { MouseEvent } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-cyber-bg border-t border-cyber-border/40 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-sec/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Brand Logo & Tagline */}
        <div className="text-center md:text-left">
          <span className="text-white font-sans font-extrabold tracking-widest text-lg">
            ST<span className="text-cyber-primary">.DEV</span>
          </span>
          <p className="text-cyber-text-muted text-xs font-mono mt-2 uppercase tracking-wider">
            // Full Stack MERN Systems Architect
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavLinkClick(e, `#${item.toLowerCase()}`)}
              className="font-sans text-xs md:text-sm uppercase tracking-widest text-cyber-text-muted hover:text-cyber-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Connections & Action Controls */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-lg text-cyber-text-muted">
            <a
              href="https://github.com/sudhanshu7037"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-primary hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_#46F5B4]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sudhanshusinghtomar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-primary hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_#46F5B4]"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:tomarsudhanshu7037@gmail.com"
              className="hover:text-cyber-primary hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_#46F5B4]"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Up Scroll Button */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 bg-cyber-bg-sec border border-cyber-border/40 text-cyber-primary hover:text-black hover:bg-cyber-primary hover:border-transparent flex items-center justify-center rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(70,245,180,0.5)]"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>

      {/* Copyright info row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-cyber-border/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cyber-text-muted relative z-10">
        <span>
          © {currentYear} Dessign And Developed By Sudhanshu Tomar. All systems operational.
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse shadow-[0_0_6px_#46F5B4]" />
          SECURE PROTOCOL ENGAGED
        </span>
      </div>
    </footer>
  );
}
