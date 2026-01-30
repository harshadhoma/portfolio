import {
  NavLink,
  SocialLink,
  SkillCategory,
  Experience,
  Education,
  Project,
  BlogPost,
  Contact,
  Certification
} from '../types';

/* =======================
   NAVIGATION
======================= */
export const navLinks: NavLink[] = [
  { id: 'about', title: 'ABOUT' },
  { id: 'experience', title: 'EXPERIENCE' },
  { id: 'skills', title: 'SKILLS' },
  { id: 'education', title: 'EDUCATION' },
  { id: 'projects', title: 'PROJECTS' },
  { id: 'certifications', title: 'CERTIFICATIONS' },
];

/* =======================
   SOCIAL LINKS
======================= */
export const socialLinks: SocialLink[] = [
  { id: 'linkedin', icon: 'Linkedin', url: 'https://www.linkedin.com/in/reddyharsha07/' },
  { id: 'mail', icon: 'Mail', url: 'mailto:dhreddy07@gmail.com' },
  // { id: 'blog', icon: 'Link', url: 'https://topicsunfolded.blog/' }
];

/* =======================
   SKILLS (Resume-aligned)
======================= */
export const skillCategories: SkillCategory[] = [
  {
    name: 'Cloud & Data Platforms',
    skills: [
      'Microsoft Fabric',
      'Azure Databricks',
      'Azure Synapse Analytics',
      'Azure Data Lake Storage Gen2',
      'Azure Data Factory',
      'Azure Event Hubs',
      'Microsoft Purview',
      'Unity Catalog'
    ]
  },
  {
    name: 'Big Data & Processing',
    skills: [
      'Apache Spark (PySpark)',
      'Delta Lake',
      'Structured Streaming',
      'Batch Processing',
      'Medallion Architecture',
      'Incremental Loads',
      'CDC'
    ]
  },
  {
    name: 'Programming & Databases',
    skills: [
      'Python',
      'SQL (T-SQL, PL/SQL)',
      'SQL Server',
      'Oracle',
      'Snowflake'
    ]
  },
  {
    name: 'DevOps & Governance',
    skills: [
      'Terraform',
      'Azure DevOps',
      'CI/CD Pipelines',
      'Great Expectations',
      'RBAC',
      'HIPAA',
      'FDA 21 CFR Part 11'
    ]
  }
];

/* =======================
   EXPERIENCE (Resume ONLY)
======================= */
export const experiences: Experience[] = [
  {
    title: 'Senior Data Platform Engineer',
    company: 'Eli Lilly and Company',
    duration: 'Sep 2024 – Present',
    description: [
      'Architected enterprise lakehouse on Microsoft Fabric using medallion architecture, enabling regulated analytics for clinical and research teams.',
      'Built real-time streaming pipelines using Azure Event Hubs and Databricks Structured Streaming processing 1.5M+ events daily.',
      'Implemented Delta Lake data quality framework aligned with FDA 21 CFR Part 11, reducing data quality escalations by 60%+.',
      'Established governance using Unity Catalog and Microsoft Purview for HIPAA-compliant analytics.'
    ]
  },
  {
    title: 'Senior Data Engineer',
    company: 'Capital One',
    duration: 'Feb 2021 – Aug 2024',
    description: [
      'Designed customer analytics platform on Azure Synapse consolidating multiple financial systems into a unified Customer 360.',
      'Built low-latency streaming pipelines for credit card transactions using Event Hubs and Databricks.',
      'Implemented CDC and incremental loading pipelines reducing daily processing from hours to minutes.',
      'Established CI/CD pipelines with Azure DevOps and Terraform.'
    ]
  },
  {
    title: 'Azure Data Engineer',
    company: 'Wegmans Food Markets',
    duration: 'Jun 2019 – Jan 2021',
    description: [
      'Migrated on-prem SQL Server warehouse to Azure Data Lake Gen2 using partitioned Parquet.',
      'Developed Azure Data Factory pipelines for POS ingestion across 100+ stores.',
      'Built Databricks datasets supporting demand forecasting and supply chain optimization.'
    ]
  },
  {
    title: 'Data Engineer / ETL Developer',
    company: 'Infosys Limited',
    duration: 'Jun 2016 – May 2019',
    description: [
      'Built Informatica and PySpark pipelines processing large-scale financial datasets.',
      'Implemented SCD, CDC, and reconciliation frameworks for banking clients.',
      'Supported AWS-based big data platforms using Glue, EMR, and Redshift.'
    ]
  }
];

/* =======================
   EDUCATION
======================= */
export const education: Education[] = [
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'Jawaharlal Nehru Technological University, Hyderabad',
    duration: '2012 – 2016',
    description: [
      'Core foundation in databases, data structures, operating systems, and software engineering.'
    ]
  }
];

/* =======================
   CERTIFICATIONS
======================= */
export const certifications: Certification[] = [
  {
    name: 'CompTIA Security+ ce',
    issuer: 'CompTIA',
    date: 'February 2025',
    url: 'https://www.credly.com/badges/c3f63138-9a3e-4f25-b483-5db0453c2d65/public_url'
  }
];

/* =======================
   PROJECTS (Resume-style)
======================= */
export const projects: Project[] = [
  {
    id: 'fabric-lakehouse',
    title: 'Enterprise Lakehouse Platform (Azure)',
    description:
      'Designed and implemented a production-grade lakehouse using Microsoft Fabric, Databricks, and Delta Lake supporting regulated analytics.',
    image: 'fabric-lakehouse.png',
    tags: ['Microsoft Fabric', 'Databricks', 'Delta Lake'],
    github: '',
    demo: '',
  },
  {
    id: 'realtime-streaming',
    title: 'Real-Time Streaming Analytics',
    description:
      'Built real-time ingestion pipelines using Azure Event Hubs and Databricks Structured Streaming for low-latency analytics.',
    image: 'streaming.png',
    tags: ['Event Hubs', 'Databricks', 'Streaming'],
    github: '',
    demo: '',
  }
];

/* =======================
   BLOGS
======================= */
export const blogs: BlogPost[] = [
  {
    id: 'topics-unfolded',
    title: 'Topics Unfolded',
    excerpt: 'Personal blog covering technology, data engineering, and real-world system design.',
    date: 'Present',
    image: '',
    url: 'http://topicsunfolded.blog/'
  }
];

/* =======================
   CONTACT
======================= */
export const contact: Contact = {
  email: 'dhreddy07@gmail.com',
  phone: '+1 256-333-2303',
  location: 'Charlotte, North Carolina, USA',
};

/* =======================
   HERO CODE SNIPPET
======================= */
export const codeSnippet = `const dataEngineer = {
  name: 'Harsha Reddy',
  role: 'Senior Azure Data Engineer',
  experience: '9+ years',
  stack: ['Azure Databricks', 'Microsoft Fabric', 'Synapse'],
  focus: ['Streaming', 'Lakehouse', 'Governance', 'Data Quality'],
  hireable: () => true
};`;
