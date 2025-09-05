"use client";
import { motion } from "framer-motion";

export default function VangoghContainer({ title, description, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 16px 48px rgba(44,62,80,0.18)",
        borderColor: "#27408B",
        background: "rgba(255,255,220,0.95)",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        background: "url('/blogs/art-14.png') center/cover, #fff",
        border: "10px solid #FFD700",
        borderRadius: "2.5rem",
        boxShadow: "0 8px 32px rgba(44,62,80,0.15)",
        margin: "3rem auto",
        maxWidth: "700px",
        minHeight: "220px",
        padding: "2.5rem",
        position: "relative",
        fontFamily: "'Permanent Marker', cursive",
        overflow: "hidden",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {/* Doodle SVG accent */}
      <svg
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "160px",
          height: "160px",
          opacity: 0.16,
          zIndex: 0,
        }}
        viewBox="0 0 160 160"
        fill="none"
      >
        <ellipse cx="80" cy="80" rx="70" ry="40" fill="#27408B" />
        <path d="M20,140 Q80,20 140,140" stroke="#FFD700" strokeWidth="12" fill="none" />
      </svg>
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{
          color: "#27408B",
          textShadow: "2px 2px #FFD700",
          fontSize: "2.3rem",
          marginBottom: "0.7rem",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem"
        }}>
          {icon && <span style={{ fontSize: "2.3rem" }}>{icon}</span>}
          {title}
        </h2>
        <p style={{
          color: "#3C2F1B",
          fontSize: "1.15rem",
          marginBottom: "1.2rem",
          background: "rgba(255,255,255,0.7)",
          borderRadius: "1rem",
          padding: "0.5rem 1rem",
          display: "inline-block",
          boxShadow: "0 2px 8px rgba(44,62,80,0.10)",
          fontFamily: "inherit",
        }}>
          {description}
        </p>
        <div style={{ color: "#27408B", fontSize: "1.1rem" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

import VangoghContainer from "./components/VangoghContainer";

<VangoghContainer
  title="Blogs"
  description="Read my latest thoughts on tech, creativity, and more!"
  icon="📝"
>
  {/* Blog cards or summary here */}
</VangoghContainer>

<VangoghContainer
  title="Art"
  description="A gallery of my favorite artwork and doodles."
  icon="🎨"
>
  {/* Art gallery or description here */}
</VangoghContainer>

<VangoghContainer
  title="Social Media"
  description="Connect with me on my social channels."
  icon="🌻"
>
  {/* Social links here */}
</VangoghContainer>