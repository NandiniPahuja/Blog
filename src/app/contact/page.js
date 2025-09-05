"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with email services or backend here
  };

  const contactMethods = [
    {
      icon: "💼",
      title: "Professional Inquiries",
      description: "For AI/Tech projects, internships, and collaborations",
      contact: "nandini.professional@email.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🎨",
      title: "Creative Projects",
      description: "Art collaborations, anchoring events, and creative work",
      contact: "nandini.creative@email.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "📱",
      title: "Social Media & Marketing",
      description: "Social media strategies, content creation, and marketing",
      contact: "nandini.social@email.com",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: "👩‍🏫",
      title: "Teaching & Mentoring",
      description: "Tutoring, educational content, and mentoring opportunities",
      contact: "nandini.teaching@email.com",
      color: "from-green-500 to-green-600"
    }
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: "💼",
      username: "@nandinipahuja",
      url: "https://linkedin.com/in/nandinipahuja",
      description: "Professional network and career updates"
    },
    {
      platform: "GitHub",
      icon: "🐙",
      username: "@nandinipahuja",
      url: "https://github.com/nandinipahuja",
      description: "Code repositories and tech projects"
    },
    {
      platform: "Instagram",
      icon: "📸",
      username: "@nandinipahuja",
      url: "https://instagram.com/nandinipahuja",
      description: "Art, music, and life moments"
    },
    {
      platform: "Twitter",
      icon: "🐦",
      username: "@nandinipahuja",
      url: "https://twitter.com/nandinipahuja",
      description: "Thoughts, tech insights, and occasional brainrot"
    }
  ];

  const quickFacts = [
    { icon: "📍", label: "Location", value: "Kolkata, India" },
    { icon: "🎓", label: "Education", value: "B.Tech CS & Communication (Final Year)" },
    { icon: "💼", label: "Current Role", value: "AI Intern at Innoraft" },
    { icon: "🎯", label: "Interests", value: "AI, Art, Music, Teaching" },
    { icon: "⚡", label: "Fun Fact", value: "Can code while playing piano!" },
    { icon: "🌟", label: "Superpower", value: "Making boring things interesting" }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Background */}
      <div className="fixed inset-0 z-0 section-starry">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
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
            Let&apos;s Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether it&apos;s about tech, art, music, or just a friendly chat - I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold heading-artistic text-center mb-8">Quick Facts About Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-artistic-canvas/60 to-artistic-night/60 backdrop-blur-lg rounded-xl p-4 border border-artistic-starry/20 flex items-center gap-4"
              >
                <span className="text-2xl">{fact.icon}</span>
                <div>
                  <p className="text-artistic-starry font-medium">{fact.label}</p>
                  <p className="text-gray-300 text-sm">{fact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-artistic-canvas/80 to-artistic-night/80 backdrop-blur-lg rounded-3xl p-8 border border-artistic-starry/20 shadow-2xl"
          >
            <h2 className="text-3xl font-bold heading-artistic mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-artistic-starry font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-artistic-night/50 border border-artistic-starry/30 rounded-xl text-white placeholder-gray-400 focus:border-artistic-swirl focus:outline-none transition-colors"
                    placeholder="Your awesome name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-artistic-starry font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-artistic-night/50 border border-artistic-starry/30 rounded-xl text-white placeholder-gray-400 focus:border-artistic-swirl focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-artistic-starry font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-artistic-night/50 border border-artistic-starry/30 rounded-xl text-white placeholder-gray-400 focus:border-artistic-swirl focus:outline-none transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-artistic-starry font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-artistic-night/50 border border-artistic-starry/30 rounded-xl text-white placeholder-gray-400 focus:border-artistic-swirl focus:outline-none transition-colors resize-none"
                  placeholder="Tell me your thoughts, ideas, or just say hi! I love meaningful conversations."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-artistic-swirl to-artistic-dream rounded-xl text-white font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                ✨ Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods & Social */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold heading-artistic mb-6">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="bg-gradient-to-br from-artistic-canvas/60 to-artistic-night/60 backdrop-blur-lg rounded-2xl p-6 border border-artistic-starry/20 hover:border-artistic-swirl/40 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{method.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-artistic-starry mb-2">{method.title}</h3>
                        <p className="text-gray-300 mb-3">{method.description}</p>
                        <p className="text-artistic-swirl font-medium">{method.contact}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold heading-artistic mb-6">Follow My Journey</h2>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-gradient-to-br from-artistic-canvas/60 to-artistic-night/60 backdrop-blur-lg rounded-2xl p-4 border border-artistic-starry/20 hover:border-artistic-swirl/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{social.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-artistic-starry">{social.platform}</h3>
                          <span className="text-artistic-swirl">{social.username}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{social.description}</p>
                      </div>
                      <span className="text-artistic-swirl group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

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
              Let's Create Something Amazing Together! 🌟
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I believe the best projects come from meaningful collaborations. Whether you're looking for tech innovation, 
              artistic expression, or just want to chat about life - I'm always excited to connect with fellow creators and dreamers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-artistic-starry/20 border border-artistic-starry/40 rounded-full text-artistic-starry"
              >
                💡 Always open to new ideas
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-artistic-swirl/20 border border-artistic-swirl/40 rounded-full text-artistic-swirl"
              >
                🚀 Quick to respond
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-artistic-dream/20 border border-artistic-dream/40 rounded-full text-artistic-dream"
              >
                🎨 Love creative challenges
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
