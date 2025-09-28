"use client";

import { motion, useInView } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef } from "react";

type Member = { name: string; role: string; image: string; linkedin?: string; github?: string; };

const team: Member[] = [
  {
    name: "Dr.Manisha Khadse",
    role: "Research Head",
    image: "#",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Dr.Renu Dadange",
    role: "Research Head",
    image: "#",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Affan Pathan",
    role: "President",
    image: "#",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Pradnya Jadhav",
    role: "Vice President",
    image: "#",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Amrisha vashistha",
    role: "Vice President",
    image: "#",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Ashraf Pathan",
    role: "Technical Leader",
    image: "#",
    linkedin: "#",
    github: "#"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    rotateY: 5,
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0.6,
    },
  },
};

const avatarVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      type: "spring",
      bounce: 0.6,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: 1,
    scale: 1.3,
    transition: { duration: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
    },
  },
};

const socialVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.4,
      type: "spring",
    },
  },
};

const iconHover = {
  scale: 1.3,
  rotate: 360,
  color: "#3b82f6",
  transition: { duration: 0.3 },
};

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-950/10 dark:to-purple-950/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-block p-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 mb-4"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
              👥
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Our Team
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Meet the passionate individuals driving NextGen Club forward with innovation and dedication.
          </motion.p>
        </motion.div>

        {/* Enhanced Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Card Background with Enhanced Styling */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative p-8 text-center">
                {/* Enhanced Avatar Section */}
                <div className="relative inline-block mb-6">
                  {/* Animated Glow Effect */}
                  <motion.div
                    variants={glowVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-blue-400 blur-lg"
                  />
                  
                  {/* Avatar */}
                  <motion.div variants={avatarVariants}>
                    <Avatar className="relative mx-auto h-28 w-28 border-4 border-white/50 dark:border-gray-700/50 shadow-2xl ring-2 ring-blue-500/20">
                      <AvatarImage 
                        src={member.image} 
                        alt={`${member.name} avatar`}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl font-bold">
                        {member.name.split(" ").map((s) => s[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  
                  {/* Role Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold shadow-lg"
                  >
                    {member.role.split(" ")[0]}
                  </motion.div>
                </div>

                {/* Enhanced Text Content */}
                <motion.div variants={textVariants}>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {member.role}
                  </p>
                </motion.div>

                {/* Enhanced Social Links */}
                <motion.div
                  variants={socialVariants}
                  className="flex justify-center gap-4"
                >
                  <motion.a
                    href={member.linkedin}
                    whileHover={iconHover}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    💼
                  </motion.a>
                  <motion.a
                    href={member.github}
                    whileHover={iconHover}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500/10 to-gray-600/10 flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="GitHub"
                  >
                    💻
                  </motion.a>
                </motion.div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add this to your global CSS for the gradient animation */}
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