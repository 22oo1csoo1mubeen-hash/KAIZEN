import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

/* =========================================================
   StatCard Component
   ========================================================= */

interface StatCardProps {
  icon?: ReactNode;
  iconBgColor?: string;
  iconBorderColor?: string;
  value: ReactNode;
  label: ReactNode;
  subtitle?: ReactNode;
  leftElement?: ReactNode;
  delay?: number;
  flex?: number;
}

export default function StatCard({
  icon,
  iconBgColor = 'rgba(76,175,80,0.05)',
  iconBorderColor = 'rgba(76,175,80,0.15)',
  value,
  label,
  subtitle,
  leftElement,
  delay = 0,
  flex = 1,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        flex,
        minWidth: 160,
        borderRadius: 20,
        background: 'rgba(15,15,15,0.6)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.04)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 10px 30px rgba(0,0,0,0.3)',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
    >
      {/* Left Area: Icon or Progress Ring */}
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {leftElement ? (
          leftElement
        ) : icon ? (
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: iconBgColor,
              border: `1px solid ${iconBorderColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `inset 0 1px 1px ${iconBorderColor}, 0 0 15px ${iconBgColor}`,
            }}
          >
            {icon}
          </div>
        ) : null}
      </div>

      {/* Right Area: Text content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, whiteSpace: 'nowrap' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          {value}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.3,
            }}
          >
            {label}
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: '#4CAF50',
                lineHeight: 1.3,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
