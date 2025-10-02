import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const textVariant = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1 } }
};

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
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

const About = () => {
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
      description: "Building a robust ecosystem where students collaborate on impactful projects, share expertise, and develop professional networks within the tech industry.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Excellence",
      description: "Maintaining the highest standards in technical execution, research methodology, and professional development to prepare future industry leaders.",
      color: "from-purple-600 to-violet-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/8 dark:bg-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Professional Header */}
        <motion.div 
          variants={textVariant}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-5 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700/50 backdrop-blur-sm">
              About Our Organization
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-900 dark:text-white"
            >
              Nextgen{' '}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Innovation
            </motion.span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Mission Statement Card */}
        <motion.div 
          variants={textVariant}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-700"></div>
            <div className="relative bg-white dark:bg-gray-800/90 rounded-3xl p-10 md:p-16 shadow-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-5xl mx-auto font-light"
              >
                Nextgen Innovation is a premier student-led technology community at Pimpri Chinchwad College of Engineering, 
                dedicated to advancing artificial intelligence and emerging technologies. We foster an environment where 
                passionate innovators collaborate, develop cutting-edge skills, and transform visionary ideas into 
                impactful solutions through rigorous research, hands-on projects, and industry partnerships.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Professional Features Grid */}
        <motion.div
          variants={containerVariant}
          className="grid lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariant}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl blur" 
                   style={{
                     background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
                   }}>
              </div>
              
              <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl p-8 lg:p-10 shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-full transition-all duration-500 group-hover:shadow-2xl">
                {/* Professional Icon Container */}
                <div className="mb-8">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 text-white`}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                  {feature.description}
                </p>

                {/* Professional accent line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`h-1 bg-gradient-to-r ${feature.color} rounded-full origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Call to Action */}
        <motion.div
          variants={textVariant}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full border border-blue-200 dark:border-blue-700/50">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Ready to be part of our innovation journey?</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
