import React, { useEffect, useRef } from 'react';
import { ChevronDown, Mail, Download } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950 -z-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide hero-animate opacity-0 transition-all duration-700 delay-100">
            Hello, I'm
          </p>
          <h1 
            ref={textRef} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white hero-animate opacity-0 transition-all duration-700 delay-300"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium hero-animate opacity-0 transition-all duration-700 delay-500">
            {personalInfo.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 hero-animate opacity-0 transition-all duration-700 delay-700">
            {personalInfo.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start hero-animate opacity-0 transition-all duration-700 delay-900">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <Mail size={18} className="mr-2" /> Contact Me
            </a>
            <a 
              href={personalInfo.resumeURL} 
              download
              className="inline-flex items-center px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <Download size={18} className="mr-2" /> Resume
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end hero-animate opacity-0 transition-all duration-700 delay-1100">
          <div className="relative">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl z-10 relative">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-20 dark:opacity-30 scale-110 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-gray-600 dark:text-gray-400 flex flex-col items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;