"use client";

import { motion, useInView } from "framer-motion";
import { useRef,useState,useEffect } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const [rot,setRot] = useState({x:0,y:0});
  const [depth,setDepth] = useState(20);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      const maxDepth = 150; 
      const centerFactor = 1 - Math.abs(x - 50) / 50;
      setDepth(maxDepth * centerFactor);

    setRot({
    x: (x - 50) * -1.0, 
    y: (y - 50) * 1.0,  
      });
    };
    window.addEventListener("mousemove",handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

  const textVariants = {
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
      y: 40,
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
      scale: 1.05,
      y: -8,
      rotateX: 5,
      transition: {
        duration: 0.3,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const statsData = [];

  const infoCards = [
    {
      title: "Vision",
      desc: "To cultivate the next generation of innovators who drive ethical and inclusive AI advancements for society.",
      icon: "🔮",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-500/10 to-violet-500/10"
    },
    {
      title: "Mission",
      desc: "To provide hands-on learning, mentorship, and opportunities that bridge academia, research, and industry.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Values",
      desc: "Curiosity, collaboration, creativity, and a commitment to open knowledge and real-world impact.",
      icon: "💎",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "Community",
      desc: "An interdisciplinary family of students, researchers, and mentors across computer science, design, and engineering.",
      icon: "🌟",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 to-blue-50/30 dark:from-slate-950/30 dark:to-blue-950/30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container relative z-10" ref={ref}>
        {/* Centered Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Header */}
          <motion.div variants={textVariants}>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="inline-block p-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-xl">
                ✨
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              About{" "}
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient"
              >
                NextGen
              </motion.span>
            </h2>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The{" "}
              <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                NextGen Innovation Club
              </span>{" "}
              is a vibrant, student-led community at our university dedicated to{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-purple-600 dark:text-purple-400">
                  Artificial Intelligence
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-0 left-0 w-full h-2 bg-purple-200 dark:bg-purple-900/50 -z-10"
                />
              </span>
              ,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-blue-600 dark:text-blue-400">
                  Emerging Technologies
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 dark:bg-blue-900/50 -z-10"
                />
              </span>
              , and{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-cyan-600 dark:text-cyan-400">
                  Innovation
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute bottom-0 left-0 w-full h-2 bg-cyan-200 dark:bg-cyan-900/50 -z-10"
                />
              </span>
              .
            </p>
            <br />
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bring together curious minds from diverse disciplines to{" "}
              <strong className="text-foreground">learn, build, and lead</strong>. Through 
              workshops, hackathons, research projects, and industry collaborations, we 
              empower students to transform ideas into impactful solutions for the future.
            </p>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-800/40 backdrop-blur border border-white/20 dark:border-gray-700/30 shadow-xl"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-lg">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Journey Begins</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              As a newly formed club, we're building a foundation of innovation, learning, and collaboration. 
              Join us as we embark on this exciting journey to explore cutting-edge technologies and create 
              meaningful impact in the tech community.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards and Image Section */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left - Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >

            {/* Info Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {infoCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative rounded-2xl overflow-hidden"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-xl" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6, type: "spring" }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl mb-4 shadow-lg`}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className={`font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:${item.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-2xl`} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        {/* Right Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative flex justify-center items-center lg:pl-8 top-5 w-full"
          style={{
            perspective: "1000px",
            transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`, 
            transformStyle: "preserve-3d", 
            transition: "transform 0.1s ease",
          }}
        >
          {/* Floating Background Elements */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/10 to-blue-400/10"
            style={{ transform: 'translateZ(-1px)' }} 
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/10 to-teal-400/10"
            style={{ transform: 'translateZ(-1px)' }} 
          />

          {/* Main Image Container */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative top-10 w-full max-w-lg"
            style={{
              transform: `translateZ(${depth}px)`, 
              transition: "transform 0.1s ease, box-shadow 0.1s ease",
              position: 'relative', 
              overflow: 'hidden',  
            }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(
                  circle at ${rot.y * 8 + 50}% ${rot.x * 8 + 50}%, 
                  rgba(255, 255, 255, 0.4) 0%, 
                  rgba(255, 255, 255, 0) 60%
                )`,
                opacity: 1,
                transition: "background 0.1s ease",
              }}
            />

            {/* Subtle Image Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl blur-xl w-full rounded-2xl" />
            
            {/* The actual image holder */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/30 shadow-lg w-full"
              style={{
                  transform: `translateX(${rot.y * -0.8}px) translateY(${rot.x * -0.3}px)`,
                  transition: "transform 0.1s ease",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop"
                alt="Students collaborating on AI research"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Subtle Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5" />
            </div>
          </motion.div>
        </motion.div>
        </div>
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
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}