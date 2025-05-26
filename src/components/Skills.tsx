import React, { useEffect } from 'react';
import { skills } from '../data/resumeData';

const Skills: React.FC = () => {
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

    const elements = document.querySelectorAll('.skills-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Group skills by category
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 skills-animate opacity-0 transition-all duration-700">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto skills-animate opacity-0 transition-all duration-700 delay-200">
            A showcase of my technical abilities and professional skills, developed through education and experience.
          </p>
        </div>

        <div className="space-y-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 skills-animate opacity-0 transition-all duration-700 delay-300">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skills-animate opacity-0 transition-all duration-700"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left transition-transform duration-1000 scale-x-0 skill-bar"
                        style={{ transform: `scaleX(${skill.level / 100})` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 skills-animate opacity-0 transition-all duration-700 delay-600">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skills-animate opacity-0 transition-all duration-700"
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500">
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-current text-gray-200 dark:text-gray-700"
                          strokeWidth="2"
                        ></circle>
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-current text-blue-500 dark:text-blue-400"
                          strokeWidth="2"
                          strokeDasharray={`${(skill.level / 100) * 100}, 100`}
                          strokeDashoffset="25"
                          transform="rotate(-90 18 18)"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">{skill.level}%</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h4>
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

export default Skills;