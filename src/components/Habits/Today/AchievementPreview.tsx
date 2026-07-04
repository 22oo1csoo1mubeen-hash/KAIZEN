import { motion } from 'framer-motion';
import { Trophy, Info } from 'lucide-react';

/* =========================================================
   AchievementPreview Component
   ========================================================= */

export default function AchievementPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        borderRadius: 20,
        background: 'rgba(20,20,20,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
        padding: '24px 28px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff' }}>
            Achievements
          </span>
          <Info size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#4CAF50',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = '#81C784';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = '#4CAF50';
          }}
        >
          View all
        </span>
      </div>

      {/* Empty State */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
          }}
        >
          <Trophy
            size={26}
            style={{
              color: 'rgba(255,255,255,0.15)',
            }}
          />
        </div>
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 6,
            }}
          >
            No achievements yet.
          </div>
          <div
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.5,
            }}
          >
            Complete habits and build streaks to unlock amazing achievements.
          </div>
        </div>
      </div>
      
      {/* Pushes empty state down slightly or just fills space if needed */}
      <div style={{ flex: 1 }}></div>
    </motion.div>
  );
}
