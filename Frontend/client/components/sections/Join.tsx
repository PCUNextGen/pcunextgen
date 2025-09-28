"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Join form submission", data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setSubmitted(true);
  };

  // Animation variants (No changes here, kept for completeness)
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

  const formVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Kept color mapping but updated to match the purple/blue theme
  const benefits = [
    {
      icon: "🚀",
      text: "Weekly workshops and project meetups",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: "🤝",
      text: "Mentorship and research opportunities",
      color: "from-purple-400 to-violet-400"
    },
    {
      icon: "🌍",
      text: "Collaborations with startups and labs",
      color: "from-indigo-400 to-sky-400"
    },
    {
      icon: "🎯",
      text: "Industry networking and career guidance",
      color: "from-pink-400 to-red-400"
    }
  ];

  return (
    <section
      id="join"
      className="py-20 relative overflow-hidden bg-gray-950" // 1. Dark background added
      ref={ref}
    >
      {/* Enhanced Background */}
      {/* 2. Replaced strong background gradient with subtle dark elements */}
      <div className="absolute inset-0 bg-gray-950/90" />
      
      {/* Animated Background Elements (using dark blues and purples) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 blur-3xl"
      />
      {/* End Background Elements */}

      <div className="container relative z-10 text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 lg:grid-cols-2 lg:items-start"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="lg:sticky lg:top-24">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-xl">
                  ✨
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Join{" "}
                {/* 3. Updated gradient for Heading text to match the image's vibrant purple/blue */}
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  className="bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent bg-300% animate-gradient"
                >
                  NextGen Innovators
                </motion.span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Be part of a student community shaping the future of{" "}
                {/* 4. Updated color of keyword spans */}
                <span className="font-semibold text-blue-400">AI</span> and{" "}
                <span className="font-semibold text-violet-400">emerging technologies</span>.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants} className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  // 5. Made card backgrounds darker
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-lg shadow-lg`}
                  >
                    {benefit.icon}
                  </motion.div>
                  <span className="text-white/90 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-2 gap-6"
            >
              {[
                { number: "New", label: "Community", desc: "Just getting started!" },
                { number: "∞", label: "Potential", desc: "Unlimited opportunities" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  // 6. Made stat cards darker and updated number color
                  className="text-center p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-xs text-white/70">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={formVariants}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  // 7. Darker form background
                  className="relative rounded-2xl border border-white/20 bg-gray-900/70 backdrop-blur-xl shadow-2xl overflow-hidden"
                >
                  {/* Form Background Glow - updated to purple/blue */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 via-blue-400/5 to-cyan-400/5" />

                  <div className="relative p-8">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl font-bold mb-8 text-center"
                    >
                      Start Your Journey
                    </motion.h3>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <motion.div variants={inputVariants}>
                        <label className="block text-sm font-semibold mb-3 text-white/90" htmlFor="name">
                          Full Name
                        </label>
                        {/* 8. Updated input focus ring color */}
                        <input
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-xl border border-white/20 bg-white/5 backdrop-blur px-4 py-3 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                          placeholder="Jane Doe"
                        />
                      </motion.div>

                      <motion.div variants={inputVariants}>
                        <label className="block text-sm font-semibold mb-3 text-white/90" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          className="w-full rounded-xl border border-white/20 bg-white/5 backdrop-blur px-4 py-3 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                          placeholder="jane@pcu.edu.in"
                        />
                      </motion.div>

                      <motion.div variants={inputVariants} className="sm:col-span-2">
                        <label className="block text-sm font-semibold mb-3 text-white/90" htmlFor="interest">
                          Area of Interest
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          required
                          className="w-full rounded-xl border border-white/20 bg-white/5 backdrop-blur px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        >
                          <option value="" className="text-gray-900">Select your interest</option>
                          <option value="ai-ml" className="text-gray-900">Artificial Intelligence & ML</option>
                          <option value="web-dev" className="text-gray-900">Web Development</option>
                          <option value="mobile-dev" className="text-gray-900">Mobile Development</option>
                          <option value="blockchain" className="text-gray-900">Blockchain & Crypto</option>
                          <option value="robotics" className="text-gray-900">Robotics & IoT</option>
                          <option value="cybersecurity" className="text-gray-900">Cybersecurity</option>
                          <option value="data-science" className="text-gray-900">Data Science</option>
                          <option value="product" className="text-gray-900">Product & Startup</option>
                        </select>
                      </motion.div>

                      <motion.div variants={inputVariants} className="sm:col-span-2">
                        <label className="block text-sm font-semibold mb-3 text-white/90" htmlFor="message">
                          Tell us about yourself
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full rounded-xl border border-white/20 bg-white/5 backdrop-blur px-4 py-3 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="What do you want to build? What are your goals?"
                        />
                      </motion.div>

                      <motion.div variants={inputVariants} className="sm:col-span-2">
                        <div className="flex items-start gap-3">
                          <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            required
                            // 9. Updated checkbox color
                            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-blue-400 focus:ring-blue-400"
                          />
                          <label htmlFor="consent" className="text-sm text-white/90 leading-relaxed">
                            I agree to be contacted about club activities and understand this is a student-run community.
                          </label>
                        </div>
                      </motion.div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      // 10. Updated button gradient and shadow color
                      className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-4 font-bold text-white shadow-xl hover:shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <span>Join NextGen Club →</span>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className="relative rounded-2xl border border-white/20 bg-gray-900/70 backdrop-blur-xl shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-cyan-400/10" />

                  <div className="relative p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.6 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center text-3xl"
                    >
                      🎉
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
                      Welcome to NextGen!
                    </h3>

                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                      Thank you for joining our community! We'll be in touch soon with upcoming events,
                      opportunities, and ways to get involved.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      Submit Another Application
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
}