import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mt-1">{personalInfo.title}</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center">
              Made with <Heart size={12} className="mx-1 text-red-500" /> by {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;