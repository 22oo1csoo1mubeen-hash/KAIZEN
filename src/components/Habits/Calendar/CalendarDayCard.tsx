import { motion } from 'framer-motion';
import { Star, Flame } from 'lucide-react';

export type DayState = 'all' | 'some' | 'none' | 'empty';

export interface CalendarDayProps {
  dayNumber: number;
  state: DayState;
  completedText: string;
  isSpecial?: boolean;
  isCurrentMonth?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
  onSelect?: () => void;
}

const getStateColor = (state: DayState) => {
  switch (state) {
    case 'all': return '#4CAF50';
    case 'some': return '#FF9800';
    case 'none': return '#F44336';
    case 'empty': return 'rgba(255,255,255,0.2)';
  }
};

const getSolidColor = (state: DayState) => {
  switch (state) {
    case 'all': return '#4CAF50';
    case 'some': return '#FF9800';
    case 'none': return '#F44336';
    case 'empty': return 'rgba(255,255,255,0.6)';
  }
};

const getTodayBackground = (state: DayState) => {
  switch (state) {
    case 'all': return 'linear-gradient(145deg, rgba(76,175,80,0.55), rgba(76,175,80,0.15))';
    case 'some': return 'linear-gradient(145deg, rgba(255,152,0,0.55), rgba(255,152,0,0.15))';
    case 'none': return 'linear-gradient(145deg, rgba(244,67,54,0.55), rgba(244,67,54,0.15))';
    case 'empty': return 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))';
  }
};

const getGlowColor = (state: DayState, isSelected: boolean) => {
  switch (state) {
    case 'all': return isSelected ? 'rgba(76,175,80,0.5)' : 'rgba(76,175,80,0.15)';
    case 'some': return isSelected ? 'rgba(255,152,0,0.5)' : 'rgba(255,152,0,0.15)';
    case 'none': return isSelected ? 'rgba(244,67,54,0.5)' : 'rgba(244,67,54,0.15)';
    case 'empty': return isSelected ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)';
  }
};

export default function CalendarDayCard({
  dayNumber,
  state,
  completedText,
  isSpecial = false,
  isCurrentMonth = true,
  isSelected = false,
  isToday = false,
  onSelect,
}: CalendarDayProps) {
  const color = getStateColor(state);
  const solidColor = getSolidColor(state);
  const glowColor = getGlowColor(state, false);
  const selectedGlowColor = getGlowColor(state, true);

  return (
    <motion.div
      onClick={onSelect}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 8px',
        minHeight: 85,
        borderRadius: 16,
        background: isToday ? getTodayBackground(state) : 'rgba(20,20,20,0.6)',
        backdropFilter: 'blur(12px)',
        opacity: isCurrentMonth ? 1 : 0.4,
        cursor: 'pointer',
        border: '1px solid transparent',
      }}
      initial={false}
      animate={{
        borderColor: isSelected ? solidColor : (isToday ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.06)'),
        boxShadow: isSelected 
          ? `0 0 0 1px ${solidColor}, inset 0 0 60px ${selectedGlowColor}` 
          : `inset 0 0 60px ${glowColor}`,
      }}
      whileHover={!isSelected ? {
        scale: 1.04,
      } : { scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Skull Badge */}
      {state === 'none' && (
        <div
          style={{
            position: 'absolute',
            top: -6,
            right: -6,
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'rgba(20,20,20,0.8)',
            border: '1px solid rgba(244,67,54,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(244,67,54,0.4)',
            zIndex: 2,
            fontSize: 12,
          }}
        >
          💀
        </div>
      )}

      {/* Flame Badge */}
      {state === 'all' && (
        <div
          style={{
            position: 'absolute',
            top: -6,
            right: -6,
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'rgba(20,20,20,0.8)',
            border: '1px solid rgba(76,175,80,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(76,175,80,0.4)',
            zIndex: 12,
          }}
        >
          <Flame size={12} style={{ color: '#FF9800' }} fill="#FF9800" />
        </div>
      )}

      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '100%', pointerEvents: 'none' }}>
        {/* Date Number & Today Label */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <span style={{ 
            fontSize: 14, 
            fontWeight: 700, 
            color: '#ffffff',
            textShadow: isToday ? '0 0 12px rgba(255,255,255,0.8)' : 'none'
          }}>
            {dayNumber}
          </span>
          {isToday && (
            <span style={{ 
              fontSize: 9, 
              color: '#ffffff', 
              fontWeight: 600, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              textShadow: '0 0 8px rgba(255,255,255,0.8)'
            }}>
              Today
            </span>
          )}
        </div>

        {/* State Dot */}
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />

        {/* Completed Text */}
        <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
          {completedText}
        </span>
      </div>
    </motion.div>
  );
}
