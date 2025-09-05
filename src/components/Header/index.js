"use client"
import Link from "next/link";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between relative z-50">
        <Logo />

        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-artistic-starry rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-artistic-starry rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-artistic-starry rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button>

        <nav className="w-max py-3 px-6 sm:px-8 border border-solid border-artistic-starry/30 rounded-full font-medium capitalize items-center flex sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-artistic-canvas/80 backdrop-blur-lg z-50
        transition-all ease duration-300 text-artistic-starry
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-2 hover:text-artistic-swirl transition-colors">Home</Link>
            <Link href="/about" className="mx-2 hover:text-artistic-swirl transition-colors">About</Link>
            <Link href="/portfolio" className="mx-2 hover:text-artistic-swirl transition-colors">Portfolio</Link>
            <Link href="/contact" className="mx-2 hover:text-artistic-swirl transition-colors">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className="w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 bg-artistic-starry/20 hover:bg-artistic-starry/30 transition-colors"
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-artistic-starry"} />  : <SunIcon className={"fill-artistic-starry"} />
                }
            </button>
        </nav>


        <nav className="w-max py-3 px-8 border border-solid border-artistic-starry/30 rounded-full font-medium capitalize items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-artistic-canvas/80 backdrop-blur-lg z-50 text-artistic-starry">
            <Link href="/" className="mr-2 hover:text-artistic-swirl transition-colors">Home</Link>
            <Link href="/about" className="mx-2 hover:text-artistic-swirl transition-colors">About</Link>
            <Link href="/portfolio" className="mx-2 hover:text-artistic-swirl transition-colors">Portfolio</Link>
            <Link href="/contact" className="mx-2 hover:text-artistic-swirl transition-colors">Contact</Link>
            
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className="w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 bg-artistic-starry/20 hover:bg-artistic-starry/30 transition-colors"
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-artistic-starry"} />  : <SunIcon className={"fill-artistic-starry"} />
                }
            </button>
        </nav>
        <div className="hidden sm:flex items-center">
            <a href={siteMetadata.linkedin} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank">
              <LinkedinIcon className="hover:scale-125 transition-all ease duration-200 fill-artistic-starry hover:fill-artistic-swirl" />
            </a>
            <a href={siteMetadata.twitter} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank">
              <TwitterIcon className="hover:scale-125 transition-all ease duration-200 fill-artistic-starry hover:fill-artistic-swirl" />
            </a>
            <a href={siteMetadata.github} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank">
              <GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-artistic-starry hover:fill-artistic-swirl" />
            </a>
            <a href={siteMetadata.instagram} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Follow me on Instagram" target="_blank">
              <span className="text-xl hover:scale-125 transition-all ease duration-200">📸</span>
            </a>
        </div>
    </header>
  )
}

export default Header;