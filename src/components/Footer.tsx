import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">甲斐谷寮</h3>
            <p className="mt-2 text-gray-400">漫画家を目指す若者のための共同生活空間</p>
          </div>
          
          <nav className="flex flex-wrap gap-6 justify-center">
            <a href="#about" className="hover:text-red-300 transition-colors">甲斐谷寮とは</a>
            <a href="#philosophy" className="hover:text-red-300 transition-colors">基本理念</a>
            <a href="#changes" className="hover:text-red-300 transition-colors">変更点</a>
            <a href="#life" className="hover:text-red-300 transition-colors">寮生活</a>
            <a href="#consultation" className="hover:text-red-300 transition-colors">面談</a>
            <a href="#application" className="hover:text-red-300 transition-colors">応募方法</a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} 甲斐谷寮. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};