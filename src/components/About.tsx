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
              Hi, I&apos;m <span className="text-primary">Harsha Reddy</span>
            </h3>

            <p className="text-text text-justify mb-4">
              I’m a <b>Senior Data Engineer</b> with <b>9+ years</b> of experience designing and delivering
              enterprise-scale data platforms across <b>pharmaceutical</b>, <b>financial services</b>, and <b>retail</b>.
              I specialize in building modern <b>lakehouse and data platform architectures</b> that transform raw,
              fragmented source data into trusted, analytics-ready datasets.
            </p>

            <p className="text-text text-justify mb-4">
              My recent work focuses on <b>cloud-native data platforms</b>, <b>real-time streaming pipelines</b>, and
              <b> large-scale batch processing</b> using distributed compute engines and open data formats.
              I design end-to-end pipelines with strong emphasis on <b>data quality</b>,
              <b> performance optimization</b>, and <b>production reliability</b>.
            </p>

            <p className="text-text text-justify mb-4">
              I build systems with <b>governance and security baked in</b>—role-based access, data masking, lineage,
              auditability, and <b>CI/CD with Infrastructure as Code</b> so platforms are scalable,
              repeatable, and easy to operate across environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div>
                <p className="font-semibold text-dark">Location:</p>
                <p className="text-text">USA</p>
              </div>

              <div>
                <p className="font-semibold text-dark">Email:</p>
                <p className="text-text">dhreddy07@gmail.com</p>
              </div>

              <div>
                <p className="font-semibold text-dark">Status:</p>
                <p className="text-primary">Open to full-time / contract opportunities</p>
              </div>

              <div>
                <p className="font-semibold text-dark">Phone:</p>
                <p className="text-text">+1 (256) 333-2303</p>
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
                <li>Designing scalable lakehouse and analytics platforms using open architectures</li>
                <li>Building real-time and batch data pipelines for high-volume workloads</li>
                <li>Engineering excellence through CI/CD, observability, and Infrastructure as Code</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
