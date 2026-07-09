import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, LayoutGrid, StickyNote, Plus } from "lucide-react";
import NotesCard from "./NotesCard";
import type { NoteItem } from "./notesData";

interface Props {
  notes: NoteItem[];
  selectedDate: string;
}

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function formatDateLabel(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export default function NotesList({ notes, selectedDate }: Props) {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1 }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            Notes for {formatDateLabel(selectedDate)}
          </h2>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#4CAF50",
              background: "rgba(76,175,80,0.12)",
              border: "1px solid rgba(76,175,80,0.3)",
              borderRadius: 20,
              padding: "2px 10px",
              letterSpacing: "0.02em",
            }}
          >
            {notes.length} {notes.length === 1 ? "Note" : "Notes"}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <motion.button
            whileHover={{ scale: 1.02, y: -1, boxShadow: '0 0 30px rgba(76,175,80,0.5), 0 6px 20px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 22px',
              borderRadius: 12,
              background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
              border: '1px solid rgba(76,175,80,0.5)',
              boxShadow: '0 0 20px rgba(76,175,80,0.3), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2)',
              color: '#ffffff',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
            }}
          >
            <Plus size={16} /> Add Note
          </motion.button>
          
          <div style={{ display: "flex", gap: 4,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            padding: 3,
          }}
          >
            {(["list", "grid"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 7,
                  border: "none",
                  background: view === v ? "rgba(76,175,80,0.2)" : "transparent",
                  color: view === v ? "#4CAF50" : "rgba(255,255,255,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: view === v ? "0 0 10px rgba(76,175,80,0.2)" : "none",
                }}
              >
                {v === "list" ? <List size={14} /> : <LayoutGrid size={14} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notes */}
      <AnimatePresence mode="wait">
        {notes.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            style={{
              borderRadius: 20,
              background: "rgba(20,20,20,0.4)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "60px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "rgba(76,175,80,0.1)",
                border: "1px solid rgba(76,175,80,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StickyNote size={24} style={{ color: "rgba(76,175,80,0.7)" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>
                No notes for this day
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
                Select a different day or add your first note.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`${selectedDate}-${view}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={
              view === "grid"
                ? { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }
                : { display: "flex", flexDirection: "column", gap: 12 }
            }
          >
            {notes.map((note, i) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <NotesCard note={note} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
