"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants for sections and elements
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay },
  }),
};

const pop = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "backOut", delay },
  }),
};

export default function HomePage() {
  return (
    <main
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* HERO */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#FFF9C4] via-[#FFE2C4] to-[#FFC4C4] dark:from-[#12211F] dark:via-[#222D38] dark:to-[#171726] relative">
        <NavbarSpacer />
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold gradient-text mb-6 -mt-16 text-center dark:bg-gradient-to-r dark:from-[#76B893] dark:via-[#6EA1C2] dark:to-[#503D85]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Frontend Specialist with Full-Stack Vision
        </motion.h1>
        <motion.p
          className="max-w-2xl text-xl md:text-2xl mb-8 text-center text-gray-700 dark:text-gray-200"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          I build stunning, responsive interfaces with React/Next.js, backed by database expertise and AI curiosity. Creating complete digital experiences, not just pretty layouts.
        </motion.p>
        <motion.div
          variants={pop}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex gap-4"
        >
          <Link
            href="/projects"
            className="bg-[#4A0000] text-[#F0E79E] font-bold rounded-full px-8 py-4 shadow-xl hover:bg-[#542B2B] hover:text-[#FFF37D] hover:scale-105 transition 
            dark:bg-[#2E244D] dark:text-[#76B893] dark:hover:bg-[#3A3063] dark:hover:text-[#85C7A1]"
          >
            Explore My Projects
          </Link>
          <Link
            href="/about"
            className="bg-[#FFF37D] text-[#4A0000] font-bold rounded-full px-8 py-4 shadow hover:bg-yellow-300 hover:scale-105 transition 
            dark:bg-[#6AA383] dark:text-[#0C0138] dark:hover:bg-[#48705A] dark:hover:text-[#4D4178]"
          >
            View My Tech Stack
          </Link>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <span className="text-4xl animate-bounce">↓</span>
        </motion.div>
      </section>

      {/* SECTION: WHAT IS THIS */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#0C0C24] px-6">
        <motion.h2
          className="text-5xl font-extrabold mb-8 text-center"
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span
            className="
              gradient-text
              dark:bg-gradient-to-r dark:from-[#76B893] dark:via-[#6EA1C2] dark:to-[#503D85]
              bg-clip-text text-transparent
              "
          > Bridging 
            </span> beautiful design with solid backend<br />
        </motion.h2>
        <motion.div
          className="max-w-3xl text-xl text-gray-700 dark:text-gray-200 mb-8 text-center"
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.2}
        >
          While my passion is frontend development, I understand the entire stack. I can handle database design, API integration, and even add intelligent features with AI, ensuring your project works beautifully from end to end
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-8 justify-center"
          variants={pop}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          custom={0.3}
        >
          {[
            { icon: "⚛️", label: "React/Next.js" },
            { icon: "🎨", label: "Tailwind & UI/UX" },
            { icon: "🗄️", label: "Database Management" },
            { icon: "🤖", label: "AI Integration" },
            { icon: "📱", label: "Mobile-First" },
            { icon: "⚡", label: "Performance" },
          ].map((itm, i) => (
            <div
              key={itm.label}
              className="flex flex-col items-center bg-yellow-50 dark:bg-gray-800 rounded-xl px-6 py-4 shadow hover:scale-105 transition"
            >
              <span className="text-4xl mb-2">{itm.icon}</span>
              <span className="font-bold">{itm.label}</span>
            </div>
          ))}
        </motion.div>
      </section>
      
      {/* SECTION: FEATURES */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#FFF9C4] via-[#FFE2C4] to-[#FFC4C4] dark:from-[#12211F] dark:via-[#222D38] dark:to-[#171726] relative px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-center"
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
        >
          My strengths that <span
            className="
              gradient-text
              dark:bg-gradient-to-r dark:from-[#76B893] dark:via-[#6EA1C2] dark:to-[#503D85]
              bg-clip-text text-transparent
              "
          > stand out</span>
        </motion.h2>
        <motion.div
          className="max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={pop}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <FeatureCard icon="⚡" title="Frontend Excellence" desc="Clean, maintainable React code with TypeScript, responsive design, and optimal performance" />
          <FeatureCard icon="⚙️" title="Database Proficiency" desc="MongoDB, PostgreSQL design and management. I make your data work for you" />
          <FeatureCard icon="🔮" title="AI-Enhanced Features" desc="OpenCV for image processing, basic ML model integration to add smart capabilities" />
          <FeatureCard icon="🚀" title="Full Project Ownership" desc="From concept to deployment, I handle the complete frontend with backend integration" />
        </motion.div>
      </section>

      {/* SECTION: TESTIMONIALS */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#0C0C24] px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-center"
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span
            className="
              gradient-text
              dark:bg-gradient-to-r dark:from-[#76B893] dark:via-[#6EA1C2] dark:to-[#503D85]
              bg-clip-text text-transparent
              "
          >Recent Works</span>
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row gap-8 max-w-5xl justify-center"
          variants={pop}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <Testimonial
          image="/blog.png"
          title="Blog-Showcase"
            desc="A modern, responsive blog platform built with Next.js and Tailwind. Features smooth animations, categorized posts, and a clean reading experience."
          />
          <Testimonial
          image="/aihandwrite.png"
          title="AI Handwriting Recognition"
            desc="Built with Python and OpenCV, this project converts handwritten notes into digital text using machine learning models."
          />
          <Testimonial
          image="/eventreg.png"
          title="Event Registration System"
            desc="Full-stack web app with authentication and database integration for managing college event registrations."
          />
        </motion.div>
      </section>

      {/* SECTION: CTA */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-[#4A0000] text-[#EDE587] px-4 dark:bg-black">
        <motion.h2
          className="text-5xl font-extrabold mb-10 text-center"
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
        >
          Beyond Code: A Partnership Approach
        </motion.h2>
        <motion.p
          className="max-w-xl text-xl mb-8 text-center"
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.15}
        >
          Whether you need a complete full-stack application, AI feature integration, or technical consulting, I can help bring your complex ideas to life.<br />
          <br/>
        </motion.p>
        <motion.div
          variants={pop}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          custom={0.2}
        >
          <Link
            href="/contact"
            className="bg-[#EDE587] text-black font-bold rounded-full px-12 py-5 shadow-xl text-2xl hover:bg-yellow-300 hover:scale-105 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

// Spacer to account for your sticky/fixed navbar (if any)
function NavbarSpacer() {
  return <div className="h-20 w-full" />;
}

function StatItem({ big, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-black gradient-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 bg-clip-text text-transparent">{big}</span>
      <span className="text-lg font-medium mt-2">{label}</span>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-md p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition">
      <span className="text-4xl mb-2">{icon}</span>
      <span className="font-bold text-lg mb-2">{title}</span>
      <span className="text-gray-600 dark:text-gray-300 text-base">{desc}</span>
    </div>
  );
}

function Testimonial({ image, title, desc }) {
  return (
    <div className="flex flex-col items-center bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 max-w-sm">
      <Image src={image} alt={title} width={68} height={68} className="rounded-full mb-4" />
      <span className="font-bold text-lg mb-2">{title}</span>
      <p className="italic text-lg mb-4">{desc}</p>
    </div>
  );
}
