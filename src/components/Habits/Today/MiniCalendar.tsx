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

// Days with activity (green dots)
const activeDays = new Set([2, 3, 8, 9, 10, 15, 16, 17, 18, 22, 23, 24, 25, 29, 30, 31]);

// Today
const today = 18;

// Previous/next month fill
const prevMonthDays: Record<string, number> = { '0-0': 29, '0-1': 30 };
const nextMonthDays: Record<string, number> = { '4-5': 1, '4-6': 2 };

export default function MiniCalendar() {
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
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
        padding: '20px 24px',
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
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.01em',
          }}
        >
          Monthly Calendar
        </span>

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
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span
              style={{
                fontSize: 14,
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
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 6,
          marginBottom: 16,
        }}
      >
        {dayHeaders.map((d) => (
          <div
            key={d}
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.35)',
              textAlign: 'center',
              padding: '6px 0',
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {calendarDays.map((week, wi) => (
          <div
            key={wi}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 6,
            }}
          >
            {week.map((day, di) => {
              const key = `${wi}-${di}`;
              const isEmpty = day === 0;
              const isToday = day === today;
              const hasActivity = activeDays.has(day);
              const fillDay = prevMonthDays[key] || nextMonthDays[key];

              if (isEmpty && fillDay) {
                return (
                  <div
                    key={di}
                    style={{
                      textAlign: 'center',
                      padding: '8px 0',
                      fontSize: 14,
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
                    padding: '8px 0',
                    fontSize: 14,
                    fontWeight: isToday ? 600 : 400,
                    color: isToday ? '#000' : 'rgba(255,255,255,0.7)',
                    position: 'relative',
                    borderRadius: 10,
                    background: isToday ? '#4CAF50' : 'transparent',
                    boxShadow: isToday ? '0 0 15px rgba(76,175,80,0.4)' : 'none',
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
                  {hasActivity && !isToday && (
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
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: '#4CAF50',
                          boxShadow: '0 0 4px rgba(76,175,80,0.8)',
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
