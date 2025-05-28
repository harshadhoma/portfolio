import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contact } from '../data';
import SocialIcons from './SocialIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          CONTACT INFO
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Let's Get in <span className="text-primary">Touch</span>
            </h3>
            <p className="text-black-300 mb-8">
              I'm currently available for freelance work or full-time positions. 
              If you have a project that needs some creative work, please don't 
              hesitate to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-darker p-3 rounded-lg mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-black-300 hover:text-primary transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-darker p-3 rounded-lg mr-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-black-300 hover:text-primary transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-darker p-3 rounded-lg mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-black-300">{contact.location}</p>
                </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;