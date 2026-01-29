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
              Let&apos;s Get in <span className="text-primary">Touch</span>
            </h3>

            <p className="text-black-300 mb-8">
              I&apos;m open to <b>Senior Data Engineer / Azure Data Engineer</b> roles and consulting engagements.
              If you&apos;re building a <b>Microsoft Fabric</b> / <b>Databricks</b> / <b>Synapse</b> lakehouse, need help
              with <b>real-time streaming</b>, or want to improve <b>data quality, governance, and CI/CD</b>, I&apos;d love to connect.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-darker p-3 rounded-lg mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-black-300 hover:text-primary transition-colors"
                  >
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
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-black-300 hover:text-primary transition-colors"
                  >
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

            {/* Optional: Social icons under contact details */}
            <div className="mt-10">
              <SocialIcons />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Optional right-side content:
                - a short “What I can help with” card
                - or a simple contact form (if your site supports it)
            */}
            <div className="bg-background p-8 rounded-lg shadow w-full">
              <h3 className="text-xl font-semibold mb-4 text-dark">How I Can Help</h3>
              <ul className="list-disc list-inside text-text space-y-2">
                <li>Microsoft Fabric / OneLake lakehouse design (Bronze → Silver → Gold)</li>
                <li>Azure Databricks ETL + performance tuning (Delta Lake, partitioning, optimization)</li>
                <li>Real-time streaming pipelines (Event Hubs + Structured Streaming)</li>
                <li>Synapse optimization (distribution, columnstore, partition elimination)</li>
                <li>Data quality, observability, governance (Great Expectations, Purview, RBAC/masking)</li>
                <li>CI/CD + IaC (Azure DevOps, Terraform)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
