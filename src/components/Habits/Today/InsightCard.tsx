import { motion } from 'framer-motion';
import { Flame, TrendingUp, Moon, Star, Info } from 'lucide-react';
import { type ReactNode } from 'react';

/* =========================================================
   Insight Data
   ========================================================= */

interface Insight {
  icon: ReactNode;
  iconBg: string;
  text: string;
}

const insights: Insight[] = [
  {
    icon: <Flame size={18} style={{ color: '#FF9800', filter: 'drop-shadow(0 0 6px rgba(255,152,0,0.6))' }} />,
    iconBg: 'rgba(255,152,0,0.1)',
    text: "You're most consistent in the mornings. Keep it up!",
  },
  {
    icon: <TrendingUp size={18} style={{ color: '#4CAF50', filter: 'drop-shadow(0 0 6px rgba(76,175,80,0.6))' }} />,
    iconBg: 'rgba(76,175,80,0.1)',
    text: 'Your completion rate is 12% higher than last week. Amazing progress!',
  },
  {
    icon: <Moon size={18} style={{ color: '#8B8BFF', filter: 'drop-shadow(0 0 6px rgba(139,139,255,0.6))' }} />,
    iconBg: 'rgba(139,139,255,0.1)',
    text: 'Evening habits are missed most. Try setting reminders.',
  },
  {
    icon: <Star size={18} style={{ color: '#E5C158', filter: 'drop-shadow(0 0 6px rgba(229,193,88,0.6))' }} />,
    iconBg: 'rgba(229,193,88,0.1)',
    text: 'Friday is your strongest day. 5 habits completed on average.',
  },
];

/* =========================================================
   InsightCard Component
   ========================================================= */

export default function InsightCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        borderRadius: 20,
        background: 'rgba(20,20,20,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 20px rgba(255,255,255,0.02), 0 20px 40px rgba(0,0,0,0.4)',
        padding: '12px 16px',
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
          marginBottom: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
            Insights
          </span>
          <Info size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
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

      {/* 2x2 Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
          flex: 1,
        }}
      >
        {insights.map((insight, i) => (
          <div
            key={i}
            style={{
              padding: '12px',
              borderRadius: 16,
              background: 'rgba(15,15,15,0.6)',
              border: '1px solid rgba(255,255,255,0.04)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), 0 10px 20px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'row',
              gap: 16,
              alignItems: 'flex-start',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(25,25,25,0.6)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(15,15,15,0.6)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 12,
                background: insight.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.03)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
              }}
            >
              {insight.icon}
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.4,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.6)',
                margin: 0,
                letterSpacing: '0.01em',
              }}
            >
              {insight.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
