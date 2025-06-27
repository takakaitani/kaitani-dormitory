import React from 'react';

export const Message: React.FC = () => {
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
            寮長メッセージ
          </h1>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-24 px-4">
        <div className="max-w-[1160px] mx-auto space-y-4 text-gray-600 leading-relaxed">
          <p>
            甲斐谷寮にいられるのは最大3年です。<br />
            3年たったら卒業です。<br />
            3年は長いようでいてあっという間です。<br />
            甲斐谷寮の3年間で夢に向かって精一杯もがいてください。<br />
            そして夢に、一歩でも近づいてください。
          </p>
          
          <p>
            入寮すると最初に「3年後の目標」を書いてもらいます。<br />
            ですが3年後、その目標を達成できる人はなかなかいません。<br />
            目標に到達することも大事ですがそれよりももっと大事なことがあります。
          </p>

          <p>
            それは「生涯にわたって成長し続ける自分を作る事」です。
          </p>
          
          <p>
            「最新作が最高傑作」<br />
            これこそがクリエーターの理想形であり<br />
            この気概がある限りクリエーターは永遠に生き続けられるのです。<br />
            甲斐谷寮は「長く活躍できるクリエーターの育成」を目指しておりまずは寮長である自分が手本となるように日々がんばっています。<br />
            （現在プロ漫画家歴32年です）
          </p>
          
          <p>
            甲斐谷寮での3年間で一番大切なのは<br />
            「生涯成長し続けるにはどうすればいいか」を見つけ出すことです。
          </p>
          
          <p>
            言い方を変えれば「正しい努力の仕方を学ぶ」<br />
            その答えはひとりひとり違います。<br />
            ですがその答えを見つけるお手伝いは最大限させていただきます。
          </p>
          
          <div className="text-right mt-12">
            <p className="text-xl font-serif font-bold text-blue-900">
              甲斐谷 忍
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};