"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        bounce: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.3,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        bounce: 0.6,
      },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  const pillars = [
    { 
      icon: "📚", 
      label: "Learn", 
      desc: "Hands-on workshops and skill sessions.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    { 
      icon: "🛠️", 
      label: "Build", 
      desc: "Collaborative projects and hackathons.",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 to-violet-500/10"
    },
    { 
      icon: "🌐", 
      label: "Connect", 
      desc: "Networking with peers and mentors.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    { 
      icon: "🚀", 
      label: "Grow", 
      desc: "Personal and professional development.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
      ref={ref}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/30 dark:from-slate-950/50 dark:to-blue-950/30" />
      </div>

      {/* Animated Background Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-3xl"
        aria-hidden
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 blur-3xl"
        aria-hidden
      />
      <motion.div
        animate={{ 
          x: [0, 60, 0], 
          y: [0, -40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/15 to-pink-400/15 blur-2xl"
        aria-hidden
      />

      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Enhanced Tagline */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-6 py-3 shadow-xl">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                aria-hidden
              />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                NextGen Innovation Club
              </span>
            </div>
          </motion.div>

          {/* Enhanced Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8"
          >
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-purple-600 via-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent bg-400% animate-gradient"
            >
              Learn. Build. Innovate.
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtext */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
          >
            A student-led community exploring{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              AI
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              emerging technologies
            </span>
            . We host workshops, build projects, and connect with mentors to 
            prepare students for the future of technology.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              <span>Explore Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              href="#join"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-purple-500/20 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl text-foreground font-semibold hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
            >
              <span>Join the Club</span>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Enhanced Core Pillars */}
          <motion.div
            variants={containerVariants}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                variants={cardVariants}
                whileHover="hover"
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl" />
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-8 text-center">
                  {/* Icon with Animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6, type: "spring" }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-4xl mb-6 inline-block"
                  >
                    {pillar.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:${pillar.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {pillar.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${pillar.gradient} transition-all duration-300`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-current rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
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
        .bg-400% {
          background-size: 400% 400%;
        }
      `}</style>
    </section>
  );
}