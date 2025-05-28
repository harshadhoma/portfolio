import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary mb-2">Harshavardhan Reddy Dhoma</h3>
            <p className="text-black-400">Software Engineer</p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <SocialIcons />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Harshavardhan Reddy. All rights reserved.
          </p>
        </div>
      </div>
      
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="back-to-top"
      >
        <ArrowUp size={20} />
      </Link>
    </footer>
  );
};

export default Footer;