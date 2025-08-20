
const Footer = () => {
  return (
    <footer className="bg-black text-stone-300 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        {/* Simple Footer Content */}
        <div className="text-center space-y-6">
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Kruthik111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/kruthik-s-9381b225b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:gokruthik2003@gmail.com"
              className="text-stone-400 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-sm text-stone-400">
              © {new Date().getFullYear()} Kruthik S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
