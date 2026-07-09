import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Plus, Filter, ArrowUpDown, BookOpen, Flame, Dumbbell, Calendar, Trophy, Droplets, Target, Star, CheckCircle2, Leaf, Clipboard, StickyNote, Zap, Heart, Moon, Sun, Wind, Award, BarChart2 } from 'lucide-react';
import Sidebar from '../Sidebar/Sidebar';
import TopNavbar from '../TopNavbar/TopNavbar';
import StatCard from './StatCard';
import HabitCard, { type Habit } from './HabitCard';
import HabitHeatmap from './HabitHeatmap';
import MiniCalendar from './MiniCalendar';
import InsightCard from './InsightCard';
import AchievementPreview from './AchievementPreview';
import ProgressRing from '../../Shared/ProgressRing/ProgressRing';
import iconsBg from '../../../assets/Habits/Today/icons.png';
import { useState } from 'react';
import { dummyHabits } from '../data';
import AllHabitsContent from '../AllHabits/AllHabitsContent';
import CalendarContent from '../Calendar/CalendarContent';
import NotesContent from '../Notes/NotesContent';


/* =========================================================
   Today Page Component
   ========================================================= */

export default function TodayPage() {
  const [activeTab, setActiveTab] = useState('today');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    document.body.classList.add('habits-page');
    return () => {
      document.body.classList.remove('habits-page');
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#000000',
        color: '#ffffff',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* ── Ambient Glow Orbs ── */}
      <div className="pointer-events-none absolute" style={{ top: '5%', left: '2%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(76,175,80,0.09) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }} />
      <div className="pointer-events-none absolute" style={{ top: '45%', left: '15%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(180,150,40,0.07) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0 }} />
      <div className="pointer-events-none absolute" style={{ top: '15%', right: '0%', width: 800, height: 800, background: 'radial-gradient(circle, rgba(76,175,80,0.06) 0%, transparent 60%)', filter: 'blur(90px)', zIndex: 0 }} />
      <div className="pointer-events-none absolute" style={{ bottom: '0%', right: '10%', width: 650, height: 650, background: 'radial-gradient(circle, rgba(180,150,40,0.05) 0%, transparent 60%)', filter: 'blur(70px)', zIndex: 0 }} />

      {/* Background Icons */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${iconsBg})`,
          backgroundSize: '1000px',
          backgroundRepeat: 'repeat',
          opacity: 0.08,
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(4px) drop-shadow(0 0 10px rgba(76, 175, 80, 0.25)) drop-shadow(0 0 3px rgba(255, 255, 255, 0.1))',
        }}
      />

      {/* ── Sidebar ── */}
      <div style={{ zIndex: 10, position: 'fixed', top: 0, left: 0, height: '100vh', width: 180, overflowY: 'hidden', overflowX: 'hidden' }}>
        <Sidebar activeItem={activeTab} onItemClick={setActiveTab} />
      </div>

      {/* ── Main Content Area ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 10, marginLeft: 180, minHeight: '100vh' }}>
        <TopNavbar />

        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            padding: '12px 24px 12px',
            display: 'flex',
            gap: 16,
            minWidth: 0,
          }}
        >
          {/* Ambient Lighting Background */}
          <div
            style={{
              position: 'absolute',
              top: '5%',
              left: '10%',
              width: 500,
              height: 500,
              background: 'radial-gradient(circle, rgba(76,175,80,0.08) 0%, rgba(76,175,80,0) 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: 600,
              height: 600,
              background: 'radial-gradient(circle, rgba(76,175,80,0.05) 0%, rgba(76,175,80,0) 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {activeTab === 'today' && (
            <>
              {/* Left Column (Main Content) */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 1 }}>
                {/* Greeting Section */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <h1
                    style={{
                      fontSize: 26,
                      fontWeight: 600,
                      marginBottom: 2,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Good Evening, Mubeen 👋
                  </h1>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
                    Small steps every day. Big transformation always.
                  </p>
                </motion.div>

                {/* Stat Cards */}
                <div style={{ display: 'flex', gap: 24, position: 'relative', zIndex: 1 }}>
                  <StatCard
                    leftElement={<ProgressRing progress={70} size={56} strokeWidth={4} />}
                    value={
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                        <span style={{ fontSize: 32, fontWeight: 700, color: '#ffffff' }}>7</span>
                        <span style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>/ 10</span>
                      </div>
                    }
                    label="Today's Progress"
                    subtitle="Habits Completed"
                  />
                  <StatCard
                    icon={<Flame size={24} style={{ color: '#FF9800', filter: 'drop-shadow(0 0 8px rgba(255,152,0,0.6))' }} />}
                    iconBgColor="transparent"
                    iconBorderColor="rgba(255,152,0,0.4)"
                    value={<span style={{ fontSize: 32, fontWeight: 700, color: '#ffffff' }}>23</span>}
                    label="Current Streak"
                    subtitle="days"
                  />
                  <StatCard
                    icon={<Trophy size={28} style={{ color: '#4CAF50', filter: 'drop-shadow(0 0 8px rgba(76,175,80,0.6))' }} />}
                    iconBgColor="transparent"
                    iconBorderColor="rgba(76,175,80,0.4)"
                    containerSize={56}
                    value={<span style={{ fontSize: 32, fontWeight: 700, color: '#ffffff' }}>41</span>}
                    label="Longest Streak"
                    subtitle="days"
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
                    height: 380,
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 20px',
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
                    className="habits-list-scroll"
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
                  
                  
                  <div style={{ padding: '12px', textAlign: 'center', marginTop: 'auto' }}>
                     <p style={{ color: 'rgba(76,175,80,0.8)', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, textShadow: '0 0 10px rgba(76,175,80,0.3)' }}>
                        ✨ Keep it up! You're building a <strong style={{ fontWeight: 600 }}>better you.</strong>
                     </p>
                  </div>
                </motion.div>
                
                <InsightCard />
              </div>

              {/* Right Column (Widgets) */}
              <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <HabitHeatmap />
                <MiniCalendar onCalendarClick={() => setActiveTab('calendar')} />
                <AchievementPreview />
              </div>
            </>
          )}

          {activeTab === 'all-habits' && (
            <AllHabitsContent />
          )}

          {activeTab === 'calendar' && (
            <CalendarContent />
          )}

          {activeTab === 'notes' && (
            <NotesContent />
          )}


        </div>
      </div>
    </div>
  );
}
