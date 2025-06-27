import React from 'react';

export const DormLife: React.FC = () => {
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
            生活
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="max-w-[1160px] mx-auto space-y-12">
          {/* 説明文エリア */}
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              甲斐谷寮は千葉県野田市の「グリーンパーク」という住宅地の一角にあります。<br/>
              秋葉原から電車とバスを乗り継いで約1時間のところにあります。<br/>
              男子寮が156m²の住居に最大7名、女子寮は135m²の住居に最大5名で共同生活します。<br/>
              共同生活と言っても全員に個室が割り当てられているのでプライベートな空間は確保できます（全室冷暖房完備）。<br/>
              広い共有スペースに加えきれいなお風呂もあります。<br/>
            </p>
            <p>
              「家賃を低く抑え、そのぶん目標のために時間を注ぐ」がコンセプトの甲斐谷寮ですので、それまでトキワ荘プロジェクト内で最安であった家賃からさらに1.7万円ほど値下げしました。
            </p>
          </div>

          {/* 物件情報テーブル */}
          <div className="bg-white/80 rounded-lg border border-blue-100 overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-blue-100">
                  <td className="px-6 py-4 font-medium text-blue-900 bg-blue-50 w-32">物件</td>
                  <td className="px-6 py-4 text-gray-600">
                    <div className="space-y-1">
                      <div>男子寮：156m² に最大7名</div>
                      <div>女子寮：135m² に最大5名</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="px-6 py-4 font-medium text-blue-900 bg-blue-50">所在地</td>
                  <td className="px-6 py-4 text-gray-600">
                    千葉県野田市
                  </td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="px-6 py-4 font-medium text-blue-900 bg-blue-50">交通</td>
                  <td className="px-6 py-4 text-gray-600">
                    東武野田線 梅郷駅よりバスで10分程
                  </td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="px-6 py-4 font-medium text-blue-900 bg-blue-50">賃料・<br/>初期費用</td>
                  <td className="px-6 py-4 text-gray-600">
                    <div className="space-y-1">
                      <div>家賃：1.1 ~ 1.7万円</div>
                      <div>管理費：1.0万円</div>
                      <div>入居時手続き料：5.0万円</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-blue-900 bg-blue-50">備考</td>
                  <td className="px-6 py-4 text-gray-600">
                    <div className="space-y-1">
                      <div>最多家賃帯は1.4万円</div>
                      <div>管理費には電気代、ガス代、水道代、インターネット代（Wi-Fi）、消耗品費込み</div>
                      <div className="text-sm">※ 共益費・ライフライン料は電力料値上げなどで変更することがあります</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 内観エリア */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-serif font-bold text-center text-blue-900 mb-10">内観</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
                caption: "13.5畳の広い共有スペース（女子寮）",
                alt: "女子寮の広い共有スペース"
              },
              {
                id: 2,
                src: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
                caption: "10畳+ウォーキングクローゼットの個室（女子寮）",
                alt: "女子寮の個室"
              },
              {
                id: 3,
                src: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg",
                caption: "最新式のお風呂（男子寮）",
                alt: "男子寮のお風呂"
              },
              {
                id: 4,
                src: "https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg",
                caption: "男子寮よりさらに広いお風呂（女子寮）",
                alt: "女子寮のお風呂"
              },
              {
                id: 5,
                src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
                caption: "リフォームされた個室（男子寮）",
                alt: "男子寮のリフォームされた個室"
              },
              {
                id: 6,
                src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
                caption: "食洗機付きキッチン（女子寮）",
                alt: "女子寮のキッチン"
              },
              {
                id: 7,
                src: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg",
                caption: "全12室の個室のうち唯一の和室の畳表は新しくしました（女子寮）",
                alt: "女子寮の和室"
              }
            ].map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-700">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};