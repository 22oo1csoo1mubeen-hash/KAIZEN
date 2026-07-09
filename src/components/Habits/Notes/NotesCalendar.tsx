import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toKey, datesWithNotes } from "./notesData";

interface Props {
  selectedDate: string;
  onSelectDate: (d: string) => void;
}

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_HEADERS = ["MON","TUE","WED","THU","FRI","SAT","SUN"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekday(year: number, month: number) {
  const raw = new Date(year, month, 1).getDay();
  return raw === 0 ? 6 : raw - 1;
}

export default function NotesCalendar({ selectedDate, onSelectDate }: Props) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const selectedParts = selectedDate.split("-").map(Number);
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstWeekday = getFirstWeekday(viewYear, viewMonth);
  const todayKey = toKey(today);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        borderRadius: 20,
        background: "rgba(20,20,20,0.4)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        padding: "16px",
      }}
    >
      <p style={{ margin: "0 0 12px 0", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em" }}>
        Calendar
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <button onClick={prevMonth} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", padding: 4, display: "flex" }}>
          <ChevronLeft size={14} />
        </button>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`${viewMonth}-${viewYear}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}
          >
            {MONTHS[viewMonth]} {viewYear}
          </motion.span>
        </AnimatePresence>
        <button onClick={nextMonth} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", padding: 4, display: "flex" }}>
          <ChevronRight size={14} />
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: 4 }}>
        {DAY_HEADERS.map(h => (
          <div key={h} style={{ textAlign: "center", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em", padding: "4px 0" }}>
            {h}
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
        {cells.map((day, idx) => {
          if (!day) return <div key={idx} />;
          const key = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isSelected =
            selectedParts[0] === viewYear &&
            selectedParts[1] === viewMonth + 1 &&
            selectedParts[2] === day;
          const isToday = key === todayKey;
          const hasDot = datesWithNotes.has(key);

          return (
            <motion.button
              key={key}
              layout
              onClick={() => onSelectDate(key)}
              style={{
                width: "100%",
                aspectRatio: "1",
                border: "none",
                borderRadius: 8,
                background: "transparent",
                color: isSelected
                  ? "#fff"
                  : isToday
                  ? "#4CAF50"
                  : "rgba(255,255,255,0.65)",
                fontSize: 11,
                fontWeight: isSelected || isToday ? 700 : 400,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                padding: "4px 2px",
                position: "relative",
                zIndex: isSelected ? 2 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  const bg = e.currentTarget.querySelector('.hover-bg') as HTMLElement;
                  if (bg) bg.style.opacity = '1';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  const bg = e.currentTarget.querySelector('.hover-bg') as HTMLElement;
                  if (bg) bg.style.opacity = '0';
                }
              }}
            >
              {isSelected && (
                <motion.div
                  layoutId="calendar-selected-bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 8,
                    background: "rgba(76,175,80,0.85)",
                    boxShadow: "0 0 12px rgba(76,175,80,0.4)",
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {!isSelected && isToday && (
                <div style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 8,
                  background: "rgba(76,175,80,0.15)",
                  zIndex: -1,
                }} />
              )}
              {!isSelected && (
                <div className="hover-bg" style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.06)",
                  opacity: 0,
                  transition: "opacity 0.2s",
                  zIndex: -1,
                }} />
              )}
              <span style={{ position: "relative", zIndex: 1 }}>{day}</span>
              {hasDot && (
                <div style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: isSelected ? "rgba(255,255,255,0.8)" : "rgba(76,175,80,0.8)",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                }} />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
