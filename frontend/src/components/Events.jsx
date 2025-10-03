import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import EventRegister from './sections/EventRegister';

const Events = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegisterClick = () => {
    // Scroll to the events section smoothly
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setShowRegistration(true);
  };

  const handleBackToEvents = () => {
    setShowRegistration(false);
  };

  // If registration form is shown, display it
  if (showRegistration) {
    return (
      <section className="py-20 bg-light-primary dark:bg-dark-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <button 
              onClick={handleBackToEvents}
              className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              ← Back to Events
            </button>
            <EventRegister />
          </div>
        </div>
      </section>
    );
  }

  // Enhanced animation variants with scroll triggers
  const textVariant = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.8, stiffness: 100 } }
  };

  const cardVariant = {
    hidden: { scale: 0.9, opacity: 0, rotateX: 15 },
    show: { scale: 1, opacity: 1, rotateX: 0, transition: { type: "spring", stiffness: 80, delay: 0.2 } }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const infoCardVariant = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section 
      id="events"
      ref={ref}
      className="py-20 bg-light-primary dark:bg-dark-primary relative overflow-hidden"
    >
      {/* Enhanced Background Elements with Scroll Animation */}
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
        {/* Enhanced Header with Scroll Animation */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={textVariant}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
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
              initial={{ opacity: 0, x: -40, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -40, rotateY: -15 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 80 }}
              className="inline-block text-text-light-primary dark:text-text-dark-primary"
            >
              Join Our{' '}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 40, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 40, rotateY: 15 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80 }}
              className="inline-block text-accent dark:text-accent-light"
            >
              Launch Event
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
            className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto"
          >
            Be part of our inaugural event and join the innovation journey
          </motion.p>
        </motion.div>

        {/* Enhanced Event Card with Advanced Scroll Animation */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
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
              
              {/* Enhanced Event Header with Scroll Animation */}
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
                className="bg-gradient-to-r from-accent to-accent-hover p-8 text-white relative overflow-hidden"
              >
                <motion.div 
                  initial={{ x: -100, opacity: 0.1 }}
                  animate={isInView ? { 
                    x: [0, 100, 0],
                    opacity: [0.1, 0.3, 0.1]
                  } : { x: -100, opacity: 0.1 }}
                  transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 150 }}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -2, 2, 0]
                      }}
                      className="flex-shrink-0"
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                        <div className="text-center">
                          <motion.div 
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-3 border border-white/30"
                      >
                        Inaugural Event
                      </motion.span>
                      <motion.h3 
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-2xl md:text-3xl font-bold mb-2"
                      >
                        Nextgen Innovation Club Launch
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-lg text-white/90"
                      >
                        Official launch ceremony and community introduction
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Event Details with Scroll Animation */}
              <div className="p-8">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-8 text-center"
                >
                  Join us for the official launch of Nextgen Innovation Club at PCU. Meet our team, 
                  learn about our vision, and discover exciting opportunities in AI and technology.
                </motion.p>

                {/* Enhanced Info Grid with Advanced Scroll Animation */}
                <motion.div 
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
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
                      value: "PCU Auditorium"
                    },
                    {
                      icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
                      title: "Registration",
                      value: "Free Entry"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={infoCardVariant}
                      whileHover={{ 
                        y: -8,
                        scale: 1.02,
                        rotateY: 3,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="text-center p-4 bg-light-accent dark:bg-dark-accent rounded-xl border border-accent/10 dark:border-accent/20 group cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                        className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5 text-accent dark:text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 2 }}
                        className="font-semibold text-text-light-primary dark:text-text-dark-primary group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300"
                      >
                        {item.title}
                      </motion.div>
                      <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{item.value}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced CTA with Advanced Animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    onClick={handleRegisterClick}
                    className="bg-accent hover:bg-accent-hover dark:bg-accent dark:hover:bg-accent-light text-white font-semibold py-3 px-8 rounded-xl shadow-soft dark:shadow-glow transition-all duration-300 relative overflow-hidden group"
                  >
                    <motion.span
                      initial={{ x: -100 }}
                      animate={{ x: [0, 100, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-none"
                    />
                    <span className="relative z-10">Register Now</span>
                  </motion.button>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-sm text-text-light-tertiary dark:text-text-dark-tertiary mt-3"
                  >
                    Registration closes October 5th
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Contact Info with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.p 
            whileHover={{ scale: 1.02, y: -1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary"
          >
            Questions?{' '}
            <motion.span 
              whileHover={{ x: 3, scale: 1.05 }}
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

export default Events;
