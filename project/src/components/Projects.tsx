import React from 'react';
import { ExternalLink, Github, Users, User } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Weather API Application",
      description: "Real-time weather application providing current conditions, forecasts, and weather alerts using external APIs.",
      techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
      githubUrl: "https://github.com/klu2200033161/WeatherApp.git",
      type: "Solo Project",
      category: "API Integration"
    },
    {
      title: "Indian Culture Information System",
      description: "A comprehensive web application showcasing India's rich cultural heritage with detailed information about traditions, festivals, and customs.",
      techStack: ["Django", "HTML", "Python", "CSS"],
      githubUrl: "https://github.com/klu2200033161/IndianCulture.git",
      type: "Solo Project",
      category: "Web Development"
    },
    {
      title: "Learning Management System",
      description: "Full-stack LMS platform with features for course management, student enrollment, and progress tracking with modern UI/UX.",
      techStack: ["ReactJS", "Spring Boot", "REST API","Secure Authentication"],
      githubUrl: "https://github.com/jithendrakumar98/LMS_USING-TS",
      backendUrl: "https://github.com/jithendrakumar98/pdf.git",
      type: "Team Project",
      category: "Full Stack"  
    },
    
    {
      title: "Real-time Security Monitoring & Threat Detection",
      description: "Advanced security system for real-time monitoring and threat detection with cloud integration and alert mechanisms.",
      techStack: ["ReactJS", "Spring Boot", "VirusTotal APIs"],
      githubUrl: "https://github.com/SatyavarapuDhanush/RTSMATD-FRONTEND.git",
      backendUrl: "https://github.com/SatyavarapuDhanush/RTSMATD-BACKEND.git",
      type: "Team Project",
      category: "Cybersecurity Using API"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, API integration, and problem-solving skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-600 text-sm">
                    {project.type === "Solo Project" ? <User size={16} /> : <Users size={16} />}
                    <span className="ml-1">{project.type}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <Github size={18} className="mr-1" />
                  {project.backendUrl ? "Frontend" : "View Code"}
                </a>
                {project.backendUrl && (
                  <a 
                    href={project.backendUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <Github size={18} className="mr-1" />
                    Backend
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;