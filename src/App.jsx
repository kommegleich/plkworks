import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full bg-black font-['Pretendard'] selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section (Dark Posterco Layout) */}
      <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Main Content Area */}
        <div className="z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">

          <h1
            className="text-7xl sm:text-8xl md:text-[12rem] lg:text-[15rem] font-azeret font-black tracking-tighter text-white leading-none mb-6 cursor-default"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            PULIP KIM
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-base md:text-xl lg:text-2xl font-azeret font-black tracking-wide max-w-4xl opacity-80"
          >
            <p>기획, 설계, 마케팅, 운영까지 전체 흐름을 이해하고 움직이는 UX UI 디자이너입니다.</p>
            <p className="mt-2 text-gray-400">사용자 경험은 물론, 기획부터 운영까지의 흐름을 이해하며, <span className="text-white">제품의 맥락</span>을 중심에 두고 설계합니다.</p>
          </motion.div>
        </div>
      </section>



      {/* Hover Chip */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed pointer-events-none z-50 text-sm md:text-base px-4 py-1.5 rounded-lg font-extrabold tracking-wide shadow-2xl backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              left: mousePosition.x + 15,
              top: mousePosition.y + 15,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            맥락
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App;
