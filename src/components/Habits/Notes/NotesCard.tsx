import { useState } from "react";
import { Star, MoreHorizontal, BookOpen, Dumbbell, Clipboard, Moon, Target } from "lucide-react";
import type { NoteItem } from "./notesData";
import { motion } from "framer-motion";

interface Props {
  note: NoteItem;
}

const IconMap: Record<string, any> = {
  BookOpen,
  Dumbbell,
  Clipboard,
  Moon,
  Target
};

export default function NotesCard({ note }: Props) {
  const [starred, setStarred] = useState(note.starred);
  const [menuOpen, setMenuOpen] = useState(false);

  const IconComponent = IconMap[note.icon] || BookOpen;

  return (
    <motion.div
      layout
      style={{
        borderRadius: 16,
        background: "rgba(20,20,20,0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderLeft: "3px solid rgba(76,175,80,0.7)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        padding: "16px 20px",
        display: "flex",
        gap: 16,
        transition: "all 0.3s ease",
        position: "relative",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(20,20,20,0.85)";
        (e.currentTarget as HTMLElement).style.borderLeftColor = "#4CAF50";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(76,175,80,0.15), inset 0 1px 0 rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(14,14,14,0.6)";
        (e.currentTarget as HTMLElement).style.borderLeftColor = "rgba(76,175,80,0.7)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: note.iconBg,
          border: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 2,
          color: note.categoryColor,
        }}
      >
        <IconComponent size={20} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-0.01em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            {note.title}
          </h3>
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={() => {
              note.starred = !note.starred;
              setStarred(note.starred);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              alignItems: "center",
              color: starred ? "#FFCA28" : "rgba(255,255,255,0.25)",
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
          >
            <motion.div animate={{ scale: starred ? [1, 1.4, 1] : 1 }} transition={{ duration: 0.4 }}>
              <Star size={16} fill={starred ? "#FFCA28" : "none"} style={starred ? { filter: "drop-shadow(0 0 10px rgba(255,202,40,0.8))" } : {}} />
            </motion.div>
          </motion.button>
        </div>

        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
            {note.time}
          </span>
          <span
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: note.categoryColor,
              background: `${note.categoryColor}18`,
              border: `1px solid ${note.categoryColor}40`,
              borderRadius: 20,
              padding: "2px 10px",
              letterSpacing: "0.02em",
            }}
          >
            {note.category}
          </span>
        </div>

        {/* Body */}
        <p
          style={{
            margin: 0,
            fontSize: 13,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.55)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {note.body}
        </p>
      </div>

      {/* Menu button */}
      <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start" }}>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.3)",
            padding: 4,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
          }}
        >
          <MoreHorizontal size={16} />
        </button>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              position: "absolute",
              right: 0,
              top: 28,
              background: "rgba(24,24,24,0.95)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "4px 0",
              zIndex: 20,
              minWidth: 140,
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            }}
          >
            {["Edit", "Pin note", "Delete"].map((item) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px 16px",
                  background: "none",
                  border: "none",
                  color: item === "Delete" ? "#ff5555" : "rgba(255,255,255,0.75)",
                  fontSize: 13,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "none";
                }}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
