import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Heart } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../ui';
import logo from '../../../assets/LandingPage/Footer/Logo.png';

// Inline SVGs for brand icons removed from lucide-react
const LinkedinIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GithubIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

/* =========================================================
   Social Links Data
   ========================================================= */

const socials = [
  {
    name: 'Email',
    text: '22oo1csoo1mubeen@gmail.com',
    href: 'mailto:22oo1csoo1mubeen@gmail.com',
    icon: Mail,
    color: '#E5C158',
    colorRgb: '229,193,88',
  },
  {
    name: 'LinkedIn',
    text: 'Professional network',
    href: 'https://linkedin.com/in/syed-mubeen-180a16312',
    icon: LinkedinIcon,
    color: '#5B9BD5',
    colorRgb: '91,155,213',
  },
  {
    name: 'Instagram',
    text: 'Behind the scenes',
    href: 'https://www.instagram.com/_.mubeen_syed._?igsh=MWh3c291NG9mNzFzZA==',
    icon: InstagramIcon,
    color: '#D55BCA',
    colorRgb: '213,91,202', // Adjusted for purple/pink
  },
  {
    name: 'GitHub',
    text: 'Open source',
    href: 'https://github.com/22oo1csoo1mubeen-hash',
    icon: GithubIcon,
    color: '#FFFFFF',
    colorRgb: '255,255,255',
  },
];

