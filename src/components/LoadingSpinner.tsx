import { motion } from 'motion/react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-white/20 border-t-orange-500 rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-stone-400 text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
