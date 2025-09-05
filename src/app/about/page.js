"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #27408B 0%, #FFD700 50%, #87CEEB 100%)",
      padding: "40px 20px",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "30px" }}
      >
        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "12px 24px",
          background: "rgba(255, 255, 255, 0.9)",
          color: "#27408B",
          textDecoration: "none",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}>
          ← Back to Home
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          color: "#fff",
        }}
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            src="/IMG_3029.jpg"
            alt="Nandini Pahuja"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #FFD700",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              marginBottom: "30px",
            }}
          />
          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            marginBottom: "20px",
            fontFamily: "'Permanent Marker', cursive",
            textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
          }}>
            Hi, I&apos;m Nandini! 👋
          </h1>
          <p style={{
            fontSize: "1.4rem",
            fontWeight: "300",
            opacity: 0.9,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}>
            A passionate tech enthusiast with a creative soul and an extroverted heart
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={itemVariants}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "25px",
            color: "#FFD700",
            fontFamily: "'Permanent Marker', cursive",
          }}>
            🎓 My Academic Journey
          </h2>
          <div style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}>
            <p style={{ marginBottom: "15px" }}>
              I&apos;m currently pursuing <strong>Computer Science and Communication</strong> from 
              <span style={{ color: "#FFD700", fontWeight: "600" }}> Kalinga Institute of Industrial Technology (KIIT)</span>
            </p>
            <p>
              I&apos;m also doing a <strong>minor in Finance Economics</strong> because I believe in the power of interdisciplinary learning! 📊💰
            </p>
          </div>
        </motion.div>

        {/* Passion Section */}
        <motion.div
          variants={itemVariants}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "25px",
            color: "#FFD700",
            fontFamily: "'Permanent Marker', cursive",
          }}>
            💡 My Creative Tech Soul
          </h2>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}>
            I&apos;m passionate about <strong>Technology</strong>, but being a really creative person, 
            I&apos;m <span style={{ color: "#FFD700", fontWeight: "600" }}>exploding with ideas</span>! 
            I love combining technical skills with creative thinking to build something amazing.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}>
            <div style={{
              background: "rgba(255, 215, 0, 0.2)",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}>
              <span style={{ fontSize: "2rem", marginBottom: "10px", display: "block" }}>💻</span>
              <h3 style={{ color: "#FFD700", marginBottom: "10px" }}>Tech Innovation</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>Building creative solutions with code</p>
            </div>
            <div style={{
              background: "rgba(255, 215, 0, 0.2)",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}>
              <span style={{ fontSize: "2rem", marginBottom: "10px", display: "block" }}>🎨</span>
              <h3 style={{ color: "#FFD700", marginBottom: "10px" }}>Creative Design</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>Art meets technology</p>
            </div>
          </div>
        </motion.div>
        {/* Communication & Networking Section */}
        <motion.div
          variants={itemVariants}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "25px",
            color: "#FFD700",
            fontFamily: "'Permanent Marker', cursive",
          }}>
            🗣️ The Power of Connection
          </h2>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}>
            I&apos;m an <strong>extrovert</strong> who loves attending conferences, meetings, and connecting with people! 
            I absolutely love <span style={{ color: "#FFD700", fontWeight: "600" }}>talking and communicating</span> with others.
          </p>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}>
            This communication skill has helped me <strong>market myself</strong> so many times! 
            Even when I don&apos;t know everything, I have something in me that makes people 
            <span style={{ color: "#FFD700", fontWeight: "600" }}> believe in me</span>. 
            That&apos;s the magic of authentic connection! ✨
          </p>
          
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "30px",
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "80px",
                height: "80px",
                background: "rgba(255, 215, 0, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 15px",
                fontSize: "2rem",
              }}>🎤</div>
              <h4 style={{ color: "#FFD700", marginBottom: "5px" }}>Public Speaking</h4>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Conferences & Events</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "80px",
                height: "80px",
                background: "rgba(255, 215, 0, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 15px",
                fontSize: "2rem",
              }}>🤝</div>
              <h4 style={{ color: "#FFD700", marginBottom: "5px" }}>Networking</h4>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Building Connections</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "80px",
                height: "80px",
                background: "rgba(255, 215, 0, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 15px",
                fontSize: "2rem",
              }}>💫</div>
              <h4 style={{ color: "#FFD700", marginBottom: "5px" }}>Authenticity</h4>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Making People Believe</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <h3 style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#FFD700",
          }}>
            Let&apos;s Connect &amp; Create Something Amazing! 🚀
          </h3>
          <p style={{
            fontSize: "1.1rem",
            opacity: 0.9,
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}>
            Whether it&apos;s tech, creativity, or just a great conversation - I&apos;m always excited to meet new people and explore new ideas!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
