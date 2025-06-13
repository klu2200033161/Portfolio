
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
         <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white">
        <img 
          src="/Passport1.jpg" 
          alt="Profile of Guntamukkala Sailesh" 
          className="w-full h-full object-cover"
  />
</div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            GUNTAMUKKALA SAILESH
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
            Full Stack Developer | Cybersecurity Enthusiast | Network Engineer
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bachelors in Technology Computer Science student passionate about web development, cloud technologies, and cybersecurity. 
            Dedicated to creating innovative solutions and continuously learning cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {/* Download Resume */}
            <a 
              href="/resume.pdf" 
              download="Guntamukkala Sailesh.pdf"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </a>

            {/* Contact Me */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>

            {/* View Projects */}
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-blue-600 px-8 py-3 rounded-full hover:bg-blue-100 transition-colors duration-200"
            >
              View Projects
            </button>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/sailesh-guntamukkala-03a205324/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://github.com/klu2200033161" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
