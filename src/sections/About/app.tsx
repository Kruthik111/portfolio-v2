import { motion } from 'motion/react';
import { FaReact, FaServer } from 'react-icons/fa';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { ImRocket } from 'react-icons/im';
import { MdWeb } from 'react-icons/md';
import { RiComputerFill } from 'react-icons/ri';

const About = () => {
  const techStacks = [
    {
      category: 'Frontend',
      technologies: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material-UI'],
      icon: <FaReact className="text-4xl md:text-5xl" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Modern UI/UX Development'
    },
    {
      category: 'Backend',
      technologies: ['NodeJS', 'ExpressJS', 'MongoDB','Swagger'],
      icon: <FaServer className="text-4xl md:text-5xl text-green-400" />,
      color: 'from-green-500 to-emerald-600',
      description: 'Server-side & API Development'
    },
    {
      category: 'Full Stack',
      technologies: ['ReactJS', 'NodeJS', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material-UI', 'ExpressJS','React Native'],
      icon: <RiComputerFill  className="text-4xl md:text-5xl text-purple-400" />,
      color: 'from-purple-500 to-pink-500',
      description: 'End-to-End Development'
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-black py-20 px-4 md:px-20">
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
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            A passionate Full Stack Developer with expertise in modern web technologies. 
            I love creating innovative solutions and turning complex problems into elegant, user-friendly applications.
          </p>
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Tech Stack Card */}
              <motion.div
                className="relative bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-64 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 text-blue-400 flex justify-center">
                    {stack.icon}
                  </div>
                  
                  {/* Category Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-stone-100 mb-3" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    {stack.category}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-stone-400 mb-4" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    {stack.description}
                  </p>
                  
                  {/* Technologies List */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-stone-300"
                        style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br ${stack.color} opacity-50 transition-all duration-300`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-100 mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              What I Do
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center md:text-left">
                <div className="text-3xl mb-3 text-blue-400 flex justify-center md:justify-start">
                  <MdWeb />
                </div>
                <h4 className="text-lg font-semibold text-stone-100 mb-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  Frontend Development
                </h4>
                <p className="text-stone-400 text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  Creating responsive and interactive user interfaces with modern frameworks.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl mb-3 text-green-400 flex justify-center md:justify-start">
                  <FaServer />
                </div>
                <h4 className="text-lg font-semibold text-stone-100 mb-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  Backend Development
                </h4>
                <p className="text-stone-400 text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  Building robust APIs and server-side applications with Node.js and Java.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl mb-3 text-purple-400 flex justify-center md:justify-start">
                  <HiOutlineRocketLaunch />
                </div>
                <h4 className="text-lg font-semibold text-stone-100 mb-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  Full Stack Solutions
                </h4>
                <p className="text-stone-400 text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                  End-to-end development from concept to deployment and maintenance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
