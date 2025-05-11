import React from 'react';

export const DormLife: React.FC = () => {
  return (
    <section id="life" className="section">
      <h2 className="section-title">甲斐谷寮の生活</h2>
      <div className="mt-8 space-y-6 text-lg leading-relaxed">
        <p>
          甲斐谷寮は千葉県の野田市というところにあります。秋葉原から車とバスを乗り継いで約1時間のところにあります。「グリーンパーク」という住宅地の一角です。
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold text-red-900 mb-3">男子寮</h3>
            <p>156m²の住居に最大7名</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-red-900 mb-3">女子寮</h3>
            <p>135m²の住居に最大5名</p>
          </div>
        </div>
        
        <p>
          共同生活と言っても全員に個室が割り当てられているのでプライベートな空間は確保できます（全室冷暖房完備）。広い共有スペースに加えきれいなお風呂もあります。
        </p>
        
        <div className="bg-red-50 border-l-4 border-red-900 p-4 rounded-r-lg">
          <p className="font-medium">
            甲斐谷療にいられるのは最大3年です。<br />
            3年たったら卒業です。<br />
            3年は長いようでいてあっという間です。<br />
            甲斐谷寮の3年間で夢に向かって精一杯もがいてください。<br />
            そして夢に、一歩でも近づいてください。
          </p>
        </div>
        
        <p>
          入寮すると最初に「3年後の目標」を書いてもらいます。ですが3年後、その目標を達成できる人はなかなかいません。目標に到達することも大事ですがそれよりももっと大事なことがあります。
        </p>
        
        <div className="text-center my-8">
          <p className="text-2xl font-bold text-red-900">
            「生涯にわたって成長し続ける自分を作る事」
          </p>
        </div>
        
        <p>
          「最新作が最高傑作」これこそがクリエーターの理想形であり、この気概がある限りクリエーターは永遠に生き続けられるのです。甲斐谷療は「長く活躍できるクリエーターの育成」を目指しておりまずは寮長である自分が手本となるように日々がんばっています。（現在プロ漫画家歴32年です）
        </p>
        
        <div className="text-center my-8">
          <p className="text-xl font-bold">
            甲斐谷寮での3年間で一番大切なのは<br />
            「生涯成長し続けるにはどうすればいいか」を見つけ出すことです。
          </p>
        </div>
        
        <p>
          言い方を変えれば「正しい努力の仕方を学ぶ」。その答えはひとりひとり違います。ですがその答えを見つけるお手伝いは最大限させていただきます。
        </p>
      </div>
    </section>
  );
};