import { motion } from 'motion/react';
import LazyImage from '../../components/LazyImage';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      icon: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      icon: "📋"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark theme, and interactive elements showcasing my work and skills.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      icon: "🎨"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts, interactive maps, and detailed weather analytics using external APIs.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      icon: "🌤️"
    },
    {
      title: "Social Media Clone",
      description: "A social media platform clone with user profiles, posts, comments, likes, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      icon: "📱"
    },
    {
      title: "AI Chat Application",
      description: "An AI-powered chat application with natural language processing, conversation history, and intelligent responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["React", "Python", "OpenAI API", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      icon: "🤖"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-black py-20 px-4 md:px-20">
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
            Projects
          </h2>
          <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            A collection of my recent projects showcasing my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Project Card */}
              <motion.div
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <LazyImage 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-3xl">
                    {project.icon}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-stone-100 mb-3" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-stone-400 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-xs text-stone-300"
                        style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg text-center hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
                      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex-1 px-4 py-2 border border-white/30 text-stone-100 font-semibold rounded-lg text-center hover:bg-white/10 transition-all duration-300"
                      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
