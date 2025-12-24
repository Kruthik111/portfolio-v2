import { motion, useScroll, useTransform } from 'motion/react';
import kruthik from '../../assets/kruthik.png';
import kruthikOptimized from '../../assets/kruthik.webp';
import kruthikPlaceholder from '../../assets/kruthik-placeholder.webp';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Transform scroll position to opacity for scroll indicator
  const scrollIndicatorOpacity = useTransform(
    scrollY,
    [0, window.innerHeight * 2], // Start fading when 2x viewport height scrolled
    [1, 0]
  );

  const scrollIndicatorPointerEvents = useTransform(
    scrollY,
    [0, window.innerHeight * 2],
    ['auto', 'none']
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-20 py-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Image with custom shape */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
              {/* Custom shaped background */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="hero-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop stopColor="rgb(19 17 219)" offset="0%"></stop>
                    <stop stopColor="black" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#hero-gradient)"
                  d="M19.2,-26.7C25.9,-21.5,33.2,-17.3,37.8,-10.5C42.4,-3.8,44.3,5.6,41.9,13.8C39.4,22,32.8,28.9,25.1,31.7C17.4,34.5,8.7,33.1,0,33.1C-8.7,33.1,-17.4,34.5,-24.1,31.4C-30.8,28.3,-35.6,20.7,-36.3,13.1C-37,5.5,-33.7,-2.2,-31,-9.9C-28.3,-17.7,-26.2,-25.5,-21.2,-31.3C-16.1,-37.1,-8.1,-40.9,-0.9,-39.6C6.2,-38.4,12.4,-32,19.2,-26.7Z"
                  transform="translate(50 50)"
                  strokeWidth="0"
                  style={{ transition: "0.3s" }}
                />
              </svg>
              
              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <picture className="w-3/4 h-3/4">
                  <source srcSet={kruthikOptimized} type="image/webp" />
                  <source srcSet={kruthik} type="image/png" />
                  <img 
                    src={kruthikOptimized}
                    alt="Kruthik S" 
                    width={1024}
                    height={1536}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    sizes="(max-width: 768px) 70vw, 500px"
                    className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                    style={{ 
                      backgroundImage: `url(${kruthikPlaceholder})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </picture>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-stone-100 mb-4 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Kruthik S
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-stone-300 mb-6 font-medium tracking-wide" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-stone-400 mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Passionate about creating innovative web solutions and turning ideas into reality through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             
              <button
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 tracking-wide" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                View Projects
              </button>
          
              <button 
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 border-2 border-stone-100 text-stone-100 font-semibold rounded-lg hover:bg-stone-100 hover:text-black transition-all duration-300 tracking-wide" 
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        style={{
          opacity: scrollIndicatorOpacity,
          pointerEvents: scrollIndicatorPointerEvents
        }}
      >
        <div className="relative">
          {/* Capsule-shaped container with glassy effect */}
          <motion.button 
            onClick={() => {
              const nextSection = document.querySelector('#about');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-16 h-24 bg-black/20 backdrop-blur-md border border-white/20 rounded-full flex items-end justify-center pb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.05)] hover:bg-black/30 hover:border-white/30 transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Bouncing down arrow */}
            <motion.svg 
              className="w-6 h-6 text-stone-100" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </motion.svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
