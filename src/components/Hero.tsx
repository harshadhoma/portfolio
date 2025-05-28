import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SocialIcons from './SocialIcons';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-10 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-dark">
              Hello,
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              I'm <span className="text-secondary">Harshavardhan</span>
            </h1>
            <p className="text-lg md:text-xl text-black-700 dark:text-black-300 mb-8 max-w-xl">
              Recent Master's graduate in Computer Science from Indiana University Bloomington, with 1 year of professional experience as a Software Engineer. Passionate about building secure, scalable, and impactful technology solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <SocialIcons />
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 inline-flex items-center"
              >
                CONTACT ME
              </Link>
              <a
                href="https://drive.google.com/file/d/1M--V61Eclq_5ildWHjWCaeR9Jvy1ybL3/view?usp=sharing"
                className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={20} />
                VIEW RESUME
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="code-window w-full bg-dark rounded-lg overflow-x-auto max-w-full">
  <div className="code-window-dots flex space-x-1 px-3 py-2">
    <div className="dot dot-red bg-red-500 rounded-full w-3 h-3"></div>
    <div className="dot dot-yellow bg-yellow-400 rounded-full w-3 h-3"></div>
    <div className="dot dot-green bg-green-500 rounded-full w-3 h-3"></div>
  </div>
  <div className="code-content px-4 py-2">
    <pre className="text-xs md:text-sm text-white whitespace-pre-wrap">
      <code>
        {`const developer = {
  name: 'Harshavardhan Reddy Dhoma',
  skills: [
    'Python', 'Java', 'AWS', 'Docker', 'LangChain', 'SQL'
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
};`}
      </code>
    </pre>
  </div>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
