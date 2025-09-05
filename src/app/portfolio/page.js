"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = {
    tech: [
      {
        title: "AI Projects at Innoraft",
        description: "Working on cutting-edge AI solutions, machine learning models, and innovative tech products.",
        image: "🤖",
        category: "AI/ML",
        status: "Current"
      },
      {
        title: "LTiMindtree Internship",
        description: "Contributed to enterprise software solutions and learned industry best practices.",
        image: "💼",
        category: "Software Development",
        status: "Completed"
      },
      {
        title: "Drobb - Fashion Discovery App",
        description: "Founded 'Tinder for clothes' startup. 8 months of development, user research, and market validation.",
        image: "👗",
        category: "Startup",
        status: "Learning Experience"
      },
      {
        title: "Python Development",
        description: "Proficient in Python for AI/ML, web development, and data analysis projects.",
        image: "🐍",
        category: "Programming",
        status: "Ongoing"
      }
    ],
    social: [
      {
        title: "Kalliope Social Media Strategy",
        description: "Led social media for KIIT's anchoring society, increased engagement by 300%.",
        image: "📱",
        category: "Social Media",
        metrics: "300% engagement increase"
      },
      {
        title: "Drobb Marketing Campaign",
        description: "Developed comprehensive marketing strategy for fashion startup, creating viral content.",
        image: "📈",
        category: "Marketing",
        metrics: "Viral content creation"
      },
      {
        title: "Brainrot Content Creation",
        description: "Creating entertaining yet meaningful content that resonates with Gen Z audience.",
        image: "🎭",
        category: "Content Creation",
        metrics: "Viral posts"
      }
    ],
    anchoring: [
      {
        title: "KIIT Lodi Festival Host",
        description: "Main anchor for 2 consecutive years at KIIT's biggest cultural festival.",
        image: "🎤",
        category: "Cultural Events",
        years: "2022-2024"
      },
      {
        title: "Wedding Ceremonies",
        description: "Hosted beautiful wedding ceremonies with perfect blend of tradition and entertainment.",
        image: "💒",
        category: "Personal Events",
        experience: "Multiple events"
      },
      {
        title: "MLSA & Campus Events",
        description: "Regular anchor for Microsoft Learn Student Ambassador events and campus activities.",
        image: "🏫",
        category: "Tech Events",
        experience: "Regular host"
      },
      {
        title: "Flashmob & Teachers Day",
        description: "Energetic hosting for flashmob events and Teachers' Day celebrations.",
        image: "🎉",
        category: "Special Events",
        experience: "Community events"
      }
    ],
    art: [
      {
        title: "Shiv Portrait Series",
        description: "Oil paintings featuring Lord Shiv as artistic inspiration and spiritual muse.",
        image: "🕉️",
        category: "Oil Painting",
        count: "15+ paintings"
      },
      {
        title: "Mandala Collection",
        description: "Intricate mandala designs exploring geometric patterns and spiritual symbolism.",
        image: "🌸",
        category: "Mandala Art",
        count: "25+ designs"
      },
      {
        title: "Abstract Expressions",
        description: "Personal artistic expressions through abstract oil paintings and mixed media.",
        image: "🎨",
        category: "Abstract Art",
        count: "20+ pieces"
      },
      {
        title: "Digital Art Experiments",
        description: "Exploring digital mediums for artistic expression and creative exploration.",
        image: "💻",
        category: "Digital Art",
        count: "10+ pieces"
      }
    ],
    music: [
      {
        title: "Piano Performances",
        description: "6 years of piano with amazing grades, classical and contemporary pieces.",
        image: "🎹",
        category: "Piano",
        achievement: "6th Year Certification"
      },
      {
        title: "Harmonica Sessions",
        description: "Self-taught harmonica player, love creating soulful melodies.",
        image: "🎵",
        category: "Harmonica",
        style: "Blues & Folk"
      },
      {
        title: "Vocal Performances",
        description: "Singing covers of favorite artists and original compositions.",
        image: "🎤",
        category: "Vocals",
        favorites: "Joji, Conan Gray, Rawat"
      },
      {
        title: "Music Compositions",
        description: "Original compositions blending piano, harmonica, and vocals.",
        image: "🎼",
        category: "Composition",
        style: "Original Works"
      }
    ]
  };

  const categories = [
    { id: "all", name: "All Work", icon: "✨" },
    { id: "tech", name: "Tech Projects", icon: "💻" },
    { id: "social", name: "Social Media", icon: "📱" },
    { id: "anchoring", name: "Anchoring", icon: "🎤" },
    { id: "art", name: "Art Gallery", icon: "🎨" },
    { id: "music", name: "Music", icon: "🎵" }
  ];

  const filteredItems = activeCategory === "all" 
    ? Object.values(portfolioItems).flat()
    : portfolioItems[activeCategory] || [];

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Background */}
      <div className="fixed inset-0 z-0 section-starry">
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-artistic-starry rounded-full star-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold heading-artistic mb-6">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my creative journey across technology, art, music, and storytelling.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-artistic-starry text-artistic-night border-artistic-starry shadow-lg"
                  : "bg-artistic-canvas/20 text-artistic-starry border-artistic-starry/30 hover:border-artistic-starry/60 hover:bg-artistic-canvas/40"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-artistic-canvas/80 to-artistic-night/80 backdrop-blur-lg rounded-3xl p-6 border border-artistic-starry/20 shadow-2xl hover:border-artistic-swirl/40 transition-all duration-300 overflow-hidden relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 200 200">
                  <defs>
                    <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M20,20 Q30,10 40,20 T60,20" stroke="#fbbf24" strokeWidth="1" fill="none"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${index})`}/>
                </svg>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 text-center">
                  {item.image}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold heading-artistic mb-3 text-center">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-center">
                  {item.description}
                </p>

                {/* Metadata */}
                <div className="space-y-2">
                  {item.category && (
                    <div className="flex items-center justify-center">
                      <span className="px-3 py-1 bg-artistic-swirl/20 border border-artistic-swirl/40 rounded-full text-artistic-swirl text-sm">
                        {item.category}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 justify-center text-sm">
                    {item.status && (
                      <span className="px-2 py-1 bg-artistic-starry/20 text-artistic-starry rounded">
                        {item.status}
                      </span>
                    )}
                    {item.metrics && (
                      <span className="px-2 py-1 bg-artistic-dream/20 text-artistic-dream rounded">
                        {item.metrics}
                      </span>
                    )}
                    {item.years && (
                      <span className="px-2 py-1 bg-artistic-swirl/20 text-artistic-swirl rounded">
                        {item.years}
                      </span>
                    )}
                    {item.experience && (
                      <span className="px-2 py-1 bg-artistic-starry/20 text-artistic-starry rounded">
                        {item.experience}
                      </span>
                    )}
                    {item.count && (
                      <span className="px-2 py-1 bg-artistic-dream/20 text-artistic-dream rounded">
                        {item.count}
                      </span>
                    )}
                    {item.achievement && (
                      <span className="px-2 py-1 bg-artistic-starry/20 text-artistic-starry rounded">
                        {item.achievement}
                      </span>
                    )}
                    {item.style && (
                      <span className="px-2 py-1 bg-artistic-swirl/20 text-artistic-swirl rounded">
                        {item.style}
                      </span>
                    )}
                    {item.favorites && (
                      <span className="px-2 py-1 bg-artistic-dream/20 text-artistic-dream rounded">
                        {item.favorites}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-artistic-canvas/80 to-artistic-night/80 backdrop-blur-lg rounded-3xl p-8 border border-artistic-starry/20 shadow-2xl">
            <h2 className="text-3xl font-bold heading-artistic mb-4">
              Want to Collaborate?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm always excited to work on creative projects that blend technology, art, and meaningful impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-artistic-swirl to-artistic-dream rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                🎨 Art Collaboration
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-artistic-starry to-artistic-swirl rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                💻 Tech Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-artistic-dream to-artistic-starry rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                🎤 Event Hosting
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
