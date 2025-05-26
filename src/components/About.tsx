import React, { useEffect } from 'react';
import { personalInfo } from '../data/resumeData';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
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

    const elements = document.querySelectorAll('.about-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 about-animate opacity-0 transition-all duration-700">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Personal info */}
          <div className="about-animate opacity-0 transition-all duration-700 delay-300">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Full Name</h4>
                    <p className="text-gray-900 dark:text-white font-medium">{personalInfo.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                    <p className="text-gray-900 dark:text-white font-medium">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                    <p className="text-gray-900 dark:text-white font-medium">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Phone</h4>
                    <p className="text-gray-900 dark:text-white font-medium">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary */}
          <div className="about-animate opacity-0 transition-all duration-700 delay-500">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">About Me</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a motivated Computer Science student with a strong passion for technology and software development. 
              With expertise in Java, HTML, CSS, and other technologies, I'm equipped to tackle challenging projects 
              and deliver high-quality solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies in the field. 
              My goal is to contribute to innovative projects that make a positive impact while growing professionally.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Frontend Development</span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Java Programming</span>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm">Problem Solving</span>
              <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm">Time Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;