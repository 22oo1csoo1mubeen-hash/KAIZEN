import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn } from '../ui';
import logo from '../../../assets/LandingPage/Footer/Logo.png';

/* =========================================================
   Navigation Links
   ========================================================= */

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#why-kaizen' },
  { label: 'Contact', href: '#footer' },
];

/* =========================================================
   Navbar Component
   ========================================================= */

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = 'Home';

      const visibleLinks = navLinks.filter(link => {
        if (link.label === 'Home') return false;
        const id = link.href.replace('#', '');
        if (!id) return false;
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2;
      }).sort((a, b) => {
        const rectA = document.getElementById(a.href.replace('#', ''))!.getBoundingClientRect();
        const rectB = document.getElementById(b.href.replace('#', ''))!.getBoundingClientRect();
        return rectB.top - rectA.top;
      });

      if (visibleLinks.length > 0) {
        current = visibleLinks[0].label;
      }
      
      if (window.scrollY < 100) {
         current = 'Home';
      }

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={0}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '16px 64px' : '24px 64px',
        background: scrolled ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Brand Logo - Left */}
      <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="KAIZEN Logo" style={{ height:52, width: 'auto', objectFit: 'contain' }} />
      </a>

      {/* Nav Links - Center (Absolutely Positioned) */}
      <div 
        style={{ 
          position: 'absolute', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex', 
          alignItems: 'center', 
          gap: 40 
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setActiveLink(link.label)}
            style={{
              position: 'relative',
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: activeLink === link.label ? '#ffffff' : 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
          >
            {link.label}
            {activeLink === link.label && (
              <motion.span
                layoutId="navIndicator"
                style={{
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 0 8px rgba(255,255,255,0.6)',
                }}
              />
            )}
          </a>
        ))}
      </div>

      {/* Get Started Button - Right */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          borderRadius: 9999,
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '10px 24px',
          fontSize: 13,
          fontWeight: 500,
          color: '#ffffff',
          textDecoration: 'none',
          transition: 'all 0.3s',
          boxShadow: '0 0 15px rgba(255,255,255,0.15), inset 0 1px 1px rgba(255,255,255,0.3)',
        }}
      >
        Get Started
        <ArrowRight style={{ width: 14, height: 14 }} />
      </motion.a>
    </motion.nav>
  );
}
