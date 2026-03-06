import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  useEffect(() => {
    const handleScroll = () => {
      // Hero image is roughly 100vh, we transition when scrolled past 50px for a sticky feel
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4 md:px-8 ${isProjectPage ? 'mix-blend-difference text-white' : ''}`}>
      {isProjectPage ? (
        <div className="pointer-events-auto w-full max-w-[1800px] flex justify-start">
          <Link
            to="/"
            className="group flex items-center gap-4 px-3 py-4 bg-transparent text-white text-3xl md:text-5xl font-[600] rounded-full"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
              className="mt-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-2"
            >
              <path d="M10 5 L3 12 L10 19 M3 12 L21 12" />
            </svg>

            <div className="relative overflow-hidden h-[1.1em] flex flex-col justify-start">
              <div className="flex flex-col transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:-translate-y-[50%]">
                <span className="block h-[1.1em] leading-[1.1em] uppercase tracking-tight">BACK</span>
                <span className="block h-[1.1em] leading-[1.1em] uppercase tracking-tight">BACK</span>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <nav
          className={`pointer-events-auto w-full max-w-[1800px] transition-all duration-500 rounded-full border ${scrolled
            ? 'bg-white/70 backdrop-blur-xl py-4 px-8 md:px-10 border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-[#121212]'
            : 'bg-white/40 backdrop-blur-md py-5 px-8 md:px-10 border-white/20 shadow-sm text-[#121212]'
            }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0 text-3xl md:text-4xl font-black tracking-tighter text-[#121212]" style={{ fontFamily: 'Inter, sans-serif' }}>
              PL<span>K</span>
            </Link>

            <a href="#contact" className="px-6 py-3 bg-[#121212] text-white text-sm font-bold rounded-full hover:bg-black transition-colors shrink-0">
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
