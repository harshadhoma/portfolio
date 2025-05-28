import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-10 bg-darker">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          WORK EXPERIENCE
        </motion.h2>
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-1">
                <span className="bg-secondary text-white text-xs px-2 py-1 rounded">
                  {exp.duration}
                </span>
              </div>
              <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
              <p className="text-primary">{exp.company}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;