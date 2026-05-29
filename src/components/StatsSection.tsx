import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CountingNumberProps {
  value: number;
  suffix?: string;
  durationMs?: number;
}

function CountingNumber({ value, suffix = '', durationMs = 1500 }: CountingNumberProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = durationMs;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCurrent(end);
      } else {
        setCurrent(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, durationMs]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <div id="stats-section-container" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      {/* Card 1: 150+ Projects Delivered */}
      <motion.div
        id="stat-card-projects"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="relative overflow-hidden rounded-2xl border border-orange-500/15 bg-gradient-to-br from-orange-950/20 to-black/20 p-6 md:p-8 flex flex-col justify-between h-[180px] group cursor-pointer"
      >
        {/* Glow effect backdrops */}
        <div id="stat-card-glow-orange-back" className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-300" />
        
        {/* Top bar with Arrow up right */}
        <div id="stat-card-projects-top" className="flex justify-between items-start">
          <span id="stat-card-projects-meta" className="text-xs font-mono text-orange-500/60 uppercase tracking-widest">
            Milestones
          </span>
          <div id="stat-card-projects-arrow-wrapper" className="p-1.5 rounded-full bg-orange-950/40 border border-orange-500/20 text-orange-400 group-hover:text-white group-hover:bg-orange-500 group-hover:border-transparent transition-all duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Big Number and descriptor */}
        <div id="stat-card-projects-bottom" className="mt-auto space-y-3">
          <h3 id="stat-card-projects-value" className="text-4xl md:text-5xl font-semibold tracking-tighter text-white font-sans">
            <CountingNumber value={150} suffix="+" />
          </h3>
          <div id="stat-card-projects-line-wrapper">
            {/* The horizontal decorative bar */}
            <div id="stat-card-projects-accent-line" className="w-12 h-[1px] bg-gradient-to-r from-orange-500 to-transparent mb-2" />
            <p id="stat-card-projects-label" className="text-sm font-medium tracking-wide text-zinc-400 leading-snug">
              Projects delivered
            </p>
          </div>
        </div>
      </motion.div>

      {/* Card 2: 98% Client Satisfaction */}
      <motion.div
        id="stat-card-satisfaction"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="relative overflow-hidden rounded-2xl border border-red-500/15 bg-gradient-to-br from-red-950/20 to-black/20 p-6 md:p-8 flex flex-col justify-between h-[180px] group cursor-pointer"
      >
        {/* Glow effect backdrops */}
        <div id="stat-card-glow-red-back" className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all duration-300" />

        {/* Top bar with Arrow up right */}
        <div id="stat-card-satisfaction-top" className="flex justify-between items-start">
          <span id="stat-card-satisfaction-meta" className="text-xs font-mono text-red-500/60 uppercase tracking-widest">
            Performance
          </span>
          <div id="stat-card-satisfaction-arrow-wrapper" className="p-1.5 rounded-full bg-red-950/40 border border-red-500/20 text-red-400 group-hover:text-white group-hover:bg-red-500 group-hover:border-transparent transition-all duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Big Number and descriptor */}
        <div id="stat-card-satisfaction-bottom" className="mt-auto space-y-3">
          <h3 id="stat-card-satisfaction-value" className="text-4xl md:text-5xl font-semibold tracking-tighter text-white font-sans">
            <CountingNumber value={98} suffix="%" />
          </h3>
          <div id="stat-card-satisfaction-line-wrapper">
            {/* The horizontal decorative bar */}
            <div id="stat-card-satisfaction-accent-line" className="w-12 h-[1px] bg-gradient-to-r from-red-500 to-transparent mb-2" />
            <p id="stat-card-satisfaction-label" className="text-sm font-medium tracking-wide text-zinc-400 leading-snug">
              Client satisfaction
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
