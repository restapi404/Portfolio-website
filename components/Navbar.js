"use client";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { Typewriter } from "react-simple-typewriter";

//Sections: Home, About Me, Projects, Achievements, Contact, Resume Download
export default function Navbar() {
  return (
    <nav className="bg-[#4A0000] dark:bg-[#08081C] text-white px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center shadow transition-colors duration-300">
      <div>
        <div className="text-2xl font-bold">
          <Link href="/">Portfolio Website</Link>
        </div>
        <div className="text-[#EDE587] text-sm mt-1">
          <Typewriter
            words={['Discover, Learn, Create', 'Read Amazing Blogs.', 'Inspire the Community']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </div>
      </div>
      <div className="space-x-4 mt-2 md:mt-0">
        <Link href="/" className="hover:text-yellow-400 transition-colors duration-200">Home</Link>
        <Link href="/projects" className="hover:text-yellow-400 transition-colors duration-200">Projects</Link>
        <Link href="/about" className="hover:text-yellow-400 transition-colors duration-200">About Me</Link>
        <Link href="/achievements" className="hover:text-yellow-400 transition-colors duration-200">Achievements</Link>
        <Link href="/contact" className="hover:text-yellow-400 transition-colors duration-200">Contact</Link>
        <Link href="/resume" className="hover:text-yellow-400 transition-colors duration-200">Resume</Link>
        <DarkModeToggle/>
      </div>
    </nav>
  );
}