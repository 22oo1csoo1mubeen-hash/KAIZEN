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
        padding: scrolled ? '12px 64px' : '16px 64px',
        background: scrolled ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Brand Logo - Left */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="KAIZEN Logo" style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        </a>
      </div>

      {/* Nav Links - Center */}
      <div 
        style={{ 
          flex: 1,
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center', 
          gap: 32 
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

      {/* CTA Button - Right */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <a 
          href="#dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 24px',
            borderRadius: 100,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 500,
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(255,255,255,0.08), inset 0 1px 1px rgba(255,255,255,0.1)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(255,255,255,0.25), inset 0 1px 1px rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(255,255,255,0.08), inset 0 1px 1px rgba(255,255,255,0.1)';
          }}
        >
          Get Started <ArrowRight size={16} />
        </a>
      </div>
    </motion.nav>
  );
}
