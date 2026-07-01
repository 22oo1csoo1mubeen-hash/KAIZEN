import { motion } from 'framer-motion';
import { CircleCheckBig, Target, Wallet, ArrowRight } from 'lucide-react';
import { Badge, fadeInUp, staggerContainer } from '../ui';
import runnerImage from '../../assets/Hero/Object.jpg';

/* =========================================================
   Feature Card Data
   ========================================================= */

const features = [
  {
    icon: CircleCheckBig,
    title: 'Habit Tracker',
    description: 'Build consistency that\nshapes your future.',
    accent: '#4CAF50',
    accentRgb: '76,175,80',
    gradientStart: 'rgba(76,175,80,0.08)',
    borderColor: 'rgba(76,175,80,0.2)',
    borderTopColor: 'rgba(76,175,80,0.5)',
    glowColor: 'rgba(76,175,80,0.12)',
    glowColorStrong: 'rgba(76,175,80,0.25)',
  },
  {
    icon: Target,
    title: 'Goal Tracker',
    description: 'Set targets. Stay focused.\nMake it happen.',
    accent: '#5B9BD5',
    accentRgb: '91,155,213',
    gradientStart: 'rgba(91,155,213,0.08)',
    borderColor: 'rgba(91,155,213,0.2)',
    borderTopColor: 'rgba(91,155,213,0.5)',
    glowColor: 'rgba(91,155,213,0.12)',
    glowColorStrong: 'rgba(91,155,213,0.25)',
  },
  {
    icon: Wallet,
    title: 'Expense Tracker',
    description: 'Track every rupee.\nTake charge of your money.',
    accent: '#E5C158',
    accentRgb: '229,193,88',
    gradientStart: 'rgba(229,193,88,0.08)',
    borderColor: 'rgba(229,193,88,0.2)',
    borderTopColor: 'rgba(229,193,88,0.5)',
    glowColor: 'rgba(229,193,88,0.12)',
    glowColorStrong: 'rgba(229,193,88,0.25)',
  },
];

