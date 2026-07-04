import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Plus, Filter, ArrowUpDown, BookOpen, Flame, Dumbbell, Calendar, Trophy, Droplets, Target, Star, CheckCircle2 } from 'lucide-react';
import Sidebar from '../Sidebar/Sidebar';
import TopNavbar from '../TopNavbar/TopNavbar';
import StatCard from './StatCard';
import HabitCard, { type Habit } from './HabitCard';
import HabitHeatmap from './HabitHeatmap';
import MiniCalendar from './MiniCalendar';
import InsightCard from './InsightCard';
import AchievementPreview from './AchievementPreview';
import ProgressRing from '../../Shared/ProgressRing/ProgressRing';

/* =========================================================
   Dummy Data
   ========================================================= */

const dummyHabits: Habit[] = [
  { id: 1, name: 'Morning Prayer', category: 'Faith', time: '5:30 AM', streak: 47, completed: true, icon: '🕌', color: '#4CAF50' },
  { id: 2, name: 'Workout', category: 'Fitness', time: '6:00 AM', streak: 16, completed: true, icon: '🏋️', color: '#4CAF50' },
  { id: 3, name: 'Read Quran', category: 'Faith', time: '7:00 AM', streak: 22, completed: true, icon: '📖', color: '#4CAF50' },
  { id: 4, name: 'Read 10 Pages', category: 'Learning', time: '9:00 AM', streak: 12, completed: true, icon: '📚', color: '#4CAF50' },
  { id: 5, name: 'Work on Project', category: 'Career', time: '10:00 AM', streak: 9, completed: true, icon: '💼', color: '#4CAF50' },
  { id: 6, name: 'Meditate', category: 'Mindfulness', time: '8:00 PM', streak: 5, completed: false, icon: '🧘', color: '#4CAF50' },
  { id: 7, name: 'Drink 3L of Water', category: 'Health', time: 'All Day', streak: 8, completed: false, icon: '💧', color: '#4CAF50' },
  { id: 8, name: 'Track Expenses', category: 'Finance', time: '9:00 PM', streak: 18, completed: false, icon: '💵', color: '#4CAF50' },
  { id: 9, name: 'Learn Spanish', category: 'Learning', time: '11:00 AM', streak: 4, completed: false, icon: '🇪🇸', color: '#4CAF50' },
  { id: 10, name: 'Walk the dog', category: 'Health', time: '5:00 PM', streak: 30, completed: false, icon: '🐕', color: '#4CAF50' },
  { id: 11, name: 'Journaling', category: 'Mindfulness', time: '10:00 PM', streak: 2, completed: false, icon: '📓', color: '#4CAF50' },
];

/* =========================================================
   Today Page Component
   ========================================================= */

