"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
  status?: "completed" | "upcoming";
  attendees?: number;
  image?: string;
};

const pastEvents: Event[] = [
  {
    title: "AI Bootcamp: Foundations of Machine Learning",
    date: "Aug 12, 2025 • 10:00 AM",
    location: "Innovation Hub",
    description: "A hands-on introduction to ML concepts, covering supervised learning, model evaluation, and practical coding labs.",
    status: "completed",
    attendees: 85,
    image: "🤖"
  },
  {
    title: "Hackathon: Build with AI",
    date: "Sep 20–21, 2025",
    location: "Main Auditorium",
    description: "24-hour sprint where student teams prototyped AI-powered apps with mentorship from industry experts.",
    status: "completed",
    attendees: 120,
    image: "💻"
  },
  {
    title: "Guest Lecture: Responsible AI",
    date: "Oct 5, 2025 • 6:30 PM",
    location: "Auditorium C",
    description: "A conversation with leading researchers on fairness, bias, and the ethics of deploying AI in society.",
    status: "completed",
    attendees: 200,
    image: "🎯"
  },
];

const upcomingEvents: Event[] = [
  {
    title: "Workshop: Intro to Large Language Models",
    date: "Nov 15, 2025 • 5:00 PM",
    location: "Engineering Lab 2A",
    description: "Hands-on session covering tokenization, prompting strategies, and safety considerations for LLMs.",
    status: "upcoming",
    image: "🧠"
  },
  {
    title: "NextGen Innovation Challenge",
    date: "Dec 10, 2025 • 9:00 AM",
    location: "Tech Park Auditorium",
    description: "Annual competition showcasing student innovations in AI, blockchain, and emerging technologies.",
    status: "upcoming",
    image: "🏆"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.3,
    },
  },
  hover: {
    scale: 1.03,
    y: -8,
    rotateX: 2,
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sectionHeaderVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.3, duration: 0.4, type: "spring" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5, duration: 0.4 },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-cyan-50/30 dark:from-indigo-950/20 dark:to-cyan-950/20" />
      <div className="absolute top-32 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-block p-3 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-xl">
              📅
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Events
            </motion.span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The <strong className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">NextGen Innovation Club</strong> is a vibrant, student-led community at our university dedicated to{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Artificial Intelligence</span>,{" "}
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Emerging Technologies</span>, and{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Innovation</span>.
            </p>
            <br />
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bring together curious minds from diverse disciplines to <strong className="text-foreground">learn, build, and lead</strong>. Through workshops, hackathons, research projects, and industry collaborations, we empower students to transform ideas into impactful solutions for the future.
            </p>
          </motion.div>
          
          <motion.a
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>View All Events</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Past Events Section */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Recent Highlights</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-transparent dark:from-green-800"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {pastEvents.map((event, index) => (
            <motion.article
              key={event.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Status Indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-6">
                {/* Event Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, type: "spring" }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 flex items-center justify-center text-2xl mb-4 shadow-md"
                >
                  {event.image}
                </motion.div>

                {/* Date Badge */}
                <motion.div
                  variants={badgeVariants}
                  className="inline-block rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-300 mb-3"
                >
                  {event.date}
                </motion.div>

                {/* Title & Description */}
                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Footer Info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                  {event.attendees && (
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      <span>{event.attendees} attended</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500 rounded-2xl" />
            </motion.article>
          ))}
        </motion.div>

        {/* Upcoming Events Section */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center relative">
              <span className="text-white text-sm">🎯</span>
              <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30"></div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Upcoming Events</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent dark:from-blue-800"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2"
        >
          {upcomingEvents.map((event, index) => (
            <motion.article
              key={event.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Status Indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping absolute"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-6">
                {/* Event Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, type: "spring" }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center text-2xl mb-4 shadow-md"
                >
                  {event.image}
                </motion.div>

                {/* Date Badge */}
                <motion.div
                  variants={badgeVariants}
                  className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-3"
                >
                  {event.date}
                </motion.div>

                {/* Title & Description */}
                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-6">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>

                {/* Register Button */}
                <motion.a
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Register Now</span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Add CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300% {
          background-size: 300% 300%;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}