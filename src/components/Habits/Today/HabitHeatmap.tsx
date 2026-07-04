import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

/* =========================================================
   Dummy Heatmap Data
   ========================================================= */

// 5 weeks × 7 days. Values 0–4 represent intensity.
const heatmapData: number[][] = [
  [3, 2, 4, 3, 2, 1, 0],
  [4, 3, 2, 4, 3, 2, 1],
  [2, 4, 3, 2, 4, 3, 2],
  [3, 2, 4, 3, 2, 4, 3],
  [4, 3, 2, 4, 3, 2, 1],
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

const colors = [
  'rgba(255,255,255,0.04)',
  'rgba(76,175,80,0.2)',
  'rgba(76,175,80,0.35)',
  'rgba(76,175,80,0.55)',
  'rgba(76,175,80,0.85)',
];

/* =========================================================
   HabitHeatmap Component
   ========================================================= */

export default function HabitHeatmap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        borderRadius: 20,
        background: 'rgba(20,20,20,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
        padding: '24px 28px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff' }}>
            Habit Heatmap
          </span>
          <Info size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              padding: 2,
              display: 'flex',
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            May 2024
          </span>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              padding: 2,
              display: 'flex',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16, width: '100%' }}>
        {/* Row Labels (Week 1, Week 2...) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12, // Increased gap
            marginTop: 28, // aligns with the grid below column headers
          }}
        >
          {weeks.map((w) => (
            <div
              key={w}
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                flex: 1, // Let flex handle the height alignment
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {w}
            </div>
          ))}
        </div>

        {/* Heatmap Grid */}
        <div style={{ flex: 1 }}>
          {/* Day Headers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 12, // Increased gap
              marginBottom: 12,
            }}
          >
            {days.map((d) => (
              <div
                key={d}
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.35)',
                  textAlign: 'center',
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Grid Cells */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {heatmapData.map((week, wi) => (
              <div
                key={wi}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: 12, // Increased gap
                }}
              >
                {week.map((level, di) => {
                  return (
                    <div
                      key={`${wi}-${di}`}
                      style={{
                        aspectRatio: '1',
                        borderRadius: 6,
                        background: colors[level],
                        border: '1px solid rgba(255,255,255,0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        boxShadow: level > 0 ? `0 0 8px ${colors[level]}20` : 'none', // Softer glow
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
                        (e.currentTarget as HTMLElement).style.boxShadow = level > 0 ? `0 0 15px ${colors[level]}60` : '0 0 15px rgba(255,255,255,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                        (e.currentTarget as HTMLElement).style.boxShadow = level > 0 ? `0 0 8px ${colors[level]}20` : 'none';
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 12,
          marginTop: 20,
        }}
      >
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Less</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0, 1, 2, 3, 4].map((l) => (
            <div
              key={l}
              style={{
                width: 12,
                height: 12,
                borderRadius: 3,
                background: colors[l],
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            />
          ))}
        </div>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>More</span>
      </div>
    </motion.div>
  );
}
