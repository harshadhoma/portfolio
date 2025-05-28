import React from 'react';
import { Github, Linkedin, Facebook, Mail, Twitter } from 'lucide-react';
import { socialLinks } from '../data';

const iconComponents: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Facebook: <Facebook size={20} />,
  Mail: <Mail size={20} />,
  Twitter: <Twitter size={20} />,
};

const SocialIcons: React.FC = () => {
  return (
    <>
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={social.id}
        >
          {iconComponents[social.icon]}
        </a>
      ))}
    </>
  );
};

export default SocialIcons;