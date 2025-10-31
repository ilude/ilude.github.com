import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [typewriterText, setTypewriterText] = useState('');
  const fullText = '1995. Age 20. Parents\' basement. 66 phone lines. 56K modems.';

  useEffect(() => {
    if (inView) {
      let index = 0;
      const timer = setInterval(() => {
        setTypewriterText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
        }
      }, 80);
      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Circuit Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/circuit_board_technology_closeup_glowing_dark_aesthetic.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-blue-400">Legend</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Before there was fiber optic, before there was broadband, there was the basement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <h3 className="text-2xl font-bold text-white">The ISP Story</h3>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <p>
                At the tender age of 20, I orchestrated something that would make modern internet 
                infrastructure weep with envy: a dial-up ISP operation that ran from my parents' basement.
              </p>
              
              <p>
                Sporting a T1 line, 66 phone lines and external 56K modems humming in harmony, on June 10th 1995, I became Butler PA's first 
                internet service provider. A task that taught me more about infrastructure than any textbook ever could.
              </p>
              
              <p className="text-slate-400 italic">
                Eventually sold out around 1998. Some say the basement still echoes with dial-up tones and the 
                screeching sounds of Windows 95 connecting...
              </p>
            </div>
          </motion.div>

          {/* Dual Persona */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Day Job */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Day Job: Senior DevOps Engineer
              </h4>
              <p className="text-slate-300 text-sm">
                Keeping production systems alive, debugging midnight incidents, and ensuring 
                that when things break at 3 AM, they're my calls to make - not receive.
              </p>
            </div>

            {/* Creative Side */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Creative Process
              </h4>
              <p className="text-slate-300 text-sm">
                If it hums, blinks, or throws an error in the wee hours of the morning, I've probably written an AI generated ballad about it. 
                Between Terraform and folk rock, muttering about Proxmox logs.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-cyan-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Philosophy
              </h4>
              <p className="text-slate-300 text-sm">
                Treat creative projects like patch panels with labels, loopback tests, and markdown backups. 
                When duct tape counts as divine intervention, you know you're home.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl md:text-3xl text-slate-300 font-light italic max-w-4xl mx-auto">
            "Any normal person would have stopped at this point, but I'm not a normal person, I'm a geek beyond all reason!"
          </blockquote>
          <p className="text-slate-500 mt-4 font-mono text-sm">— Me</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;