export default function TodayPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#000000',
        color: '#ffffff',
        position: 'relative',
      }}
    >
      {/* ── Ambient Background Blur ── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '20%',
          left: '10%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(76,175,80,0.06) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          top: '60%',
          right: '5%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(76,175,80,0.04) 0%, transparent 70%)',
          filter: 'blur(120px)',
          zIndex: 0,
        }}
      />

      {/* ── Floating Background Icons ── */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 0, overflow: 'hidden' }}>
        <Dumbbell size={350} strokeWidth={2} style={{ position: 'absolute', top: 40, left: '6%', color: 'rgba(212, 175, 55, 0.05)', transform: 'rotate(-25deg)' }} />
        <CheckCircle2 size={320} strokeWidth={2} style={{ position: 'absolute', top: -30, left: '45%', color: 'rgba(212, 175, 55, 0.05)', transform: 'rotate(15deg)' }} />
        <BookOpen size={280} strokeWidth={2} style={{ position: 'absolute', top: 60, right: '12%', color: 'rgba(212, 175, 55, 0.05)', transform: 'rotate(20deg)' }} />
        <Droplets size={300} strokeWidth={2} style={{ position: 'absolute', top: '35%', left: '8%', color: 'rgba(212, 175, 55, 0.05)', transform: 'rotate(15deg)' }} />
        <Target size={380} strokeWidth={2} style={{ position: 'absolute', bottom: '25%', left: '18%', color: 'rgba(212, 175, 55, 0.05)', transform: 'rotate(-10deg)' }} />
        <Calendar size={320} strokeWidth={2} style={{ position: 'absolute', bottom: 40, right: '8%', color: 'rgba(212, 175, 55, 0.05)', transform: 'rotate(-15deg)' }} />
        <Flame size={400} strokeWidth={2} style={{ position: 'absolute', top: '40%', right: '28%', color: 'rgba(212, 175, 55, 0.04)', transform: 'rotate(5deg)' }} />
        <Trophy size={250} strokeWidth={2} style={{ position: 'absolute', bottom: '10%', right: '35%', color: 'rgba(212, 175, 55, 0.05)', transform: 'rotate(-20deg)' }} />
      </div>

      {/* ── Sidebar ── */}
      <div style={{ zIndex: 10, position: 'fixed', top: 0, left: 0, height: '100vh', width: 240 }}>
        <Sidebar activeItem="today" />
      </div>

      {/* ── Main Content Area ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', zIndex: 10, paddingTop: 16, marginLeft: 240 }}>
        <TopNavbar />

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            padding: '16px 32px 32px',
            display: 'flex',
            gap: 24,
          }}
        >
          {/* Left Column (Main) */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Greeting Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h1
                style={{
                  fontSize: 32,
                  fontWeight: 600,
                  marginBottom: 10,
                  letterSpacing: '-0.01em',
                }}
              >
                Good Evening, Mubeen 👋
              </h1>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
                Small steps every day. Big transformation always.
              </p>
            </motion.div>

            {/* Stat Cards */}
            <div style={{ display: 'flex', gap: 16 }}>
              <StatCard
                flex={1}
                leftElement={<ProgressRing progress={70} size={64} strokeWidth={6} />}
                value={
                  <>
                    <span style={{ fontSize: 32, fontWeight: 700, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em' }}>7</span>
                    <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>/ 10</span>
                  </>
                }
                label="Today's Progress"
                subtitle="Habits Completed"
                delay={0.1}
              />
              <StatCard
                flex={1}
                icon={<Flame size={22} style={{ color: '#FF9800', filter: 'drop-shadow(0 0 8px rgba(255,152,0,0.6))' }} />}
                iconBgColor="rgba(255,152,0,0.08)"
                iconBorderColor="rgba(255,152,0,0.2)"
                value={<span style={{ fontSize: 32, fontWeight: 700, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em' }}>23</span>}
                label="Current Streak"
                subtitle="days"
                delay={0.2}
              />
              <StatCard
                flex={1}
                icon={<Trophy size={22} style={{ color: '#4CAF50', filter: 'drop-shadow(0 0 8px rgba(76,175,80,0.6))' }} />}
                value={<span style={{ fontSize: 32, fontWeight: 700, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em' }}>41</span>}
                label="Longest Streak"
                subtitle="days"
                delay={0.3}
              />
            </div>

            {/* Today's Habits */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              style={{
                borderRadius: 20,
                background: 'rgba(20,20,20,0.4)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                height: 520,
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 28px',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <h2 style={{ fontSize: 20, fontWeight: 600 }}>Today's Habits</h2>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 22px',
                      borderRadius: 12,
                      background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                      border: '1px solid rgba(76,175,80,0.5)',
                      boxShadow: '0 0 20px rgba(76,175,80,0.3), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2)',
                      color: '#ffffff',
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.02em',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(76,175,80,0.5), 0 6px 20px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.2)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(76,175,80,0.3), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <Plus size={16} /> New Habit
                  </button>
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 18px',
                      borderRadius: 10,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
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
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <ArrowUpDown size={16} /> Sort
                  </button>
                </div>
              </div>

              {/* List */}
              <div 
                style={{ 
                  padding: '8px 0', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 4,
                  flex: 1,
                  minHeight: 0,
                  overflowY: 'auto',
                }}
              >
                {dummyHabits.map((habit, idx) => (
                  <HabitCard key={habit.id} habit={habit} index={idx} />
                ))}
              </div>
              
              <div style={{ padding: '24px', textAlign: 'center', marginTop: 'auto' }}>
                 <p style={{ color: 'rgba(76,175,80,0.8)', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textShadow: '0 0 10px rgba(76,175,80,0.3)' }}>
                    ✨ Keep it up! You're building a <strong style={{ fontWeight: 600 }}>better you.</strong>
                 </p>
              </div>
            </motion.div>
            
            <InsightCard />
          </div>

          {/* Right Column (Widgets) */}
          <div style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <HabitHeatmap />
            <MiniCalendar />
            <AchievementPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
