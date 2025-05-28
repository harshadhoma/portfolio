import { NavLink, SocialLink, SkillCategory, Experience, Education, Project, BlogPost, Contact, Publication, Certification } from '../types';

export const navLinks: NavLink[] = [
  { id: 'about', title: 'ABOUT' },
  { id: 'experience', title: 'EXPERIENCE' },
  { id: 'skills', title: 'SKILLS' },
  { id: 'education', title: 'EDUCATION' },
  { id: 'projects', title: 'PROJECTS' },
  { id: 'publications', title: 'PUBLICATIONS' },
  { id: 'certifications', title: 'CERTIFICATIONS' },
];

export const socialLinks: SocialLink[] = [
  { id: 'github', icon: 'Github', url: 'https://github.com/harshadhoma' },
  { id: 'linkedin', icon: 'Linkedin', url: 'https://www.linkedin.com/in/harshadhoma/' },
  { id: 'mail', icon: 'Mail', url: 'mailto:dhreddy2001@gmail.com' },
  // { id: 'twitter', icon: 'Twitter', url: 'https://twitter.com/yourusername' },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'SQL', 'HTML5/CSS3']
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins']
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Neo4J', 'MongoDB', 'DynamoDB', 'FAISS', 'Pinecone']
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['Flask', 'FastAPI', 'LangChain', 'LangGraph', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-Learn']
  },
  {
    name: 'Version Control & Tools',
    skills: ['Git', 'GitHub', 'Bitbucket', 'VS Code', 'Linux']
  },
  {
    name: 'Automation & Testing',
    skills: ['Selenium', 'Postman']
  },
  {
    name: 'Gen AI',
    skills: ['AWS Bedrock', 'LangChain', 'LLMs (GPT-4, Llama 3)', 'Hugging Face Transformers', 'Embeddings', 'Conversational AI']
  }
];

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'JunoClinic',
    duration: 'Jul 2022 – Jul 2023',
    description: [
      'Engineered and deployed a secure telehealth video platform that elevated user engagement by 40% and improved remote therapy accessibility. Designed a robust B2B assessment system using Django, PostgreSQL, and AWS Lambda with OWASP-compliant security and data integrity validation. Strengthened system security through automated vulnerability scanning, penetration testing, and threat modeling, reducing security risks by 35%.']},
  {
    title: 'Software Engineering Intern',
    company: 'JunoClinic',
    duration: 'Jan 2022 – Mar 2022',
    description: [
      'Developed a responsive single-page application using JavaScript, HTML, CSS, and REST APIs, reducing customer bounce rate by 15% through optimized asset loading and asynchronous data retrieval. Enhanced backend security in Django by implementing SQL injection prevention, email spoofing mitigation, API encryption, and JWT authentication, significantly strengthening data protection.'
    ]
  },
  {
    title: 'Software Intern',
    company: 'Medfin',
    duration: 'Oct 2020 – Jan 2021',
    description: [
      'Constructed and optimized Python-based data analytics scripts with Pandas, NumPy, and Matplotlib, boosting predictive model accuracy by 25% and enabling data-driven decision-making for healthcare operations. Improved digital marketing performance by implementing A/B testing and keyword optimization in Google AdWords and Analytics, resulting in an 18% increase in conversion rates.'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Indiana University Bloomington',
    duration: '2023 – 2025',
    description: 'Specialized in AI, Cloud Computing, and Secure Systems. Relevant coursework: Distributed Systems, Machine Learning, Cloud Security.'
  },
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'MLR Institute of Technology',
    duration: '2018 – 2022',
    description: 'Graduated with distinction. Led multiple technical projects and participated in national-level hackathons.'
  },
];

// Blogs, Publications, Certifications: unchanged, as requested
export const publications: Publication[] = [
  {
    title: 'Multifactor Authentication Key Management System based Security Model Using Effective Handover Tunnel with IPV6',
    publisher: 'International Conference on Contemporary Computing and Informatics',
    date: 'September 2022',
    url: 'https://ijcnis.org/index.php/ijcnis/article/view/5521'
  },
  {
    title: 'A Review on Application of Deep Learning in Natural Language Processing',
    publisher: 'Institute of Electrical and Electronics Engineers',
    date: 'March 2023',
    url: 'https://ieeexplore.ieee.org/document/10073309'
  },
  {
    title: 'An Analysis of the Supervised Learning Approach for Online Fraud Detection',
    publisher: 'Computational Intelligence and Machine Learning',
    date: 'October 2022',
    url: 'https://www.cimachinelearning.com/analysis-supervised-learning-approach.php'
  },
  {
    title: 'A Scalable Platform to Collect, Store, Visualize and Analyze Big Data in Real- Time',
    publisher: 'Institute of Electrical and Electronics Engineers',
    date: 'May 2023',
    url: 'https://ieeexplore.ieee.org/document/10118183'
  },
  {
    title: 'A Review on Comparative study of 4G, 5G and 6G Networks',
    publisher: 'Institute of Electrical and Electronics Engineers',
    date: 'March 2023',
    url: 'https://ieeexplore.ieee.org/document/10073385'
  },
  {
    title: 'Detecting Covid-19 from Chest X-ray using Transfer Learning',
    publisher: 'International Journal of Engineering Research & Technology',
    date: 'August 2022',
    url: 'https://www.ijert.org/detecting-covid-19-from-chest-x-ray-using-transfer-learning'
  }
];

