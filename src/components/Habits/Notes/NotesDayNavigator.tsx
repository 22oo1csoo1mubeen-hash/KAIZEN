import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { toKey, datesWithNotes } from "./notesData";

interface Props {
  selectedDate: string;
  onSelectDate: (d: string) => void;
}

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function parseKey(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatHeader(key: string) {
  const d = parseKey(key);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function getDayLabel(key: string) {
  const d = parseKey(key);
  return DAYS[d.getDay()];
}

function getRelativeDayLabel(key: string) {
  const today = toKey(new Date());
  if (key === today) return "Today";
  const yesterday = shiftDate(today, -1);
  if (key === yesterday) return "Yesterday";
  const tomorrow = shiftDate(today, 1);
  if (key === tomorrow) return "Tomorrow";
  return null;
}

function isToday(key: string) {
  return key === toKey(new Date());
}

function shiftDate(key: string, delta: number): string {
  const d = parseKey(key);
  d.setDate(d.getDate() + delta);
  return toKey(d);
}

export default function NotesDayNavigator({ selectedDate, onSelectDate }: Props) {
  const [stripStart, setStripStart] = useState(() => shiftDate(selectedDate, -3));
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const start = parseKey(stripStart);
    const selected = parseKey(selectedDate);
    const diff = Math.round((selected.getTime() - start.getTime()) / 86400000);
    if (diff < 0 || diff > 6) {
      setDirection(diff < 0 ? -1 : 1);
      setStripStart(shiftDate(selectedDate, -3));
    }
  }, [selectedDate, stripStart]);

  const days = Array.from({ length: 7 }).map((_, i) => shiftDate(stripStart, i));

  const goToPrev = () => {
    setDirection(-1);
    onSelectDate(shiftDate(selectedDate, -1));
  };
  
  const goToNext = () => {
    setDirection(1);
    onSelectDate(shiftDate(selectedDate, 1));
  };

  const goToToday = () => {
    const today = toKey(new Date());
    setDirection(today > selectedDate ? 1 : -1);
    onSelectDate(today);
  };

  const relativeLabel = getRelativeDayLabel(selectedDate);
  const dayStr = getDayLabel(selectedDate).charAt(0) + getDayLabel(selectedDate).slice(1).toLowerCase();

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
    }),
  };

  const arrowStyle = {
    width: 36,
    height: 36,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 0 12px rgba(255,255,255,0.05)",
    color: "rgba(255,255,255,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    flexShrink: 0,
  };
  
  const arrowHover = {
    scale: 1.05, 
    boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 0 24px rgba(76,175,80,0.6), inset 0 1px 2px rgba(255,255,255,0.3)", 
    borderColor: "rgba(76,175,80,0.6)",
    background: "rgba(76,175,80,0.1)",
    color: "#fff"
  };

  return (
    <motion.div
      layout
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
        padding: "20px 24px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <div style={{ width: 120, display: "flex", justifyContent: "flex-start" }}>
          <motion.button
            whileHover={arrowHover}
            whileTap={{ scale: 0.95, boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)" }}
            onClick={goToPrev}
            style={arrowStyle}
          >
            <ChevronLeft size={18} />
          </motion.button>
        </div>

        <div style={{ textAlign: "center", flex: 1, padding: "0 10px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 4 }}>
            <CalendarDays size={16} style={{ color: "rgba(76,175,80,0.9)" }} />
            <span style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
              {formatHeader(selectedDate)}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.01em" }}>
            {relativeLabel ? (
              <>
                {dayStr} <span style={{ color: "#4CAF50", marginLeft: 6, fontWeight: 600 }}>&bull; {relativeLabel}</span>
              </>
            ) : (
              <>{dayStr}</>
            )}
          </p>
        </div>

        <div style={{ width: 120, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10 }}>
          {!isToday(selectedDate) && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(76,175,80,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={goToToday}
              style={{
                padding: "7px 16px",
                borderRadius: 10,
                border: "1px solid rgba(76,175,80,0.4)",
                background: "rgba(76,175,80,0.08)",
                color: "#4CAF50",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s",
                letterSpacing: "0.02em",
                flexShrink: 0,
              }}
            >
              Today
            </motion.button>
          )}
          <motion.button
            whileHover={arrowHover}
            whileTap={{ scale: 0.95, boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)" }}
            onClick={goToNext}
            style={arrowStyle}
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>

      <div style={{ overflow: "hidden" }}>
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={stripStart}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              display: "flex",
              gap: 6,
              width: "100%",
            }}
          >
            {days.map((key) => {
              const isSelected = key === selectedDate;
              const hasDot = datesWithNotes.has(key);
              const todayDay = isToday(key);
              const d = parseKey(key);
              const dayNum = d.getDate();
              const dayName = DAYS[d.getDay()];

              return (
                <div key={key} style={{ flex: "1 0 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <button
                    onClick={() => {
                      setDirection(key > selectedDate ? 1 : -1);
                      onSelectDate(key);
                    }}
                    style={{
                      width: "100%",
                      minWidth: 72,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                      padding: "10px 8px",
                      borderRadius: 14,
                      border: isSelected
                        ? "1px solid rgba(76,175,80,0.6)"
                        : "1px solid rgba(255,255,255,0.06)",
                      background: isSelected
                        ? "linear-gradient(135deg, rgba(76,175,80,0.22), rgba(46,125,50,0.16))"
                        : "rgba(255,255,255,0.02)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: isSelected
                        ? "0 0 20px rgba(76,175,80,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
                        : "none",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                      }
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: isSelected ? "#4CAF50" : "rgba(255,255,255,0.4)",
                        textTransform: "uppercase",
                      }}
                    >
                      {dayName}
                    </span>
                    <span
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: isSelected ? "#ffffff" : todayDay ? "rgba(76,175,80,0.9)" : "rgba(255,255,255,0.75)",
                        lineHeight: 1,
                        filter: isSelected ? "drop-shadow(0 0 8px rgba(76,175,80,0.5))" : "none",
                      }}
                    >
                      {dayNum}
                    </span>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: hasDot
                          ? isSelected ? "#4CAF50" : "rgba(76,175,80,0.6)"
                          : "rgba(255,255,255,0.1)",
                        boxShadow: hasDot && isSelected ? "0 0 6px rgba(76,175,80,0.8)" : "none",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </button>
                  
                  {isSelected ? (
                    <motion.div
                      layoutId="active-green-bar"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{
                        width: 40,
                        height: 3,
                        borderRadius: 2,
                        background: "rgba(76,175,80,0.5)",
                        boxShadow: "0 0 6px rgba(76,175,80,0.3)",
                        marginTop: 12,
                      }}
                    />
                  ) : (
                    <div style={{ height: 3, marginTop: 12 }} />
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
