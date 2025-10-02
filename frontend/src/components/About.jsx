import React from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Smooth scroll to join section with enhanced animation
  const scrollToJoin = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      // Add a small delay for visual feedback
      setTimeout(() => {
        joinSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Pioneering cutting-edge solutions in artificial intelligence, machine learning, and emerging technologies to address complex real-world challenges.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration", 
      description: "Building a robust ecosystem where students collaborate on impactful projects, share expertise, and develop advanced technical competencies through teamwork.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Excellence",
      description: "Maintaining the highest standards in technical execution, research methodology, and professional development to cultivate future technology leaders.",
      color: "from-purple-600 to-violet-600"
    }
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1, opacity: 0.1 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 1.05, opacity: 0.08 }}
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/8 dark:bg-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-block mb-6"
          >
            <span className="px-5 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700/50 backdrop-blur-sm">
              About Our Organization
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <motion.span 
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: -15 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut", type: "spring", stiffness: 80 }}
              className="inline-block text-gray-900 dark:text-white"
            >
              Nextgen{' '}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 15 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut", type: "spring", stiffness: 80 }}
              className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Innovation
            </motion.span>
          </h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 120, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Mission Card with Professional Description */}
        <motion.div 
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut", type: "spring", stiffness: 60 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative group">
            <motion.div 
              animate={{
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-700"
            />
            
            <div className="relative bg-white dark:bg-gray-800/90 rounded-3xl p-10 md:p-16 shadow-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <motion.div 
                initial={{ scale: 0, rotateY: 180 }}
                animate={isInView ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: 180 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.3 }}
                className="text-center mb-8"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-5xl mx-auto font-light"
              >
                Nextgen Innovation is a premier student-led technology consortium at Pimpri Chinchwad University, 
                dedicated to advancing artificial intelligence and emerging technologies. We cultivate an ecosystem of 
                excellence where visionary innovators collaborate, develop cutting-edge skills, and transform breakthrough 
                concepts into impactful solutions through comprehensive research initiatives and hands-on project development.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Feature Cards with Advanced Scroll Animations */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ 
                opacity: 0, 
                x: index === 0 ? -100 : index === 1 ? 0 : 100, 
                y: 60,
                rotateX: 15,
                scale: 0.9
              }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0, 
                y: 0,
                rotateX: 0,
                scale: 1
              } : { 
                opacity: 0, 
                x: index === 0 ? -100 : index === 1 ? 0 : 100, 
                y: 60,
                rotateX: 15,
                scale: 0.9
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + index * 0.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 60
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 2,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative"
            >
              <motion.div 
                className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700"
                style={{
                  background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
                }}
                animate={{
                  rotate: [0, 1, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl p-8 lg:p-10 shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-full transition-all duration-500 group-hover:shadow-2xl">
                <motion.div 
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { type: "spring", stiffness: 400, duration: 0.6 }
                  }}
                  className="mb-8"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 text-white`}>
                    {feature.icon}
                  </div>
                </motion.div>
                
                <motion.h3 
                  whileHover={{ 
                    x: 3,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                >
                  {feature.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                  {feature.description}
                </p>

                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2, ease: "easeInOut" }}
                  className={`h-1 bg-gradient-to-r ${feature.color} rounded-full origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA with Advanced Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 80 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            onClick={scrollToJoin}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full border border-blue-200 dark:border-blue-700/50 cursor-pointer hover:shadow-lg transition-all duration-300 group"
          >
            <motion.span 
              className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              whileHover={{ x: 2 }}
            >
              Ready to be part of our innovation journey?
            </motion.span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="group-hover:animate-none"
            >
              <motion.svg 
                whileHover={{ x: 5, scale: 1.1 }}
                className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