export const certifications: Certification[] = [
  {
    name: 'CompTIA Security+ ce Certification',
    issuer: 'CompTIA',
    date: 'February 2025',
    url: 'https://www.credly.com/badges/c3f63138-9a3e-4f25-b483-5db0453c2d65/public_url'
  },
  {
    name: 'Google IT Support Certificate',
    issuer: 'Google',
    date: 'October 2022',
    url: 'https://www.credly.com/badges/a6ee242b-d3bf-484e-9255-18366b90ccc3/public_url'
  }
];

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Event Venue Management System',
    description:
      'Built a logistics platform for event coordination, reducing double-bookings and improving booking visibility. Added dual authentication for enhanced security.',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/harshadhoma/Event_Venue_Management_System',
    demo: '',
  },
  {
    id: 'project2',
    title: 'Database Development from Flat Files',
    description:
      "Scraped and structured cybersecurity data into MySQL and Neo4j databases, enabling efficient threat actor analysis and security insights.",
    image: 'https://www.scnsoft.com/blog-pictures/information-security/7-best-practices-for-database-security.png',
    tags: ['MySQL', 'Neo4j', 'Python'],
    github: '',
    demo: '',
  },
  {
    id: 'project3',
    title: 'AI-Powered Medical Chatbot',
    description:
      'Developed an AI medical chatbot using LangChain, AWS, and OpenAI, reducing response time by 30% and automating 90% of user inquiries.',
    image: 'https://cdn.pixabay.com/photo/2023/03/31/07/26/artificial-intelligence-7889375_1280.jpg',
    tags: ['Python', 'AWS', 'Streamlit', 'LangChain', 'OpenAI'],
    github: 'https://github.com/harshadhoma/chatbot',
    demo: '',
  },
  {
    id: 'project4',
    title: 'Secure Online Banking Application',
    description:
      'Built a secure online banking platform with real-time transactions, RBAC, AES encryption, and malware defense, remediating 15+ vulnerabilities.',
    image: 'https://cdn.pixabay.com/photo/2018/07/15/18/05/bank-3540186_1280.jpg',
    tags: ['AngularJS', 'Java Spring Boot', 'MySQL'],
    github: 'https://github.com/harshadhoma/BankApp',
    demo: '',
  },
  {
    id: 'project5',
    title: 'Gearbox Failure Prediction in Wind Turbines',
    description:
      'Created a machine learning model for wind turbine gearbox failure, achieving up to 95% accuracy using multiple algorithms.',
    image: 'https://konic-gearbox.com/wp-content/uploads/2023/04/6MW-wind-turbine-gearbox-e1683276920322.jpg',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/harsha/gearbox-failure-prediction',
    demo: '',
  },
  {
    id: 'project6',
    title: 'Monroe County Fairgrounds Website Redesign',
    description:
      'Redesigned the Monroe County Fairgrounds website with Figma wireframes and React.js frontend. See the live site below.',
    image: 'monroe-redesign.png',
    tags: ['React.js', 'Figma'],
    github: 'https://github.com/harsha/monroe-fairgrounds-redesign',
    demo: 'https://monroe-redesign.vercel.app/',
  },
];


export const blogs: BlogPost[] = [
  {
    id: 'blog1',
    title: 'Mastering React Hooks',
    excerpt: 'A comprehensive guide to using React Hooks effectively in your applications.',
    date: 'March 15, 2023',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://blog.com/mastering-react-hooks',
  },
  {
    id: 'blog2',
    title: 'Building Scalable APIs with NestJS',
    excerpt: 'Learn how to create robust and scalable backend APIs using NestJS framework.',
    date: 'January 22, 2023',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://blog.com/scalable-apis-nestjs',
  },
  {
    id: 'blog3',
    title: 'Optimizing Frontend Performance',
    excerpt: 'Tips and techniques to improve your web application\'s performance and user experience.',
    date: 'December 10, 2022',
    image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://blog.com/frontend-performance',
  },
];

export const contact: Contact = {
  email: 'dhreddy2001@gmail.com',
  phone: '+1 (930) 333-4035',
  location: 'Bloomington, IN, USA',
};

export const codeSnippet = `const developer = {
  name: 'Harshavardhan Reddy Dhoma',
  skills: [
    'Python', 'Java', 'AWS', 'Docker', 'LangChain', 'SQL', 'React', 'Flask'
  ],
  hardworker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardworker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;
