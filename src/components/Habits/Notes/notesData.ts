export interface NoteItem {
  id: number;
  title: string;
  time: string;
  category: string;
  categoryColor: string;
  body: string;
  starred: boolean;
  icon: string;
  iconBg: string;
}

export interface DayNotes {
  [dateKey: string]: NoteItem[];
}

export function toKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function buildData(): DayNotes {
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  const shift = (n: number) => {
    const d = new Date(base);
    d.setDate(d.getDate() + n);
    return toKey(d);
  };
  return {
    [shift(0)]: [
      { id: 1, title: 'Morning Prayer Reflection', time: '7:30 AM', category: 'Faith', categoryColor: '#4CAF50', body: 'Felt really peaceful and grateful today. Focused more during Fajr and felt a positive start to the day.', starred: true, icon: 'BookOpen', iconBg: 'rgba(76,175,80,0.15)' },
      { id: 2, title: 'Workout Progress', time: '11:15 AM', category: 'Fitness', categoryColor: '#00BCD4', body: 'Increased my reps today. Feeling stronger and building consistency. Need to work on form during push exercises.', starred: false, icon: 'Dumbbell', iconBg: 'rgba(0,188,212,0.15)' },
      { id: 3, title: 'Read 10 Pages – Key Takeaways', time: '9:45 PM', category: 'Learning', categoryColor: '#9C27B0', body: "Read 10 pages from 'Atomic Habits'. Key takeaway: Tiny habits lead to remarkable results over time.", starred: false, icon: 'Clipboard', iconBg: 'rgba(156,39,176,0.15)' },
    ],
    [shift(-1)]: [
      { id: 4, title: 'Evening Reflection', time: '9:00 PM', category: 'Mindfulness', categoryColor: '#FF9800', body: 'Great day overall. Stayed consistent with habits. Feeling motivated to keep the streak going.', starred: true, icon: 'Moon', iconBg: 'rgba(255,152,0,0.15)' },
      { id: 5, title: 'Expense Review', time: '10:30 PM', category: 'Finance', categoryColor: '#4CAF50', body: 'Reviewed monthly spending. Need to cut back on dining out. Saved 15% more than last month.', starred: false, icon: 'Target', iconBg: 'rgba(76,175,80,0.15)' },
    ],
    [shift(-2)]: [
      { id: 6, title: 'Career Goal Setting', time: '8:00 AM', category: 'Career', categoryColor: '#2196F3', body: 'Outlined 3 major milestones for Q3. Focus on shipping the MVP and getting user feedback.', starred: true, icon: 'Target', iconBg: 'rgba(33,150,243,0.15)' },
    ],
    [shift(-3)]: [
      { id: 7, title: 'Quran Reflection', time: '6:00 AM', category: 'Faith', categoryColor: '#4CAF50', body: "Read Surah Al-Mulk. Reminded of gratitude and trust in Allah's plan.", starred: false, icon: 'BookOpen', iconBg: 'rgba(76,175,80,0.15)' },
      { id: 8, title: 'Fitness Check-in', time: '7:00 AM', category: 'Fitness', categoryColor: '#00BCD4', body: 'Hit a new PR on bench press. Training is paying off. Energy levels are high.', starred: true, icon: 'Dumbbell', iconBg: 'rgba(0,188,212,0.15)' },
    ],
    [shift(-5)]: [
      { id: 9, title: 'Weekly Planning', time: '10:00 AM', category: 'Career', categoryColor: '#2196F3', body: 'Mapped out tasks for the week. Prioritized project deliverables and personal habits.', starred: false, icon: 'Clipboard', iconBg: 'rgba(33,150,243,0.15)' },
    ],
    [shift(1)]: [
      { id: 10, title: "Tomorrow's Intentions", time: '11:00 PM', category: 'Mindfulness', categoryColor: '#FF9800', body: 'Setting clear intentions for tomorrow. Focus on deep work and staying present.', starred: false, icon: 'Moon', iconBg: 'rgba(255,152,0,0.15)' },
    ],
  };
}

export const notesData: DayNotes = buildData();
export const datesWithNotes: Set<string> = new Set(Object.keys(notesData));

export function toggleNoteStar(dateKey: string, noteId: number) {
  if (notesData[dateKey]) {
    const note = notesData[dateKey].find(n => n.id === noteId);
    if (note) note.starred = !note.starred;
  }
}

export const topTags = [
  { label: 'Faith', count: 5, color: '#4CAF50' },
  { label: 'Fitness', count: 4, color: '#00BCD4' },
  { label: 'Learning', count: 3, color: '#9C27B0' },
  { label: 'Mindfulness', count: 2, color: '#FF9800' },
  { label: 'Career', count: 1, color: '#2196F3' },
];

export const streakDays = 12;
