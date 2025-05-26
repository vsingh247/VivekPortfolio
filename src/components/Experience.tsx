import React, { useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/resumeData';

const Experience: React.FC = () => {
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

    const elements = document.querySelectorAll('.exp-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 exp-animate opacity-0 transition-all duration-700">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto exp-animate opacity-0 transition-all duration-700 delay-200">
            My professional journey and work experiences that have shaped my skills and knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.length > 0 ? (
            <div className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

              {experience.map((job, index) => (
                <div 
                  key={index} 
                  className={`relative md:flex items-center mb-12 last:mb-0 exp-animate opacity-0 transition-all duration-700`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10">
                      <Briefcase size={20} />
                    </div>
                  </div>

                  {/* Timeline dot for mobile */}
                  <div className="md:hidden absolute left-0 top-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md z-10">
                      <Briefcase size={16} />
                    </div>
                  </div>

                  {/* Date - left side on desktop, above content on mobile */}
                  <div className={`md:w-1/2 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-last md:pl-12 md:pr-0'}`}>
                    <div className="mb-2 md:mb-0">
                      <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Content - right side on desktop, below date on mobile */}
                  <div className={`pt-2 md:pt-0 pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{job.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-2">{job.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{job.location}</p>
                      {job.description && (
                        <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 exp-animate opacity-0 transition-all duration-700 delay-300">
              <p className="text-gray-600 dark:text-gray-400 italic">
                Building professional experience. Currently focusing on educational projects and skill development.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;