import React from 'react';
import { motion } from 'framer-motion';
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

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.8 } }
};

const cardVariant = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  show: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, duration: 0.8 } }
};

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const Team = () => {
  return (
    <section className="py-20 bg-light-primary dark:bg-dark-primary relative overflow-hidden">
      {/* Professional Background Elements */}
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
        {/* Professional Header */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={textVariant}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-light-accent dark:bg-dark-accent text-accent dark:text-accent-light rounded-full text-sm font-semibold border border-accent/20 dark:border-accent/30 backdrop-blur-sm">
              Our Leadership
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-text-light-primary dark:text-text-dark-primary"
            >
              Meet Our{' '}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-accent dark:text-accent-light"
            >
              Team
            </motion.span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-accent dark:bg-accent-light mx-auto rounded-full mb-6"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto font-light"
          >
            The passionate individuals driving innovation and excellence at Nextgen Innovation Club
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={containerVariant}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={cardVariant}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl blur" 
                   style={{
                     background: `linear-gradient(135deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})`
                   }}>
              </div>
              
              <div className="relative bg-light-secondary dark:bg-dark-secondary rounded-3xl p-8 shadow-soft dark:shadow-glow hover:shadow-soft-lg transition-all duration-500 border border-light-accent dark:border-dark-accent backdrop-blur-sm h-full">
                
                {/* Avatar Section */}
                <div className="text-center mb-6">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -2, 2, 0]
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
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
                    
                    {/* Floating Accent */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent dark:bg-accent-light rounded-full origin-center"
                    />
                  </motion.div>
                </div>
                
                {/* Member Info */}
                <div className="text-center mb-6">
                  <motion.h3 
                    whileHover={{ scale: 1.02 }}
                    className="text-xl md:text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300"
                  >
                    {member.name}
                  </motion.h3>
                  
                  <div className="inline-block px-3 py-1 bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light rounded-full text-sm font-semibold mb-4 border border-accent/20 dark:border-accent/30">
                    {member.role}
                  </div>
                  
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-accent/10 dark:border-accent/20">
                  <div className="flex justify-center space-x-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center hover:bg-accent/20 dark:hover:bg-accent/30 transition-all duration-300 cursor-pointer group/social"
                    >
                      <svg className="w-5 h-5 text-accent dark:text-accent-light group-hover/social:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center hover:bg-accent/20 dark:hover:bg-accent/30 transition-all duration-300 cursor-pointer group/social"
                    >
                      <svg className="w-5 h-5 text-accent dark:text-accent-light group-hover/social:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect Particles */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="absolute top-6 right-8 w-1 h-1 bg-accent-light rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={textVariant}
          className="text-center mt-16"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-light-accent dark:bg-dark-accent rounded-full border border-accent/20 dark:border-accent/30"
          >
            <span className="text-text-light-secondary dark:text-text-dark-secondary font-medium">
              Want to join our leadership team?
            </span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-accent dark:text-accent-light font-semibold">Get involved</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Team, 'team');
