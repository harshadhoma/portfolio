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

            <p className="text-text mb-4">
              I’m a <b>Senior Azure Data Engineer</b> with <b>9+ years</b> of experience designing and delivering
              enterprise-scale data platforms across <b>pharmaceutical</b>, <b>financial services</b>, and <b>retail</b>.
              My core stack includes <b>Microsoft Fabric</b>, <b>Azure Databricks</b>, and <b>Azure Synapse Analytics</b>,
              building lakehouse architectures that turn messy source data into trusted, analytics-ready datasets.
            </p>

            <p className="text-text mb-4">
              Recently, I’ve been building <b>Fabric/OneLake medallion architectures</b>, <b>real-time streaming pipelines</b>{' '}
              with <b>Azure Event Hubs + Databricks Structured Streaming</b>, and <b>Delta Lake</b> pipelines with automated
              data quality checks (Great Expectations + custom PySpark). I focus on performance tuning (partitioning,
              distribution, indexing), strong governance (RBAC, masking, lineage), and CI/CD + IaC (Azure DevOps, Terraform)
              so data products are reliable in production.
            </p>

            <p className="text-text mb-4">
              I enjoy solving “hard mode” problems—high-volume streaming, compliance-heavy datasets, and pipelines that must
              be fast, auditable, and cost-efficient. My goal is simple: ship data platforms that teams actually trust and use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div>
                <p className="font-semibold text-dark">Location:</p>
                <p className="text-text">Charlotte, North Carolina, USA</p>
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
                <li>Building trusted lakehouse platforms on Microsoft Fabric, Databricks, and Synapse</li>
                <li>Real-time streaming pipelines (Event Hubs + Structured Streaming) with low-latency insights</li>
                <li>Data quality & reliability: automated validation, observability, and SLAs</li>
                <li>Governance & security: RBAC, masking, lineage, and compliance-first engineering</li>
                <li>Engineering excellence: Terraform IaC + Azure DevOps CI/CD for repeatable deployments</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
