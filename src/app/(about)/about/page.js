import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";


export const metadata = {
  title: "About Me",
  description: `This portfolio site was made by Nandini Pahuja, who is a CS & Communication student and tech enthusiast based in India`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
      Want to talk about tech, creativity, or anything in general? Reach out to me through my <Link href="/about"  className="!underline underline-offset-2"   >About page</Link>, let's have a quick chat about ideas and innovation!
      </h2>
    </>
  );
}
