import React from 'react';
import { motion } from 'motion/react';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      duration: "2023 - Present",
      description: "Led development of enterprise web applications using React, Node.js, and TypeScript. Implemented CI/CD pipelines and mentored junior developers.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
      icon: "💼"
    },
    {
      company: "InnovateLabs",
      position: "Full Stack Developer",
      duration: "2022 - 2023",
      description: "Developed scalable web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Git"],
      icon: "🚀"
    },
    {
      company: "StartupHub",
      position: "Frontend Developer",
      duration: "2021 - 2022",
      description: "Built responsive user interfaces and implemented modern design patterns. Optimized application performance and user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux", "Jest"],
      icon: "🎨"
    },
    {
      company: "CodeCraft Studios",
      position: "Junior Developer",
      duration: "2020 - 2021",
      description: "Contributed to various web projects and learned modern development practices. Worked on bug fixes and feature implementations.",
      technologies: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
      icon: "🔧"
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
                      {experience.icon}
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
