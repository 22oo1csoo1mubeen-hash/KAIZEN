import { useState } from 'react';
import { motion } from 'framer-motion';
import { Crosshair, TrendingUp, Trophy, PieChart, ShieldCheck, Sparkles } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer } from '../ui';

/* =========================================================
   Card Data
   ========================================================= */

const values = [
  {
    icon: Crosshair,
    title: 'Clarity',
    description: 'See what matters.\nFocus on what moves\nyou forward.',
    accent: '#E5C158',
    accentRgb: '229,193,88',
    /* idle animation */
    idleAnimate: { scale: [1, 1.06, 1] },
    idleTransition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0 },
  },
  {
    icon: TrendingUp,
    title: 'Consistency',
    description: 'Build habits that stick.\nTrack daily, grow\nsteadily.',
    accent: '#4CAF50',
    accentRgb: '76,175,80',
    idleAnimate: { y: [0, -3, 0] },
    idleTransition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.3 },
  },
  {
    icon: Trophy,
    title: 'Progress',
    description: 'Measure what counts.\nVisualize progress that\nkeeps you motivated.',
    accent: '#5BB8D5',
    accentRgb: '91,184,213',
    idleAnimate: { rotate: [0, -4, 4, 0] },
    idleTransition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.6 },
  },
  {
    icon: PieChart,
    title: 'Balance',
    description: 'Grow in every area.\nHabits, goals, and\nfinances — aligned.',
    accent: '#A77BCA',
    accentRgb: '167,123,202',
    idleAnimate: { scale: [1, 1.05, 1], opacity: [1, 0.85, 1] },
    idleTransition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.9 },
  },
  {
    icon: ShieldCheck,
    title: 'Control',
    description: 'Take control of your time,\nactions, and money.\nLive intentionally.',
    accent: '#E5A04E',
    accentRgb: '229,160,78',
    idleAnimate: { y: [0, -2.5, 0] },
    idleTransition: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.2 },
  },
];

