import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, ChevronLeft, ChevronRight, Calendar, Camera, ChevronDown } from 'lucide-react';

/* =========================================================
   LegendItem Component
   ========================================================= */
const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}`,
      }}
    />
    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>{label}</span>
  </div>
);

/* =========================================================
   CalendarHeader Component
   ========================================================= */

export function CalendarHeader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', zIndex: 1 }}>
      
      {/* Top Header & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <CalendarDays size={24} style={{ color: '#4CAF50', filter: 'drop-shadow(0 0 8px rgba(76,175,80,0.6))' }} />
            <h1
              style={{
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              Calendar
            </h1>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 400, marginLeft: 34 }}>
            See your consistency. Every day counts.
          </p>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '8px 16px',
            background: 'rgba(20,20,20,0.4)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
          }}
        >
          <LegendItem color="#4CAF50" label="All Habits Completed" />
          <LegendItem color="#FF9800" label="Some Completed" />
          <LegendItem color="#F44336" label="None Completed" />
          <LegendItem color="rgba(255,255,255,0.2)" label="No Data" />
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   CalendarControls Component
   ========================================================= */

interface CalendarControlsProps {
  selectedDay: number | null;
}

export function CalendarControls({ selectedDay }: CalendarControlsProps) {
  let todayText = 'May 18';
  if (selectedDay === 20) todayText = 'Today';
  else if (selectedDay === 19) todayText = 'Yesterday';
  else if (selectedDay === 21) todayText = 'Tomorrow';
  else if (selectedDay) todayText = `May ${selectedDay}`;

  return (
    <>
      {/* Top Controls */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* Left Side Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={todayText}
                initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 8, filter: 'blur(4px)', position: 'absolute' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ display: 'inline-block' }}
              >
                {todayText}
              </motion.span>
            </AnimatePresence>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(20,20,20,0.4)', padding: '4px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 28,
                borderRadius: 8,
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <span style={{ fontSize: 14, fontWeight: 600, minWidth: 90, textAlign: 'center' }}>May 2024</span>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 28,
                borderRadius: 8,
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 8,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.9)',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <Calendar size={14} style={{ color: 'rgba(255,255,255,0.5)' }} />
            Month
            <ChevronDown size={14} style={{ color: 'rgba(255,255,255,0.5)' }} />
          </button>
          
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 8,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.9)',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <Camera size={14} style={{ color: 'rgba(255,255,255,0.5)' }} />
            Export
          </button>
        </div>
      </motion.div>
    </>
  );
}
