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
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 20px rgba(255,255,255,0.02), 0 20px 40px rgba(0,0,0,0.4)',
        padding: '16px 20px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', whiteSpace: 'nowrap' }}>
            Habit Heatmap
          </span>
          <Info size={12} style={{ color: 'rgba(255,255,255,0.3)' }} />
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
            <ChevronLeft size={14} />
          </button>
          <span
            style={{
              fontSize: 13,
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
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16, width: '100%' }}>
        {/* Row Labels (Week 1, Week 2...) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8, // Decreased gap
            marginTop: 22, // aligns with the grid below column headers
          }}
        >
          {weeks.map((w) => (
            <div
              key={w}
              style={{
                fontSize: 10,
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
              gap: 8, // Decreased gap
              marginBottom: 8,
            }}
          >
            {days.map((d) => (
              <div
                key={d}
                style={{
                  fontSize: 10,
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {heatmapData.map((week, wi) => (
              <div
                key={wi}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: 8, // Decreased gap
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
                        border: '1px solid rgba(255,255,255,0.08)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        boxShadow: level > 0 ? `0 0 12px ${colors[level]}40` : 'none',
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
          gap: 10,
          marginTop: 16,
        }}
      >
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>Less</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0, 1, 2, 3, 4].map((l) => (
            <div
              key={l}
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: colors[l],
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            />
          ))}
        </div>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>More</span>
      </div>
    </motion.div>
  );
}
