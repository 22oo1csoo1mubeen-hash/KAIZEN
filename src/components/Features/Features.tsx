import { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

  /* Icon-specific micro animations */
  const iconAnimations: any[] = [
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{
        position: 'relative',
        background: `linear-gradient(180deg, rgba(${feature.accentRgb},0.1) 0%, rgba(${feature.accentRgb},0.03) 15%, rgba(255,255,255,0.02) 40%, rgba(10,10,10,0.6) 100%)`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid rgba(${feature.accentRgb},0.22)`,
        borderTop: `1px solid rgba(${feature.accentRgb},0.55)`,
        borderLeft: `1px solid rgba(255,255,255,0.1)`,
        borderRight: `1px solid rgba(255,255,255,0.03)`,
        borderRadius: 24,
        padding: 'clamp(32px, 3vw, 48px)',
        minHeight: 460,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow:
          `0 0 20px rgba(${feature.accentRgb},0.08), ` +
          `0 0 50px rgba(${feature.accentRgb},0.04), ` +
          `inset 0 0 30px rgba(255,255,255,0.02), ` +
          `inset 0 1px 2px rgba(255,255,255,0.18), ` +
          `0 20px 50px rgba(0,0,0,0.85)`,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* ── Hover glow overlay ── */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.35 }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 24,
          boxShadow:
            `inset 0 0 50px rgba(${feature.accentRgb},0.1), ` +
            `inset 0 0 15px rgba(255,255,255,0.04), ` +
            `inset 0 1px 3px rgba(255,255,255,0.25), ` +
            `0 0 30px rgba(${feature.accentRgb},0.15), ` +
            `0 0 70px rgba(${feature.accentRgb},0.08), ` +
            `0 30px 60px rgba(0,0,0,0.9)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Animated top edge shimmer ── */}
      <motion.div
        animate={{
          backgroundPosition: ['200% 0%', '-200% 0%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent 20%, rgba(${feature.accentRgb},0.6) 40%, rgba(255,255,255,0.3) 50%, rgba(${feature.accentRgb},0.6) 60%, transparent 80%)`,
          backgroundSize: '200% 100%',
          zIndex: 2,
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

      {/* ── Breathing ambient orb behind icon ── */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        style={{
          position: 'absolute',
          top: '6%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${feature.accentRgb},0.12) 0%, rgba(${feature.accentRgb},0.04) 40%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Soft inner ambient ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '55%',
          background: `radial-gradient(ellipse at 50% 0%, rgba(${feature.accentRgb},0.08) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* ── Icon Container ── */}
      <motion.div
        animate={{
          boxShadow: isHovered
            ? `0 0 40px rgba(${feature.accentRgb},0.25), 0 0 20px rgba(${feature.accentRgb},0.15), inset 0 0 25px rgba(${feature.accentRgb},0.1), inset 0 1px 2px rgba(255,255,255,0.15), 0 8px 24px rgba(0,0,0,0.4)`
            : `0 0 30px rgba(${feature.accentRgb},0.12), 0 0 15px rgba(${feature.accentRgb},0.08), inset 0 0 20px rgba(${feature.accentRgb},0.06), inset 0 1px 1px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.4)`,
        }}
        transition={{ duration: 0.35 }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: 88,
          height: 88,
          borderRadius: 22,
          background: `linear-gradient(145deg, rgba(${feature.accentRgb},0.12) 0%, rgba(${feature.accentRgb},0.03) 100%)`,
          backdropFilter: 'blur(16px)',
          border: `1px solid rgba(${feature.accentRgb},0.25)`,
          borderTop: `1px solid rgba(${feature.accentRgb},0.4)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
        }}
      >
        <motion.div
          animate={anim.animate}
          transition={anim.transition}
        >
          <motion.div
            animate={{
              filter: isHovered
                ? `drop-shadow(0 0 14px rgba(${feature.accentRgb},0.7)) drop-shadow(0 0 24px rgba(${feature.accentRgb},0.3))`
                : `drop-shadow(0 0 8px rgba(${feature.accentRgb},0.4))`,
            }}
            transition={{ duration: 0.35 }}
          >
            <Icon
              size={34}
              strokeWidth={1.5}
              style={{ color: feature.accent }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Accent Divider (glowing) ── */}
      <motion.div
        animate={{
          boxShadow: isHovered
            ? `0 0 18px rgba(${feature.accentRgb},0.5), 0 0 30px rgba(${feature.accentRgb},0.2)`
            : `0 0 10px rgba(${feature.accentRgb},0.3)`,
        }}
        transition={{ duration: 0.35 }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: 32,
          height: 2,
          borderRadius: 1,
          background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
          marginBottom: 28,
          opacity: 0.9,
        }}
      />

      {/* ── Description ── */}
      <p
        style={{
          position: 'relative',
          zIndex: 10,
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
        animate={
          isHovered
            ? {
                scale: 1.08,
                boxShadow: `0 0 40px rgba(${feature.accentRgb},0.4), 0 0 20px rgba(${feature.accentRgb},0.3), inset 0 1px 2px rgba(255,255,255,0.15)`,
              }
            : {
                scale: 1,
                boxShadow: `0 0 20px rgba(${feature.accentRgb},0.15), 0 0 10px rgba(${feature.accentRgb},0.08), inset 0 1px 1px rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.4)`,
              }
        }
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: `linear-gradient(145deg, rgba(${feature.accentRgb},0.1) 0%, rgba(255,255,255,0.02) 100%)`,
          backdropFilter: 'blur(12px)',
          border: `1px solid rgba(${feature.accentRgb},0.28)`,
          borderTop: `1px solid rgba(${feature.accentRgb},0.45)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <motion.div
          animate={{ x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowRight size={18} style={{ color: feature.accent, filter: `drop-shadow(0 0 4px rgba(${feature.accentRgb},0.4))` }} />
        </motion.div>
      </motion.div>


      {/* ── Border Shimmers Wrapper ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 24,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        {/* ── Animated bottom edge shimmer ── */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.3,
          }}
          style={{
            position: 'absolute',
            bottom: -1,
            left: 0,
            width: '60%',
            height: 3,
            background: `linear-gradient(90deg, transparent, rgba(${feature.accentRgb},1), rgba(255,255,255,0.8), rgba(${feature.accentRgb},1), transparent)`,
            borderRadius: 2,
            boxShadow: `0 0 15px rgba(${feature.accentRgb},0.8)`,
          }}
        />

        {/* ── Animated top edge shimmer ── */}
        <motion.div
          animate={{
            x: ['200%', '-100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.5,
          }}
          style={{
            position: 'absolute',
            top: -1,
            left: 0,
            width: '50%',
            height: 3,
            background: `linear-gradient(90deg, transparent, rgba(${feature.accentRgb},0.8), rgba(255,255,255,0.6), rgba(${feature.accentRgb},0.8), transparent)`,
            borderRadius: 2,
            boxShadow: `0 0 12px rgba(${feature.accentRgb},0.6)`,
          }}
        />

        {/* ── Animated left edge shimmer ── */}
        <motion.div
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.4 + 0.5,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: -1,
            height: '50%',
            width: 3,
            background: `linear-gradient(180deg, transparent, rgba(${feature.accentRgb},0.9), rgba(255,255,255,0.7), rgba(${feature.accentRgb},0.9), transparent)`,
            borderRadius: 2,
            boxShadow: `0 0 15px rgba(${feature.accentRgb},0.7)`,
          }}
        />

        {/* ── Animated right edge shimmer ── */}
        <motion.div
          animate={{
            y: ['200%', '-100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.6 + 1,
          }}
          style={{
            position: 'absolute',
            top: 0,
            right: -1,
            height: '60%',
            width: 2,
            background: `linear-gradient(180deg, transparent, rgba(${feature.accentRgb},0.7), rgba(255,255,255,0.5), rgba(${feature.accentRgb},0.7), transparent)`,
            borderRadius: 1,
            boxShadow: `0 0 10px rgba(${feature.accentRgb},0.5)`,
          }}
        />
      </div>

      {/* ── Corner glows (breathing) ── */}
      <motion.div
        animate={{
          opacity: [0.6, 1.2, 0.6],
          scale: [1, 1.6, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.5,
        }}
        className="pointer-events-none absolute"
        style={{
          top: -60,
          left: -60,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `rgba(${feature.accentRgb},0.12)`,
          filter: 'blur(45px)',
        }}
      />
      <motion.div
        animate={{
          opacity: [0.6, 1.2, 0.6],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.5 + 2,
        }}
        className="pointer-events-none absolute"
        style={{
          bottom: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `rgba(${feature.accentRgb},0.12)`,
          filter: 'blur(45px)',
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
