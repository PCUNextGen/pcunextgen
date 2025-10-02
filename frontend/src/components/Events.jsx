import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.8 } }
};

const cardVariant = {
  hidden: { scale: 0.95, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, delay: 0.2 } }
};

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const Events = () => {
  return (
    <section className="py-20 bg-light-primary dark:bg-dark-primary relative overflow-hidden">
      {/* Subtle Background Elements with Theme Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1, opacity: 0.05 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 1.05, opacity: 0.03 }}
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-light/5 dark:bg-accent-light/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header with Theme Colors */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={textVariant}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <motion.span 
              whileHover={{ scale: 1.02 }}
              className="px-4 py-2 bg-light-accent dark:bg-dark-accent text-accent dark:text-accent-light rounded-full text-sm font-semibold border border-accent/20 dark:border-accent/30 backdrop-blur-sm"
            >
              Upcoming Event
            </motion.span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-text-light-primary dark:text-text-dark-primary"
            >
              Join Our{' '}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-accent dark:text-accent-light"
            >
              Launch Event
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
            className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto"
          >
            Be part of our inaugural event and join the innovation journey
          </motion.p>
        </motion.div>

        {/* Event Card with Professional Animations */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={cardVariant}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ 
                rotate: [0, 0.5, 0, -0.5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent-light/15 to-accent-dark/20 dark:from-accent/30 dark:via-accent-light/25 dark:to-accent-dark/30 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-700"
            />
            <div className="relative bg-light-secondary dark:bg-dark-secondary rounded-3xl shadow-soft dark:shadow-glow backdrop-blur-sm border border-light-accent dark:border-dark-accent overflow-hidden">
              
              {/* Event Header with Theme Colors */}
              <div className="bg-gradient-to-r from-accent to-accent-hover p-8 text-white relative overflow-hidden">
                <motion.div 
                  initial={{ x: 0, opacity: 0.1 }}
                  animate={{ 
                    x: [0, 100, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -2, 2, 0]
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                        <div className="text-center">
                          <motion.div 
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-2xl font-bold"
                          >
                            06
                          </motion.div>
                          <div className="text-xs opacity-90">OCT</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <motion.span 
                        whileHover={{ scale: 1.02 }}
                        className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-3 border border-white/30"
                      >
                        Inaugural Event
                      </motion.span>
                      <motion.h3 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-2xl md:text-3xl font-bold mb-2"
                      >
                        Nextgen Innovation Club Launch
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-lg text-white/90"
                      >
                        Official launch ceremony and community introduction
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details with Theme Colors */}
              <div className="p-8">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-8 text-center"
                >
                  Join us for the official launch of Nextgen Innovation Club at PCU. Meet our team, 
                  learn about our vision, and discover exciting opportunities in AI and technology.
                </motion.p>

                {/* Info Grid with Professional Animations */}
                <motion.div 
                  initial="hidden"
                  animate="show"
                  variants={containerVariant}
                  className="grid md:grid-cols-3 gap-6 mb-8"
                >
                  {[
                    {
                      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                      title: "Date & Time",
                      value: "Oct 6, 2025 • 2:00 PM"
                    },
                    {
                      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                      title: "Venue",
                      value: "PCu Auditorium"
                    },
                    {
                      icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
                      title: "Registration",
                      value: "Free Entry"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, delay: index * 0.1 } }
                      }}
                      whileHover={{ 
                        y: -5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="text-center p-4 bg-light-accent dark:bg-dark-accent rounded-xl border border-accent/10 dark:border-accent/20 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5 text-accent dark:text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </motion.div>
                      <div className="font-semibold text-text-light-primary dark:text-text-dark-primary group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300">{item.title}</div>
                      <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{item.value}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA with Professional Animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-accent hover:bg-accent-hover dark:bg-accent dark:hover:bg-accent-light text-white font-semibold py-3 px-8 rounded-xl shadow-soft dark:shadow-glow transition-all duration-300 relative overflow-hidden group"
                  >
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [0, 100, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-none"
                    />
                    <span className="relative z-10">Register Now</span>
                  </motion.button>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-sm text-text-light-tertiary dark:text-text-dark-tertiary mt-3"
                  >
                    Registration closes October 5th
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info with Subtle Animation */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={textVariant}
          className="text-center mt-12"
        >
          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="text-text-light-secondary dark:text-text-dark-secondary"
          >
            Questions?{' '}
            <motion.span 
              whileHover={{ x: 2 }}
              className="text-accent dark:text-accent-light font-semibold cursor-pointer"
            >
              Contact us
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Events, 'events');
