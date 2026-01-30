import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker border-t border-gray-800">
      <div className="container mx-auto px-6 py-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary">
              Harshavardhan Reddy Dhoma
            </h3>
            <p className="text-sm text-black-400">
              Senior Data Engineer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SocialIcons />
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Harshavardhan Reddy. All rights reserved.
        </div>
      </div>

      {/* Back to top */}
      <Link
        to="hero"
        smooth={true}
        offset={-70}
        duration={500}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-primary/90 transition"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </Link>
    </footer>
  );
};

export default Footer;
