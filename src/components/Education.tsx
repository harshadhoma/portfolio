import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-10 bg-darker">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          EDUCATION
        </motion.h2>
        
        <div className="relative">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="timeline-item mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-1">
                <span className="bg-secondary text-white text-xs px-2 py-1 rounded">
                  {edu.duration}
                </span>
              </div>
              <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>
              <p className="text-primary">{edu.institution}</p>
              <div className="mt-2 text-black-300 space-y-1">
{Array.isArray(edu.description) ? (
  edu.description.map((item, idx) => (
    <div key={idx}>
      {item.startsWith('Relevant Coursework:') ? (
        <>
          <span className="font-semibold">Relevant Coursework:</span>
          {item.replace('Relevant Coursework:', '')}
        </>
      ) : (
        item
      )}
    </div>
  ))
) : (
  <div>{edu.description}</div>
)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
