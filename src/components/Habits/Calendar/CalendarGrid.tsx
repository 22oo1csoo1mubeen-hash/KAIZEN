import { motion } from 'framer-motion';
import CalendarDayCard, { type DayState } from './CalendarDayCard';

interface CalendarGridProps {
  selectedDay: number | null;
  onSelectDay: (day: number) => void;
}

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Mock data for May 2024
// Month starts on Wednesday (so 2 empty days from April: 29, 30)
const generateMockDays = () => {
  const days = [];
  
  // Previous month padding (April 29, 30)
  days.push({ dayNumber: 29, state: 'empty' as DayState, completedText: 'No Data', isCurrentMonth: false });
  days.push({ dayNumber: 30, state: 'empty' as DayState, completedText: 'No Data', isCurrentMonth: false });
  
  // Current month (May 1-31)
  for (let i = 1; i <= 31; i++) {
    let state: DayState = 'empty';
    let completedText = 'No Data';
    let isSpecial = false;

    let isToday = false;

    // Add some realistic variation based on the date
    if (i < 20) { // Past days
      if (i % 5 === 0) {
        state = 'none';
        completedText = '0 / 9';
      } else if (i % 3 === 0) {
        state = 'some';
        completedText = '5 / 9';
      } else {
        state = 'all';
        completedText = '9 / 9';
      }
    } else if (i === 20) { // "Today"
      state = 'some';
      completedText = '7 / 9';
      isToday = true;
    } else if (i === 21) {
      state = 'none';
      completedText = '0 / 9';
    } else if (i === 22) {
      state = 'some';
      completedText = '3 / 9';
    } else if (i === 23) {
      state = 'some';
      completedText = '5 / 9';
    } else if (i === 24) {
      state = 'some';
      completedText = '8 / 9';
    } else if (i === 25) {
      state = 'all';
      completedText = '9 / 9';
    }

    days.push({ dayNumber: i, state, completedText, isCurrentMonth: true, isToday });
  }

  // Next month padding (June 1, 2) to complete 5 weeks (35 days)
  days.push({ dayNumber: 1, state: 'empty' as DayState, completedText: 'No Data', isCurrentMonth: false });
  days.push({ dayNumber: 2, state: 'empty' as DayState, completedText: 'No Data', isCurrentMonth: false });

  return days;
};

const mockDays = generateMockDays();

export default function CalendarGrid({ selectedDay, onSelectDay }: CalendarGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {/* Days of Week Header */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10, padding: '0 8px' }}>
        {DAYS_OF_WEEK.map((day) => (
          <div key={day} style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10 }}>
        {mockDays.map((dayData, index) => (
          <CalendarDayCard
            key={index}
            {...dayData}
            isToday={dayData.isToday}
            isSelected={dayData.isCurrentMonth && dayData.dayNumber === selectedDay}
            onSelect={() => {
              if (dayData.isCurrentMonth) onSelectDay(dayData.dayNumber);
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
