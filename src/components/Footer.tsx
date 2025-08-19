import { useState } from 'react';
import { motion } from 'motion/react';

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const footerSections = [
    {
      title: "Skills & Technologies",
      items: ["React.js", "TypeScript", "JavaScript", "Node.js", "Java", "Tailwind CSS", "Material-UI", "Full Stack Development"],
      subSections: [
        {
          title: "Frontend",
          items: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material-UI", "HTML5", "CSS3"]
        },
        {
          title: "Backend",
          items: ["Node.js", "Java", "Express.js", "REST APIs", "Database Design"]
        }
      ]
    },
    {
      title: "Projects",
      items: ["Portfolio Website", "E-commerce Platform", "Task Management App", "Weather Dashboard", "Social Media Clone"],
      subSections: [
        {
          title: "Featured Projects",
          items: ["Portfolio v2.0", "React E-commerce", "Node.js API", "Full Stack App", "UI/UX Design"]
        }
      ]
    },
    {
      title: "Experience",
      items: ["Software Developer", "Frontend Specialist", "Full Stack Engineer", "UI/UX Designer", "Problem Solver"],
      subSections: [
        {
          title: "Work History",
          items: ["Current Role", "Previous Experience", "Freelance Projects", "Open Source Contributions"]
        }
      ]
    },
    {
      title: "Connect",
      items: ["LinkedIn", "GitHub", "Email", "Resume", "Blog"],
      subSections: [
        {
          title: "Social Media",
          items: ["LinkedIn", "GitHub", "Twitter", "Instagram", "Dribbble"]
        }
      ]
    },
    {
      title: "About Me",
      items: ["Background", "Education", "Interests", "Goals", "Contact"],
      subSections: [
        {
          title: "Personal",
          items: ["About Kruthik", "Education", "Hobbies", "Future Plans", "Get in Touch"]
        }
      ]
    }
  ];

  return (
    <footer className="bg-black text-stone-300">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 px-4 md:px-20 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm">
            <span className="text-white">💻</span>
            <span className="mx-2">›</span>
            <span>Portfolio</span>
            <span className="mx-2">›</span>
            <span>Kruthik S</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 md:px-20 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: 5 Column Layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-white text-sm">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href="#" 
                        className="text-sm text-stone-400 hover:text-white transition-colors duration-200"
                        style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {section.subSections?.map((subSection, subIndex) => (
                  <div key={subIndex} className="mt-6">
                    <h4 className="font-semibold text-white text-sm mb-2">{subSection.title}</h4>
                    <ul className="space-y-2">
                      {subSection.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a 
                            href="#" 
                            className="text-sm text-stone-400 hover:text-white transition-colors duration-200"
                            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: Collapsible Sections */}
          <div className="md:hidden space-y-0">
            {footerSections.map((section, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <h3 className="font-semibold text-white text-sm">{section.title}</h3>
                  <motion.span
                    animate={{ rotate: expandedSections.includes(section.title) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-stone-400"
                  >
                    ›
                  </motion.span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedSections.includes(section.title) ? 'auto' : 0,
                    opacity: expandedSections.includes(section.title) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 space-y-4">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a 
                            href="#" 
                            className="text-sm text-stone-400 hover:text-white transition-colors duration-200 block py-1"
                            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                    
                    {section.subSections?.map((subSection, subIndex) => (
                      <div key={subIndex} className="mt-4">
                        <h4 className="font-semibold text-white text-sm mb-2">{subSection.title}</h4>
                        <ul className="space-y-2">
                          {subSection.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a 
                                href="#" 
                                className="text-sm text-stone-400 hover:text-white transition-colors duration-200 block py-1"
                                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t border-white/10 px-4 md:px-20 py-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-stone-400 mb-2">
            Let's work together:{' '}
            <a href="mailto:kruthik@example.com" className="text-blue-400 hover:underline">kruthik@example.com</a>
            {' '}or{' '}
            <a href="https://linkedin.com/in/kruthik" className="text-blue-400 hover:underline">LinkedIn</a>
            {' '}for collaborations. Available for{' '}
            <a href="#contact" className="text-blue-400 hover:underline">freelance projects</a>.
          </p>
          <p className="text-sm text-stone-400">Based in India • Open to remote opportunities</p>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="border-t border-white/10 px-4 md:px-20 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-stone-400">
              Copyright © 2025 Kruthik S. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-stone-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Sales Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Legal</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-white transition-colors duration-200">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
