"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Team from "@/components/sections/Team";
import Join from "@/components/sections/Join";

export default function Index() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <About />
      </motion.section>

      {/* Events Section */}
      <motion.section
        id="events"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <Events />
      </motion.section>

      {/* Team Section */}
      <motion.section
        id="team"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-900/40 backdrop-blur"
      >
        <Team />
      </motion.section>

      {/* Join Section */}
      <motion.section
        id="join"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
      >
        <Join />
      </motion.section>
    </main>
  );
}