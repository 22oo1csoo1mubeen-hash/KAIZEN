import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpDown, Plus } from 'lucide-react';
import HabitsTable from './HabitsTable';
import { useState } from 'react';

export default function AllHabitsContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div style={{ flex: 1, display: 'flex', gap: 16, position: 'relative', zIndex: 1, alignItems: 'flex-start' }}>
      
      {/* Left Column (Main Content) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', zIndex: 1, minWidth: 0 }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h1
            style={{
              fontSize: 26,
              fontWeight: 600,
              marginBottom: 4,
              letterSpacing: '-0.01em',
            }}
          >
            All Habits
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
            Track and manage all your habits in one place.
          </p>
        </motion.div>

        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ display: 'flex', gap: 12, alignItems: 'center' }}
        >
          {/* Search Bar */}
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
            <input 
              type="text" 
              placeholder="Search habits..." 
              style={{
                width: '100%',
                background: 'rgba(20,20,20,0.4)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
                padding: '12px 16px 12px 42px',
                color: '#fff',
                fontSize: 14,
                outline: 'none',
                transition: 'all 0.2s',
              }}
            />
          </div>

          {/* Action Buttons */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.9)',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <Filter size={16} /> Filter
          </button>
          
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.9)',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <ArrowUpDown size={16} /> Sort
          </button>

          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 22px',
              borderRadius: 12,
              background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
              border: '1px solid rgba(76,175,80,0.6)',
              boxShadow: '0 0 24px rgba(76,175,80,0.4), inset 0 1px 1px rgba(255,255,255,0.3)',
              color: '#ffffff',
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
            <Plus size={16} /> New Habit
          </button>
        </motion.div>

        {/* Habits Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(20,20,20,0.4)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 20,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
            padding: '8px 0',
          }}
        >
          <HabitsTable />
        </motion.div>
      </div>
    </div>
  );
}
