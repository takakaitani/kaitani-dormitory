import React from 'react';

export const Application: React.FC = () => {
  return (
    <div>
      {/* Title Area */}
      <section className="relative h-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg')" 
          }}
        ></div>
        <div className="relative z-20 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
            応募
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="max-w-[1160px] mx-auto space-y-12">
          {/* 参加条件 */}
          <div className="bg-white/80 rounded-lg border border-blue-100 p-8">
            <h2 className="text-xl font-serif font-bold mb-8 text-blue-900">参加条件</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                18歳～30歳の日本国籍を有する方
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                最低1作品漫画完成原稿を仕上げたことのある方
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                本気でプロ漫画家を目指し、かつ適切な共同生活を営むことができる方
              </li>
            </ul>
          </div>

          {/* 甲斐谷寮でのルール */}
          <div className="bg-white/80 rounded-lg border border-blue-100 p-8">
            <h2 className="text-xl font-serif font-bold mb-8 text-blue-900">甲斐谷寮でのルール（一部）</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                全室禁煙
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                女子寮は男子禁制
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                男子寮個室は女子禁制
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                ペットの飼育不可
              </li>
            </ul>
          </div>

          {/* 応募方法 */}
          <div className="bg-white/80 rounded-lg border border-blue-100 p-8">
            <h2 className="text-xl font-serif font-bold mb-8 text-blue-900">応募方法</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              ご興味を持った方は以下の項目をご記入のうえ、
              <a href="mailto:oneouts@mail.goo.ne.jp" className="text-blue-600 font-medium hover:underline">
                oneouts@mail.goo.ne.jp
              </a>
              &nbsp;までメールをお送りください。
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">1</span>
                  <span>氏名（フリガナも）</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">2</span>
                  <span>性別</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">3</span>
                  <span>年齢</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">4</span>
                  <span>電話番号</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">5</span>
                  <span>メールアドレス</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">6</span>
                  <span>現住所（都道府県、市町村までで結構です）</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">7</span>
                  <span>漫画投稿歴受賞歴</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">8</span>
                  <span>好きな漫画作品（甲斐谷作品は書かないでください）</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">9</span>
                  <span>自己アピール（プロ漫画家に絶対になる！という思いを存分にお書きください）</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0 mt-0.5">10</span>
                  <span>（もしございましたら）甲斐谷についての質問</span>
                </li>
              </ol>
            </div>

            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>メールをくださった皆さんに審査のご案内をいたします</p>
              <p className="font-medium">審査通過なさった方が正式に入寮となります</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};