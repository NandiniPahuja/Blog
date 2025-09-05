"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const bigContainerStyle = {
  background: "url('/blogs/art-14.png') center/cover, #fff",
  border: "10px solid #FFD700",
  borderRadius: "2.5rem",
  boxShadow: "0 8px 32px rgba(44,62,80,0.15)",
  margin: "2rem auto",
  maxWidth: "800px",
  minHeight: "220px",
  padding: "2.5rem",
  position: "relative",
  fontFamily: "'Permanent Marker', cursive",
  overflow: "hidden",
  transition: "background 0.3s, border-color 0.3s",
};

export default function InterestsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url('/blogs/art-25.png') center/cover, linear-gradient(135deg, #1e3a8a 0%, #fbbf24 25%, #1e40af 50%, #fcd34d 75%, #1e3a8a 100%)",
        backgroundBlendMode: "overlay",
        padding: "3rem 1rem",
        fontFamily: "'Permanent Marker', cursive",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Back Button */}
      <div style={{ maxWidth: "800px", margin: "0 auto 2rem auto" }}>
        <Link href="/" style={{
          display: "inline-block",
          padding: "0.5rem 1.2rem",
          background: "#FFD700",
          color: "#27408B",
          borderRadius: "1rem",
          fontWeight: "bold",
          textDecoration: "none",
          fontFamily: "'Permanent Marker', cursive",
          boxShadow: "0 2px 8px rgba(44,62,80,0.10)",
          border: "2px solid #27408B",
        }}>
          ← Back to Home
        </Link>
      </div>

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: "800px",
          margin: "0 auto 2.5rem auto",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "2rem",
          boxShadow: "0 8px 32px rgba(44,62,80,0.15)",
          padding: "2rem",
          textAlign: "center",
          border: "6px dashed #FFD700",
        }}
      >
        <h1 style={{ color: "#27408B", textShadow: "2px 2px #FFD700", letterSpacing: "2px", fontSize: "2.5rem" }}>
          📚 My Interests
        </h1>
        <p style={{
          color: "#3C2F1B",
          fontSize: "1.2rem",
          margin: "1rem 0",
          background: "rgba(255,255,255,0.7)",
          borderRadius: "1rem",
          padding: "0.5rem 1rem",
          display: "inline-block",
        }}>
          Exploring my passions and hobbies that shape who I am
        </p>
      </motion.div>

      {/* Public Speaking & Anchoring */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          ...bigContainerStyle,
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ color: "#27408B", textShadow: "2px 2px #FFD700", fontSize: "2rem", marginBottom: "1rem" }}>
            🎤 Public Speaking & Anchoring
          </h2>
          <p style={{ color: "#3C2F1B", fontSize: "1.1rem", lineHeight: "1.6" }}>
            I am passionate about public speaking and have anchored at Lohri celebrations. 
            The energy of connecting with an audience and creating memorable moments through 
            words is something that truly excites me. Each event teaches me something new 
            about communication and stage presence.
          </p>
        </div>
        <div style={{ flex: "0 0 150px" }}>
          <img 
            src="/lohri.jpg" 
            alt="Lohri Anchoring"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "6px solid #FFD700",
              objectFit: "cover",
              boxShadow: "0 4px 16px rgba(44,62,80,0.2)"
            }}
          />
        </div>
      </motion.div>

      {/* MLSA Event Hosting */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          ...bigContainerStyle,
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ color: "#27408B", textShadow: "2px 2px #FFD700", fontSize: "2rem", marginBottom: "1rem" }}>
            🏆 MLSA Event Hosting
          </h2>
          <p style={{ color: "#3C2F1B", fontSize: "1.1rem", lineHeight: "1.6" }}>
            As part of Microsoft Learn Student Ambassadors (MLSA), I have hosted multiple 
            events, bringing together tech enthusiasts and creating learning opportunities. 
            These experiences have honed my leadership skills and deepened my understanding 
            of community building in the tech space.
          </p>
        </div>
        <div style={{ flex: "0 0 150px" }}>
          <img 
            src="/mlsa.jpg" 
            alt="MLSA Events"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "6px solid #FFD700",
              objectFit: "cover",
              boxShadow: "0 4px 16px rgba(44,62,80,0.2)"
            }}
          />
        </div>
      </motion.div>

      {/* Content Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{
          ...bigContainerStyle,
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#27408B", textShadow: "2px 2px #FFD700", fontSize: "2rem", marginBottom: "1rem" }}>
          📈 Content Strategy & Brand Growth
        </h2>
        <p style={{ color: "#3C2F1B", fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
          I am deeply interested in content strategy creation and helping brands grow by 
          understanding who their target audience is. The art of crafting messages that 
          resonate, analyzing audience behavior, and developing strategies that drive 
          meaningful engagement fascinates me. I believe that understanding your audience 
          is the key to creating content that not only reaches people but truly connects with them.
        </p>
        <div style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "rgba(255,215,0,0.3)",
          borderRadius: "1rem",
          display: "inline-block"
        }}>
          <span style={{ fontSize: "2rem" }}>🎯</span>
          <p style={{ margin: "0.5rem 0 0 0", fontWeight: "bold" }}>
            Target Audience Analysis • Content Planning • Brand Storytelling
          </p>
        </div>
      </motion.div>
    </div>
  );
}
