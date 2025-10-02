import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const projects = [
  { title: 'AI-Powered Chatbot', description: 'A smart chatbot for university services.' },
  { title: 'Computer Vision Sorter', description: 'An automated system to sort objects using a camera.' },
  { title: 'Predictive Analytics Model', description: 'Forecasting student enrollment with machine learning.' },
];

const cardVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-accent dark:text-accent mb-12">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          // We apply the new class directly to the motion.div
          <motion.div
            key={index}
            variants={cardVariant}
            className="card-gradient-underline bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-lg h-full"
          >
            <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">{project.title}</h3>
            <p className="text-text-light-secondary dark:text-text-dark-secondary">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');