/* =========================================================
   ValueCard Component
   ========================================================= */

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[number];
  index: number;
}) {
  const Icon = value.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      custom={index * 0.1}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: `inset 0 0 30px rgba(${value.accentRgb},0.08), inset 0 1px 2px rgba(255,255,255,0.2), 0 30px 60px rgba(0,0,0,0.9)`,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{
        position: 'relative',
        background: `linear-gradient(180deg, rgba(${value.accentRgb},0.06) 0%, rgba(255,255,255,0.015) 25%, rgba(10,10,10,0.5) 100%)`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `1px solid rgba(${value.accentRgb},0.18)`,
        borderTop: `1px solid rgba(${value.accentRgb},0.4)`,
        borderLeft: `1px solid rgba(255,255,255,0.08)`,
        borderRight: `1px solid rgba(255,255,255,0.02)`,
        borderRadius: 24,
        padding: 'clamp(28px, 2.5vw, 40px) clamp(20px, 2vw, 32px)',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        textAlign: 'center' as const,
        boxShadow: `inset 0 0 20px rgba(255,255,255,0.015), inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.7)`,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* ── Top edge shimmer ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '5%',
          right: '5%',
          height: 1,
          background: `linear-gradient(90deg, transparent, rgba(${value.accentRgb},0.45), transparent)`,
        }}
      />

      {/* ── Soft inner ambient ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: `radial-gradient(ellipse at 50% 0%, rgba(${value.accentRgb},0.05) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* ── Icon Container ── */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: `linear-gradient(145deg, rgba(${value.accentRgb},0.08) 0%, rgba(${value.accentRgb},0.02) 100%)`,
          backdropFilter: 'blur(16px)',
          border: `1px solid rgba(${value.accentRgb},0.2)`,
          borderTop: `1px solid rgba(${value.accentRgb},0.3)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 24,
          boxShadow: `0 0 24px rgba(${value.accentRgb},0.1), 0 0 12px rgba(${value.accentRgb},0.06), inset 0 0 16px rgba(${value.accentRgb},0.05), inset 0 1px 1px rgba(255,255,255,0.08), 0 6px 20px rgba(0,0,0,0.4)`,
        }}
      >
        <motion.div
          animate={value.idleAnimate}
          transition={value.idleTransition}
        >
          <motion.div
            animate={{
              filter: isHovered
                ? `drop-shadow(0 0 12px rgba(${value.accentRgb},0.6))`
                : `drop-shadow(0 0 6px rgba(${value.accentRgb},0.35))`,
            }}
            transition={{ duration: 0.35 }}
          >
            <Icon
              size={28}
              strokeWidth={1.5}
              style={{ color: value.accent }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Title ── */}
      <h3
        className="font-sans"
        style={{
          fontSize: 'clamp(16px, 1.2vw, 19px)',
          fontWeight: 600,
          color: '#ffffff',
          letterSpacing: '0.01em',
          marginBottom: 16,
        }}
      >
        {value.title}
      </h3>

      {/* ── Decorative Divider ── */}
      <div
        style={{
          width: 28,
          height: 2,
          borderRadius: 1,
          background: `linear-gradient(90deg, transparent, ${value.accent}, transparent)`,
          marginBottom: 20,
          opacity: 0.7,
          boxShadow: `0 0 8px rgba(${value.accentRgb},0.25)`,
        }}
      />

      {/* ── Description ── */}
      <p
        style={{
          fontSize: 'clamp(13px, 0.95vw, 15px)',
          lineHeight: 1.7,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.55)',
          whiteSpace: 'pre-line',
        }}
      >
        {value.description}
      </p>

      {/* ── Bottom edge reflection ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: 1,
          background: `linear-gradient(90deg, transparent, rgba(${value.accentRgb},0.15), transparent)`,
        }}
      />

      {/* ── Corner glows ── */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          left: -40,
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: `rgba(${value.accentRgb},0.03)`,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -40,
          right: -40,
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: `rgba(${value.accentRgb},0.03)`,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}

/* =========================================================
   WhyKaizen Section
   ========================================================= */

export default function WhyKaizen() {
  return (
    <section
      id="why-kaizen"
      className="relative overflow-hidden"
      style={{
        background: '#000000',
        paddingTop: 80,
        paddingBottom: 80,
        zIndex: 10,
      }}
    >
      {/* ── Very Subtle Ambient Lighting ── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '20%',
          left: '10%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(229,193,88,0.025) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: '40%',
          right: '10%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(167,123,202,0.02) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: '10%',
          left: '40%',
          width: 500,
          height: 400,
          background: 'radial-gradient(circle, rgba(76,175,80,0.02) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 1440,
          margin: '0 auto',
          paddingLeft: '5%',
          paddingRight: '3%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* ── Badge ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            borderRadius: 9999,
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '8px 20px',
            boxShadow: '0 0 20px rgba(255,255,255,0.03), inset 0 0.5px 0 rgba(255,255,255,0.08)',
            marginBottom: 18,
          }}
        >
          <Sparkles
            size={14}
            style={{
              color: 'rgba(229,193,88,0.9)',
              filter: 'drop-shadow(0 0 6px rgba(229,193,88,0.5))',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            BUILT FOR DISCIPLINED MINDS.
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.1}
          style={{
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(124px, 5.5vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: '#ffffff' }}>Why </span>
            <span
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.5))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              KAIZEN
            </span>
          </h2>
        </motion.div>

        {/* ── Warm Glowing Divider ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.2}
          style={{
            width: 60,
            height: 3,
            borderRadius: 2,
            background: 'linear-gradient(90deg, transparent, rgba(229,193,88,0.7), rgba(229,193,88,0.9), rgba(229,193,88,0.7), transparent)',
            marginBottom: 36,
            boxShadow: '0 0 15px rgba(229,193,88,0.35), 0 0 30px rgba(229,193,88,0.15)',
          }}
        />

        {/* ── Description ── */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.25}
          style={{
            fontSize: 'clamp(15px, 1.1vw, 18px)',
            lineHeight: 1.8,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            maxWidth: 650,
            marginBottom: 'clamp(6px, 5vw, 40px)',
          }}
        >
          Kaizen is more than a tracker — It's a system for becoming
          <br />
          1% better every day. Small improvements. Big transformation.
        </motion.p>

        {/* ── Value Cards Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="why-kaizen-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 'clamp(14px, 1.5vw, 24px)',
            width: '100%',
            marginBottom: 'clamp(56px, 5vw, 80px)',
          }}
        >
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </motion.div>

        {/* ── Bottom Quote ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.3}
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 20,
            borderRadius: 9999,
            border: '1px solid rgba(229,193,88,0.18)',
            borderTop: '1px solid rgba(229,193,88,0.3)',
            background: 'linear-gradient(135deg, rgba(229,193,88,0.04) 0%, rgba(255,255,255,0.03) 50%, rgba(229,193,88,0.03) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '16px 36px',
            boxShadow:
              '0 0 15px rgba(229,193,88,0.12), ' +
              '0 0 40px rgba(229,193,88,0.08), ' +
              '0 0 80px rgba(229,193,88,0.04), ' +
              'inset 0 0 20px rgba(229,193,88,0.04), ' +
              'inset 0 1px 1px rgba(255,255,255,0.1), ' +
              '0 8px 32px rgba(0,0,0,0.4)',
            maxWidth: '100%',
            marginTop: -38,
            overflow: 'visible',
          }}
        >
          {/* Ambient glow behind pill */}
          <motion.div
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: 60,
              borderRadius: 9999,
              background: 'radial-gradient(ellipse, rgba(229,193,88,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: -1,
            }}
          />

          {/* Left quotation mark */}
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 28,
              fontWeight: 700,
              color: 'rgba(229,193,88,0.7)',
              lineHeight: 1,
              filter: 'drop-shadow(0 0 8px rgba(229,193,88,0.45)) drop-shadow(0 0 16px rgba(229,193,88,0.2))',
              flexShrink: 0,
              userSelect: 'none',
            }}
          >
            &ldquo;
          </span>

          {/* Quote text */}
          <span
            style={{
              fontSize: 'clamp(13px, 1vw, 16px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.65)',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            Small Steps Today. Extraordinary Results Tomorrow.
          </span>

          {/* Right quotation mark */}
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 28,
              fontWeight: 700,
              color: 'rgba(229,193,88,0.7)',
              lineHeight: 1,
              filter: 'drop-shadow(0 0 8px rgba(229,193,88,0.45)) drop-shadow(0 0 16px rgba(229,193,88,0.2))',
              flexShrink: 0,
              userSelect: 'none',
            }}
          >
            &rdquo;
          </span>
        </motion.div>
      </div>
    </section>
  );
}
