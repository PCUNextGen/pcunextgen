import React from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const teamMembers = [
  { 
    name: 'Affan Pathan', 
    role: 'President', 
    color: 'from-blue-600 to-indigo-600',
    description: 'Leading the vision and strategic direction of our innovation community'
  },
  { 
    name: 'Pradnya Jadhav', 
    role: 'Vice President', 
    color: 'from-emerald-600 to-teal-600',
    description: 'Supporting operations and fostering collaborative partnerships'
  },
  { 
    name: 'Ashraf Pathan', 
    role: 'Technical Head', 
    color: 'from-purple-600 to-violet-600',
    description: 'Overseeing technical projects and development initiatives'
  },
  { 
    name: 'Ms. Manisha Khadse', 
    role: 'Faculty Mentor', 
    color: 'from-rose-600 to-pink-600',
    description: 'Providing academic guidance and industry expertise'
  },
];

const Team = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Enhanced animation variants with scroll triggers
  const textVariant = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.8, stiffness: 100 } }
  };

  const cardVariant = {
    hidden: { y: 60, opacity: 0, scale: 0.85, rotateX: 15 },
    show: { y: 0, opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 80, duration: 0.8 } }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-light-primary dark:bg-dark-primary relative overflow-hidden"
    >
      {/* Enhanced Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1, opacity: 0.03 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.02 }}
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-light/5 dark:bg-accent-light/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced Professional Header with Scroll Animation */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={textVariant}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-light-accent dark:bg-dark-accent text-accent dark:text-accent-light rounded-full text-sm font-semibold border border-accent/20 dark:border-accent/30 backdrop-blur-sm">
              Our Leadership
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <motion.span 
              initial={{ opacity: 0, x: -40, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -40, rotateY: -15 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 80 }}
              className="inline-block text-text-light-primary dark:text-text-dark-primary"
            >
              Meet Our{' '}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 40, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 40, rotateY: 15 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80 }}
              className="inline-block text-accent dark:text-accent-light"
            >
              Team
            </motion.span>
          </h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="h-1 bg-accent dark:bg-accent-light mx-auto rounded-full mb-6"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto font-light"
          >
            The passionate individuals driving innovation and excellence at Nextgen Innovation Club
          </motion.p>
        </motion.div>

        {/* Enhanced Team Grid with Advanced Scroll Animation */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariant}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={cardVariant}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 3,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative"
            >
              {/* Enhanced Card Background with Gradient Border */}
              <motion.div 
                className="absolute -inset-0.5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-700"
                style={{
                  background: `linear-gradient(135deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})`
                }}
                animate={{
                  rotate: [0, 1, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
              />
              
              <div className="relative bg-light-secondary dark:bg-dark-secondary rounded-3xl p-8 shadow-soft dark:shadow-glow hover:shadow-soft-lg transition-all duration-500 border border-light-accent dark:border-dark-accent backdrop-blur-sm h-full">
                
                {/* Enhanced Avatar Section with Scroll Animation */}
                <div className="text-center mb-6">
                  <motion.div 
                    initial={{ scale: 0, rotate: -90 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.8, type: "spring", stiffness: 150 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -3, 3, 0]
                    }}
                    className="relative inline-block"
                  >
                    <div className={`w-24 h-24 md:w-28 md:h-28 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mx-auto`}>
                      <motion.span 
                        animate={{ 
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        className="text-white text-2xl md:text-3xl font-bold"
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </motion.span>
                    </div>
                    
                    {/* Enhanced Floating Accent */}
                    <motion.div 
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent dark:bg-accent-light rounded-full origin-center"
                    />
                  </motion.div>
                </div>
                
                {/* Enhanced Member Info with Scroll Animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="text-center mb-6"
                >
                  <motion.h3 
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="text-xl md:text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300"
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-3 py-1 bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light rounded-full text-sm font-semibold mb-4 border border-accent/20 dark:border-accent/30"
                  >
                    {member.role}
                  </motion.div>
                  
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>

                {/* Enhanced Social Links with Scroll Animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="pt-6 border-t border-accent/10 dark:border-accent/20"
                >
                  <div className="flex justify-center space-x-4">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center hover:bg-accent/20 dark:hover:bg-accent/30 transition-all duration-300 cursor-pointer group/social"
                    >
                      <svg className="w-5 h-5 text-accent dark:text-accent-light group-hover/social:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center hover:bg-accent/20 dark:hover:bg-accent/30 transition-all duration-300 cursor-pointer group/social"
                    >
                      <svg className="w-5 h-5 text-accent dark:text-accent-light group-hover/social:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced Hover Effect Particles */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    y: [-10, -20, -30]
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                  className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [-5, -15, -25]
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.7, delay: 0.2 }}
                  className="absolute top-6 right-8 w-1 h-1 bg-accent-light rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
          transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mt-16"
        >
          <motion.div 
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              boxShadow: "0 10px 30px rgba(6, 182, 212, 0.15)"
            }}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-light-accent dark:bg-dark-accent rounded-full border border-accent/20 dark:border-accent/30 cursor-pointer"
          >
            <motion.span 
              whileHover={{ x: 2 }}
              className="text-text-light-secondary dark:text-text-dark-secondary font-medium"
            >
              Want to join our leadership team?
            </motion.span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="group-hover:animate-none"
            >
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-accent dark:text-accent-light font-semibold"
              >
                Get involved
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Team, 'team');
