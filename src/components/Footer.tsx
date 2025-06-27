import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Footer */}
        <div className="hidden md:flex justify-center gap-16">
          <div className="text-center">
            <h3 className="font-bold mb-4"><Link to="/about/message" className="hover:text-blue-200">甲斐谷寮について</Link></h3>
            <ul className="space-y-2">
              <li><Link to="/about/message" className="hover:text-blue-200">寮長メッセージ</Link></li>
              <li><Link to="/about/life" className="hover:text-blue-200">生活</Link></li>
              <li><Link to="/about/support" className="hover:text-blue-200">サポート</Link></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4"><Link to="/results" className="hover:text-blue-200">実績</Link></h3>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4"><Link to="/application" className="hover:text-blue-200">応募方法</Link></h3>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden space-y-4">
          <div>
            <button 
              className="flex items-center justify-between w-full"
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
              <Link to="/message" className="block py-2 pl-4">寮長メッセージ</Link>
              <Link to="/life" className="block py-2 pl-4">生活</Link>
              <Link to="/support" className="block py-2 pl-4">サポート</Link>
            </div>
          </div>
          <Link to="/results" className="block">実績</Link>
          <Link to="/application" className="block">応募</Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800">
          <p className="text-center text-blue-200">
            © {currentYear} 甲斐谷寮. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};