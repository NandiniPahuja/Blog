"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Van Gogh Swirl Component
const VanGoghSwirl = ({ className, size = "200", delay = 0 }) => (
  <motion.div 
    className={`absolute opacity-20 ${className}`}
    initial={{ rotate: 0, scale: 0.5 }}
    animate={{ rotate: 360, scale: [0.5, 1.2, 0.8, 1] }}
    transition={{ duration: 20 + delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg width={size} height={size} viewBox="0 0 200 200" className="chaos-float">
      <defs>
        <linearGradient id={`swirl-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#f39c12", stopOpacity: 0.8}} />
          <stop offset="50%" style={{stopColor: "#3498db", stopOpacity: 0.6}} />
          <stop offset="100%" style={{stopColor: "#e67e22", stopOpacity: 0.8}} />
        </linearGradient>
      </defs>
      <path 
        d="M100,20 Q150,50 120,100 Q90,150 140,180 Q80,160 60,120 Q40,80 80,50 Q120,30 100,20" 
        fill="none" 
        stroke={`url(#swirl-${delay})`} 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      <path 
        d="M100,40 Q130,60 110,90 Q90,120 120,140 Q80,130 70,100 Q60,70 80,60 Q100,50 100,40" 
        fill="none" 
        stroke="#f39c12" 
        strokeWidth="2" 
        opacity="0.6"
      />
    </svg>
  </motion.div>
);

export default function HomePage() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Epic scroll transformations
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -300]);
  const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1.1, 0.9, 1.2]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.9, 0.7]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-[500vh] relative overflow-hidden">
      {/* Epic Cosmic Background with Van Gogh */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ 
          y: backgroundY,
          scale,
          opacity
        }}
      >
        <div className="section-starry h-full relative">
          {/* Dynamic Van Gogh swirls that respond to scroll */}
          <motion.div
            style={{ 
              x: mousePosition.x,
              y: mousePosition.y,
              rotate
            }}
          >
            <VanGoghSwirl className="top-10 left-10" size="150" delay={0} />
            <VanGoghSwirl className="top-32 right-20" size="200" delay={5} />
            <VanGoghSwirl className="bottom-20 left-32" size="180" delay={10} />
            <VanGoghSwirl className="bottom-40 right-10" size="120" delay={15} />
          </motion.div>

          {/* Cosmic stars with parallax */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-artistic-starry rounded-full star-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  x: useTransform(scrollYProgress, [0, 1], [0, Math.random() * 200 - 100]),
                  y: useTransform(scrollYProgress, [0, 1], [0, Math.random() * 300 - 150]),
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.5]),
                  animationDelay: `${Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Cosmic layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/30"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -200]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0.8])
            }}
          />
        </div>
      </motion.div>

      <div className="relative z-10">
        {/* SECTION 1: Epic Hero Landing */}
        <motion.section 
          className="h-screen flex items-center justify-center px-4"
          style={{
            y: useTransform(scrollYProgress, [0, 0.25], [0, -200]),
            scale: useTransform(scrollYProgress, [0, 0.25], [1, 0.8]),
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0])
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-5xl mx-auto relative"
          >
            {/* Cosmic Portrait */}
            <motion.div 
              className="w-60 h-60 mx-auto rounded-full relative overflow-hidden mb-12"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, #f39c12, transparent 70%),
                  radial-gradient(circle at 70% 70%, #3498db, transparent 70%),
                  linear-gradient(45deg, #2c3e50, #1a1a2e)
                `,
                border: "6px solid",
                borderImage: "linear-gradient(45deg, #f39c12, #3498db, #e67e22, #8e44ad) 1",
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
              whileHover={{ scale: 1.2, rotate: 15 }}
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-8xl van-gogh-pulse">
                🎨
              </div>
              
              {/* Cosmic orbiting elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-artistic-starry rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i * 45) * Math.PI / 180) * 140,
                    y: Math.sin((i * 45) * Math.PI / 180) * 140,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>

            {/* Epic Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="text-7xl font-bold mb-6 heading-artistic"
              style={{
                background: "linear-gradient(45deg, #f39c12, #3498db, #e67e22)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Nandini Pahuja
            </motion.h1>

            {/* Cosmic subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="text-2xl text-artistic-starry mb-8 font-light tracking-wide"
            >
              <span className="inline-block">AI Engineer</span>
              <span className="mx-4 text-artistic-swirl">×</span>
              <span className="inline-block">Digital Artist</span>
              <span className="mx-4 text-artistic-brush">×</span>
              <span className="inline-block">Cosmic Creator</span>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-artistic-starry text-4xl"
              >
                ↓
              </motion.div>
              <p className="text-sm text-gray-400 mt-2">Begin the Journey</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SECTION 2: Cosmic About Journey */}
        <motion.section 
          className="h-screen flex items-center justify-center px-4"
          style={{
            y: useTransform(scrollYProgress, [0.25, 0.5], [100, -100]),
            scale: useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0.8, 1, 0.9]),
            opacity: useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0])
          }}
        >
          <motion.div className="max-w-6xl mx-auto text-center">
            <motion.h2
              style={{
                y: useTransform(scrollYProgress, [0.25, 0.4], [50, 0]),
                opacity: useTransform(scrollYProgress, [0.25, 0.35], [0, 1])
              }}
              className="text-6xl font-bold mb-12 heading-artistic"
            >
              Journey Through Innovation
            </motion.h2>

            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0.3, 0.45], [100, 0]),
                opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: "🤖", title: "AI Innovation", desc: "Pushing boundaries in artificial intelligence" },
                { icon: "🎨", title: "Digital Art", desc: "Creating visual masterpieces" },
                { icon: "🚀", title: "Startup Vision", desc: "Building the future" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="van-gogh-card puzzle-card-1 p-8"
                  style={{
                    y: useTransform(scrollYProgress, [0.35, 0.45], [50, 0]),
                    opacity: useTransform(scrollYProgress, [0.35, 0.4], [0, 1])
                  }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-artistic-starry">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SECTION 3: Epic Skills Constellation */}
        <motion.section 
          className="h-screen flex items-center justify-center px-4"
          style={{
            y: useTransform(scrollYProgress, [0.5, 0.75], [100, -100]),
            scale: useTransform(scrollYProgress, [0.45, 0.55, 0.75], [0.8, 1, 0.9]),
            opacity: useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0])
          }}
        >
          <motion.div className="max-w-7xl mx-auto">
            <motion.h2
              style={{
                y: useTransform(scrollYProgress, [0.5, 0.6], [50, 0]),
                opacity: useTransform(scrollYProgress, [0.5, 0.55], [0, 1])
              }}
              className="text-6xl font-bold mb-16 text-center heading-artistic"
            >
              Skills Constellation
            </motion.h2>

            <motion.div
              style={{
                rotateY: useTransform(scrollYProgress, [0.5, 0.75], [0, 360]),
                y: useTransform(scrollYProgress, [0.55, 0.7], [100, 0])
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { skill: "React/Next.js", level: "95%", icon: "⚛️" },
                { skill: "Python/AI", level: "90%", icon: "🐍" },
                { skill: "Digital Art", level: "85%", icon: "🎨" },
                { skill: "UI/UX Design", level: "88%", icon: "✨" },
                { skill: "Machine Learning", level: "82%", icon: "🧠" },
                { skill: "Creative Direction", level: "92%", icon: "🎯" },
                { skill: "Startup Strategy", level: "87%", icon: "🚀" },
                { skill: "Innovation", level: "98%", icon: "💡" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="van-gogh-card puzzle-card-2 p-6 text-center"
                  style={{
                    y: useTransform(scrollYProgress, [0.6, 0.65], [50 + i * 10, 0]),
                    opacity: useTransform(scrollYProgress, [0.6, 0.65], [0, 1]),
                    rotateX: useTransform(scrollYProgress, [0.6, 0.7], [0, 360])
                  }}
                  whileHover={{ scale: 1.1, rotateY: 180 }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-artistic-starry mb-2">{item.skill}</h4>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-artistic-starry to-artistic-swirl h-2 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: item.level }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{item.level}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SECTION 4: Final Epic Contact */}
        <motion.section 
          className="h-screen flex items-center justify-center px-4"
          style={{
            y: useTransform(scrollYProgress, [0.75, 1], [100, 0]),
            scale: useTransform(scrollYProgress, [0.7, 0.8, 1], [0.8, 1, 1.1]),
            opacity: useTransform(scrollYProgress, [0.7, 0.8], [0, 1])
          }}
        >
          <motion.div className="max-w-4xl mx-auto text-center">
            <motion.h2
              style={{
                y: useTransform(scrollYProgress, [0.75, 0.85], [50, 0]),
                scale: useTransform(scrollYProgress, [0.8, 1], [1, 1.2])
              }}
              className="text-7xl font-bold mb-12 heading-artistic"
            >
              Let's Create Magic
            </motion.h2>

            <motion.div
              style={{
                y: useTransform(scrollYProgress, [0.8, 0.9], [100, 0]),
                opacity: useTransform(scrollYProgress, [0.8, 0.85], [0, 1])
              }}
              className="space-y-8"
            >
              <p className="text-2xl text-gray-300 leading-relaxed">
                Ready to embark on a journey of innovation, creativity, and boundless possibilities?
              </p>

              <motion.div
                className="flex flex-wrap justify-center gap-6"
                style={{
                  y: useTransform(scrollYProgress, [0.85, 0.95], [50, 0])
                }}
              >
                {[
                  { icon: "💼", text: "LinkedIn", link: "#" },
                  { icon: "🐙", text: "GitHub", link: "#" },
                  { icon: "📧", text: "Email", link: "#" },
                  { icon: "🎨", text: "Portfolio", link: "#" }
                ].map((contact, i) => (
                  <motion.a
                    key={i}
                    href={contact.link}
                    className="van-gogh-card puzzle-card-3 p-6 flex items-center space-x-4 hover:scale-110 transition-all duration-300"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1,
                      boxShadow: "0 20px 40px rgba(243, 156, 18, 0.3)"
                    }}
                    style={{
                      y: useTransform(scrollYProgress, [0.9, 0.95], [30, 0]),
                      opacity: useTransform(scrollYProgress, [0.9, 0.95], [0, 1])
                    }}
                  >
                    <span className="text-3xl">{contact.icon}</span>
                    <span className="text-xl font-semibold text-artistic-starry">{contact.text}</span>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                style={{
                  y: useTransform(scrollYProgress, [0.95, 1], [50, 0]),
                  scale: useTransform(scrollYProgress, [0.95, 1], [1, 1.1])
                }}
                className="text-6xl animate-pulse"
              >
                ✨ 🌟 ✨
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
