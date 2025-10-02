import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion, useInView } from 'framer-motion';

const JoinUs = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    interest: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Handle success state here
    }, 2000);
  };

  // Enhanced animation variants
  const textVariant = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.8, stiffness: 100 } }
  };

  const formVariant = {
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

  const benefitVariant = {
    hidden: { x: -50, opacity: 0, scale: 0.9 },
    show: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
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
            scale: [1, 1.05, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 1.05, opacity: 0.02 }}
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-light/5 dark:bg-accent-light/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Enhanced Professional Header with Scroll Animation */}
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
            <span className="px-4 py-2 bg-light-accent dark:bg-dark-accent text-accent dark:text-accent-light rounded-full text-sm font-semibold border border-accent/20 dark:border-accent/30 backdrop-blur-sm">
              Join Our Community
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <motion.span 
              initial={{ opacity: 0, x: -40, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -40, rotateY: -15 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 80 }}
              className="inline-block text-text-light-primary dark:text-text-dark-primary"
            >
              Start Your{' '}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 40, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 40, rotateY: 15 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80 }}
              className="inline-block text-accent dark:text-accent-light"
            >
              Innovation Journey
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
            Join a community of passionate innovators, tech enthusiasts, and future leaders shaping tomorrow's technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Benefits Section with Scroll Animation */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={containerVariant}
            className="space-y-6"
          >
            <motion.div 
              variants={textVariant}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
                Why Join Nextgen Innovation?
              </h3>
              <motion.div 
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-accent rounded-full"
              />
            </motion.div>

            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Hands-on Projects",
                description: "Work on real-world AI and technology projects that make an impact"
              },
              {
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
                title: "Expert Mentorship",
                description: "Learn from experienced faculty members and industry professionals"
              },
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "Innovation Opportunities",
                description: "Access to cutting-edge resources, labs, and research facilities"
              },
              {
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8",
                title: "Career Development",
                description: "Build your portfolio, network, and gain valuable experience"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                variants={benefitVariant}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-light-accent dark:hover:bg-dark-accent transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="w-12 h-12 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-accent dark:text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </motion.div>
                <div>
                  <motion.h4 
                    whileHover={{ x: 3 }}
                    className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300"
                  >
                    {benefit.title}
                  </motion.h4>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Form Section with Advanced Scroll Animation */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={formVariant}
            className="relative"
          >
            <div className="relative group">
              <motion.div 
                animate={{ 
                  rotate: [0, 0.5, 0, -0.5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent-light/15 to-accent-dark/20 dark:from-accent/30 dark:via-accent-light/25 dark:to-accent-dark/30 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-700"
              />
              
              <div className="relative bg-light-secondary dark:bg-dark-secondary rounded-3xl p-8 md:p-10 shadow-soft dark:shadow-glow border border-light-accent dark:border-dark-accent backdrop-blur-sm">
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  className="text-center mb-8"
                >
                  <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                    Ready to Innovate?
                  </h3>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    Fill out the form below to join our community
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group"
                    >
                      <label htmlFor="name" className="block text-text-light-primary dark:text-text-dark-primary font-semibold mb-3">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full p-4 rounded-xl bg-light-primary dark:bg-dark-primary text-text-light-primary dark:text-text-dark-primary border-2 border-light-accent dark:border-dark-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full origin-left"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group"
                    >
                      <label htmlFor="email" className="block text-text-light-primary dark:text-text-dark-primary font-semibold mb-3">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full p-4 rounded-xl bg-light-primary dark:bg-dark-primary text-text-light-primary dark:text-text-dark-primary border-2 border-light-accent dark:border-dark-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                          placeholder="your.email@pccoe.edu"
                        />
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full origin-left"
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                      <label htmlFor="year" className="block text-text-light-primary dark:text-text-dark-primary font-semibold mb-3">
                        Academic Year
                      </label>
                      <select 
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-light-primary dark:bg-dark-primary text-text-light-primary dark:text-text-dark-primary border-2 border-light-accent dark:border-dark-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                      >
                        <option value="">Select Year</option>
                        <option value="1st">First Year (FE)</option>
                        <option value="2nd">Second Year (SE)</option>
                        <option value="3rd">Third Year (TE)</option>
                        <option value="4th">Fourth Year (BE)</option>
                      </select>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02, y: -2 }}>
                      <label htmlFor="interest" className="block text-text-light-primary dark:text-text-dark-primary font-semibold mb-3">
                        Primary Interest
                      </label>
                      <select 
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-light-primary dark:bg-dark-primary text-text-light-primary dark:text-text-dark-primary border-2 border-light-accent dark:border-dark-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                      >
                        <option value="">Select Interest</option>
                        <option value="ai-ml">Artificial Intelligence & ML</option>
                        <option value="web-dev">Web Development</option>
                        <option value="mobile-dev">Mobile App Development</option>
                        <option value="data-science">Data Science & Analytics</option>
                        <option value="iot">Internet of Things (IoT)</option>
                        <option value="blockchain">Blockchain Technology</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="robotics">Robotics & Automation</option>
                      </select>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    whileHover={{ scale: 1.01, y: -2 }}
                  >
                    <label htmlFor="motivation" className="block text-text-light-primary dark:text-text-dark-primary font-semibold mb-3">
                      Why do you want to join? (Optional)
                    </label>
                    <textarea 
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-4 rounded-xl bg-light-primary dark:bg-dark-primary text-text-light-primary dark:text-text-dark-primary border-2 border-light-accent dark:border-dark-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                      placeholder="Tell us about your goals and what you hope to achieve..."
                    />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-center pt-4"
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                      }}
                      whileTap={{ scale: 0.98, y: 0 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="relative bg-accent hover:bg-accent-hover dark:bg-accent dark:hover:bg-accent-light text-white font-semibold py-4 px-12 rounded-xl shadow-soft dark:shadow-glow transition-all duration-300 text-lg overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {!isSubmitting && (
                        <motion.span
                          initial={{ x: -100 }}
                          animate={{ x: [0, 100, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-none"
                        />
                      )}
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Submitting...
                          </>
                        ) : (
                          'Join Nextgen Innovation'
                        )}
                      </span>
                    </motion.button>
                  </motion.div>
                </form>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-8 pt-8 border-t border-accent/20 text-center"
                >
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    Questions? Contact us at{' '}
                    <motion.a 
                      whileHover={{ scale: 1.05, y: -1 }}
                      href="mailto:nextgen@pccoe.edu" 
                      className="text-accent dark:text-accent-light hover:text-accent-hover font-semibold transition-colors duration-300"
                    >
                      nextgen@pcu.edu.in
                    </motion.a>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(JoinUs, 'join');
