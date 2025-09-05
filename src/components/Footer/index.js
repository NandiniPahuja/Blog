"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-10 rounded-2xl bg-gradient-to-br from-artistic-canvas/80 to-artistic-night/80 backdrop-blur-lg m-2 sm:m-10 flex flex-col items-center text-artistic-starry border border-artistic-starry/20 shadow-2xl">
      {/* Footer Content */}
      <div className="w-full px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold heading-artistic mb-4">Nandini Pahuja</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Artist • Techie • Dreamer • Storyteller
              </p>
              <p className="text-sm text-gray-400">
                Creating beautiful intersections between technology, art, and human connection.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-artistic-starry mb-4">Explore</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-artistic-swirl transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-artistic-swirl transition-colors">
                  About
                </Link>
                <Link href="/portfolio" className="block text-gray-300 hover:text-artistic-swirl transition-colors">
                  Portfolio
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-artistic-swirl transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-artistic-starry mb-4">Connect</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 Kolkata, India</p>
                <p>🎓 KIIT University</p>
                <p>💼 AI Intern at Innoraft</p>
                <p>🎨 Artist & Creator</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mb-8 py-6 border-t border-artistic-starry/20">
            <a
              href={siteMetadata.linkedin}
              className="w-10 h-10 rounded-full bg-artistic-starry/20 hover:bg-artistic-starry/40 flex items-center justify-center transition-colors group"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-5 h-5 fill-artistic-starry group-hover:fill-artistic-swirl transition-colors" />
            </a>
            <a
              href={siteMetadata.github}
              className="w-10 h-10 rounded-full bg-artistic-starry/20 hover:bg-artistic-starry/40 flex items-center justify-center transition-colors group"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-5 h-5 fill-artistic-starry group-hover:fill-artistic-swirl transition-colors" />
            </a>
            <a
              href={siteMetadata.twitter}
              className="w-10 h-10 rounded-full bg-artistic-starry/20 hover:bg-artistic-starry/40 flex items-center justify-center transition-colors group"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="w-5 h-5 fill-artistic-starry group-hover:fill-artistic-swirl transition-colors" />
            </a>
            <a
              href={siteMetadata.instagram}
              className="w-10 h-10 rounded-full bg-artistic-starry/20 hover:bg-artistic-starry/40 flex items-center justify-center transition-colors group text-artistic-starry group-hover:text-artistic-swirl"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-lg">📸</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-artistic-starry/20">
            <p className="text-gray-400 mb-2">
              &copy;2025 Nandini Pahuja. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Made with 💜 and ✨ using Next.js • Inspired by Vincent van Gogh's artistic vision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
