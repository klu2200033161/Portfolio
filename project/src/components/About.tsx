import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
              <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Background</h3>
              <p className="text-gray-600">
                Computer Science student at KL University specializing in Cybersecurity with a strong academic record (CGPA: 9.31).
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Interests</h3>
              <p className="text-gray-600">
                Web Development, Cloud Computing (AWS), Cybersecurity, and emerging technologies like Blockchain.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Goals</h3>
              <p className="text-gray-600">
                To become a skilled software engineer contributing to innovative projects while specializing in cybersecurity and cloud technologies.
              </p>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Computer Science student with a keen interest in building secure, scalable applications. 
              My journey in technology is driven by curiosity and a desire to solve real-world problems through code. 
              With hands-on experience in full-stack development and cloud technologies, I'm committed to continuous 
              learning and staying updated with the latest industry trends. My goal is to contribute to meaningful 
              projects that make a positive impact while building a strong foundation in cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;