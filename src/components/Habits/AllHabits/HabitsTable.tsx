import { motion } from 'framer-motion';
import { Flame, Pencil, Trash2 } from 'lucide-react';
import { dummyHabits } from '../data';

export default function HabitsTable() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      {/* Table Header */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr 1.5fr 1fr', 
          padding: '12px 16px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: 12,
          fontWeight: 500,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span>Habit</span>
        <span>Category</span>
        <span>Time</span>
        <span>Frequency</span>
        <span>Streak</span>
        <span>Completion</span>
        <span style={{ textAlign: 'right' }}>Actions</span>
      </div>

      {/* Table Rows */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 6,
        }}
      >
        {dummyHabits.map((habit, idx) => (
          <motion.div
            key={habit.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + idx * 0.05, ease: 'easeOut' }}
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1.5fr 1fr 1fr 1fr 1.5fr 1fr',
              alignItems: 'center',
              padding: '12px 16px',
              borderRadius: 16,
              background: 'transparent',
              borderBottom: '1px solid rgba(255,255,255,0.03)',
              transition: 'all 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            {/* Habit Name & Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
                }}
              >
                {habit.icon}
              </div>
              <span style={{ fontSize: 14, fontWeight: 500, color: '#ffffff' }}>{habit.name}</span>
            </div>

            {/* Category */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: habit.color, boxShadow: `0 0 8px ${habit.color}` }} />
              <span style={{ fontSize: 13, color: '#ffffff' }}>{habit.category}</span>
            </div>

            {/* Time */}
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{habit.time}</span>

            {/* Frequency */}
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Daily</span>

            {/* Streak */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>{habit.streak}</span>
              <Flame size={14} style={{ color: '#FF9800', filter: 'drop-shadow(0 0 6px rgba(255,152,0,0.6))' }} />
            </div>

            {/* Completion */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 24 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{habit.completionPercentage || 0}%</span>
              <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                <div 
                  style={{ 
                    width: `${habit.completionPercentage || 0}%`, 
                    height: '100%', 
                    background: '#4CAF50',
                    boxShadow: '0 0 10px rgba(76,175,80,0.5)',
                    borderRadius: 3,
                  }} 
                />
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
              <button 
                style={{ 
                  background: 'transparent', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: 6, 
                  borderRadius: 8, 
                  color: 'rgba(255,255,255,0.6)', 
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
                }}
              >
                <Pencil size={14} />
              </button>
              <button 
                style={{ 
                  background: 'transparent', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: 6, 
                  borderRadius: 8, 
                  color: 'rgba(244,67,54,0.6)', 
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(244,67,54,0.1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(244,67,54,0.3)';
                  (e.currentTarget as HTMLElement).style.color = '#F44336';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 10px rgba(244,67,54,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(244,67,54,0.6)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <Trash2 size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
