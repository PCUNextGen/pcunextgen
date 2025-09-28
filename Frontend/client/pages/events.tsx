"use client";

import { motion } from "framer-motion";

type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
};

const events: Event[] = [
  {
    title: "Workshop: Intro to LLMs",
    date: "Nov 15, 2025 • 5:00 PM",
    location: "Engineering Lab 2A",
    description:
      "Hands-on session covering tokenization, prompting, and safety.",
  },
  {
    title: "Hackathon: Build with AI",
    date: "Dec 6–7, 2025",
    location: "Innovation Hub",
    description:
      "24-hour sprint to prototype AI-powered apps with mentors.",
  },
  {
    title: "Guest Lecture: Responsible AI",
    date: "Jan 12, 2026 • 6:30 PM",
    location: "Auditorium C",
    description:
      "A conversation with an industry researcher on fairness and bias.",
  },
  {
    title: "AI Startup Pitch Night",
    date: "Feb 20, 2026 • 7:00 PM",
    location: "Innovation Hub",
    description:
      "Student teams pitch AI-driven startup ideas to a panel of judges.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-20 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-gradient">All Events</span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our workshops, hackathons, and lectures — where innovation
            meets collaboration.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-xl border border-border bg-card/60 p-6 backdrop-blur shadow-md hover:shadow-accent/20 transition"
            >
              {/* Date Badge */}
              <p className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent mb-3">
                {e.date}
              </p>

              {/* Title */}
              <h3 className="font-semibold text-lg group-hover:text-primary transition">
                {e.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground">
                {e.description}
              </p>

              {/* Location */}
              <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
                📍 {e.location}
              </p>

              {/* CTA */}
              <div className="mt-5">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow hover:scale-105 transition"
                >
                  Register →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative Blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl"
      />
    </main>
  );
}