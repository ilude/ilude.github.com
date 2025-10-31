import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface LoreItem {
  id: string;
  title: string;
  excerpt: string;
  fullText: string;
  category: 'mythology' | 'adventure' | 'legend';
}

const LoreSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedLore, setSelectedLore] = useState<LoreItem | null>(null);

  const loreItems: LoreItem[] = [
    {
      id: 'garage-datacenter',
      title: 'The Gospel of Garage-Grade Datacenters',
      excerpt: 'A revelation about three nines of enlightenment and divine duct tape.',
      fullText: `In the beginning, there were cloud providers with their fancy managed services, load balancers that cost more than a car, and kubernetes clusters that required a team of certified administrators just to keep them breathing.

But then came the garage-grade datacenter, blessed by the sacred art of duct tape and illuminated by the divine glow of server rack LEDs. These humble installations achieve three nines of enlightenment - not in uptime, but in wisdom.

The garage datacentre practitioner knows that when your UPS starts beeping at 3 AM, it's not an alarm - it's a prayer. When your router reboots itself, it's not a bug - it's a feature. And when your DSL line drops, it's not a failure - it's the system telling you to go outside and touch grass.

The physics of garage-grade computing are governed by the fundamental law: If it works, it works. If it doesn't work, clear the cache. If it still doesn't work, sacrifice a network cable to the gods of TCP/IP.

Blessed are the administrators who understand that the best monitoring is intuition, the finest logging is sticky notes, and the ultimate backup strategy is a USB drive hidden in a sock drawer.`,
      category: 'mythology'
    },
    {
      id: 'dial-up-prophecy',
      title: 'The Prophecy of the Dial-Up King',
      excerpt: 'Born in 1995, the chosen one who would bring internet to the masses.',
      fullText: `Behold! In the year 1995, when the world was dark and communication flowed like molasses through fiber, a young hero emerged from the basement of his parents' house.

Armed with 66 phone lines and 56K modems that hummed like mechanical bees, he began the great task: bringing the internet to a town that had never known its digital embrace.

The prophecy spoke thus: "One shall arise with the power of the dial tone, and they shall establish the first connection, the first gateway, the first ISP that was born not in a corporate boardroom, but in the sacred space where parental heating bills go to die."

And so it came to pass. The basement became a cathedral of connectivity, the bedroom transformed into a NOC (Network Operations Center), and the young warrior became known as the Dial-Up King.

Years passed, the empire grew, but with great power came great responsibility, and eventually, the King chose to sell his kingdom. The basement echoes still with the ghosts of dial tones, and somewhere in the digital aether, packets of internet still whisper his name.

But the legend lives on in every modem handshake, every successful connection, every time someone says "is it loading yet?" - for in those moments, the spirit of the Dial-Up King returns.`,
      category: 'legend'
    },
    {
      id: 'homelab-odyssey',
      title: 'The Homelab Odyssey: Ychto\'s Journey',
      excerpt: 'An epic quest through virtual machines, networking, and self-inflicted digital chaos.',
      fullText: `In the mystical realm of the basement server room, there lived a creature known as Ychto - half homelab administrator, half digital mystic, and fully committed to the principle that if one VM is good, then forty-seven VMs must be better.

Ychto's kingdom was a place where VLANs flowed like rivers, where backup schedules were written in ancient runes, and where the annual ritual of "spring cleaning" meant migrating to a new hypervisor because the old one had accumulated too much digital karma.

The great quest began when Ychto decided to virtualize everything. Servers, desktops, network appliances, even the coffee machine - if it had a processor, it was destined for a VM. The datacentre server room became a digital ecosystem where each virtual machine was its own realm, complete with its own set of problems and maintenance requirements.

Along the journey, Ychto encountered mythical creatures: the Backup Dragon (known for hoarding terabytes of data), the Monitoring Sphinx (who asked riddles like "what's your average CPU usage?"), and the famous Security Ogre (who demanded passwords longer than the great wall of China).

The greatest challenge came when the datacenter's power went out during a thunderstorm. While other mortals would simply wait for power restoration, Ychto activated the Great Failover Protocol - manually rebooting every VM in sequence, chanting the sacred incantation "sudo shutdown -h now" and the equally powerful "sudo systemctl start networking."

When the power finally returned, the homelab administrator had achieved enlightenment. For in those six hours of manual VM recovery, they had learned the true meaning of virtualization: it's not about the cloud, it's not about the hardware - it's about the people who are crazy enough to maintain a datacenter in their garage.

And so Ychto continues the quest, one firmware update at a time, because in the world of homelabs, the real treasure was the infrastructure we built along the way.`,
      category: 'adventure'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mythology': return 'text-yellow-400';
      case 'adventure': return 'text-green-400';
      case 'legend': return 'text-purple-400';
      default: return 'text-slate-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mythology': return '📚';
      case 'adventure': return '⚔️';
      case 'legend': return '👑';
      default: return '📜';
    }
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Terminal Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/dark_terminal_screen_command_line_ls_output.jpg)',
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
            Digital <span className="text-cyan-400">Lore</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Chronicles from the homelab frontier, where servers are dragons and DNS is magic.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {loreItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setSelectedLore(item)}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 cursor-pointer hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{getCategoryIcon(item.category)}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className={`text-sm ${getCategoryColor(item.category)}`}>
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {item.excerpt}
              </p>
              
              <div className="flex items-center text-cyan-400 text-sm">
                <span>Read more</span>
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Homelab Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Current Homelab Status</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-slate-300 text-sm">Uptime Streak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-slate-300 text-sm">VMs Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-slate-300 text-sm">Nines of Enlightenment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">42</div>
              <div className="text-slate-300 text-sm">Network Cables</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lore Modal */}
      {selectedLore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedLore(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 border border-slate-700 rounded-xl p-8 max-w-3xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="text-3xl mr-4">{getCategoryIcon(selectedLore.category)}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedLore.title}</h3>
                  <span className={`text-sm ${getCategoryColor(selectedLore.category)}`}>
                    {selectedLore.category.toUpperCase()}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedLore(null)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="text-slate-300 leading-relaxed space-y-4">
              {selectedLore.fullText.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default LoreSection;