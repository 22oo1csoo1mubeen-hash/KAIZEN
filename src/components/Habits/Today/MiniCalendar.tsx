import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

/* =========================================================
   MiniCalendar Component
   ========================================================= */

const dayHeaders = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Days for May 2024 (Wed start). 0 = empty placeholder.
const calendarDays = [
  [0, 0, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 0, 0],
];

// Today
const today = 20;

// Helper to match large CalendarGrid mock logic exactly
const getDayState = (day: number) => {
  if (day < 20) {
    if (day % 5 === 0) return 'none'; // 0/9
    if (day % 3 === 0) return 'some'; // 5/9
    return 'all'; // 9/9
  }
  if (day === 20) return 'some'; // 7/9
  if (day === 21) return 'none'; // 0/9
  if (day === 22) return 'some'; // 3/9
  if (day === 23) return 'some'; // 5/9
  if (day === 24) return 'some'; // 8/9
  if (day === 25) return 'all'; // 9/9
  return 'empty'; // No data
};

const getStateColor = (state: string) => {
  switch (state) {
    case 'all': return '#4CAF50';
    case 'some': return '#FF9800';
    case 'none': return '#F44336';
    default: return 'transparent';
  }
};

// Previous/next month fill
const prevMonthDays: Record<string, number> = { '0-0': 29, '0-1': 30 };
const nextMonthDays: Record<string, number> = { '4-5': 1, '4-6': 2 };

interface MiniCalendarProps {
  onCalendarClick?: () => void;
}

export default function MiniCalendar({ onCalendarClick }: MiniCalendarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        borderRadius: 20,
        background: 'rgba(20,20,20,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 20px rgba(255,255,255,0.02), 0 20px 40px rgba(0,0,0,0.4)',
        padding: '16px 20px',
        cursor: onCalendarClick ? 'pointer' : 'default',
      }}
      onClick={onCalendarClick}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            Monthly Calendar
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
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              May 2024
            </span>
          </div>

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

      {/* Day Headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 4,
          marginBottom: 12,
        }}
      >
        {dayHeaders.map((d) => (
          <div
            key={d}
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.35)',
              textAlign: 'center',
              padding: '4px 0',
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {calendarDays.map((week, wi) => (
          <div
            key={wi}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 4,
            }}
          >
            {week.map((day, di) => {
              const key = `${wi}-${di}`;
              const isEmpty = day === 0;
              const isToday = day === today;
              const state = getDayState(day);
              const fillDay = prevMonthDays[key] || nextMonthDays[key];

              if (isEmpty && fillDay) {
                return (
                  <div
                    key={di}
                    style={{
                      textAlign: 'center',
                      padding: '6px 0',
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.15)',
                      position: 'relative',
                    }}
                  >
                    {fillDay}
                  </div>
                );
              }

              if (isEmpty) {
                return <div key={di} />;
              }

              return (
                <div
                  key={di}
                  style={{
                    textAlign: 'center',
                    padding: '6px 0',
                    fontSize: 13,
                    fontWeight: isToday ? 600 : 400,
                    position: 'relative',
                    borderRadius: isToday ? '50%' : 8,
                    background: isToday ? 'rgba(76,175,80,0.1)' : 'transparent',
                    border: isToday ? '1px solid #4CAF50' : '1px solid transparent',
                    boxShadow: isToday ? '0 0 15px rgba(76,175,80,0.3), inset 0 0 10px rgba(76,175,80,0.1)' : 'none',
                    color: isToday ? '#4CAF50' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isToday) {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isToday) {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}
                >
                  {day}
                  {/* Activity dot */}
                  {state !== 'empty' && !isToday && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 2,
                      }}
                    >
                      <div
                        style={{
                          width: 3,
                          height: 3,
                          borderRadius: '50%',
                          background: getStateColor(state),
                          boxShadow: `0 0 4px ${getStateColor(state)}`,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
