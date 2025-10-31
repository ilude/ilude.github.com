import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChaosMeter = () => {
  const [chaosLevel, setChaosLevel] = useState(0);
  const [status, setStatus] = useState('STABLE');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Random chaos level generator
    const updateChaos = () => {
      const newLevel = Math.floor(Math.random() * 100);
      setChaosLevel(newLevel);
      
      if (newLevel < 30) {
        setStatus('STABLE');
      } else if (newLevel < 60) {
        setStatus('ELEVATED');
      } else if (newLevel < 85) {
        setStatus('HIGH');
      } else {
        setStatus('CRITICAL');
      }
    };

    // Update every 3-5 seconds
    const interval = setInterval(updateChaos, 3000 + Math.random() * 2000);
    updateChaos(); // Initial update

    // Show after mount
    setTimeout(() => setIsVisible(true), 500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case 'STABLE': return '#22c55e';
      case 'ELEVATED': return '#f59e0b';
      case 'HIGH': return '#ef4444';
      case 'CRITICAL': return '#dc2626';
      default: return '#22c55e';
    }
  };

  const getBarColor = () => {
    if (chaosLevel < 30) return '#22c55e';
    if (chaosLevel < 60) return '#f59e0b';
    if (chaosLevel < 85) return '#ef4444';
    return '#dc2626';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-4 right-4 z-50 bg-[#0a0a0a] border border-white/20 rounded-lg p-4 min-w-[200px] shadow-lg"
          style={{
            boxShadow: `0 0 20px ${getStatusColor()}33`
          }}
        >
          <div className="font-mono text-xs space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-[#a1a1aa]">CHAOS METER</span>
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: getStatusColor() }}
              ></div>
            </div>
            
            {/* Status */}
            <div className="flex items-center justify-between">
              <span className="text-[#71717a]">STATUS:</span>
              <span 
                className="font-bold"
                style={{ color: getStatusColor() }}
              >
                {status}
              </span>
            </div>
            
            {/* Level */}
            <div className="flex items-center justify-between">
              <span className="text-[#71717a]">LEVEL:</span>
              <span className="text-[#e4e4e7]">{chaosLevel}%</span>
            </div>
            
            {/* Visual bar */}
            <div className="space-y-2">
              <div className="h-2 bg-[#141414] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${chaosLevel}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ backgroundColor: getBarColor() }}
                />
              </div>
              
              {/* ASCII bar representation */}
              <div className="text-[10px] tracking-wider">
                {Array.from({ length: 20 }, (_, i) => {
                  const threshold = (i + 1) * 5;
                  return chaosLevel >= threshold ? '█' : '░';
                }).join('')}
              </div>
            </div>
            
            {/* Random system message */}
            <div className="text-[10px] text-[#71717a] italic">
              {status === 'CRITICAL' && "All hands on deck! 🚨"}
              {status === 'HIGH' && "Monitoring closely..."}
              {status === 'ELEVATED' && "Slight turbulence"}
              {status === 'STABLE' && "Systems nominal"}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChaosMeter;