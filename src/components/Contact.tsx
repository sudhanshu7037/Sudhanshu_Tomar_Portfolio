import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

interface ContactInfo {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const contactDetails: ContactInfo[] = [
    {
      icon: <FaEnvelope className="text-cyber-primary text-lg" />,
      label: 'Email Support',
      value: 'tomarsudhanshu7037@gmail.com',
      href: 'mailto:tomarsudhanshu7037@gmail.com',
    },
    {
      icon: <FaPhoneAlt className="text-cyber-secondary text-lg" />,
      label: 'Direct Line',
      value: '+91 9389586136',
      href: 'tel:+9389586136',
    },
    {
      icon: <FaMapMarkerAlt className="text-cyber-primary text-lg" />,
      label: 'Current Base',
      value: 'Noida , India',
    },
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '4e794608-5a65-4b5a-b157-070966a69932',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cyber-bg-sec/50 border-t border-cyber-border/40 relative">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyber-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyber-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-cyber-primary text-xs md:text-sm tracking-[0.2em] uppercase font-bold block mb-2">
              // COMMUNICATE SYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
              Get In Touch
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Details Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white font-sans mb-4">
                Let's discuss a project!
              </h3>
              <p className="text-cyber-text-muted text-base leading-relaxed font-sans">
                Feel free to reach out if you are looking to hire a full-stack developer, want to collaborate on an project, or just want to chat about engineering patterns.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((info, idx) => {
                const CardContent = (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyber-bg border border-cyber-border/40 rounded flex items-center justify-center shadow-inner">
                      {info.icon}
                    </div>
                    <div>
                      <span className="font-sans text-xs text-cyber-text-muted uppercase tracking-wider block">
                        {info.label}
                      </span>
                      <span className="font-sans text-sm md:text-base font-semibold text-white">
                        {info.value}
                      </span>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={idx}
                    href={info.href}
                    className="glass-card glass-card-hover p-4 rounded block transition-all duration-300"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={idx} className="glass-card p-4 rounded border border-cyber-border/20">
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded relative space-y-6">
              {/* Outer light highlight indicator */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-cyber-primary rounded-full shadow-[0_0_8px_#46F5B4]" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs text-cyber-secondary font-bold uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-cyber-bg border ${
                      errors.name ? 'border-red-500' : 'border-cyber-border/40'
                    } rounded text-white font-sans text-sm focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_10px_rgba(70,245,180,0.2)] transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-400 text-xs font-sans">{errors.name}</span>}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-xs text-cyber-secondary font-bold uppercase tracking-wider block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-cyber-bg border ${
                      errors.email ? 'border-red-500' : 'border-cyber-border/40'
                    } rounded text-white font-sans text-sm focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_10px_rgba(70,245,180,0.2)] transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs font-sans">{errors.email}</span>}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="font-mono text-xs text-cyber-secondary font-bold uppercase tracking-wider block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-cyber-bg border ${
                    errors.subject ? 'border-red-500' : 'border-cyber-border/40'
                  } rounded text-white font-sans text-sm focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_10px_rgba(70,245,180,0.2)] transition-all`}
                  placeholder="Project inquiry / Job offer"
                />
                {errors.subject && <span className="text-red-400 text-xs font-sans">{errors.subject}</span>}
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs text-cyber-secondary font-bold uppercase tracking-wider block">
                  Transmission Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-cyber-bg border ${
                    errors.message ? 'border-red-500' : 'border-cyber-border/40'
                  } rounded text-white font-sans text-sm focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_10px_rgba(70,245,180,0.2)] transition-all resize-none`}
                  placeholder="Type details of your inquiry here..."
                />
                {errors.message && <span className="text-red-400 text-xs font-sans">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-cyber-primary to-cyber-secondary hover:from-cyber-secondary hover:to-cyber-primary text-black font-bold font-sans rounded tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(70,245,180,0.5)] transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-b-2 border-black rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Transmit Message
                  </>
                )}
              </button>

              {/* Alert Feedback Messaging */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-cyber-primary/10 border border-cyber-primary text-cyber-primary text-sm font-sans rounded"
                  >
                    System Alert: Message transmitted successfully via Web3Forms protocol.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-red-500/10 border border-red-500 text-red-400 text-sm font-sans rounded"
                  >
                    System Alert: Transmission failed. Check your network or access key configuration.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
