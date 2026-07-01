import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { type ReactNode, type CSSProperties } from 'react';

/* =========================================================
   Animation Variants
   ========================================================= */

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* =========================================================
   Badge Component
   ========================================================= */

interface BadgeProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export function Badge({ children, className = '', style, delay = 0 }: BadgeProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={className}
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
        ...style,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.8)',
          boxShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.2)',
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
        {children}
      </span>
    </motion.div>
  );
}

/* =========================================================
   PrimaryButton Component
   ========================================================= */

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export function PrimaryButton({ children, className = '', onClick, delay = 0 }: PrimaryButtonProps) {
  return (
    <motion.button
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`group ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 16,
        borderRadius: 20,
        border: '1px solid rgba(255,255,255,0.18)',
        background: 'rgba(20,20,20,0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '14px 32px',
        fontSize: 15,
        fontWeight: 500,
        color: '#ffffff',
        cursor: 'pointer',
        boxShadow: '0 0 35px rgba(255, 215, 140, 0.25), 0 0 70px rgba(255, 215, 140, 0.15), inset 0 0 25px rgba(255,215,140,0.15), inset 0 1.5px 1px rgba(255, 255, 255, 0.6)',
      }}
    >
      {children}
      <ArrowUpRight
        style={{
          width: 16,
          height: 16,

          transition: 'transform 0.3s ease',
        }}
      />
    </motion.button>
  );
}

/* =========================================================
   ScrollIndicator Component
   ========================================================= */

interface ScrollIndicatorProps {
  delay?: number;
}

export function ScrollIndicator({ delay = 0 }: ScrollIndicatorProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={delay}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.3em',
          color: 'rgba(255,255,255,0.35)',
          textTransform: 'uppercase',
        }}
      >
        Scroll
      </span>
      <motion.div
        style={{
          height: 40,
          width: 1,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)',
        }}
        animate={{ scaleY: [1, 0.5, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
