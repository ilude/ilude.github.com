import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface SocialLink {
  name: string;
  url: string;
  description: string;
  icon: string;
  color: string;
}

const LinksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      name: 'Producer.ai',
      url: 'https://www.producer.ai/iLude',
      description: 'My digital domain where the beats and bytes collide',
      icon: '🎵',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ilude/',
      description: 'Professional networking (yes, this is the professional one)',
      icon: '💼',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ilude',
      description: 'Where code, chaos, and creativity meet',
      icon: '👨‍💻',
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gists',
      url: 'https://gist.github.com/ilude',
      description: 'Quick coding experiments and digital doodles',
      icon: '📝',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Glowing Circuit Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/images/glowing_circuit_board_close_up_dark_tech_background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect the <span className="text-cyan-400">Dots</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to explore more chaos, creativity, or just chat about why your uptime meter is broken? 
            Choose your adventure:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="group relative block"
            >
              <div className={`bg-slate-900/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                hoveredLink === link.name 
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center mr-4 text-xl`}>
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{link.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-cyan-400 text-sm">
                  <span>Visit</span>
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: hoveredLink === link.name ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Direct Communication Protocol</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            For the brave souls who want to bypass social media and go straight to the source. 
            Whether you want to discuss datacenter architecture, share a new song idea, 
            or just wondering why I called my computer "The Beast" - drop me a line.
          </p>
          
          <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
            <p className="text-cyan-400 font-mono text-sm">
              {`const greeting = "Hello there, fellow digital explorer!"`}<br/>
              {`console.log(greeting + " Ready for some chaos?");`}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Initiate Contact Protocol
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <p className="text-slate-400 text-sm mb-4">
            Built with React, TypeScript, TailwindCSS, and a healthy dose of caffeinated chaos.
          </p>
          <p className="text-slate-500 text-xs">
            © 2025 iLude | Synthetic Nonsense Orchestrator | All errors logged, all dreams virtualized.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LinksSection;