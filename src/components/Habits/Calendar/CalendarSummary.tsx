import { motion } from 'framer-motion';
import ProgressRing from '../../Shared/ProgressRing/ProgressRing';
import HabitCard from '../Today/HabitCard';
import { dummyHabits } from '../data';
import { Trophy } from 'lucide-react';

interface CalendarSummaryProps {
  selectedDay: number | null;
}

export default function CalendarSummary({ selectedDay }: CalendarSummaryProps) {
  if (!selectedDay) return null;

  // Derive some fake stats based on the selected day
  const isPast = selectedDay < 20;
  const isToday = selectedDay === 20;
  
  let completedCount = 0;
  let totalCount = 9;
  let habitsToShow = dummyHabits;

  if (selectedDay < 20) {
    if (selectedDay % 5 === 0) {
      completedCount = 0;
      habitsToShow = [];
    } else if (selectedDay % 3 === 0) {
      completedCount = 5;
      habitsToShow = dummyHabits.slice(0, 5);
    } else {
      completedCount = 9;
      habitsToShow = dummyHabits;
    }
  } else if (selectedDay === 20) {
    completedCount = 7;
    habitsToShow = dummyHabits.slice(0, 7);
  } else if (selectedDay === 21) {
    completedCount = 0;
    habitsToShow = [];
  } else if (selectedDay === 22) {
    completedCount = 3;
    habitsToShow = dummyHabits.slice(0, 3);
  } else if (selectedDay === 23) {
    completedCount = 5;
    habitsToShow = dummyHabits.slice(0, 5);
  } else if (selectedDay === 24) {
    completedCount = 8;
    habitsToShow = dummyHabits.slice(0, 8);
  } else if (selectedDay === 25) {
    completedCount = 9;
    habitsToShow = dummyHabits;
  } else {
    // Future / No Data
    completedCount = 0;
    habitsToShow = [];
  }

  const isNoData = selectedDay > 25;
  const progress = isNoData ? 0 : Math.round((completedCount / totalCount) * 100) || 0;

  let ringColor = '#F44336';
  let trackColor = 'rgba(244,67,54,0.3)';

  if (isNoData) {
    ringColor = 'rgba(255,255,255,0)';
    trackColor = 'rgba(255,255,255,0.05)';
  } else if (progress === 100) {
    ringColor = '#4CAF50';
    trackColor = '#4CAF50'; // totally green (even outline also)
  } else if (progress > 80) {
    ringColor = '#8BC34A'; // lil bit green
    trackColor = 'rgba(139,195,74,0.3)';
  } else if (progress >= 50) {
    ringColor = '#FFEB3B'; // yellow
    trackColor = 'rgba(255,235,59,0.3)';
  } else if (progress >= 20) {
    ringColor = '#FF9800'; // orange
    trackColor = 'rgba(255,152,0,0.3)';
  } else if (progress > 0) {
    ringColor = '#F44336'; // slightly red
    trackColor = 'rgba(244,67,54,0.3)';
  } else {
    ringColor = 'rgba(244,67,54,0)'; // smoothly animates to 0 opacity red
    trackColor = 'rgba(244,67,54,0.8)'; // outline - red
  }

  return (
    <>
      <style>{`
        .custom-green-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-green-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
          border-radius: 4px;
        }
        .custom-green-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(76,175,80,0.8), rgba(46,125,50,0.8));
          border-radius: 4px;
        }
      `}</style>
      <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        display: 'flex',
        gap: 24,
      }}
    >
      {/* Left Card - Summary Stats */}
      <div
        style={{
          flex: '0 0 240px',
          background: 'rgba(20,20,20,0.4)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 20,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>May {selectedDay}</h3>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>2024</span>
          </div>
          {progress === 100 && (
            <div style={{ padding: '6px', background: 'rgba(76,175,80,0.1)', borderRadius: '50%', boxShadow: '0 0 12px rgba(76,175,80,0.2)' }}>
              <Trophy size={16} style={{ color: '#4CAF50' }} />
            </div>
          )}
        </div>

        <ProgressRing 
          progress={progress} 
          size={100} 
          strokeWidth={8} 
          color={ringColor} 
          trackColor={trackColor}
          text={isNoData ? 'No Data' : undefined}
        />

        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4, marginBottom: 2 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#ffffff' }}>{isNoData ? '-' : completedCount}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>/ {isNoData ? '-' : totalCount}</span>
          </div>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Habits Completed</span>
        </div>
      </div>

      {/* Right Card - Habits List */}
      <div
        style={{
          flex: 1,
          background: 'rgba(20,20,20,0.4)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 20,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>Habits for this day</h3>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{habitsToShow.length} records</span>
        </div>

        <div
          className="custom-green-scrollbar"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            overflowY: 'auto',
            maxHeight: 240,
            paddingRight: 8,
          }}
        >
          {habitsToShow.length > 0 ? (
            habitsToShow.map((habit, idx) => (
              <HabitCard key={habit.id} habit={habit} index={idx} />
            ))
          ) : (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100, color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
              No habits recorded for this day.
            </div>
          )}
        </div>
      </div>
    </motion.div>
    </>
  );
}
