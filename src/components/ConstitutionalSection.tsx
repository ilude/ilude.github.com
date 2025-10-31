import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitBranch, Users, Scale, Code2 } from 'lucide-react';

const ConstitutionalSection = () => {
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

  const governanceFeatures = [
    {
      icon: GitBranch,
      title: "Forking Rights",
      description: "Communities can fork governance rules when consensus breaks down. No more permanent schisms—just version control for social contracts.",
      status: "RFC Draft"
    },
    {
      icon: Code2,
      title: "Pull Request Democracy",
      description: "Propose changes through transparent review process. Merge governance updates with the same rigor as code changes.",
      status: "In Development"
    },
    {
      icon: Users,
      title: "Stakeholder Commits",
      description: "Weight voting by actual contribution and skin-in-the-game. Git history shows who built what, when, and how much.",
      status: "Beta Testing"
    },
    {
      icon: Scale,
      title: "Diff-based Arbitration",
      description: "Resolve conflicts by examining exact changes and their impacts. Show, don't tell. Evidence over authority.",
      status: "Proof of Concept"
    }
  ];

  return (
    <section
      id="constitutional"
      className="min-h-screen bg-[#0a0a0a] py-24 px-4 relative overflow-hidden"
    >
      {/* Background terminal patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="font-mono text-xs text-[#22c55e] absolute top-20 left-10 space-y-2">
          <div>$ git log --oneline governance/</div>
          <div>a1b2c3d feat: implement stakeholder voting</div>
          <div>e4f5g6h fix: resolve consensus deadlock</div>
          <div>h7i8j9k docs: update governance README</div>
        </div>
        <div className="font-mono text-xs text-[#3b82f6] absolute bottom-32 right-16 space-y-2">
          <div>$ diff --stat old_gov new_gov</div>
          <div>transparency.md | +47 -12</div>
          <div>voting_weight.js | +23 -8</div>
          <div>consensus.py | +15 -0</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="mb-8"
          >
            <span className="font-mono text-[#22c55e] text-lg tracking-wide">
              ~/governance/experimental
            </span>
          </motion.div>
          
          <motion.h2
            variants={cardVariants}
            className="text-5xl md:text-7xl font-bold text-[#e4e4e7] mb-6 tracking-tight"
          >
            Constitutional
            <span className="block text-[#3b82f6] mt-2">Development</span>
          </motion.h2>
          
          <motion.p
            variants={cardVariants}
            className="text-xl text-[#a1a1aa] max-w-4xl mx-auto leading-relaxed mb-8"
          >
            GitHub-inspired governance for communities. Version control for social contracts. 
            <span className="text-[#22c55e] font-mono"> Treating democracy like software development.</span>
          </motion.p>

          <motion.div
            variants={cardVariants}
            className="bg-[#141414] border border-white/10 rounded-xl p-6 max-w-3xl mx-auto"
          >
            <div className="text-left font-mono text-sm">
              <div className="text-[#22c55e] mb-2">$ git show HEAD:vision.md</div>
              <div className="text-[#a1a1aa] leading-relaxed">
                "What if communities could fork, merge, and iterate on governance structures 
                with the same transparency and collaboration tools that built the internet?"
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {governanceFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)"
                }}
                className="bg-[#141414] border border-white/10 rounded-xl p-8 group cursor-pointer relative overflow-hidden"
              >
                {/* Status indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-mono ${
                    feature.status === 'Beta Testing' ? 'bg-[#22c55e]/20 text-[#22c55e]' :
                    feature.status === 'In Development' ? 'bg-[#3b82f6]/20 text-[#3b82f6]' :
                    feature.status === 'RFC Draft' ? 'bg-[#f59e0b]/20 text-[#f59e0b]' :
                    'bg-[#a1a1aa]/20 text-[#a1a1aa]'
                  }`}>
                    {feature.status}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#22c55e]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#22c55e]" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#e4e4e7] mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#a1a1aa] leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Terminal prompt */}
                  <div className="flex items-center text-sm">
                    <span className="text-[#22c55e] font-mono">❯</span>
                    <span className="ml-2 text-[#71717a] font-mono">
                      git status --feature
                    </span>
                    <span className="ml-2 w-2 h-4 bg-[#22c55e] animate-pulse"></span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Principles Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={cardVariants}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-[#e4e4e7] mb-6">
              Core Principles
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-[#3b82f6] font-mono text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e4e4e7] mb-2">
                    Transparent Authority vs Distributed Rules
                  </h4>
                  <p className="text-[#a1a1aa] leading-relaxed">
                    Make power structures as transparent as open source code. 
                    Authority should be auditable, not opaque.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#22c55e]/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-[#22c55e] font-mono text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e4e4e7] mb-2">
                    Measurable vs Authoritative Control
                  </h4>
                  <p className="text-[#a1a1aa] leading-relaxed">
                    Decisions based on data and observable outcomes, 
                    not personality cults or charismatic authority.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#f59e0b]/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-[#f59e0b] font-mono text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#e4e4e7] mb-2">
                    Evolutionary, Not Revolutionary
                  </h4>
                  <p className="text-[#a1a1aa] leading-relaxed">
                    Incremental improvements through pull requests, 
                    not complete system rewrites that break everything.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            className="bg-[#141414] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-[#22c55e]"></div>
            
            <div className="font-mono text-sm space-y-4">
              <div className="text-[#22c55e]">
                // Example: Community governance repository
              </div>
              
              <div className="text-[#a1a1aa]">
                <span className="text-[#3b82f6]">const</span> governance = {'{'}
              </div>
              
              <div className="ml-4 space-y-2 text-[#a1a1aa]">
                <div>
                  <span className="text-[#22c55e]">voting_weight</span>: contributions.map(c {'=>'} c.impact),
                </div>
                <div>
                  <span className="text-[#22c55e]">transparency</span>: {'"all_decisions_logged"'},
                </div>
                <div>
                  <span className="text-[#22c55e]">forking_rights</span>: <span className="text-[#3b82f6]">true</span>,
                </div>
                <div>
                  <span className="text-[#22c55e]">consensus</span>: {'"rough_consensus_running_code"'},
                </div>
                <div>
                  <span className="text-[#22c55e]">authority</span>: {'"derived_from_competence"'}
                </div>
              </div>
              
              <div className="text-[#a1a1aa]">{'}'}</div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-[#71717a] text-xs">
                  Last commit: 2 minutes ago by @systems_thinker
                </div>
                <div className="text-[#71717a] text-xs">
                  "feat: add stakeholder-weighted voting algorithm"
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <div className="bg-[#000000] border border-[#3b82f6]/30 rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 via-transparent to-[#22c55e]/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#e4e4e7] mb-4">
                Ready to Fork Democracy?
              </h3>
              <p className="text-[#a1a1aa] mb-8 leading-relaxed">
                These are experimental concepts in governance engineering. 
                The goal: make human coordination as robust and transparent as our best software systems.
              </p>
              
              <div className="font-mono text-sm text-[#22c55e]">
                $ git clone https://github.com/governance/constitutional-dev.git
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstitutionalSection;