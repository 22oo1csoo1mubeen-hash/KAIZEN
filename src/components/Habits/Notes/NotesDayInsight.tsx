import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";
import { toKey } from "./notesData";

interface Props {
  noteCount: number;
  selectedDate: string;
}

export default function NotesDayInsight({ noteCount, selectedDate }: Props) {
  const circumference = 2 * Math.PI * 32;
  const offset = 0;

  let dateLabel = "on this date";
  const today = new Date();
  const todayKey = toKey(today);
  
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = toKey(yesterday);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowKey = toKey(tomorrow);

  if (selectedDate === todayKey) dateLabel = "today";
  else if (selectedDate === yesterdayKey) dateLabel = "yesterday";
  else if (selectedDate === tomorrowKey) dateLabel = "tomorrow";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.05, ease: [0.25, 0.4, 0.25, 1] }}
      style={{
        borderRadius: 20,
        background: "rgba(20,20,20,0.4)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "rgba(76,175,80,0.15)",
            border: "1px solid rgba(76,175,80,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarChart2 size={14} style={{ color: "#4CAF50" }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>Day Insight</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
            You wrote{" "}
            <span style={{ color: "#4CAF50", fontWeight: 700 }}>{noteCount} {noteCount === 1 ? "note" : "notes"}</span>{" "}
            {dateLabel}
          </p>
          <p style={{ margin: "4px 0 0", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            {noteCount === 0 ? "Start capturing your thoughts!" : "Keep capturing your thoughts!"}
          </p>
        </div>

        <div style={{ position: "relative", width: 64, height: 64, flexShrink: 0 }}>
          <svg width="64" height="64" style={{ transform: "rotate(-90deg)", overflow: "visible" }}>
            <circle
              cx="32" cy="32" r="26"
              fill="none"
              stroke="rgba(76,175,80,0.1)"
              strokeWidth="5"
            />
            <circle
              cx="32" cy="32" r="26"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ filter: "drop-shadow(0 0 6px rgba(76,175,80,0.7))", transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              color: "#fff",
              textShadow: "0 0 12px rgba(76,175,80,0.5)",
            }}
          >
            {noteCount}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
