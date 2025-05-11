import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/about', label: '甲斐谷寮とは' },
    { path: '/philosophy', label: '基本理念' },
    { path: '/life', label: '寮生活' },
    { path: '/consultation', label: '面談' },
    { path: '/application', label: '応募方法' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-serif font-bold">
            甲斐谷寮
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className={`
            md:flex md:items-center md:space-x-8
            ${isMenuOpen 
              ? 'absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4' 
              : 'hidden md:flex'
            }
          `}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-gray-600 transition-colors ${
                  location.pathname === item.path ? 'font-bold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};