"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Tech() {
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
        staggerChildren: 0.2,
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

  const techStack = [
    { name: "AI & Machine Learning", icon: "🤖", description: "Exploring the future of intelligent systems" },
    { name: "Web Development", icon: "🌐", description: "Building responsive and modern web applications" },
    { name: "Cloud Computing", icon: "☁️", description: "Scalable solutions and infrastructure" },
    { name: "Data Science", icon: "📊", description: "Turning data into meaningful insights" },
    { name: "Mobile Development", icon: "📱", description: "Creating seamless mobile experiences" },
    { name: "DevOps", icon: "⚙️", description: "Streamlining development and deployment" }
  ];

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
          maxWidth: "1000px",
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
          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            marginBottom: "20px",
            fontFamily: "'Permanent Marker', cursive",
            textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
          }}>
            Tech I'm Passionate About 💻
          </h1>
          <p style={{
            fontSize: "1.4rem",
            fontWeight: "300",
            opacity: 0.9,
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}>
            My journey through the ever-evolving world of technology
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                borderRadius: "20px",
                padding: "30px",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 215, 0, 0.3)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px",
              }}>
                {tech.icon}
              </div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "15px",
                color: "#FFD700",
              }}>
                {tech.name}
              </h3>
              <p style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                opacity: 0.9,
              }}>
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Conference Experiences Section */}
        <motion.div
          variants={itemVariants}
          style={{
            marginBottom: "50px",
          }}
        >
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "40px",
            color: "#FFD700",
            fontFamily: "'Permanent Marker', cursive",
          }}>
            My Conference Journey 🚀
          </h2>

          {/* CCD Bhubaneswar 2023 */}
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
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#FFD700",
              }}>
                🌟 Cloud Community Day Bhubaneswar 2023
              </h3>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}>
                This was my <strong>first ever Google conference</strong> and what an incredible experience it was! 
                The energy in Bhubaneswar was absolutely electric.
              </p>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}>
                I got to <span style={{ color: "#FFD700", fontWeight: "600" }}>meet amazing new people</span> from 
                the tech community, learned about cutting-edge cloud technologies, and soaked in all the knowledge 
                I could. The networking opportunities were incredible!
              </p>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
              }}>
                It was such a <strong>fun experience</strong> that sparked my deeper interest in cloud computing 
                and opened my eyes to the vibrant tech community in India. 🇮🇳
              </p>
            </div>
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              src="/ccd1.jpg"
              alt="Cloud Community Day Bhubaneswar 2023"
              style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
                border: "4px solid #FFD700",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />
          </motion.div>

          {/* GDG CCD Kolkata 2025 */}
          <motion.div
            variants={itemVariants}
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              borderRadius: "25px",
              padding: "40px",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 215, 0, 0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#FFD700",
              }}>
                🎯 GDG Cloud Community Day Kolkata 2025
              </h3>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}>
                Fast forward to 2025 - the Kolkata CCD was <strong>massive</strong>! The scale of this event 
                was absolutely mind-blowing with hundreds of tech enthusiasts gathering together.
              </p>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}>
                This time, I wasn't just an attendee - I got the amazing opportunity to 
                <span style={{ color: "#FFD700", fontWeight: "600" }}> promote my startup "Drobb"</span>! 
                It was incredible to share my entrepreneurial journey with the community.
              </p>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
              }}>
                Even though Drobb didn't make it to the finish line, presenting it at such a prestigious 
                event was a proud moment. The feedback and connections I made were invaluable! 💡
              </p>
            </div>
            <motion.img
              whileHover={{ scale: 1.05, rotate: -2 }}
              src="/gdg_ccd.jpg"
              alt="GDG Cloud Community Day Kolkata 2025"
              style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
                border: "4px solid #FFD700",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />
          </motion.div>
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
            Let's Build the Future Together! 🌟
          </h3>
          <p style={{
            fontSize: "1.1rem",
            opacity: 0.9,
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}>
            Technology is constantly evolving, and I'm excited to be part of this incredible journey. 
            Whether it's AI, cloud computing, or the next big thing - count me in!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
