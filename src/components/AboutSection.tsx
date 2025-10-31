import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterText2, setTypewriterText2] = useState('');
  const fullText = '1995. Age 20. Parents\' basement. 66 phone lines. 56K modems.';
  const fullText2 = '2002. Butler, PA. Red Honda Prelude. Gentoo Linux. 4×40 LCD.';

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
      
      // Start second typewriter with delay
      setTimeout(() => {
        let index2 = 0;
        const timer2 = setInterval(() => {
          setTypewriterText2(fullText2.slice(0, index2));
          index2++;
          if (index2 > fullText2.length) {
            clearInterval(timer2);
          }
        }, 80);
      }, 1000);
      
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
            Two origin stories. One pattern: if it didn't exist, build it.
          </p>
        </motion.div>

        {/* Origin Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* ISP Story */}
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
              <p className="font-mono text-sm text-cyan-400">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
              
              <p>
                Before broadband and cloud consoles, there was a basement in Butler, Pennsylvania — and a 20-year-old with more ambition than rack space.
              </p>
              
              <p>
                I spent months threading phone cables through floor joists, labeling lines with masking tape, and wiring custom DB25 connectors. 
                When the final 66 lines came alive on June 10th, 1995, the house hummed like a small datacenter powered by Dr Pepper and dial tone.
              </p>
              
              <p>
                Through that tangle of RJ-11s and beige boxes ran Butler's first Internet Service Provider - bootstrapped on a single T1 line 
                and an answering-machine voicemail for "tech support." Every dial-up chirp meant another local crossing into the wider web, 
                one screeching handshake at a time.
              </p>
              
              <p>
                I learned more about uptime, routing, and human patience in that basement than any textbook could teach. When the power flickered, 
                I learned redundancy. When the lines tangled, I learned cable management. When someone called to ask why "the Internet is slow," 
                I learned diplomacy.
              </p>
              
              <p className="text-slate-400 italic">
                By 1998, I sold the operation, but sometimes I swear the basement still whispers those connection tones —
                that perfect static-melody of 56K modems singing in unison.
              </p>
            </div>
          </motion.div>

          {/* iLude Origin Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse"></div>
              <h3 className="text-2xl font-bold text-white">Origin Myth of iLude</h3>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <p className="font-mono text-sm text-cyan-400">
                {typewriterText2}
                <span className="animate-pulse">|</span>
              </p>
              
              <p>
                In the quiet garage light of 2002 Butler, Pennsylvania, a red 1995 Honda Prelude Si idled like a test bench waiting for a kernel to compile. Inside, wires coiled like nervous code, a DC-DC converter hummed, and a Gentoo Linux board the size of a sandwich decided it would boot — eventually.
              </p>
              
              <p>
                The dash glowed with the faint green of a 4×40 LCD matrix, text-only and proud. Across it scrolled:<br />
                <span className="font-mono text-green-400">iLude Player v0.33333</span>
              </p>
              
              <p>
                No touchscreens. No Bluetooth. Just Java code, eight buttons, and a scroll wheel soldered to a dream.
                When it finally came to life and Billy Joel's "We Didn't Start the Fire" crackled through a Sony head unit, the world outside kept turning — but inside that Prelude, something new existed: a car with a soul written in code.
              </p>
              
              <p>
                Friends couldn't believe it. Some called it insane; others called it genius.<br />
                He called it fun.
              </p>
              
              <p className="text-slate-400 italic">
                That small act of defiance — proving you could make digital music sing from a Linux box on wheels — became more than a project. It became a pattern: if it didn't exist, he'd build it. Concrete countertops, homegrown servers, whatever came next.
              </p>
              
              <p className="text-center mt-6 text-lg font-bold text-red-400">
                And so the name stuck.<br />
                <span className="text-2xl text-white">iLude.</span><br />
                <span className="text-sm text-slate-400">Not just a car. A statement.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Who I Am Today */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
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