import { motion } from 'framer-motion';
import { Flame, CheckCircle2, MoreVertical } from 'lucide-react';
import { useState } from 'react';

/* =========================================================
   HabitCard Component
   ========================================================= */

export interface Habit {
  id: number;
  name: string;
  category: string;
  time: string;
  streak: number;
  completed: boolean;
  icon: string;
  color: string;
  completionPercentage?: number;
}

interface HabitCardProps {
  habit: Habit;
  index: number;
}

export default function HabitCard({ habit, index }: HabitCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.03)',
        background: isHovered ? 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' : 'transparent',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
        borderRadius: isHovered ? 16 : 0,
        margin: '0 8px',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 10,
          background: 'rgba(76,175,80,0.05)',
          border: '1px solid rgba(76,175,80,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          marginRight: 12,
          boxShadow: isHovered ? '0 8px 20px rgba(0,0,0,0.2)' : 'none',
          transition: 'all 0.2s',
        }}
      >
        {habit.icon}
      </div>

      {/* Info */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>
          {habit.name}
        </span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          {habit.category} • {habit.time}
        </span>
      </div>

      {/* Streak */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginRight: 24,
        }}
      >
        <Flame
          size={16}
          style={{
            color: '#FF9800',
            filter: 'drop-shadow(0 0 6px rgba(255,152,0,0.6))',
          }}
        />
        <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>
          {habit.streak}
        </span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          day streak
        </span>
      </div>

      {/* Action Button */}
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 24px',
          borderRadius: 24,
          border: habit.completed
            ? '1px solid rgba(76,175,80,0.4)'
            : '1px solid rgba(255,255,255,0.1)',
          background: habit.completed
            ? 'rgba(76,175,80,0.12)'
            : 'rgba(255,255,255,0.02)',
          color: habit.completed ? '#4CAF50' : 'rgba(255,255,255,0.6)',
          fontSize: 13,
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s',
          minWidth: 120,
          justifyContent: 'center',
          ...(habit.completed && {
            boxShadow: '0 0 15px rgba(76,175,80,0.15), inset 0 1px 1px rgba(255,255,255,0.15)',
          }),
        }}
        onMouseEnter={(e) => {
          if (!habit.completed) {
            (e.currentTarget as HTMLElement).style.background = 'rgba(76,175,80,0.05)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(76,175,80,0.3)';
            (e.currentTarget as HTMLElement).style.color = '#4CAF50';
          }
        }}
        onMouseLeave={(e) => {
          if (!habit.completed) {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
            (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
          }
        }}
      >
        <CheckCircle2
          size={16}
          style={{
            ...(habit.completed && {
              filter: 'drop-shadow(0 0 4px rgba(76,175,80,0.5))',
            }),
          }}
        />
        {habit.completed ? 'Completed' : 'Mark done'}
      </button>

      {/* More Options */}
      <button
        style={{
          background: 'transparent',
          border: 'none',
          color: isHovered ? 'rgba(255,255,255,0.5)' : 'transparent',
          cursor: 'pointer',
          padding: 8,
          marginLeft: 16,
          display: 'flex',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
        }}
      >
        <MoreVertical size={18} />
      </button>
    </motion.div>
  );
}