/* =========================================================
   Quick Links Data
   ========================================================= */

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#why-kaizen' },
  { label: 'Contact', href: '#footer' },
];

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  return (
    <section
      id="footer"
      className="relative w-full overflow-hidden"
      style={{
        background: '#000000',
        paddingTop: 100,
        paddingBottom: 40,
        zIndex: 10,
      }}
    >
      {/* ── Background Elements ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(229,193,88,0.06) 0%, transparent 100%)',
          zIndex: 0,
        }}
      />
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: 1440,
          margin: '0 auto',
          paddingLeft: '5%',
          paddingRight: '3%',
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            position: 'relative',
            background: 'linear-gradient(180deg, rgba(20,20,20,0.6) 0%, rgba(10,10,10,0.9) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: 32,
            border: '1px solid rgba(229,193,88,0.15)',
            boxShadow: '0 0 40px rgba(229,193,88,0.03), inset 0 1px 1px rgba(255,255,255,0.05)',
            padding: 'clamp(40px, 5vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Inner Golden Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: 32,
              background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(229,193,88,0.12) 0%, transparent 100%)',
              boxShadow: 'inset 0 1px 0 rgba(229,193,88,0.15)',
              zIndex: 0,
            }}
          />

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {/* COLUMN 1: Brand */}
            <motion.div variants={fadeInUp} className="flex flex-col">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                <h2
                  className="font-display"
                  style={{
                    fontSize: 36,
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  KAIZEN
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      fontSize: 13,
                      color: '#ffffff',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)',
                    }}
                  >
                    Built by MubeenSyed!
                  </span>
                  <img src={logo} alt="Logo" style={{ width: 20, height: 20, marginLeft: -7,   objectFit: 'contain' }} />
                </div>
              </div>
              <div
                style={{
                  width: 32,
                  height: 2,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 1,
                  marginBottom: 20,
                  boxShadow: '0 0 10px rgba(255,255,255,0.1)',
                }}
              />
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.5)',
                  maxWidth: 240,
                }}
              >
                Building better habits,<br></br>Setting stronger goals,<br></br>Managing wealth, <br></br>With Absolute Discipline.
               </p>
            </motion.div>

            {/* COLUMN 2: Quick Links */}
            <motion.div variants={fadeInUp} className="flex flex-col">
              <h3
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                Quick Links
              </h3>
              <div
                style={{
                  width: 24,
                  height: 2,
                  background: 'rgba(229,193,88,0.4)',
                  borderRadius: 1,
                  marginBottom: 24,
                  boxShadow: '0 0 8px rgba(229,193,88,0.2)',
                }}
              />
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onHoverStart={() => setHoveredLink(i)}
                    onHoverEnd={() => setHoveredLink(null)}
                    animate={{
                      x: hoveredLink === i ? 4 : 0,
                      color: hoveredLink === i ? '#ffffff' : 'rgba(255,255,255,0.55)',
                      textShadow: hoveredLink === i ? '0 0 12px rgba(255,255,255,0.3)' : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      cursor: 'pointer',
                      fontSize: 15,
                      display: 'inline-block',
                      width: 'fit-content',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </ul>
            </motion.div>

            {/* COLUMN 3: Stay Connected */}
            <motion.div variants={fadeInUp} className="flex flex-col">
              <h3
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                Stay Connected
              </h3>
              <div
                style={{
                  width: 24,
                  height: 2,
                  background: 'rgba(229,193,88,0.4)',
                  borderRadius: 1,
                  marginBottom: 24,
                  boxShadow: '0 0 8px rgba(229,193,88,0.2)',
                }}
              />
              <div className="flex flex-col gap-5">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  const isHovered = hoveredSocial === i;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredSocial(i)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className="flex items-center gap-4 cursor-pointer"
                      style={{ textDecoration: 'none' }}
                    >
                      <motion.div
                        animate={{
                          y: isHovered ? -3 : 0,
                          scale: isHovered ? 1.05 : 1,
                          boxShadow: isHovered
                            ? `0 0 24px rgba(${social.colorRgb},0.45), inset 0 1px 1px rgba(255,255,255,0.2)`
                            : `0 0 14px rgba(${social.colorRgb},0.25), inset 0 1px 1px rgba(255,255,255,0.05)`,
                          borderColor: isHovered ? `rgba(${social.colorRgb},0.5)` : `rgba(${social.colorRgb},0.2)`,
                          background: isHovered
                            ? `rgba(${social.colorRgb},0.15)`
                            : `rgba(${social.colorRgb},0.08)`,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(10px)',
                          flexShrink: 0,
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                            color: isHovered ? social.color : 'rgba(255,255,255,0.6)',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon size={18} strokeWidth={1.5} />
                        </motion.div>
                      </motion.div>
                      <div className="flex flex-col">
                        <motion.span
                          animate={{
                            color: isHovered ? '#ffffff' : 'rgba(255,255,255,0.85)',
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ fontSize: 15, fontWeight: 500 }}
                        >
                          {social.name}
                        </motion.span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                          {social.text}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* COLUMN 4: Get in Touch */}
            <motion.div variants={fadeInUp} className="flex flex-col">
              <h3
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                Get in Touch
              </h3>
              <div
                style={{
                  width: 24,
                  height: 2,
                  background: 'rgba(229,193,88,0.4)',
                  borderRadius: 1,
                  marginBottom: 24,
                  boxShadow: '0 0 8px rgba(229,193,88,0.2)',
                }}
              />
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: 32,
                  maxWidth: 240,
                }}
              >
                Ready to transform your habits and achieve your goals? Let's start the journey.
              </p>

              <motion.button
                onHoverStart={() => setIsCtaHovered(true)}
                onHoverEnd={() => setIsCtaHovered(false)}
                animate={{
                  scale: isCtaHovered ? 1.03 : 1,
                  boxShadow: isCtaHovered
                    ? '0 0 30px rgba(229,193,88,0.2), inset 0 0 15px rgba(229,193,88,0.1), inset 0 1px 1px rgba(255,255,255,0.3)'
                    : '0 0 15px rgba(229,193,88,0.05), inset 0 1px 1px rgba(255,255,255,0.1)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.35 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  width: 'fit-content',
                  padding: '14px 28px',
                  borderRadius: 100,
                  background: 'rgba(20,20,20,0.6)',
                  border: '1px solid rgba(229,193,88,0.25)',
                  color: '#ffffff',
                  fontSize: 15,
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                }}
              >
                Start your journey
                <motion.div
                  animate={{ x: isCtaHovered ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={16} strokeWidth={2} style={{ color: '#E5C158' }} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* ── Bottom Bar ── */}
          <motion.div
            variants={fadeInUp}
            style={{
              marginTop: 'clamp(48px, 6vw, 80px)',
              paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              position: 'relative',
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              © 2026 KAIZEN. All rights reserved.
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.25em',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              • 1% BETTER EVERY DAY.
            </span>
            <span
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Made with purpose. Built for impact.
              <Heart size={14} style={{ color: 'rgba(229,193,88,0.8)' }} fill="rgba(229,193,88,0.2)" />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
