import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg')" 
        }}
      ></div>
      
      <div className="relative z-20 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          甲斐谷寮<br />2025年度寮生募集
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          漫画家を目指す若者のための共同生活空間
        </p>
        <a 
          href="#application" 
          className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-800 transition-colors shadow-lg"
        >
          応募する
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-white hover:text-red-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};