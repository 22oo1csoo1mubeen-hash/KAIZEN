import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Habits', href: '#capabilities' },
    { name: 'Goals', href: '#capabilities' },
    { name: 'Expenses', href: '#capabilities' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto w-full px-8 lg:px-16 flex items-center justify-center pointer-events-none"
    >
      {/* Center: Links (Desktop Only) */}
      <div className="flex items-center p-1.5 liquid-glass rounded-full pointer-events-auto">
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/90 font-body hover:text-white hover:glow-blue transition-all rounded-full"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="ml-2 bg-white text-black rounded-full px-5 py-2 text-sm font-bold flex items-center gap-1 hover:bg-gray-200 transition-colors whitespace-nowrap hover:scale-105 duration-300">
          Start Journey
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.nav>
  );
}
