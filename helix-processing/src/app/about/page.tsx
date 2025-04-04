'use client';

import { useEffect, useState } from 'react';

// Leadership team data
const teamMembers = [
  {
    name: "Tom Meena",
    title: "Chief Executive Officer",
    bio: "Tom brings extensive leadership experience to Helix Processing, guiding our vision to transform healthcare delivery through innovative technology solutions.",
    image: "/images/profiles/thomas-meena.jpg"
  },
  {
    name: "Sean Cheng",
    title: "Chief Technology Officer",
    bio: "With deep expertise in AI and healthcare technology, Sean leads our technical strategy and innovation to develop cutting-edge solutions for healthcare providers.",
    image: "/images/profiles/sean-cheng.jpg"
  },
  {
    name: "Mary Ann McGowan",
    title: "Chief Operating Officer",
    bio: "Mary Ann oversees our day-to-day operations, ensuring efficient processes and exceptional service delivery to our healthcare partners and clients.",
    image: "/images/profiles/mary-ann.jpg"
  }
];

// Slideshow images from the public directory
const slideshowImages = [
  "/images/slideshow-image1.jpg",
  "/images/slideshow-image2.jpg",
  "/images/slideshow-image3.jpg",
  "/images/slideshow-image4.jpg"
];

export default function AboutPage() {
  // State for slideshow and mission statements
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  
  // Array of mission statements
  const missionStatements = [
    "Transforming healthcare with AI to enable exceptional patient care.",
    "Empowering medical professionals with cutting-edge technology.",
    "Streamlining compliance and reducing administrative burdens.",
    "Creating intelligent solutions for tomorrow's healthcare challenges."
  ];
  
  useEffect(() => {
    // Cache the lengths to avoid ESLint dependency warnings
    const slideshowLength = slideshowImages.length;
    const missionsLength = missionStatements.length;
    
    // Auto-advance slideshow every 5 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % slideshowLength
      );
    }, 5000);
    
    // Change mission statement every 9 seconds (allows slower typing animation to complete)
    const missionInterval = setInterval(() => {
      setCurrentMissionIndex((prevIndex) => 
        (prevIndex + 1) % missionsLength
      );
    }, 9000);
    
    return () => {
      clearInterval(imageInterval);
      clearInterval(missionInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      {/* Image Slideshow Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Slideshow with overlay */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          {/* Semi-transparent overlay for better text readability */}
          <div className="w-full h-full bg-indigo-900/50 absolute inset-0 z-10" />
          
          {/* Current active image */}
          <div 
            className="absolute inset-0 transition-all duration-1000"
            style={{ 
              backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        
        {/* Mission Statement Content - Centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-10">
          <div className="text-center">
            <p className="text-white text-xl md:text-2xl font-semibold mb-4 text-shadow-md tracking-wider uppercase">
              Our Mission:
            </p>
            <div className="typing-animation text-white w-full" key={currentMissionIndex}>
              <p className="text-3xl md:text-5xl font-bold text-shadow-lg tracking-wide">
                {missionStatements[currentMissionIndex]}
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Color transition element */}
      <div className="h-20 bg-gradient-to-b from-indigo-900/60 to-indigo-900/100 relative z-20 -mt-20"></div>
      
      {/* Leadership Team Section */}
      <section className="py-20 animated-gradient-bg relative overflow-hidden -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-center mb-16 text-white">
            Meet Our Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-indigo-800/80 to-indigo-900/90 backdrop-blur-sm rounded-xl p-8 shadow-md 
                           hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full 
                           card-hover-effect"
              >
                <div className="w-24 h-24 rounded-full mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.title}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-indigo-200 font-medium mb-4">{member.title}</p>
                <p className="text-gray-200 mb-6 font-medium flex-grow">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}