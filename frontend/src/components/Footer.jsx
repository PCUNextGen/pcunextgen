import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: '#' },
    { icon: <FaLinkedin />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
  ];

  return (
    <footer className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="text-2xl hover:text-accent transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Nextgen Innovation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;