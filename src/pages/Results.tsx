import React from 'react';

export const Results: React.FC = () => {
  const awards = [
    '手塚賞（集英社）',
    'ちばてつや賞（講談社）',
    '小学館新人コミック大賞（小学館）',
    'NEXT CHAMPION（秋田書店）',
    '四李賞（講談社）',
    '新世界漫画賞（集英社）',
    'ヤングジャンプ新人マンガ大賞（集英社）',
    'ジャンプSQ新人漫画賞（集英社）',
    'モーニング月例（講談社）',
    'ヤングマガジン月間新人漫画賞（講談社）',
    'マガジングランプリ（講談社）'
  ];

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
            実績
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="max-w-[1160px] mx-auto space-y-12">
          {/* 実績説明 - 外枠なし */}
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              甲斐谷荘ではこれまで54人の入居者を迎え入れてきました。
            </p>
            <p>
              そして15人の入居者が連載作家となっています。
            </p>
            <p>
              これはつまり3.6人に1人が連載獲得した計算です。
            </p>
            <p>
              そしてそのうち8人は「担当・甲斐谷」からスタートした人です。
            </p>
            <p className="font-medium">
              ですので、「担当もついていない現状だから入居は無理だろう」などと臆せずどしどし応募なさってください。
            </p>
          </div>

          {/* 受賞歴 - 箇条書き */}
          <div className="bg-white/80 rounded-lg border border-blue-100 p-8">
            <h2 className="text-xl font-serif font-bold mb-8 text-blue-900">甲斐谷荘入居者が受賞した新人賞</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
            <div className="flex justify-end">
              <p className="mt-6 text-gray-600">・・・など</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};