import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UptimeCounter = () => {
  const [uptime, setUptime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    // Site launch date (you can adjust this)
    const launchDate = new Date('2024-01-01T00:00:00Z');
    
    const updateUptime = () => {
      const now = new Date();
      const diff = now.getTime() - launchDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setUptime({ days, hours, minutes, seconds });
    };

    // Update every second
    const interval = setInterval(updateUptime, 1000);
    updateUptime(); // Initial update

    // Show after mount
    setTimeout(() => setIsVisible(true), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursor(prev => !prev);
    }, 800);

    return () => clearInterval(cursorInterval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50 bg-[#0a0a0a] border border-white/20 rounded-lg p-4 min-w-[220px] shadow-lg"
          style={{
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)'
          }}
        >
          <div className="font-mono text-xs space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-[#a1a1aa]">SYSTEM UPTIME</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse mr-2"></div>
                <span className="text-[#22c55e]">ONLINE</span>
              </div>
            </div>
            
            {/* Uptime display */}
            <div className="space-y-2">
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-[#e4e4e7] text-lg font-bold">
                    {formatNumber(uptime.days)}
                  </div>
                  <div className="text-[#71717a] text-[10px]">DAYS</div>
                </div>
                <div>
                  <div className="text-[#e4e4e7] text-lg font-bold">
                    {formatNumber(uptime.hours)}
                  </div>
                  <div className="text-[#71717a] text-[10px]">HRS</div>
                </div>
                <div>
                  <div className="text-[#e4e4e7] text-lg font-bold">
                    {formatNumber(uptime.minutes)}
                  </div>
                  <div className="text-[#71717a] text-[10px]">MIN</div>
                </div>
                <div>
                  <div className="text-[#e4e4e7] text-lg font-bold">
                    {formatNumber(uptime.seconds)}
                  </div>
                  <div className="text-[#71717a] text-[10px]">SEC</div>
                </div>
              </div>
              
              {/* Terminal-style display */}
              <div className="bg-[#141414] border border-white/10 rounded p-2 text-[10px]">
                <div className="text-[#22c55e] mb-1">
                  $ uptime -p
                </div>
                <div className="text-[#e4e4e7] flex items-center">
                  up {uptime.days} days, {uptime.hours} hours, {uptime.minutes} minutes
                  <span className={`ml-1 w-2 h-3 bg-[#22c55e] ${cursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="text-[10px] text-[#71717a] space-y-1">
              <div className="flex justify-between">
                <span>Load avg:</span>
                <span className="text-[#22c55e]">0.42, 0.38, 0.31</span>
              </div>
              <div className="flex justify-between">
                <span>Processes:</span>
                <span className="text-[#3b82f6]">127 total</span>
              </div>
              <div className="flex justify-between">
                <span>Memory:</span>
                <span className="text-[#f59e0b]">73% used</span>
              </div>
            </div>
            
            {/* Service status */}
            <div className="border-t border-white/10 pt-2">
              <div className="text-[10px] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[#71717a]">nginx</span>
                  <span className="text-[#22c55e]">●</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#71717a]">postgres</span>
                  <span className="text-[#22c55e]">●</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#71717a]">redis</span>
                  <span className="text-[#22c55e]">●</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UptimeCounter;