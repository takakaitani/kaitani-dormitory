import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Support: React.FC = () => {
  const [isNoEditorOpen, setIsNoEditorOpen] = useState(false);
  const [isHasEditorOpen, setIsHasEditorOpen] = useState(false);

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
            サポート
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="max-w-[1160px] mx-auto space-y-8">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              甲斐谷寮では、1か月単位、1年単位、3年単位でそれぞれ目標を決めてもらい、月に2回、寮長である甲斐谷忍との面談で到達度などについて話し合います
              （1回30〜45分程度）。
              面談では、ネームや原稿を見せて意見を聞くこともできますので、その場合は2時間近くじっくりミーティングすることもあります。
            </p>
          </div>

          {/* No Editor Section */}
          <div className="bg-white/80 rounded-lg border border-blue-100 overflow-hidden">
            <button
              onClick={() => setIsNoEditorOpen(!isNoEditorOpen)}
              className="w-full flex items-center justify-between p-6 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <span className="text-xl font-serif font-bold text-blue-900">担当編集者がまだいない方</span>
              <ChevronDown 
                size={24} 
                className={`transition-transform duration-300 text-blue-900 ${isNoEditorOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isNoEditorOpen ? 'max-h-[2000px]' : 'max-h-0'
              }`}
            >
              <div className="p-8 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  担当がまだいない方に関しては、担当がつくまでは甲斐谷が担編集者となり、まずは新人賞を目指します。
                </p>
                <p>
                  よく、持ち込みや出張編集部で編集者に名刺をもらったことで、「私には担当がついています」と言ってる方がいますが、甲斐谷寮ではそれは「担当者なし」の扱いとしています。
                </p>
                <p>
                  その人が漫画家として伸びるか伸びないかは「担当編集者がだれなのか」によるところが大きいです。極端な話、伸び悩んでいるほとんどの漫画家志望者は「相性の悪い編集者」とのやり取りのストレスを抱えています。そういう人は相性のいい編集者に出会う事で、劇的に成長を遂げます。編集者とのマッチングこそが成長の最大のカギである、と甲斐谷寮では考えています。
                </p>
                <p>
                  相性のいい編集者に出会う最善の方法は、圧倒的に、新人賞を受賞することです。
                </p>
                <p>
                  多くの編集部では、新規新人賞受賞者については「どの新人の担当をしたいか」の希望を取るそうです。つまり、新人賞を取った時に担当についた編集者は「あなたの担当になりたい」と手を挙げて担当になってくれた人なのです。熱意が違いますし、何よりいいのは、そういう出会い方だとまず「価値観が近い」ということです。
                </p>
                <p>
                  持ち込みや出張編集部で名刺を渡してくれた編集者は、確かにあなたの力をある程度認めてくださったのでしょう。ですが残念ながら「複数の受賞者の中であなたを選んでくれた」編集者には熱意の面では遠く及びませんし、なにより「価値観の近さ」については全く保障されません。ですので甲斐谷寮では編集者と出会うための持ち込みは推奨していません。（作品の意見をもらうための持ち込みはその限りではありません）
                </p>
                <p>
                  新人賞を取ることはかならずしも絶対の通過点ではありませんが（優秀な人は新人賞を経由せずに一足飛びにデビューすることもあります）甲斐谷荘では73%の入居者が新人賞を受賞しています。
                </p>
                <p>
                  名刺をもらっただけの編集者と打ち合わせしている人は、その編集者と打ち合わせした作品が新人賞を取ったときはじめて「担当者あり」の扱いになります。
                </p>
              </div>
            </div>
          </div>

          {/* Has Editor Section */}
          <div className="bg-white/80 rounded-lg border border-blue-100 overflow-hidden">
            <button
              onClick={() => setIsHasEditorOpen(!isHasEditorOpen)}
              className="w-full flex items-center justify-between p-6 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <span className="text-xl font-serif font-bold text-blue-900">担当編集者がすでにいる方</span>
              <ChevronDown 
                size={24} 
                className={`transition-transform duration-300 text-blue-900 ${isHasEditorOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isHasEditorOpen ? 'max-h-[2000px]' : 'max-h-0'
              }`}
            >
              <div className="p-8 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  担編集者がいる人に関しては、甲斐谷がネームを見ることは基本ありません。
                </p>
                <p>
                  面談ではやや専門的な、漫画の技術論の話が多くなります。
                </p>
                <p>
                  「『面白い』は作れる」という言葉があります
                </p>
                <p>
                  「面白い」を狙って作る事こそがプロである、という考え方です
                </p>
                <p>
                  甲斐谷寮ではそういう人材の育成を目指します。
                </p>
                <p>
                  甲斐谷寮で一つでも多くの「漫画技術」を獲得することが、まさに「生涯成長し続ける自分作り」になるからです
                </p>
                <p>
                  一方で漫画製作や担編集者との悩みについて話し合うことも少なくありません
                </p>
                <p>
                  担編集者とうまくいっている場合は特に問題ありませんが、こじれている場合、対応を一緒に考えることになります。場合によっては、甲斐谷が担当となって他の編集部にターゲットを変える（別の相性のいい編集者との出会いを目指す）、あるいは一足飛びで連載企画を作る、ということもあります。
                </p>
                <p>
                  このステージの人は、多くの人は担編集者と、時には甲斐谷担当で、デビュー（読み切り発表）し、さらにその後、連載を目指すことになります。
                </p>
                <p>
                  担当編集者との打ち合わせではどうしても「面白い漫画を作る」ことが主眼となってしまうので、甲斐谷との面談では「面白い漫画を作れるようになるための方法論」の話し合いをするようにしています。甲斐谷寮では「漫画製作は技術なんだヒットしている作家さんは、まずは技術の裏打ちがあるからヒットできているのだ」ということを徹底して理解してもらいます。目指すのは「上手い作家になる事」です。「今日より明日、さらに上手くなること」それこそが「生涯成長し続ける自分作り」なのです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};