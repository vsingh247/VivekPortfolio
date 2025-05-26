import React, { useEffect } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/resumeData';

const Education: React.FC = () => {
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

    const elements = document.querySelectorAll('.edu-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 edu-animate opacity-0 transition-all duration-700">
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto edu-animate opacity-0 transition-all duration-700 delay-200">
            My academic background and professional certifications that have equipped me with the necessary knowledge and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center edu-animate opacity-0 transition-all duration-700 delay-300">
              <GraduationCap className="mr-2" /> Education
            </h3>
            
            <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400 space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative edu-animate opacity-0 transition-all duration-700"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center shadow-md">
                    <span className="text-xs font-semibold">{index + 1}</span>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ml-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center edu-animate opacity-0 transition-all duration-700 delay-300">
              <Award className="mr-2" /> Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="edu-animate opacity-0 transition-all duration-700"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] duration-300 border border-gray-200 dark:border-gray-700 group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-medium">{cert.issuer}</span> <span className="text-gray-500 dark:text-gray-400">• {cert.date}</span>
                        </p>
                      </div>
                      
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;