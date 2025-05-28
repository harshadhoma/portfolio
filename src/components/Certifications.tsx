import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title text-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          CERTIFICATIONS
        </motion.h2>
        
        <div className="grid gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg shadow-sm p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-dark mb-1">
                        {certification.name}
                      </h3>
                      <p className="text-text-light">{certification.issuer}</p>
                      <p className="text-sm text-text-light mt-1">{certification.date}</p>
                    </div>
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;