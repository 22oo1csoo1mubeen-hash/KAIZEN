import { motion } from 'framer-motion';

/* =========================================================
   ProgressRing Component
   ========================================================= */

interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  text?: string;
}

export default function ProgressRing({
  progress,
  size = 64,
  strokeWidth = 6,
  color = '#4CAF50',
  trackColor = 'rgba(76,175,80,0.15)',
  text,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', overflow: 'visible' }}>
        {/* Track */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          animate={{ stroke: trackColor }}
          transition={{ duration: 0.5 }}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Glow Layer 1 - Large Blur */}
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset, stroke: color }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          style={{ filter: 'blur(12px)', opacity: 0.7 }}
        />
        {/* Glow Layer 2 - Small Blur */}
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset, stroke: color }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          style={{ filter: 'blur(4px)', opacity: 1 }}
        />
        {/* Main Progress Ring */}
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset, stroke: color }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          fontSize: 14,
          fontWeight: 600,
          color: '#ffffff',
        }}
      >
        {text || `${progress}%`}
      </div>
    </div>
  );
}
