import { CalendarHeader, CalendarControls } from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import CalendarSummary from './CalendarSummary';
import { useState } from 'react';

export default function CalendarContent() {
  const [selectedDay, setSelectedDay] = useState<number | null>(20); // Default to Today

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', zIndex: 1, minWidth: 0, paddingBottom: 40 }}>
      <CalendarHeader />
      
      <div style={{
        background: 'rgba(20,20,20,0.4)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.5)',
      }}>
        <CalendarControls selectedDay={selectedDay} />
        <CalendarGrid selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      </div>

      <CalendarSummary selectedDay={selectedDay} />
    </div>
  );
}
