import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Plus, Minus } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-serif font-bold text-blue-900 tracking-[0.2em]">
              甲斐谷寮
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex h-16 items-center gap-1 hover:text-blue-600">
                  甲斐谷寮について
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full mt-0 left-0 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/about/message" className="block px-4 py-2 hover:bg-blue-50">寮長メッセージ</Link>
                  <Link to="/about/life" className="block px-4 py-2 hover:bg-blue-50">生活</Link>
                  <Link to="/about/support" className="block px-4 py-2 hover:bg-blue-50">サポート</Link>
                </div>
              </div>
              <Link to="/results" className="hover:text-blue-600">実績</Link>
              <Link to="/application" className="hover:text-blue-600">応募</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blue-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-64' : 'max-h-0'
            }`}
          >
            <div className="py-4 space-y-4">
              <div>
                <button 
                  className="flex items-center justify-between w-full hover:text-blue-600"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  <span>甲斐谷寮について</span>
                  {isAboutOpen ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isAboutOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <Link to="/about/message" className="block py-2 pl-4 hover:text-blue-600">寮長メッセージ</Link>
                  <Link to="/about/life" className="block py-2 pl-4 hover:text-blue-600">生活</Link>
                  <Link to="/about/support" className="block py-2 pl-4 hover:text-blue-600">サポート</Link>
                </div>
              </div>
              <Link to="/results" className="block hover:text-blue-600">実績</Link>
              <Link to="/application" className="block hover:text-blue-600">応募</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};