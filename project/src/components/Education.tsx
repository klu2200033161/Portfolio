import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Cybersecurity And Bloackchain Technology",
      institution: "KL University",
      duration: "2022 - 2026",
      grade: "CGPA: 9.3",
      status: "Currently Pursuing",
      color: "from-blue-500 to-indigo-600"
    },
    {
      degree: "Intermediate (12th Grade)",
      specialization: "Science Stream",
      institution: "Tirumala Junior College",
      duration: "2020 - 2022",
      grade: "Percentage: 94.2%",
      status: "Completed",
      color: "from-green-500 to-teal-600"
    },
    {
      degree: "Secondary School (10th Grade)",
      specialization: "General Studies",
      institution: "Sacred Heart School",
      duration: "2020",
      grade: "Percentage: 74%",
      status: "Completed",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic journey showcasing strong performance and specialization in technology and cybersecurity.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-transparent hidden md:block"></div>
                )}
                
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                        {edu.specialization && (
                          <p className="text-blue-600 font-semibold mb-2">Specialization: {edu.specialization}</p>
                        )}
                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                      </div>
                      <div className="mt-2 lg:mt-0 text-right">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.status === 'Currently Pursuing' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center text-gray-600 mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-800 font-semibold">
                        <Award size={16} className="mr-2 text-yellow-500" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;