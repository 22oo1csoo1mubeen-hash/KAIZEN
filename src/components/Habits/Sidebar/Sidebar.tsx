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
}

export default function Sidebar({ activeItem = 'today' }: SidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        width: 240,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 24px',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(10,10,10,0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        alignSelf: 'flex-start',
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 48,
          paddingLeft: 8,
        }}
      >
        <img
          src={logo}
          alt="Kaizen"
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            objectFit: 'cover',
          }}
        />
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.05em',
          }}
        >
          KAIZEN
        </span>
      </div>

      {/* Navigation Items */}
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          flex: 1,
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;

          return (
            <button
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '12px 16px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: isActive ? 500 : 400,
                color: isActive ? '#ffffff' : 'rgba(255,255,255,0.5)',
                background: isActive
                  ? 'rgba(76,175,80,0.12)'
                  : 'transparent',
                transition: 'all 0.2s',
                width: '100%',
                textAlign: 'left',
                ...(isActive && {
                  border: '1px solid rgba(76,175,80,0.25)',
                  boxShadow: '0 0 15px rgba(76,175,80,0.1), inset 0 1px 1px rgba(255,255,255,0.05)',
                }),
                ...(!isActive && {
                  border: '1px solid transparent',
                }),
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.background =
                    'rgba(255,255,255,0.03)';
                  (e.currentTarget as HTMLElement).style.color =
                    'rgba(255,255,255,0.7)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.background =
                    'transparent';
                  (e.currentTarget as HTMLElement).style.color =
                    'rgba(255,255,255,0.5)';
                }
              }}
            >
              <Icon
                size={20}
                style={{
                  color: isActive ? '#4CAF50' : 'rgba(255,255,255,0.4)',
                  ...(isActive && {
                    filter: 'drop-shadow(0 0 6px rgba(76,175,80,0.4))',
                  }),
                }}
              />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Motivational Quote Card */}
      <div
        style={{
          marginTop: 'auto',
          padding: '24px 20px',
          borderRadius: 16,
          background: 'rgba(20,20,20,0.4)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: 'rgba(76,175,80,0.3)',
            lineHeight: 1,
            marginBottom: 12,
            fontFamily: 'Georgia, serif',
          }}
        >
          &ldquo;
        </div>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.55)',
            margin: 0,
            marginBottom: 16,
          }}
        >
          Discipline is the bridge between goals and accomplishment.
        </p>
        <p
          style={{
            fontSize: 12,
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