/* =========================================================
   FeatureCard Component
   ========================================================= */

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = feature.icon;

  /* Icon-specific micro animations */
  const iconAnimations = [
    /* Habit — subtle check pulse */
    {
      animate: { rotate: [0, -5, 5, 0], scale: [1, 1.05, 1] },
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 },
    },
    /* Goal — gentle rotate */
    {
      animate: { rotate: [0, 360] },
      transition: { duration: 12, repeat: Infinity, ease: 'linear' },
    },
    /* Expense — floating */
    {
      animate: { y: [0, -3, 0] },
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
    },
  ];

  const anim = iconAnimations[index];

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: `inset 0 0 40px ${feature.glowColor}, inset 0 0 10px rgba(255,255,255,0.05), inset 0 1px 2px rgba(255,255,255,0.25), 0 30px 60px rgba(0,0,0,0.9)`,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{
        position: 'relative',
        background: `linear-gradient(180deg, ${feature.gradientStart} 0%, rgba(255,255,255,0.02) 30%, rgba(10,10,10,0.5) 100%)`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `1px solid ${feature.borderColor}`,
        borderTop: `1px solid ${feature.borderTopColor}`,
        borderLeft: `1px solid rgba(255,255,255,0.1)`,
        borderRight: `1px solid rgba(255,255,255,0.02)`,
        borderRadius: 24,
        padding: 'clamp(32px, 3vw, 48px)',
        minHeight: 460,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: `inset 0 0 20px rgba(255,255,255,0.02), inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.8)`,
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
          background: `linear-gradient(90deg, transparent, rgba(${feature.accentRgb},0.5), transparent)`,
        }}
      />

      {/* ── Sparkles (Inside & Edges) ── */}
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], rotate: [0, 45, 90] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
        style={{
          position: 'absolute',
          top: -4,
          left: '15%',
          width: 18,
          height: 18,
          background: '#ffffff',
          clipPath: 'polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)',
          filter: `drop-shadow(0 0 4px ${feature.accent}) drop-shadow(0 0 8px ${feature.accent}) drop-shadow(0 0 12px ${feature.accent})`,
          zIndex: 10,
        }}
      />
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0], rotate: [45, 90, 135] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 + index * 0.5 }}
        style={{
          position: 'absolute',
          top: '18%',
          right: '25%',
          width: 16,
          height: 16,
          background: '#ffffff',
          clipPath: 'polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)',
          filter: `drop-shadow(0 0 4px ${feature.accent}) drop-shadow(0 0 8px ${feature.accent}) drop-shadow(0 0 12px ${feature.accent})`,
          zIndex: 10,
        }}
      />
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [45, 90, 135] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 + index * 0.2 }}
        style={{
          position: 'absolute',
          top: '42%',
          left: '35%',
          width: 16,
          height: 16,
          background: '#ffffff',
          clipPath: 'polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)',
          filter: `drop-shadow(0 0 4px ${feature.accent}) drop-shadow(0 0 8px ${feature.accent}) drop-shadow(0 0 12px ${feature.accent})`,
          zIndex: 10,
        }}
      />
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], rotate: [0, 45, 90] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 + index * 0.3 }}
        style={{
          position: 'absolute',
          bottom: '35%',
          left: '12%',
          width: 14,
          height: 14,
          background: '#ffffff',
          clipPath: 'polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)',
          filter: `drop-shadow(0 0 4px ${feature.accent}) drop-shadow(0 0 8px ${feature.accent}) drop-shadow(0 0 12px ${feature.accent})`,
          zIndex: 10,
        }}
      />
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0, 1.1, 0], rotate: [90, 135, 180] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 + index * 0.6 }}
        style={{
          position: 'absolute',
          bottom: '12%',
          right: '40%',
          width: 16,
          height: 16,
          background: '#ffffff',
          clipPath: 'polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)',
          filter: `drop-shadow(0 0 4px ${feature.accent}) drop-shadow(0 0 8px ${feature.accent}) drop-shadow(0 0 12px ${feature.accent})`,
          zIndex: 10,
        }}
      />
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 45, 90] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 + index * 0.3 }}
        style={{
          position: 'absolute',
          top: '60%',
          right: -6,
          width: 14,
          height: 14,
          background: '#ffffff',
          clipPath: 'polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)',
          filter: `drop-shadow(0 0 4px ${feature.accent}) drop-shadow(0 0 8px ${feature.accent}) drop-shadow(0 0 12px ${feature.accent})`,
          zIndex: 10,
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
          background: `radial-gradient(ellipse at 50% 0%, rgba(${feature.accentRgb},0.06) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* ── Icon Container ── */}
      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 22,
          background: `linear-gradient(145deg, rgba(${feature.accentRgb},0.1) 0%, rgba(${feature.accentRgb},0.03) 100%)`,
          backdropFilter: 'blur(16px)',
          border: `1px solid rgba(${feature.accentRgb},0.2)`,
          borderTop: `1px solid rgba(${feature.accentRgb},0.35)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
          boxShadow: `0 0 30px rgba(${feature.accentRgb},0.12), 0 0 15px rgba(${feature.accentRgb},0.08), inset 0 0 20px rgba(${feature.accentRgb},0.06), inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4)`,
        }}
      >
        <motion.div
          animate={anim.animate}
          transition={anim.transition}
        >
          <Icon
            size={34}
            strokeWidth={1.5}
            style={{ color: feature.accent, filter: `drop-shadow(0 0 8px rgba(${feature.accentRgb},0.4))` }}
          />
        </motion.div>
      </div>

      {/* ── Accent Divider ── */}
      <div
        style={{
          width: 32,
          height: 2,
          borderRadius: 1,
          background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
          marginBottom: 28,
          opacity: 0.8,
          boxShadow: `0 0 10px rgba(${feature.accentRgb},0.3)`,
        }}
      />

      {/* ── Description ── */}
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.7,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.65)',
          whiteSpace: 'pre-line',
          marginBottom: 'auto',
          minHeight: 54,
        }}
      >
        {feature.description}
      </p>

      {/* Spacer */}
      <div style={{ height: 32 }} />

      {/* ── Arrow Button ── */}
      <motion.div
        whileHover={{
          scale: 1.08,
          boxShadow: `0 0 35px rgba(${feature.accentRgb},0.35), 0 0 18px rgba(${feature.accentRgb},0.25), inset 0 1px 1px rgba(255,255,255,0.15)`,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: `linear-gradient(145deg, rgba(${feature.accentRgb},0.08) 0%, rgba(255,255,255,0.02) 100%)`,
          backdropFilter: 'blur(12px)',
          border: `1px solid rgba(${feature.accentRgb},0.25)`,
          borderTop: `1px solid rgba(${feature.accentRgb},0.4)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 20px rgba(${feature.accentRgb},0.15), 0 0 10px rgba(${feature.accentRgb},0.08), inset 0 1px 1px rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.4)`,
          cursor: 'pointer',
        }}
      >
        <motion.div
          whileHover={{ x: 3 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowRight size={18} style={{ color: feature.accent, filter: `drop-shadow(0 0 4px rgba(${feature.accentRgb},0.4))` }} />
        </motion.div>
      </motion.div>

      {/* ── Bottom edge reflection ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: 1,
          background: `linear-gradient(90deg, transparent, rgba(${feature.accentRgb},0.2), transparent)`,
        }}
      />

      {/* ── Corner glows ── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: -40,
          left: -40,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: `rgba(${feature.accentRgb},0.04)`,
          filter: 'blur(40px)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: `rgba(${feature.accentRgb},0.04)`,
          filter: 'blur(40px)',
        }}
      />
    </motion.div>
  );
}

/* =========================================================
   Features Section
   ========================================================= */

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden"
      style={{
        background: '#000000',
        paddingTop: 120,
        paddingBottom: 120,
        zIndex: 10,
      }}
    >
      {/* ── Runner Background (same as Dashboard) ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end"
        style={{
          zIndex: 0,
          opacity: 0.5,
        }}
      >
        <img
          src={runnerImage}
          alt=""
          aria-hidden="true"
          style={{
            height: '140%',
            objectFit: 'contain',
            mixBlendMode: 'lighten',
            transform: 'translateX(10%) translateY(-2%)',
          }}
          draggable={false}
        />
        {/* Runner ambient glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '40%',
            right: '20%',
            width: 600,
            height: 400,
            background: 'rgba(229,193,88,0.04)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      {/* ── Ambient Gradients ── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '15%',
          left: '0%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(76,175,80,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: '50%',
          left: '35%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(91,155,213,0.03) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: '5%',
          right: '5%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(229,193,88,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
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
        }}
      >
        {/* Badge */}
        <Badge delay={0} style={{ marginBottom: 32 }}>
          FOCUS TODAY. GROW TOMORROW.
        </Badge>

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.1}
          style={{ marginBottom: 'clamp(48px, 5vw, 80px)' }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            Your journey.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.45))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Organized. Simplified. You.
            </span>
          </h2>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 360px))',
            justifyContent: 'center',
            gap: 'clamp(20px, 2vw, 32px)',
          }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
