import { motion } from "framer-motion";

export default function BlogCard({ title, description, image, author, tags }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(44,62,80,0.15)" }}
      style={{
        background: "linear-gradient(135deg, #27408B 60%, #FFD700 100%)",
        borderRadius: "1.5rem",
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: "500px",
        boxShadow: "0 4px 24px rgba(44,62,80,0.08)",
        position: "relative",
        fontFamily: "'Permanent Marker', cursive",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "1rem",
          marginBottom: "1.5rem",
          boxShadow: "0 2px 12px rgba(44,62,80,0.10)",
          border: "6px solid #FFD700",
        }}
      />
      <h2 style={{ margin: "0 0 1rem 0", fontWeight: 700, color: "#FFD700", textShadow: "2px 2px #27408B" }}>{title}</h2>
      <p style={{ marginBottom: "1rem", color: "#27408B" }}>{description}</p>
      <div style={{ fontSize: "0.95rem", color: "#3C2F1B" }}>
        <strong>By:</strong> {author}
      </div>
      <div style={{ marginTop: "1rem" }}>
        {tags.map(tag => (
          <span
            key={tag}
            style={{
              display: "inline-block",
              background: "#27408B",
              color: "#FFD700",
              borderRadius: "0.5rem",
              padding: "0.3rem 0.8rem",
              marginRight: "0.5rem",
              fontSize: "0.85rem",
              fontFamily: "'Permanent Marker', cursive",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}import { motion } from "framer-motion";

export default function BlogCard({ title, description, image, author, tags }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(44,62,80,0.15)" }}
      style={{
        background: "linear-gradient(135deg, #27408B 60%, #FFD700 100%)",
        borderRadius: "1.5rem",
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: "500px",
        boxShadow: "0 4px 24px rgba(44,62,80,0.08)",
        position: "relative",
        fontFamily: "'Permanent Marker', cursive",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "1rem",
          marginBottom: "1.5rem",
          boxShadow: "0 2px 12px rgba(44,62,80,0.10)",
          border: "6px solid #FFD700",
        }}
      />
      <h2 style={{ margin: "0 0 1rem 0", fontWeight: 700, color: "#FFD700", textShadow: "2px 2px #27408B" }}>{title}</h2>
      <p style={{ marginBottom: "1rem", color: "#27408B" }}>{description}</p>
      <div style={{ fontSize: "0.95rem", color: "#3C2F1B" }}>
        <strong>By:</strong> {author}
      </div>
      <div style={{ marginTop: "1rem" }}>
        {tags.map(tag => (
          <span
            key={tag}
            style={{
              display: "inline-block",
              background: "#27408B",
              color: "#FFD700",
              borderRadius: "0.5rem",
              padding: "0.3rem 0.8rem",
              marginRight: "0.5rem",
              fontSize: "0.85rem",
              fontFamily: "'Permanent Marker', cursive",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}