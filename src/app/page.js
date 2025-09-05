"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// Container style for the 4 big sections
const bigContainerStyle = {
  background: "linear-gradient(135deg, #fef3c7 0%, #dbeafe 50%, #e0e7ff 100%)",
  border: "10px solid #FFD700",
  borderRadius: "2.5rem",
  boxShadow: "0 8px 32px rgba(44,62,80,0.15)",
  margin: "2rem auto",
  maxWidth: "700px",
  minHeight: "220px",
  padding: "2.5rem",
  position: "relative",
  fontFamily: "'Permanent Marker', cursive",
  overflow: "hidden",
  transition: "background 0.3s, border-color 0.3s",
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url('/blogs/art-banner.jpg') center/cover, linear-gradient(135deg, #1e3a8a 0%, #fbbf24 25%, #1e40af 50%, #fcd34d 75%, #1e3a8a 100%)",
        backgroundBlendMode: "overlay",
        padding: "3rem 1rem",
        fontFamily: "'Permanent Marker', cursive",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aesthetic Photo Collage - Only render after mounting */}
      {mounted && (
        <>
          <div style={{
            position: "absolute",
            top: "8%",
            right: "3%",
            zIndex: 1,
            opacity: 1,
          }}>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              src="/photo1.jpg"
              alt="Photo 1"
              style={{
                width: "180px",
                height: "240px",
                objectFit: "cover",
                borderRadius: "15px",
                border: "4px solid #FFD700",
                boxShadow: "0 8px 24px rgba(44,62,80,0.6)",
                transform: "rotate(0deg)",
              }}
            />
          </div>
          
          <div style={{
            position: "absolute",
            bottom: "12%",
            left: "5%",
            zIndex: 1,
            opacity: 1,
          }}>
            <motion.img
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5, delay: 1 }}
              src="/photo2.jpg"
              alt="Photo 2"
              style={{
                width: "160px",
                height: "220px",
                objectFit: "cover",
                borderRadius: "20px",
                border: "4px solid #27408B",
                boxShadow: "0 6px 20px rgba(255,215,0,0.7)",
                transform: "rotate(0deg)",
              }}
            />
          </div>

          <div style={{
            position: "absolute",
            top: "25%",
            left: "12%",
            zIndex: 1,
            opacity: 1,
          }}>
            <motion.img
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
              src="/photo3.jpg"
              alt="Photo 3"
              style={{
                width: "150px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "25px",
                border: "4px solid rgba(255,215,0,0.8)",
                boxShadow: "0 4px 16px rgba(30,64,175,0.7)",
                transform: "rotate(0deg)",
              }}
            />
          </div>

          {/* Additional floating elements for aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 2 }}
            style={{
              position: "absolute",
              bottom: "25%",
              right: "12%",
              width: "60px",
              height: "60px",
              background: "linear-gradient(45deg, #FFD700, #27408B)",
              borderRadius: "50%",
              zIndex: 0,
              boxShadow: "0 4px 12px rgba(44,62,80,0.2)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.1, rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              top: "60%",
              right: "20%",
              width: "40px",
              height: "40px",
              border: "3px solid #FFD700",
              borderRadius: "10px",
              zIndex: 0,
            }}
          />
        </>
      )}
      {/* Top Section: Name & Intro */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: "700px",
          margin: "0 auto 2.5rem auto",
          background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,251,235,0.95) 50%, rgba(254,243,199,0.95) 100%)",
          borderRadius: "2rem",
          boxShadow: "0 12px 40px rgba(44,62,80,0.25), 0 0 0 2px rgba(255,215,0,0.4)",
          padding: "3rem 2.5rem",
          textAlign: "center",
          border: "8px solid #FFD700",
          position: "relative",
          backdropFilter: "blur(10px)",
        }}
      >
        <img
          src="/IMG_3029.jpg"
          alt="Nandini Pahuja"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "8px solid #FFD700",
            marginBottom: "1.5rem",
            boxShadow: "0 8px 24px rgba(44,62,80,0.3), 0 0 0 4px rgba(255,215,0,0.3)",
            transform: "rotate(0deg)",
            background: "#fff",
            padding: "4px",
          }}
        />
        <h1 style={{ color: "#27408B", textShadow: "2px 2px #FFD700", letterSpacing: "2px" }}>
          Nandini Pahuja
        </h1>
        <p style={{
          color: "#3C2F1B",
          fontSize: "1.2rem",
          margin: "1.5rem 0",
          background: "rgba(255,255,255,0.7)",
          borderRadius: "1rem",
          padding: "0.5rem 1rem",
          display: "inline-block",
          boxShadow: "0 2px 8px rgba(44,62,80,0.10)",
        }}>
          I am 22 years old. I have failed at a startup, but I am passionate about tech, art, and learning from every experience.
        </p>
      </motion.div>

      {/* Four Big Containers */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2.5rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        {[
          { title: "About Me", icon: "📝", summary: "CS & Communication student at KIIT with a passion for tech, creativity, and connecting with people!" },
          { title: "Tech I'm Interested In", icon: "💡", summary: "AI, Web Development, Cloud Computing, and emerging technologies." },
          { title: "Interests", icon: "📚", summary: "Public speaking, anchoring, and community engagement.", images: ["/mlsa.jpg", "/lohri.jpg"] },
          { title: "Art & Social Media", icon: "🎨", summary: "My artwork and ways to connect with me." }
        ].map((section, idx) => (
          <motion.div
            key={section.title}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 16px 48px rgba(44,62,80,0.18)",
              borderColor: "#27408B",
              background: "rgba(255,255,220,0.95)",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              ...bigContainerStyle,
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              position: "relative",
              cursor: (section.title === "Interests" || section.title === "About Me" || section.title === "Tech I'm Interested In") ? "pointer" : "default",
            }}
            onClick={
              section.title === "Interests" 
                ? () => window.location.href = "/interests"
                : section.title === "About Me"
                ? () => window.location.href = "/about"
                : section.title === "Tech I'm Interested In"
                ? () => window.location.href = "/tech"
                : undefined
            }
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
                <span style={{ fontSize: "2.3rem" }}>{section.icon}</span>
                {section.title}
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
                {section.summary}
              </p>
              {/* Display images for Interests section */}
              {section.images && (
                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", justifyContent: "center" }}>
                  {section.images.map((img, imgIdx) => (
                    <img 
                      key={imgIdx}
                      src={img} 
                      alt={`Interest ${imgIdx + 1}`}
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        border: "4px solid #FFD700",
                        objectFit: "cover",
                        boxShadow: "0 2px 8px rgba(44,62,80,0.15)"
                      }}
                    />
                  ))}
                </div>
              )}
              {section.title === "Interests" && (
                <p style={{
                  color: "#27408B",
                  fontSize: "1rem",
                  marginTop: "1rem",
                  background: "rgba(255,215,0,0.5)",
                  borderRadius: "0.5rem",
                  padding: "0.8rem",
                  textAlign: "center",
                  fontWeight: "bold",
                  border: "2px dashed #27408B"
                }}>
                  Public speaking, anchoring, and content strategy
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}