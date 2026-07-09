import { useState } from "react";
import { motion } from "framer-motion";
import { PenSquare } from "lucide-react";
import NotesDayNavigator from "./NotesDayNavigator";
import NotesList from "./NotesList";
import NotesCalendar from "./NotesCalendar";
import NotesDayInsight from "./NotesDayInsight";
import NotesStreak from "./NotesStreak";
import NotesTopTags from "./NotesTopTags";
import { notesData, toKey } from "./notesData";

export default function NotesContent() {
  const today = toKey(new Date());
  const [selectedDate, setSelectedDate] = useState(today);

  const notes = notesData[selectedDate] ?? [];

  return (
    <>
      {/* ═══ LEFT COLUMN (main content) ═══ */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
          zIndex: 1,
          minWidth: 0,
        }}
      >
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(76,175,80,0.15)",
                border: "1px solid rgba(76,175,80,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 16px rgba(76,175,80,0.15)",
              }}
            >
              <PenSquare size={18} style={{ color: "#4CAF50", filter: "drop-shadow(0 0 6px rgba(76,175,80,0.7))" }} />
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Notes
            </h1>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 400, paddingLeft: 48 }}>
            Your thoughts, reflections, and habit-related notes.
          </p>
        </motion.div>

        {/* Day Navigator */}
        <NotesDayNavigator selectedDate={selectedDate} onSelectDate={setSelectedDate} />

        {/* Notes list */}
        <NotesList notes={notes} selectedDate={selectedDate} />
      </div>

      {/* ═══ RIGHT COLUMN (sidebar widgets) ═══ */}
      <div
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <NotesCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
        <NotesDayInsight noteCount={notes.length} />
        <NotesStreak />
        <NotesTopTags />
      </div>
    </>
  );
}
