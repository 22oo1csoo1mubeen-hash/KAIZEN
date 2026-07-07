import { motion } from 'framer-motion';
import {
  CalendarDays,
  Trophy,
  StickyNote,
  Settings,
  LayoutGrid,
  CalendarCheck,
} from 'lucide-react';
import logo from '../../../assets/LandingPage/Footer/Logo.png';
import iconsBg from '../../../assets/Habits/Today/icons.png';

/* =========================================================
   Sidebar Navigation Items
   ========================================================= */

const navItems = [
  { label: 'Today', icon: CalendarCheck, id: 'today' },
  { label: 'All Habits', icon: LayoutGrid, id: 'all-habits' },
  { label: 'Calendar', icon: CalendarDays, id: 'calendar' },
  { label: 'Achievements', icon: Trophy, id: 'achievements' },
  { label: 'Notes', icon: StickyNote, id: 'notes' },
  { label: 'Settings', icon: Settings, id: 'settings' },
];

/* =========================================================
   Sidebar Component
   ========================================================= */

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (id: string) => void;
}

export default function Sidebar({ activeItem = 'today', onItemClick }: SidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        width: 180,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 12px',
        borderRight: '1px solid rgba(76,175,80,0.12)',
        background: 'rgba(20,20,20,0.4)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        alignSelf: 'flex-start',
        boxShadow: '2px 0 40px rgba(0,0,0,0.6), inset -1px 0 0 rgba(76,175,80,0.08)',
      }}
    >
      {/* Background Icons */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${iconsBg})`,
          backgroundSize: '1000px',
          backgroundRepeat: 'repeat',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(10px) drop-shadow(0 0 10px rgba(76, 175, 80, 0.25)) drop-shadow(0 0 3px rgba(255, 255, 255, 0.1))',
        }}
      />

      {/* Logo */}
      <div
        style={{
          display: 'flex',
          position: 'relative',
          zIndex: 1,
          alignItems: 'center',
          gap: 12,
          marginBottom: 48,
          paddingLeft: 8,
        }}
      >
        <img
          src="/Title.png"
          alt="Kaizen"
          style={{
            height: 24,
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 10px rgba(76,175,80,0.3))',
          }}
        />
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.05em',
            borderLeft: '1px solid rgba(255,255,255,0.2)',
            paddingLeft: 12,
            marginLeft: 2,
            textTransform: 'uppercase',
          }}
        >
          HABITS
        </span>
      </div>

      {/* Navigation Items */}
      <nav
        style={{
          display: 'flex',
          position: 'relative',
          zIndex: 1,
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;

          return (
            <button
              key={item.id}
              onClick={() => onItemClick?.(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 10px',
                borderRadius: 12,
                border: isActive ? '1px solid rgba(76,175,80,0.5)' : '1px solid transparent',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#ffffff' : 'rgba(255,255,255,0.45)',
                background: isActive
                  ? 'linear-gradient(135deg, rgba(76,175,80,0.22) 0%, rgba(46,125,50,0.18) 100%)'
                  : 'transparent',
                transition: 'all 0.25s ease',
                width: '100%',
                textAlign: 'left',
                position: 'relative',
                ...(isActive && {
                  boxShadow: '0 0 24px rgba(76,175,80,0.25), inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 16px rgba(0,0,0,0.4)',
                }),
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                }
              }}
            >

              <div style={{
                width: 24,
                height: 24,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isActive ? 'rgba(76,175,80,0.18)' : 'rgba(255,255,255,0.04)',
                border: isActive ? '1px solid rgba(76,175,80,0.3)' : '1px solid rgba(255,255,255,0.06)',
                flexShrink: 0,
                transition: 'all 0.25s ease',
              }}>
                <Icon
                  size={14}
                  style={{
                    color: isActive ? '#4CAF50' : 'rgba(255,255,255,0.35)',
                    ...(isActive && {
                      filter: 'drop-shadow(0 0 8px rgba(76,175,80,0.7)) drop-shadow(0 0 4px rgba(76,175,80,0.4))',
                    }),
                    transition: 'all 0.25s ease',
                  }}
                />
              </div>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Motivational Quote Card */}
      <div
        style={{
          marginTop: 16,
          position: 'relative',
          zIndex: 1,
          padding: '16px 16px',
          borderRadius: 16,
          background: 'rgba(20,20,20,0.4)',
          border: '1px solid rgba(76,175,80,0.3)',
          boxShadow: '0 0 15px rgba(76,175,80,0.2), inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#4CAF50',
            lineHeight: 1,
            marginBottom: 8,
            fontFamily: 'Georgia, serif',
          }}
        >
          &ldquo;
        </div>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.55)',
            margin: 0,
            marginBottom: 12,
          }}
        >
          Discipline is the bridge between goals and accomplishment.
        </p>
        <p
          style={{
            fontSize: 11,
            color: 'rgba(76,175,80,0.8)',
            margin: 0,
            fontWeight: 500,
          }}
        >
          — Jim Rohn
        </p>
      </div>
    </motion.aside>
  );
}
