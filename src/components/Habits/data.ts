import type { Habit } from './Today/HabitCard';

export const dummyHabits: Habit[] = [
  { id: 1, name: 'Morning Prayer', category: 'Faith', time: '5:30 AM', streak: 47, completed: true, icon: '🕌', color: '#4CAF50', completionPercentage: 96 },
  { id: 2, name: 'Workout', category: 'Fitness', time: '6:00 AM', streak: 16, completed: true, icon: '🏋️', color: '#4CAF50', completionPercentage: 80 },
  { id: 3, name: 'Read Quran', category: 'Faith', time: '7:00 AM', streak: 22, completed: true, icon: '📖', color: '#4CAF50', completionPercentage: 95 },
  { id: 4, name: 'Read 10 Pages', category: 'Learning', time: '9:00 AM', streak: 12, completed: true, icon: '📚', color: '#4CAF50', completionPercentage: 72 },
  { id: 5, name: 'Work on Project', category: 'Career', time: '10:00 AM', streak: 9, completed: true, icon: '💼', color: '#4CAF50', completionPercentage: 60 },
  { id: 6, name: 'Meditate', category: 'Mindfulness', time: '8:00 PM', streak: 5, completed: false, icon: '🧘', color: '#4CAF50', completionPercentage: 50 },
  { id: 7, name: 'Drink 3L of Water', category: 'Health', time: 'All Day', streak: 8, completed: false, icon: '💧', color: '#4CAF50', completionPercentage: 70 },
  { id: 8, name: 'Track Expenses', category: 'Finance', time: '9:00 PM', streak: 18, completed: false, icon: '💵', color: '#4CAF50', completionPercentage: 90 },
  { id: 9, name: 'No Sugar', category: 'Health', time: 'All Day', streak: 14, completed: false, icon: '🚫', color: '#4CAF50', completionPercentage: 65 },
  { id: 10, name: 'Evening Walk', category: 'Fitness', time: '7:30 PM', streak: 11, completed: false, icon: '🚶', color: '#4CAF50', completionPercentage: 55 },
];
