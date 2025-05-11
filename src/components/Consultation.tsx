import React from 'react';

export const Consultation: React.FC = () => {
  return (
    <section id="consultation" className="section bg-gray-50">
      <h2 className="section-title">面談</h2>
      <div className="mt-8 space-y-6 text-lg leading-relaxed">
        <p>
          甲斐谷では・1か月単位・1年単位・3年単位でそれぞれ目標を決めてもらい月に2回、寮長である甲斐谷忍の面談で到達度などについて話し合います。時間は1回30〜45分程度。面談では、ネームや原稿を見せて意見を聞くこともできますので、その場合は2時間近くじっくりミーティングすることもあります。
        </p>
        
        <div className="card">
          <h3 className="text-xl font-bold text-red-900 mb-4">担当編集者がまだいない方</h3>
          <p className="mb-4">
            担当がまだいない方に関しては、担当がつくまでは甲斐谷が担編集者となり、まずは新人賞を目指します。
          </p>
          <p className="mb-4">
            よく、持ち込みや出張編集部で編集者に名刺をもらったことで、「私には担当がついています」と言ってる方がいますが、甲斐谷療ではそれは「担当者なし」の扱いとしています。
          </p>
          <p className="mb-4">
            その人が漫画家として伸びるか伸びないかは「担当編集者がだれなのか」によるところが大きいです。極端な話、伸び悩んでいるほとんどの漫画家志望者は「相性の悪い編集者」とのやり取りのストレスを抱えています。そういう人は相性のいい編集者に出会う事で、劇的に成長を遂げます。編集者とのマッチングこそが成長の最大のカギである、と甲斐谷寮では考えています。
          </p>
          <p className="font-medium">
            相性のいい編集者に出会う最善の方法は、圧倒的に、新人賞を受賞することです。
          </p>
          <p className="mt-4">
            甲斐谷荘では73%の入居者が新人賞を受賞しています。
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-3">甲斐谷荘入居者が受賞した新人賞の一部</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">手塚賞（集英社）</div>
            <div className="bg-white p-3 rounded shadow-sm">ちばてつや賞（講談社）</div>
            <div className="bg-white p-3 rounded shadow-sm">小学館新人コミック大賞（小学館）</div>
            <div className="bg-white p-3 rounded shadow-sm">NEXT CHAMPION（秋田書店）</div>
            <div className="bg-white p-3 rounded shadow-sm">四李賞（講談社）</div>
            <div className="bg-white p-3 rounded shadow-sm">新世界漫画賞（集英社）</div>
            <div className="bg-white p-3 rounded shadow-sm">ヤングジャンプ新人マンガ大賞（集英社）</div>
            <div className="bg-white p-3 rounded shadow-sm">ジャンプSQ新人漫画賞（集英社）</div>
            <div className="bg-white p-3 rounded shadow-sm">モーニング月例（講談社）</div>
          </div>
        </div>
        
        <div className="card mt-8">
          <h3 className="text-xl font-bold text-red-900 mb-4">担当編集者がすでにいる方</h3>
          <p className="mb-4">
            担編集者がいる人に関しては、甲斐谷がネームを見ることは基本ありません。面談ではやや専門的な、漫画の技術論の話が多くなります。
          </p>
          <p className="mb-4">
            「『面白い』は作れる」という言葉があります。「面白い」を狙って作る事こそがプロである、という考え方です。甲斐谷寮ではそういう人材の育成を目指します。甲斐谷療で一つでも多くの「漫画技術」を獲得することが、まさに「生涯成長し続ける自分作り」になるからです。
          </p>
          <p>
            甲斐谷荘ではこれまで54人の入居者を迎え入れてきました。そして15人の入居者が連載作家となっています。これはつまり3.6人に1人が連載獲得した計算です。そしてそのうち8人は「担当・甲斐谷」からスタートした人です。
          </p>
        </div>
        
        <p className="text-center font-bold text-xl text-red-900 my-8">
          「担当もついていない現状だから入居は無理だろう」などと臆せずどしどし応募なさってください。
        </p>
      </div>
    </section>
  );
};