import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Leaf, LineChart, Shield, ArrowRight, Sparkles, Send, X } from 'lucide-react';

export function IntelligenceSection() {
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const perks = [
    'No credit card',
    '14-day free trial',
    'Cancel anytime'
  ];

  const cards = [
    {
      id: 'unify',
      title: 'Unify your data',
      desc: 'Connect all your sources and turn scattered data into a single source of truth.',
      icon: Leaf,
      badge: 'Data Integrations'
    },
    {
      id: 'surface',
      title: 'Surface what matters',
      desc: 'AI that cuts through noise and highlights the insights that drive real business impact.',
      icon: LineChart,
      badge: 'Neural Engine'
    },
    {
      id: 'act',
      title: 'Act with confidence',
      desc: 'Built-in governance and automated privacy guardrails so your team can move fast without risk.',
      icon: Shield,
      badge: 'Privacy Safe'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmailInput('');
        setShowTrialModal(false);
      }, 3000);
    }
  };

  return (
    <section id="intelligence-section" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center text-center z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#050505]/80">
      
      {/* Background glow specific to this section */}
      <div id="intel-ambient-glow" className="ambient-glow-orange top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 pointer-events-none" />

      {/* 1. Version Badge */}
      <motion.div
        id="intel-badge-wrapper"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d0d0d] border border-orange-500/15 text-xs font-mono tracking-wider cursor-pointer hover:border-orange-500/30 transition-all duration-300 group mb-8 select-none"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        <span id="intel-badge-text" className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
          New: <span className="text-white font-medium">Version 2.0</span> is now available
        </span>
        <ArrowRight className="w-3 h-3 text-orange-500 group-hover:translate-x-0.5 transition-transform" />
      </motion.div>

      {/* 2. Hero Headline */}
      <motion.h2
        id="intel-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-white font-sans max-w-4xl"
      >
        Intelligence that{' '}
        <span id="intel-title-italic-accent" className="font-display italic text-[#ea4c23] hover:text-[#ff5c33] transition-colors duration-500 font-normal">
          grows
        </span>{' '}
        with you.
      </motion.h2>

      {/* 3. Subheading */}
      <motion.p
        id="intel-subheading"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-6 tracking-wide"
      >
        The all-in-one platform for teams who want clarity, speed, and sustainable growth.
      </motion.p>

      {/* 5. Benefits Checkmarks */}
      <motion.div
        id="intel-perks-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-zinc-400 text-sm font-medium mt-12 mb-6"
      >
        {perks.map((perk, i) => (
          <div key={perk} id={`intel-perk-${i}`} className="flex items-center gap-2">
            <CheckCircle2 className="w-4.5 h-4.5 text-orange-500 fill-orange-500/10" />
            <span className="tracking-wide text-zinc-300 font-sans">{perk}</span>
          </div>
        ))}
      </motion.div>

      {/* 6. High-end Glassmorphic Bento Cards Row */}
      <div id="intel-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-20 text-left">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            id={`intel-card-${card.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0b0b]/60 backdrop-blur-md p-8 md:p-10 flex flex-col justify-start h-auto min-h-[260px]"
          >
            {/* Top glowing corner overlay */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-xl group-hover:from-orange-500/20 transition-all duration-500 pointer-events-none" />

            <div id={`intel-card-content-top-${card.id}`} className="space-y-6">
              {/* Animated Icon Box with neon glow border */}
              <div id={`intel-card-icon-box-${card.id}`} className="inline-flex p-3 rounded-xl bg-orange-950/20 border border-orange-500/15 text-orange-500 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-600 group-hover:border-transparent transition-all duration-300 shadow-lg shadow-orange-500/5">
                <card.icon className="w-6 h-6 stroke-[1.8]" />
              </div>

              {/* Title & Badge */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-orange-500/60 uppercase tracking-widest block font-semibold">{card.badge}</span>
                <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-orange-400 transition-colors duration-200">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm font-light leading-relaxed tracking-wide">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Signup / Trial Modal Overlay */}
      <AnimatePresence>
        {showTrialModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setShowTrialModal(false)}
            />
            
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-md bg-[#0d0d0d] border border-orange-500/15 rounded-2xl p-8 text-left shadow-2xl overflow-hidden"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-2xl rounded-full" />
              
              {/* Close Button */}
              <button
                onClick={() => setShowTrialModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="flex items-center gap-2 text-orange-500 mb-4">
                <Sparkles className="w-5 h-5 fill-orange-500/10" />
                <span className="text-xs font-mono tracking-widest uppercase font-semibold">Priority Access</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white font-sans">
                Start your 14-day trial
              </h3>
              <p className="text-zinc-400 text-sm font-light mt-2 mb-6 leading-relaxed">
                Unlock direct neural flows, advanced analytics, and premium deployment sandboxes. No commitment, cancel anytime.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-center"
                >
                  <p className="text-orange-400 font-semibold mb-1">Access Granted!</p>
                  <p className="text-xs text-zinc-400">An activation link was securely dispatched to your inbox.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 font-medium">
                      Work Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. alex@fluxora.ai"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-sm font-sans"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#e73918] to-[#f65a1c] hover:from-[#f65a1c] hover:to-[#ff6d31] text-white font-semibold rounded-xl text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                  >
                    <span>Receive Security Credential</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
