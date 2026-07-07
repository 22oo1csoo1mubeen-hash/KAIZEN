import { motion } from 'framer-motion';
import { X, Clock, CalendarDays } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { name: 'Faith', icon: '🕌', color: '#4CAF50' },
  { name: 'Fitness', icon: '🏋️', color: '#4CAF50' },
  { name: 'Learning', icon: '📚', color: '#4CAF50' },
  { name: 'Career', icon: '💼', color: '#4CAF50' },
  { name: 'Mindfulness', icon: '🧘', color: '#4CAF50' },
  { name: 'Health', icon: '💧', color: '#4CAF50' },
  { name: 'Finance', icon: '💵', color: '#4CAF50' },
  { name: 'Other', icon: '📅', color: '#4CAF50' },
];

const colors = [
  '#4CAF50', '#2196F3', '#9C27B0', '#FF9800', '#FFEB3B', '#F44336', '#00BCD4', '#607D8B'
];

export default function AddHabitPanel() {
  const [selectedCategory, setSelectedCategory] = useState('Faith');
  const [selectedColor, setSelectedColor] = useState('#4CAF50');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        width: 360,
        background: 'rgba(20,20,20,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>Add New Habit</h2>
        <button style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
          <X size={20} />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'auto', paddingRight: 4, margin: '-4px -4px -4px -4px', padding: '4px' }}>
        
        {/* Habit Name */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Habit Name</label>
          <input 
            type="text" 
            placeholder="e.g. Read Quran" 
            style={{
              background: 'rgba(15,15,15,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '12px 16px',
              borderRadius: 12,
              color: '#fff',
              fontSize: 14,
              outline: 'none',
              transition: 'border 0.2s',
            }}
          />
        </div>

        {/* Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Description <span style={{ color: 'rgba(255,255,255,0.4)' }}>(Optional)</span></label>
          <textarea 
            placeholder="Add a short description..." 
            rows={3}
            style={{
              background: 'rgba(15,15,15,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '12px 16px',
              borderRadius: 12,
              color: '#fff',
              fontSize: 14,
              outline: 'none',
              resize: 'none',
            }}
          />
        </div>

        {/* Category */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Category</label>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Choose a category for your habit</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '12px 4px',
                    borderRadius: 12,
                    background: isActive ? 'rgba(76,175,80,0.08)' : 'rgba(15,15,15,0.6)',
                    border: isActive ? '1px solid rgba(76,175,80,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: 20 }}>{cat.icon}</span>
                  <span style={{ fontSize: 11, color: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>{cat.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Time */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Time <span style={{ color: 'rgba(255,255,255,0.4)' }}>(Optional)</span></label>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              defaultValue="06:00 AM" 
              style={{
                background: 'rgba(15,15,15,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '12px 16px',
                borderRadius: 12,
                color: '#fff',
                fontSize: 14,
                width: '100%',
                outline: 'none',
              }}
            />
            <Clock size={16} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
          </div>
        </div>

        {/* Frequency */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Frequency</label>
          <select 
            style={{
              background: 'rgba(15,15,15,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '12px 16px',
              borderRadius: 12,
              color: '#fff',
              fontSize: 14,
              outline: 'none',
              appearance: 'none',
            }}
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        {/* Reminder */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Reminder <span style={{ color: 'rgba(255,255,255,0.4)' }}>(Optional)</span></label>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              defaultValue="06:00 AM" 
              style={{
                background: 'rgba(15,15,15,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '12px 16px',
                borderRadius: 12,
                color: '#fff',
                fontSize: 14,
                width: '100%',
                outline: 'none',
              }}
            />
            <Clock size={16} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
          </div>
        </div>

        {/* Start Date */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Start Date</label>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              defaultValue="May 18, 2024" 
              style={{
                background: 'rgba(15,15,15,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '12px 16px',
                borderRadius: 12,
                color: '#fff',
                fontSize: 14,
                width: '100%',
                outline: 'none',
              }}
            />
            <CalendarDays size={16} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
          </div>
        </div>

        {/* Color */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Color</label>
          <div style={{ display: 'flex', gap: 12 }}>
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: c,
                  border: selectedColor === c ? '2px solid #fff' : 'none',
                  outline: selectedColor === c ? `2px solid ${c}` : 'none',
                  outlineOffset: 2,
                  cursor: 'pointer',
                  padding: 0,
                  boxShadow: selectedColor === c ? `0 0 10px ${c}` : 'none',
                }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button 
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          Cancel
        </button>
        <button 
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: 12,
            background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            border: '1px solid rgba(76,175,80,0.6)',
            boxShadow: '0 0 24px rgba(76,175,80,0.4), inset 0 1px 1px rgba(255,255,255,0.3)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(76,175,80,0.6), inset 0 1px 1px rgba(255,255,255,0.4)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(76,175,80,0.4), inset 0 1px 1px rgba(255,255,255,0.3)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          Create Habit
        </button>
      </div>

    </motion.div>
  );
}
