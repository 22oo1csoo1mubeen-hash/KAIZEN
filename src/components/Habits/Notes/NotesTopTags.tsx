import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import { topTags } from "./notesData";

export default function NotesTopTags() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
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
      {/* Header */}
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
          <Tag size={12} style={{ color: "#4CAF50" }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
          Top Tags This Week
        </span>
      </div>

      {/* Tags grid */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {topTags.map((tag) => (
          <div
            key={tag.label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 12px",
              borderRadius: 20,
              background: `${tag.color}12`,
              border: `1px solid ${tag.color}35`,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = `${tag.color}22`;
              (e.currentTarget as HTMLElement).style.borderColor = `${tag.color}60`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = `${tag.color}12`;
              (e.currentTarget as HTMLElement).style.borderColor = `${tag.color}35`;
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
              {tag.label}
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: tag.color,
                background: `${tag.color}20`,
                borderRadius: 10,
                padding: "1px 6px",
              }}
            >
              {tag.count}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
