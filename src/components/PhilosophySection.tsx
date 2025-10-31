import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, TrendingUp, BarChart3 } from 'lucide-react';

const PhilosophySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const philosophyCards = [
    {
      icon: BookOpen,
      title: "Adam Smith → Distributed Systems",
      description: "Market coordination parallels microservice architecture. Individual services pursuing local optimization create emergent system-wide efficiency.",
      concept: "Invisible Hand of Architecture"
    },
    {
      icon: TrendingUp,
      title: "Hayek's Knowledge Problem → Software Architecture",
      description: "Centralized planning fails because no single architect possesses all knowledge. Distributed decision-making scales better than monoliths.",
      concept: "Distributed Knowledge"
    },
    {
      icon: BarChart3,
      title: "Evidence-Driven Iteration",
      description: "A/B testing, metrics, and observability over intuition. Systems thinking meets empirical validation in continuous improvement cycles.",
      concept: "Measure Everything"
    }
  ];

  return (
    <section
      id="philosophy"
      className="min-h-screen bg-[#0a0a0a] py-24 px-4 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-green-500/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-6xl md:text-7xl font-bold text-[#e4e4e7] mb-6 tracking-tight"
          >
            Philosophy & Method
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-[#a1a1aa] max-w-3xl mx-auto leading-relaxed"
          >
            Systems thinking meets economic philosophy. How market theories illuminate software architecture and organizational design.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {philosophyCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
                }}
                className="bg-[#141414] border border-white/10 rounded-xl p-8 group cursor-pointer relative overflow-hidden transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3b82f6]/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#3b82f6]" />
                    </div>
                    <div className="text-sm font-mono text-[#22c55e] mb-2 tracking-wide">
                      {card.concept}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#e4e4e7] mb-4 leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-[#a1a1aa] leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Terminal cursor */}
                  <div className="mt-4 flex items-center">
                    <span className="text-[#22c55e] font-mono text-sm">$</span>
                    <span className="ml-2 w-2 h-4 bg-[#22c55e] animate-pulse"></span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <div className="bg-[#141414] border border-white/10 rounded-xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"></div>
            
            <blockquote className="text-2xl md:text-3xl font-semibold text-[#e4e4e7] mb-6 leading-relaxed italic">
              "The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="text-[#a1a1aa] text-lg">
                <span className="font-semibold text-[#22c55e]">— F.A. Hayek</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;