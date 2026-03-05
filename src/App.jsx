import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar'; function App() {
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
    <div className="relative w-full bg-white font-['Pretendard'] selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section (Light) */}
      <section className="relative w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
        {/* Main Interaction Area */}
        <div
          className="relative z-10 flex flex-col items-center py-8 px-4"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Centered Text */}
          <motion.div
            className="text-8xl md:text-[10rem] lg:text-[14rem] font-azeret font-black tracking-tighter cursor-default text-[#121212] mb-8 leading-none"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: isHovering ? 1.05 : 1
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.4, ease: "easeOut" }
            }}
          >
            PLK
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-gray-600 text-sm md:text-base font-normal text-center leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovering ? 1 : 0,
              y: isHovering ? 0 : 10
            }}
            transition={{
              duration: 0.8,
              delay: isHovering ? 0.2 : 0,
              ease: "easeOut"
            }}
          >
            <p>기획, 설계, 마케팅, 운영까지 전체 흐름을 이해하고 움직이는 UX UI 디자이너입니다.</p>
            <p>사용자 경험은 물론, 기획부터 운영까지의 흐름을 이해하며, <span className="font-extrabold">제품의 <span className="text-[#121212]">맥락</span></span>을 중심에 두고 설계합니다.</p>
          </motion.div>
        </div>
      </section>


      {/* Works Section (Posterco Style) */}
      <section id="works" className="w-full bg-[#121212] pt-32 pb-32 text-white">
        <div className="w-full px-4 md:px-8">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-azeret font-black tracking-tighter mb-16 px-2">WORKS.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">

            {/* Project 1 */}
            <a href="#" className="group block cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#222] overflow-hidden relative mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}project1_v3.png`}
                  alt="골프장 통합 ERP시스템"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-3xl font-bold font-azeret tracking-tight mb-2 uppercase">UX Research & Design</h3>
                <p className="text-gray-400 font-medium tracking-wide">골프장 통합 ERP시스템</p>
              </div>
            </a>

            {/* Project 2 */}
            <a href="#" className="group block cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#222] overflow-hidden relative mb-6">
                <span className="text-gray-500 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">Image Placeholder 2</span>
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-3xl font-bold font-azeret tracking-tight mb-2 uppercase">App Design</h3>
                <p className="text-gray-400 font-medium tracking-wide">E-COMMERCE APP UX IMPROVEMENT</p>
              </div>
            </a>

            {/* Project 3 */}
            <a href="#" className="group block cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#222] overflow-hidden relative mb-6">
                <span className="text-gray-500 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">Image Placeholder 3</span>
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-3xl font-bold font-azeret tracking-tight mb-2 uppercase">Design System</h3>
                <p className="text-gray-400 font-medium tracking-wide">B2B SAAS DASHBOARD PATTERN</p>
              </div>
            </a>

            {/* Project 4 */}
            <a href="#" className="group block cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#222] overflow-hidden relative mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}project1_v3.png`}
                  alt="골프장 통합 ERP시스템"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-3xl font-bold font-azeret tracking-tight mb-2 uppercase">UX Research & Design</h3>
                <p className="text-gray-400 font-medium tracking-wide">골프장 통합 ERP시스템</p>
              </div>
            </a>

            {/* Project 5 */}
            <a href="#" className="group block cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#222] overflow-hidden relative mb-6">
                <span className="text-gray-500 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">Image Placeholder 5</span>
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-3xl font-bold font-azeret tracking-tight mb-2 uppercase">App Design</h3>
                <p className="text-gray-400 font-medium tracking-wide">E-COMMERCE APP UX IMPROVEMENT</p>
              </div>
            </a>

            {/* Project 6 */}
            <a href="#" className="group block cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#222] overflow-hidden relative mb-6">
                <span className="text-gray-500 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">Image Placeholder 6</span>
              </div>
              <div className="px-2">
                <h3 className="text-xl md:text-3xl font-bold font-azeret tracking-tight mb-2 uppercase">Design System</h3>
                <p className="text-gray-400 font-medium tracking-wide">B2B SAAS DASHBOARD PATTERN</p>
              </div>
            </a>

          </div>
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
