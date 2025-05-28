import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 bg-white scroll-mt-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ABOUT ME
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-dark">
              Hi, I'm <span className="text-primary">Harshavardhan Reddy Dhoma</span>
            </h3>
            <p className="text-text mb-4">
              I am a passionate software engineer with a Master’s in Computer Science from Indiana University Bloomington and one year of professional experience at JunoClinic. I specialize in building secure, scalable, and impactful technology solutions—ranging from telehealth video platforms to AI-powered medical chatbots and robust backend systems.
            </p>
            <p className="text-text mb-4">
              At JunoClinic, I engineered and deployed a secure telehealth video platform that enhanced remote therapy accessibility and increased user engagement by 40%. I also designed a robust B2B assessment system with advanced security protocols and led initiatives to fortify system security, mitigating risks by 35%.
            </p>
            <p className="text-text mb-4">
              I thrive at the intersection of cloud, security, and AI, and I’m always eager to learn and apply the latest technologies. My goal is to contribute to innovative teams and deliver solutions that make a real-world impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div>
                <p className="font-semibold text-dark">Location:</p>
                <p className="text-text">Bloomington, IN, USA</p>
              </div>
              <div>
                <p className="font-semibold text-dark">Email:</p>
                <p className="text-text">dhreddy2001@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-dark">Status:</p>
                <p className="text-primary">Open to full-time opportunities</p>
              </div>
              <div>
                <p className="font-semibold text-dark">Phone:</p>
                <p className="text-text">+1 (930) 333-4035</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-background p-8 rounded-lg shadow w-full">
              <h3 className="text-xl font-semibold mb-4 text-dark">What Drives Me</h3>
              <ul className="list-disc list-inside text-text space-y-2">
                <li>Delivering secure, user-centric digital solutions for real-world problems</li>
                <li>Continuous learning and applying cutting-edge technologies in cloud and AI</li>
                <li>Building resilient systems with a focus on security, performance, and automation</li>
                <li>Collaborating in diverse teams to create meaningful impact</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
