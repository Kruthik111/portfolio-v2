import { motion } from 'motion/react';
import storeking from '../../assets/storekinglogo.png';
import hactoberfest from '../../assets/hacktoberfestlogo.jpeg';
import learningpaths from '../../assets/Learningpaths.jpeg';
import amc2 from '../../assets/amc2logo.jpeg';

const Experience = () => {
  const experiences = [
    {
      company: "Storeking",
      position: "Software Engineer",
      duration: "2025 - Present",
      description: "Working on upgrading the backend system to the latest stable versions to improve maintainability and performance.Developed and integrated a Geo-fencing feature that allows retailers to define their serviceable boundaries, enabling users within those boundaries to discover nearby shops.Implemented an Auto-Allocation of Stock functionality, allowing retailers to allocate stock with a single click, significantly reducing manual effort",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
      icon: storeking,
      link: "https://storeking.com"
    },
    {
      company: "HactoberFest",
      position: "Contributor",
      duration: "2024",
      description: "Collaborated with 6 open-source projects. 6 out of 8 contributions got accepted and merged",
      technologies: ["JavaScript", "ReactJS","Git", "Tailwind CSS"],
      icon: hactoberfest,
      link: "https://x.com/hacktoberfest"
    },
    {
      company: "LearningpathsIO",
      position: "Web Developer",
      duration: "2024",
      description: "Developed and maintained web applications using HTML, CSS, JavaScript, React, and Tailwind CSS",
      technologies: ["React", "Javascript", "Tailwind CSS"],
      icon: learningpaths,
      link: "https://www.linkedin.com/company/learningpaths/posts/?feedView=all"
    },
    {
      company: "AMC² Coding Club",
      position: "Member",
      duration: "2024",
      description: "AMC2 or Amrita coding club is an coding club in Amrita vishwavidyapeetam Mysore.Which organizes events , competition, webinars and many other related to coding and computer science..",
      technologies: ["React", "Javascript", "Teamwork","Problem Solving"],
      icon: amc2,
      link: "https://www.linkedin.com/company/amc%C2%B2-coding-club/posts/?feedView=all"
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-black py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-stone-100 mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            Experience
          </h2>
          <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            My professional journey in software development, from junior roles to senior positions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500"></div>
          
          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-8 w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-4 border-black z-10"></div>
                
                {/* Experience Card */}
                <motion.div
                  className="ml-12 md:ml-16 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon */}
                    <div className="text-4xl md:text-5xl flex-shrink-0">
                      <img src={experience.icon} alt={experience.company} className="w-16 h-16" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-stone-100" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                          {experience.position}
                        </h3>
                        <span className="text-orange-400 font-semibold" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                          @ {experience.company}
                        </span>
                      </div>
                      
                      {/* Duration */}
                      <p className="text-stone-400 mb-4 font-medium" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                        {experience.duration}
                      </p>
                      
                      {/* Description */}
                      <p className="text-stone-300 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                        {experience.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full text-sm text-orange-300"
                            style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
