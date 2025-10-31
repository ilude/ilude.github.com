import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Eye, Network } from 'lucide-react';

const ArchitectureSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  const architectureConcepts = [
    {
      icon: Settings,
      title: "Inversion of Control for Governance",
      description: "Instead of centralized control dictating behavior, define interfaces and let components self-organize. Governance through protocols, not personalities.",
      principle: "S.O.L.I.D",
      details: "Single Responsibility: Each governance layer has one job. Open/Closed: Extensible rules without breaking existing systems. Liskov Substitution: Interchangeable authority mechanisms."
    },
    {
      icon: Eye,
      title: "Transparent Rules vs Centralized Authority",
      description: "Code over politics. Measurable metrics over subjective judgment. Observable behavior over opaque decision-making processes.",
      principle: "Observable",
      details: "All system state changes are logged. Decision criteria are publicly documented. Authority is distributed across verifiable rules rather than concentrated in individuals."
    },
    {
      icon: Network,
      title: "Distributed Systems Thinking",
      description: "Governance scales through federation, not hierarchy. Local autonomy with global coordination. Fault tolerance through redundancy and graceful degradation.",
      principle: "Federated",
      details: "Each node (community/organization) maintains local sovereignty while participating in larger network effects. No single point of failure in authority structures."
    }
  ];

  return (
    <section
      id="architecture"
      className="min-h-screen bg-[#000000] py-24 px-4 relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-16 right-20 w-32 h-32 border-2 border-[#22c55e]/30 rounded-lg rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-24 left-16 w-24 h-24 border border-[#3b82f6]/40 rounded-full animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="mb-8"
          >
            <span className="font-mono text-[#22c55e] text-lg tracking-wide">
              ~/governance/principles
            </span>
          </motion.div>
          
          <motion.h2
            variants={cardVariants}
            className="text-6xl md:text-8xl font-bold text-[#e4e4e7] mb-8 tracking-tight"
          >
            Architecture of
            <span className="block text-[#3b82f6] mt-2">Everything</span>
          </motion.h2>
          
          <motion.p
            variants={cardVariants}
            className="text-xl text-[#a1a1aa] max-w-4xl mx-auto leading-relaxed"
          >
            Applying SOLID principles and systems architecture patterns to governance, organizations, and social coordination. 
            <span className="text-[#22c55e] font-mono ml-2">Building scalable human systems.</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {architectureConcepts.map((concept, index) => {
            const IconComponent = concept.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)"
                }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 lg:p-12 group relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 via-transparent to-[#22c55e]/5 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-20 h-20 bg-[#3b82f6]/20 rounded-xl flex items-center justify-center mr-6 group-hover:bg-[#3b82f6]/30 transition-colors duration-300">
                          <IconComponent className="w-10 h-10 text-[#3b82f6]" />
                        </div>
                        <div>
                          <div className="text-sm font-mono text-[#22c55e] mb-2 tracking-wide">
                            {concept.principle}
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-[#e4e4e7] leading-tight">
                            {concept.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-[#a1a1aa] text-lg leading-relaxed mb-6">
                        {concept.description}
                      </p>
                      
                      <div className="bg-[#0a0a0a] border border-white/5 rounded-lg p-4">
                        <div className="text-sm text-[#71717a] font-mono leading-relaxed">
                          {concept.details}
                        </div>
                      </div>
                      
                      {/* Terminal indicator */}
                      <div className="mt-6 flex items-center">
                        <span className="text-[#22c55e] font-mono text-sm">❯</span>
                        <span className="ml-2 text-[#71717a] font-mono text-sm">
                          implementing...
                        </span>
                        <span className="ml-2 w-2 h-4 bg-[#22c55e] animate-pulse"></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual accent */}
                <div className="flex-shrink-0 lg:w-64">
                  <div className={`h-64 w-full lg:w-64 rounded-2xl bg-gradient-to-br ${
                    index === 0 ? 'from-[#3b82f6]/20 to-[#22c55e]/10' :
                    index === 1 ? 'from-[#22c55e]/20 to-[#3b82f6]/10' :
                    'from-[#3b82f6]/20 via-[#22c55e]/10 to-[#3b82f6]/20'
                  } border border-white/10 relative overflow-hidden`}>
                    {/* Animated elements */}
                    <div className="absolute inset-4 border border-white/20 rounded-xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-[#3b82f6] rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#22c55e] rounded-full animate-ping"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary quote */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-[#141414] via-[#1e1e1e] to-[#141414] border border-white/10 rounded-2xl p-12 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3b82f6] via-[#22c55e] to-[#3b82f6]"></div>
            
            <div className="text-lg font-mono text-[#22c55e] mb-4">
              $ cat /dev/philosophy/core_principle
            </div>
            
            <p className="text-2xl md:text-3xl font-semibold text-[#e4e4e7] leading-relaxed">
              "Systems that govern humans should be architected with the same principles as systems that serve them: 
              <span className="text-[#3b82f6]"> observable, composable, and fault-tolerant.</span>"
            </p>
            
            <div className="mt-6 text-[#a1a1aa] font-mono">
              — Design patterns for social scalability
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default ArchitectureSection;