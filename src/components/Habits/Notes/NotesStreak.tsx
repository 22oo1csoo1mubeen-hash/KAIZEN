import { motion } from "framer-motion";
import { Flame, CheckCircle2, RefreshCw } from "lucide-react";
import { streakDays } from "./notesData";

const STREAK_ICONS = [true, true, true, true, true, true, true, true, false];

export default function NotesStreak() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
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
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "rgba(255,152,0,0.15)",
            border: "1px solid rgba(255,152,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Flame size={14} style={{ color: "#FF9800", filter: "drop-shadow(0 0 4px rgba(255,152,0,0.7))" }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>Notes Streak</span>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
            {streakDays}
          </span>
          <span style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>days</span>
        </div>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(76,175,80,0.8)", fontWeight: 500 }}>
          Great consistency in note-taking!
        </p>
      </div>

      <div style={{ display: "flex", gap: 5 }}>
        {STREAK_ICONS.map((done, i) => (
          <div key={i} style={{ color: done ? "#4CAF50" : "rgba(255,255,255,0.2)" }}>
            {done ? (
              <CheckCircle2
                size={16}
                fill="rgba(76,175,80,0.2)"
                style={{ filter: "drop-shadow(0 0 4px rgba(76,175,80,0.5))" }}
              />
            ) : (
              <RefreshCw size={16} style={{ opacity: 0.4 }} />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
