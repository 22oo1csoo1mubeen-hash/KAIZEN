import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* =========================================================
   Top Navigation Bar
   ========================================================= */

const initialNavLinks = [
  { label: 'Dashboard', id: 'dashboard' },
  { label: 'Habits', id: 'habits' },
  { label: 'Goals', id: 'goals' },
  { label: 'Expenses', id: 'expenses' },
];

export default function TopNavbar() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState('habits');

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: 72,
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: 'rgba(10,10,10,0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 16,
        zIndex: 50,
      }}
    >
      {/* Left — Nav Links Container */}
      <nav 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          background: 'rgba(20,20,20,0.4)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 32,
          padding: '6px 8px',
          gap: 6,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      >
        {initialNavLinks.map((link) => {
          const isActive = activeId === link.id;

          return (
            <button
              key={link.id}
              onClick={() => {
                setActiveId(link.id);
                if (link.id === 'dashboard') {
                  setTimeout(() => navigate('/#dashboard'), 300);
                }
              }}
              style={{
                position: 'relative',
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#ffffff' : 'rgba(255,255,255,0.5)',
                background: 'transparent',
                border: 'none',
                borderRadius: 24,
                padding: '10px 24px',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                }
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 24,
                    background: 'linear-gradient(135deg, rgba(76,175,80,0.25), rgba(76,175,80,0.05))',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 0 30px rgba(76,175,80,0.3), inset 0 1px 2px rgba(255,255,255,0.15), inset 0 0 20px rgba(76,175,80,0.1)',
                    border: '1px solid rgba(76,175,80,0.4)',
                    zIndex: -1,
                  }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1 }}>{link.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right — Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* Search */}
        <button
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
            borderRadius: 12,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              'rgba(255,255,255,0.7)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              'rgba(255,255,255,0.4)';
          }}
        >
          <Search size={18} />
        </button>

        {/* Notifications */}
        <button
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
            borderRadius: 12,
            position: 'relative',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              'rgba(255,255,255,0.7)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              'rgba(255,255,255,0.4)';
          }}
        >
          <Bell size={18} />
          {/* Notification dot */}
          <div
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#4CAF50',
              border: '1.5px solid #000',
            }}
          />
        </button>

        {/* Profile Avatar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: 20,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              'rgba(255,255,255,0.06)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background:
                'linear-gradient(135deg, rgba(76,175,80,0.4), rgba(76,175,80,0.15))',
              border: '1px solid rgba(76,175,80,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: 600,
              color: '#4CAF50',
            }}
          >
            M
          </div>
          <ChevronDown
            size={16}
            style={{ color: 'rgba(255,255,255,0.5)' }}
          />
        </div>
      </div>
    </motion.header>
  );
}
