import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import { Navbar, Logo } from './components/Navbar';
import { StatsSection } from './components/StatsSection';
import { Partners } from './components/Partners';
import { IntelligenceSection } from './components/IntelligenceSection';

export default function App() {
  const [view, setView] = useState<'home' | 'second'>('home');

  return (
    <div id="app-root-container" className="min-h-screen bg-transparent text-zinc-100 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      
      {/* Dynamic Background Video Layer */}
      <div id="background-video-container" className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          id="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/dsamvhscd/video/upload/v1779441576/kling_20260522_Image_to_Video__4299_0_vaofbs.mp4" type="video/mp4" />
        </video>
        {/* Vignette overlay to keep text highly readable while preserving video colors */}
        <div id="bg-video-overlay" className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-transparent to-[#030303]" />
        
        {/* Subtle Ambient Glows on top of background video */}
        <div id="bg-glow-orange" className="ambient-glow-orange top-[15%] -left-[10%] w-[450px] h-[450px] opacity-25" />
        <div id="bg-glow-red" className="ambient-glow-red bottom-[25%] -right-[10%] w-[550px] h-[550px] opacity-15" />
      </div>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home-view"
            className="flex-grow flex flex-col justify-between relative z-10 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Navigation section */}
            <Navbar onGetStarted={() => setView('second')} />

            {/* Main Content Area */}
            <main id="main-content-layout" className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-16 pb-16 relative flex flex-col justify-center">
              
              {/* Main Grid: Left side content, Right side stays clean and atmospheric */}
              <div id="main-content-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                
                {/* Left Column: holds Badge, Heading, Subhead, CTA, Stats (takes 7 cols on desktop) */}
                <div id="left-column-container" className="lg:col-span-7 flex flex-col items-start text-left space-y-8 md:space-y-10">
                  
                  {/* 1. Tagline Badge */}
                  <motion.div
                    id="tagline-badge-container"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-3 select-none"
                  >
                    {/* Globe Icon Container */}
                    <div id="tagline-icon-box" className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 mt-[2px]">
                      <Globe className="w-4 h-4 animate-[spin_20s_linear_infinite]" />
                    </div>
                    <div id="tagline-text-box" className="flex flex-col text-[13px] tracking-wide leading-tight font-sans">
                      <span id="tagline-text-meta" className="text-zinc-500 font-medium">#1 AI-powered platform for</span>
                      <span id="tagline-text-highlight" className="text-zinc-300 font-medium mt-[1px]">a better tomorrow</span>
                    </div>
                  </motion.div>

                  {/* 2. Headline: Technology Crafted for All Not Machines */}
                  <motion.h1
                    id="hero-main-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-[-0.035em] leading-[0.93] text-white font-sans max-w-2xl"
                  >
                    Technology <br />
                    Crafted for All <br />
                    <span id="hero-title-suffix" className="inline-block">
                      Not <span id="hero-title-italic-accent" className="font-display italic text-[#ea4c23] hover:text-[#ff5c33] transition-colors duration-500 font-normal">Machines</span>
                    </span>
                  </motion.h1>

                  {/* 3. Subheading */}
                  <motion.p
                    id="hero-sub-text"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-[460px] tracking-wide font-sans"
                  >
                    We create clear, intuitive, and accessible digital experiences shaped by real human behavior.
                  </motion.p>

                  {/* 4. CTA and Company Trust Badge */}
                  <motion.div
                    id="cta-and-social-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 select-none"
                  >
                    {/* Premium Gradient CTA button */}
                    <button
                      id="hero-main-cta-btn"
                      onClick={() => setView('second')}
                      className="group relative flex items-center justify-between pl-6 pr-2 py-2 bg-gradient-to-r from-[#e73918] to-[#f65a1c] hover:from-[#f65a1c] hover:to-[#ff6d31] text-white font-semibold text-[15px] rounded-full transition-all duration-300 overflow-hidden shadow-[0_4px_24px_rgba(231,57,24,0.3)] hover:shadow-[0_4px_30px_rgba(246,90,28,0.5)] cursor-pointer active:scale-95 text-left"
                    >
                      <span id="cta-button-label" className="tracking-wide mr-6">Get started</span>
                      <div id="cta-button-arrow-circle" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black transition-transform duration-300 group-hover:rotate-45">
                        <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
                      </div>
                    </button>

                    {/* Social proof avatar list */}
                    <div id="social-proof-wrapper" className="flex items-center gap-3">
                      {/* Avatar Circles Overlay */}
                      <div id="social-avatars-group" className="flex -space-x-2.5">
                        <div id="avatar-circle-1" className="w-8 h-8 rounded-full border border-black bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                          <span>A</span>
                        </div>
                        <div id="avatar-circle-2" className="w-8 h-8 rounded-full border border-black bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                          <span>B</span>
                        </div>
                        <div id="avatar-circle-3" className="w-8 h-8 rounded-full border border-black bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                          <span>C</span>
                        </div>
                      </div>

                      {/* Company trust message */}
                      <div id="social-proof-message" className="flex flex-col text-xs leading-none font-sans">
                        <span id="social-proof-count" className="text-white font-semibold tracking-wide">100+ Companies</span>
                        <span id="social-proof-trust" className="text-zinc-500 font-medium mt-[2px]">Trust us</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* 5. Stat Cards / Bento elements underneath */}
                  <div id="hero-stats-wrapper" className="w-full pt-4 max-w-xl">
                    <StatsSection />
                  </div>

                </div>

                {/* Right Column: Clean ambient background empty space to mimic design (takes 5 cols) */}
                <div id="right-column-container-clean" className="lg:col-span-5 hidden lg:flex flex-col justify-end h-full min-h-[400px] relative">
                  {/* This is empty space to give the design that high-end premium asymmetrical breathing room as seen in the photo */}
                </div>

              </div>

              {/* Partners Row - Aligned bottom-right of the hero section */}
              <div id="partners-row-wrapper" className="w-full mt-12 md:mt-20 border-t border-white/5 pt-8 flex justify-end">
                <Partners />
              </div>

            </main>
          </motion.div>
        ) : (
          <motion.div
            key="second-view"
            className="flex-grow flex flex-col justify-between relative z-10 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Navigation section for Second View with Back arrow button instead */}
            <header id="second-header" className="relative w-full z-50 py-6 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto">
              {/* Brand Logo */}
              <Logo />

              {/* Back to Home CTA button with icon */}
              <div id="back-home-wrapper" className="flex items-center gap-4">
                <button
                  id="navbar-cta-back-home"
                  onClick={() => setView('home')}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-full border border-white/10 transition-all duration-300 select-none flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4 text-white hover:-translate-x-0.5 transition-transform" />
                  <span>Back to Home</span>
                </button>
              </div>
            </header>

            {/* Second view bento modules container */}
            <main id="second-content-layout" className="flex-grow w-full relative">
              <IntelligenceSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
