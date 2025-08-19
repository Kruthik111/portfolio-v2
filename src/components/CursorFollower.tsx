import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('CursorFollower mounted');
    
    const handleMouseMove = (e: MouseEvent) => {
      // Update position immediately for smooth following
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener to the entire document
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden md:block fixed pointer-events-none z-[9999]"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        transition: 'left 0.1s ease-out, top 0.1s ease-out'
      }}
    >
      <div className="w-28 h-28 rounded-full bg-transparent  border border-white/30 shadow-lg"></div>
    </div>
  );
};

export default CursorFollower;
