// import React from 'react';
// import { Award, ExternalLink, Calendar } from 'lucide-react';

// const Certifications = () => {
//   const certifications = [
//     {
//       title: "AWS Certified Cloud Practitioner",
//       issuer: "Amazon Web Services(AWS)",
//       description: "Foundation-level certification covering AWS cloud concepts, services, security, and pricing.",
//       date: "2024",
//       url: "https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200033161_kluniversity_in/ET--vgfpmh1JnRc2olK023sBikxMfpx84Ff_TK4gz9fiUg?e=lJZLMF",
//       color: "from-orange-400 to-orange-600"
//     },
//     {
//       title: "Red Hat Enterprise Application Developer",
//       issuer: "RedHat",
//       description: "Professional certification in enterprise Java development and Red Hat technologies.",
//       date: "2024",
//       url: "https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200033161_kluniversity_in/ERZtQbQOE-1InF2cELodozsBVzMikl4TLkiPPiMSlnUmLg?e=xJ4WbA",
//       color: "from-red-400 to-red-600"
//     },
//     {
//       title: "Fintech Professional Certificate",
//       issuer: "Fintech Council Of India",
//       description: "Comprehensive certification covering financial technology, digital banking, and payment systems.",
//       date: "2024",
//       url: "https://kluniversityin-my.sharepoint.com/:i:/g/personal/2200033161_kluniversity_in/EXSLkIsDWcNAjsdEd3N-CewBbq4VhkqGHDlUlhX_Vk9hog?e=PeYt9c",
//       color: "from-green-400 to-green-600"
//     }
//   ];

//   const internships = [
//     {
//       title: "AWS Cloud Virtual Internship",
//       company: "Amazon Web Services",
//       description: "Hands-on experience with AWS services, cloud architecture, and best practices in cloud computing.",
//       duration: "2024",
//       type: "Virtual Internship"
//     }
//   ];

//   return (
//     <section id="certifications" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Internships</h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Professional certifications and practical experiences that validate my technical expertise and commitment to continuous learning.
//           </p>
//         </div>
        
//         {/* Certifications */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Professional Certifications</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {certifications.map((cert, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
//                   <Award className="w-8 h-8 text-white" />
//                 </div>
                
//                 <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">{cert.title}</h4>
//                 <p className="text-blue-600 font-semibold text-center mb-3">{cert.issuer}</p>
//                 <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center text-gray-500 text-sm">
//                     <Calendar size={16} className="mr-1" />
//                     {cert.date}
//                   </div>
//                   <a 
//                     href={cert.url} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-semibold"
//                   >
//                     <ExternalLink size={16} className="mr-1" />
//                     View Certificate
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Internships */}
//         <div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Internship Experience</h3>
//           <div className="max-w-2xl mx-auto">
//             {internships.map((internship, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-800 mb-1">{internship.title}</h4>
//                     <p className="text-blue-600 font-semibold">{internship.company}</p>
//                   </div>
//                   <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
//                     {internship.type}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 mb-3 leading-relaxed">{internship.description}</p>
//                 <div className="flex items-center text-gray-500 text-sm">
//                   <Calendar size={16} className="mr-1" />
//                   {internship.duration}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;

import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services(AWS)",
      description: "Foundation-level certification covering AWS cloud concepts, services, security, and pricing.",
      date: "2024",
      url: "https://www.credly.com/badges/9254d300-bdb9-4668-b724-ab42707f4fde/public_url",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Red Hat Enterprise Application Developer",
      issuer: "RedHat",
      description: "Professional certification in enterprise Java development and Red Hat technologies.",
      date: "2024",
      url: "https://www.credly.com/badges/9e45cf1e-7605-4dea-95eb-b252b265caf2/public_url",
      color: "from-red-400 to-red-600"
    },
    {
      title: "Fintech Professional Certificate",
      issuer: "Fintech Council Of India",
      description: "Comprehensive certification covering financial technology, digital banking, and payment systems.",
      date: "2024",
      url: "https://kluniversityin-my.sharepoint.com/:i:/g/personal/2200033161_kluniversity_in/EXSLkIsDWcNAjsdEd3N-CewBbq4VhkqGHDlUlhX_Vk9hog?e=PeYt9c",
      color: "from-green-400 to-green-600"
    }
  ];

  const internships = [
    {
      title: "AWS Cloud Virtual Internship",
      company: "Amazon Web Services",
      description: "Hands-on experience with AWS services, cloud architecture, and best practices in cloud computing.",
      duration: "2024",
      type: "Virtual Internship"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Internships</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional certifications and practical experiences that validate my technical expertise and commitment to continuous learning.
          </p>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">{cert.title}</h4>
                <p className="text-blue-600 font-semibold text-center mb-3">{cert.issuer}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {cert.date}
                  </div>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-semibold"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* LinkedIn Link */}
          <div className="text-center mt-8">
  <a 
    href="https://www.linkedin.com/in/sailesh-guntamukkala-03a205324/details/certifications/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold text-xl"
  >
    For more certificates, visit LinkedIn
  </a>
</div>
        </div>

        {/* Internships */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Internship Experience</h3>
          <div className="max-w-2xl mx-auto">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{internship.title}</h4>
                    <p className="text-blue-600 font-semibold">{internship.company}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {internship.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed">{internship.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {internship.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
