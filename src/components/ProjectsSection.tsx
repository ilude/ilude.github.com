import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'planned' | 'ongoing';
  type: 'song' | 'lore' | 'project';
}

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'chronicles-ychto',
      title: 'Chronicles Ychto and the Yolo Colo',
      description: 'An epic mythic saga of homelab adventures, where servers are dragons and DNS records are ancient runes.',
      tags: ['Epic Saga', 'Homelab Mythology', 'Lore'],
      status: 'ongoing',
      type: 'lore'
    },
    {
      id: 'openstack-dreamin',
      title: 'OpenStack Dreamin\'',
      description: 'A haunting ballad about cloud infrastructure, written during a particularly memorable OpenStack deployment.',
      tags: ['Song', 'Infrastructure', 'Cloud'],
      status: 'completed',
      type: 'song'
    },
    {
      id: 'basement-isp',
      title: 'Basement ISP (The Dial-Up King)',
      description: 'The anthem of my youth, celebrating the golden age of dial-up internet and 56K modems.',
      tags: ['Song', 'Retro Tech', 'ISP'],
      status: 'completed',
      type: 'song'
    },
    {
      id: 'cyberpunk-duck',
      title: 'Cyberpunk Duck',
      description: 'A synthwave adventure featuring a duck that learned to code and now handles all the QA.',
      tags: ['Song', 'Cyberpunk', 'AI'],
      status: 'completed',
      type: 'song'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'ongoing': return 'text-blue-400';
      default: return 'text-slate-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'song': return '🎵';
      case 'lore': return '📖';
      case 'project': return '⚙️';
      default: return '📁';
    }
  };

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Network Visualization */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/abstract_digital_network_glowing_nodes_dark_background.jpg)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-purple-400">Creative</span> Output
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Where technical chaos meets creative genius. Songs, sagas, and digital folklore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`bg-slate-900/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                hoveredProject === project.id 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white pr-4">{project.title}</h3>
                <span className="text-2xl">{getTypeIcon(project.type)}</span>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm font-mono ${getStatusColor(project.status)}`}>
                  {project.status === 'ongoing' ? '• IN PROGRESS' : project.status.toUpperCase()}
                </span>
                <motion.div
                  animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-purple-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Creative Process</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Observe</h4>
              <p className="text-slate-300 text-sm">
                When servers crash at midnight, patterns emerge. Technical chaos becomes creative fuel.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Synthesize</h4>
              <p className="text-slate-300 text-sm">
                Feed technical concepts into the word-salad centrifuge and let the humor settle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Create</h4>
              <p className="text-slate-300 text-sm">
                Jar the best chunks for songs, sagas, and the occasional codebase comment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;