import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, Code, Cpu, Layers } from 'lucide-react';

export function Logo() {
  return (
    <div id="brand-logo-container" className="flex items-center gap-3 cursor-pointer group">
      <div id="brand-logo-icon" className="relative w-8 h-8">
        {/* Top-front block (Red-orange) */}
        <div className="absolute top-0 left-0 w-4.5 h-4.5 bg-red-600 rounded-[4px] shadow-lg shadow-red-600/20 group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] transition-all duration-300"></div>
        {/* Bottom-left block (Orange) */}
        <div className="absolute bottom-0 left-0 w-4.5 h-4.5 bg-orange-600 rounded-[4px] shadow-lg shadow-orange-600/20 group-hover:translate-y-[2px] group-hover:-translate-x-[2px] transition-all duration-300"></div>
        {/* Right-center block (Bright Orange) */}
        <div className="absolute bottom-1 right-0 w-5 h-5 bg-orange-500 rounded-[5px] shadow-lg shadow-orange-500/20 group-hover:translate-y-[2px] group-hover:translate-x-[2px] transition-all duration-300"></div>
        {/* Top-right accent block (Crimson red) */}
        <div className="absolute top-1 right-2.5 w-3 h-3 bg-red-500 rounded-[3px] shadow-lg shadow-red-500/20 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all duration-300"></div>
      </div>
      <span id="brand-logo-text" className="text-white text-2xl font-semibold tracking-tight font-sans">
        Fluxora
      </span>
    </div>
  );
}

export function Navbar({ onGetStarted }: { onGetStarted?: () => void }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { label: 'Features', href: '#features', hasDropdown: true },
    { label: 'How it Works', href: '#how-it-works', hasDropdown: false },
    { label: 'About', href: '#about', hasDropdown: false },
    { label: 'Product', href: '#product', hasDropdown: false },
    { label: 'Blogs', href: '#blogs', hasDropdown: false },
  ];

  const featuresDropdown = [
    { title: 'Generative Agents', desc: 'Context-aware conversational artificial intelligence.', icon: Cpu },
    { title: 'Neural Compute', desc: 'Fully scaled high performance backend pipelines.', icon: Sparkles },
    { title: 'Interactive Flow', desc: 'Seamless interfaces designed for real humans.', icon: Layers },
    { title: 'Developer SDK', desc: 'Deploy within seconds using full typescript typings.', icon: Code },
  ];

  const handleItemClick = (label: string) => {
    if (label === 'Features') {
      setActiveMenu(activeMenu === 'Features' ? null : 'Features');
    } else {
      setActiveMenu(null);
    }
  };

  return (
    <header id="main-header" className="relative w-full z-50 py-6 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto">
      {/* Brand Logo */}
      <Logo />

      {/* Navigation Pill Menu */}
      <div id="navbar-pill-wrapper" className="relative hidden md:block">
        <div 
          id="navbar-pill-container"
          className="flex items-center gap-1.5 p-1 bg-[#0d0d0d]/90 backdrop-blur-md rounded-full border border-white/10"
        >
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              id={`nav-item-container-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all relative z-10 flex items-center gap-1 cursor-pointer select-none ${
                  activeMenu === item.label || hoveredIndex === idx
                    ? 'text-white'
                    : 'text-zinc-400'
                }`}
                onClick={() => handleItemClick(item.label)}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown 
                    className={`w-3.5 h-3.5 mt-[2px] opacity-70 transition-transform duration-300 ${
                      activeMenu === 'Features' ? 'rotate-180' : ''
                    }`} 
                  />
                )}
              </button>

              {/* Hover pill transition */}
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="hoverBg"
                  id={`nav-item-hover-bg-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="absolute inset-0 bg-white/5 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {activeMenu === 'Features' && (
            <>
              <div 
                id="dropdown-backdrop"
                className="fixed inset-0 z-0 bg-transparent" 
                onClick={() => setActiveMenu(null)} 
              />
              <motion.div
                id="features-dropdown"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-14 left-0 w-80 bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-50 text-left"
              >
                <div id="dropdown-header" className="text-zinc-500 text-xs font-semibold tracking-wider uppercase mb-3 px-2">
                  Key Capabilities
                </div>
                <div id="dropdown-items" className="space-y-1.5Packed">
                  {featuresDropdown.map((sub, i) => (
                    <a
                      key={sub.title}
                      id={`dropdown-item-${sub.title.toLowerCase().replace(/\s+/g, '-')}`}
                      href={`#${sub.title.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setActiveMenu(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group"
                    >
                      <div id={`dropdown-item-icon-container-${i}`} className="p-2 rounded-lg bg-orange-950/30 border border-orange-500/20 text-orange-400 group-hover:scale-105 transition-transform duration-200">
                        <sub.icon className="w-4 h-4" />
                      </div>
                      <div id={`dropdown-item-text-${i}`}>
                        <div id={`dropdown-item-title-${i}`} className="text-white text-sm font-medium tracking-wide group-hover:text-orange-400 transition-colors duration-200">
                          {sub.title}
                        </div>
                        <div id={`dropdown-item-desc-${i}`} className="text-zinc-400 text-xs mt-0.5 font-light leading-snug">
                          {sub.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Get Started Action Button on right */}
      <div id="right-cta-wrapper" className="flex items-center gap-4">
        <button
          id="navbar-cta-get-started"
          onClick={onGetStarted}
          className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 select-none shadow-[0_4px_12px_rgba(255,255,255,0.1)] active:scale-95 cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
