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
  containerSize?: number;
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
  containerSize = 48,
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
        background: 'rgba(20,20,20,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 20px rgba(255,255,255,0.02), 0 20px 40px rgba(0,0,0,0.4)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flex: 1,
      }}
    >
      {/* Left Area: Icon or Progress Ring */}
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {leftElement ? (
          leftElement
        ) : icon ? (
          <div
            style={{
              width: containerSize,
              height: containerSize,
              minWidth: containerSize,
              minHeight: containerSize,
              borderRadius: 12,
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
              fontSize: 13,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.3,
            }}
          >
            {label}
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
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
