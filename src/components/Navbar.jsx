import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero image is roughly 100vh, we transition when scrolled past 50px for a sticky feel
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Project', href: '#projects' },
    { name: 'Profile', href: '#expertise' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-white/90 backdrop-blur-md py-4 border-gray-200 shadow-sm'
        : 'bg-transparent py-6 border-transparent'
        }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 items-center max-w-7xl mx-auto px-6">
        <a href="#" className={`justify-self-start text-3xl md:text-5xl font-helvetica font-black tracking-tighter transition-colors duration-300 ${scrolled ? 'text-black' : 'text-[#121212]'}`}>
          PL<span className="text-gray-400">K</span>
        </a>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex justify-self-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-bold tracking-tighter transition-colors duration-300 hover:text-black ${scrolled ? 'text-gray-600' : 'text-gray-500'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle - Right Aligned */}
        <button
          className={`justify-self-end md:hidden transition-colors duration-300 ${scrolled ? 'text-black' : 'text-[#121212]'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center py-6 gap-6 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-black hover:text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
