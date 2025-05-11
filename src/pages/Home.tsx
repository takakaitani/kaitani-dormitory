import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg')" 
          }}
        ></div>
        
        <div className="relative z-20 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-serif">
            甲斐谷寮<br />2025年度寮生募集
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12">
            漫画家を目指す若者のための共同生活空間
          </p>
          <Link 
            to="/application" 
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            応募する
          </Link>
        </div>
      </section>

      <section className="section text-center">
        <h2 className="text-3xl font-bold mb-8">甲斐谷寮へようこそ</h2>
        <p className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          プロの漫画家を目指す若者たちが切磋琢磨し、夢への第一歩を踏み出す場所。
          ここでの3年間があなたの人生を変えるかもしれません。
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/about" className="card text-left hover:translate-y-[-4px]">
            <h3 className="text-xl font-bold mb-4">甲斐谷寮について</h3>
            <p>漫画家・甲斐谷忍が主宰する、漫画家志望者のための共同生活空間です。</p>
          </Link>
          <Link to="/philosophy" className="card text-left hover:translate-y-[-4px]">
            <h3 className="text-xl font-bold mb-4">基本理念</h3>
            <p>「あなたの夢に必要なのは締切です」をモットーに、若手作家の育成を行っています。</p>
          </Link>
        </div>
      </section>
    </div>
  );
};