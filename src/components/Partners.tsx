import React from 'react';
import { motion } from 'motion/react';

interface Partner {
  name: string;
  id: string;
  svg: React.ReactNode;
}

export function Partners() {
  const partnersList: Partner[] = [
    {
      id: 'bookstore',
      name: 'BookStore',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      )
    },
    {
      id: 'zantic',
      name: 'zantic',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="w-5 h-5">
          <path d="M4 4c2 4 4 12 16 16" />
          <path d="M20 4c-2 4-4 12-16 16" />
        </svg>
      )
    },
    {
      id: 'cirona',
      name: 'Cirona',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="m12 3-10 9 10 9 10-9-10-9Z" />
          <path d="m12 8-5 4 5 4 5-4-5-4Z" />
        </svg>
      )
    },
    {
      id: 'mercury',
      name: 'Mercury',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2Z" />
          <path d="M12 6a6 6 0 0 0-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6a6 6 0 0 0-6-6Z" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'wing',
      name: 'Wing',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="6" cy="12" r="2" />
          <circle cx="12" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <circle cx="18" cy="12" r="2" />
          <line x1="8" y1="12" x2="10" y2="12" />
          <line x1="14" y1="12" x2="16" y2="12" />
          <line x1="12" y1="8" x2="12" y2="10" />
          <line x1="12" y1="14" x2="12" y2="16" />
        </svg>
      )
    }
  ];

  return (
    <div id="partners-bar-container" className="flex flex-col items-end gap-3 w-full self-end select-none">
      {/* Title */}
      <div id="partners-heading" className="text-zinc-500 font-sans font-medium text-xs tracking-wider uppercase">
        Our Partners
      </div>

      {/* Row of partners logos */}
      <div 
        id="partners-logos-row"
        className="flex flex-wrap md:flex-row items-center gap-6 md:gap-7 lg:gap-8 justify-end"
      >
        {partnersList.map((partner) => (
          <motion.div
            key={partner.id}
            id={`partner-logo-${partner.id}`}
            whileHover={{ y: -2, scale: 1.03 }}
            className="flex items-center gap-2 cursor-pointer text-zinc-400 hover:text-white transition-colors duration-200"
          >
            {/* SVG Logo */}
            <div id={`partner-svg-box-${partner.id}`} className="text-zinc-400 group-hover:text-white transition-colors duration-200">
              {partner.svg}
            </div>
            {/* Partner name */}
            <span id={`partner-name-text-${partner.id}`} className="text-sm font-semibold tracking-wide font-sans">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
