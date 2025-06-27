import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HomeIcon, Users, Phone, BarChart } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg')" 
          }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-[0.2em]">
            甲斐谷寮
          </h1>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            2025年度 入居者募集
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-blue-900">
              甲斐谷寮について
            </h2>
            <h3 className="text-xl font-serif text-blue-900">
              3年という期間を切って、あなたの夢に全力投球してみませんか
            </h3>
            <p className="text-gray-600 leading-relaxed">
              甲斐谷寮とは、漫画家・甲斐谷忍がそれまで住居＆アトリエとして使用していた2棟の建物を男子寮・女子寮という形でシェアハウス化し、漫画家を目指す若者に共同生活をしてもらいながら、プロ漫画家を目指してもらうという取り組みです。
              甲斐谷忍はずっとメンターとしてかかわっております。
              私たちは、以下の活動をしています。
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              <li>同じ目標を持つものの共同生活の場を作り</li>
              <li>家賃を低家賃にすることで、より多くの時間を目標のために注いでもらい</li>
              <li>漫画業界の先人であるメンター（甲斐谷忍）が、必要な助言やサポートを行う</li>
            </ol>
          </div>
          <div className="flex justify-end">
            <Link to="/about/message" className="btn">
              寮長メッセージ <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/4219528/pexels-photo-4219528.jpeg')" }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-[1160px] mx-auto px-4">
          <div className="flex justify-center gap-6">
            <Link to="/about/life" className="group w-[300px]">
              <div className="bg-white/90 backdrop-blur rounded-lg p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white hover:shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Users size={24} />
                </div>
                <span className="text-gray-900 font-medium">生活</span>
                <ArrowRight size={16} className="text-blue-600" />
              </div>
            </Link>
            
            <Link to="/about/support" className="group w-[300px]">
              <div className="bg-white/90 backdrop-blur rounded-lg p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white hover:shadow-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <HomeIcon size={24} />
                </div>
                <span className="text-gray-900 font-medium">サポート</span>
                <ArrowRight size={16} className="text-blue-600" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4">
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              私たちは、2014年に前身である甲斐谷荘として始まり、現在の甲斐谷寮として活動を続けています。
              これまでに迎え入れてきた入居者のうち、73%が新人賞を受賞しています。
            </p>
          </div>
          <div className="flex justify-end">
            <Link to="/results" className="btn">
              過去の実績について詳しく見る <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-24 px-4 bg-blue-50">
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              甲斐谷寮ではなにより「情熱」を最も重視します。
              現状が下手でも、実績がなくても全然問題ありません。
              「絶対にプロ漫画家になるんだ」という情熱がある人は、必ず成長します。
              そんな人を応援したいです。
            </p>
          </div>
          <div className="flex justify-end">
            <Link to="/application" className="btn">
              応募に進む <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      {/* TODO: ニュースがまだないのでコメントアウト */}
      {/* <section className="py-24 px-4">
        <div className="max-w-[1160px] mx-auto">
          <div className="border border-blue-100 rounded-lg p-8 bg-white/80">
            <h2 className="text-xl font-serif font-bold mb-8 text-blue-900">お知らせ</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-blue-100">
                <h3 className="text-sm">2025年度 新入寮生募集開始のお知らせ</h3>
                <span className="text-sm text-gray-500">2024/01/15</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-blue-100">
                <h3 className="text-sm">甲斐谷寮リニューアルのお知らせ</h3>
                <span className="text-sm text-gray-500">2024/01/10</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};