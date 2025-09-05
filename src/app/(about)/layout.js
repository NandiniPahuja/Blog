import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "Hey everyone, I'm Nandini",
  "CS & Communication Student at KIIT",
  "Tech Enthusiast & Creative Soul",
  "Finance Economics Minor",
  "Passionate about AI & Web Development",
  "MLSA Community Member",
  "Key Skills: Python, JavaScript, AI/ML",
  "Extroverted Communicator",
  "Public Speaker & Event Anchor",
  "Art & Tech Enthusiast",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
