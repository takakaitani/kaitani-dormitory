import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="section bg-gray-50">
      <h2 className="section-title">甲斐谷寮の基本理念</h2>
      <div className="mt-8 space-y-6 text-lg leading-relaxed">
        <p>
          甲斐谷荘の活動は2014年トキワ荘プロジェクトを通営するニューベリーの思想に共感し、スタートしました。
          その思想というのが<span className="font-bold text-red-900">「あなたの夢に必要なのは締切です」</span>。
        </p>
        <p>
          具体的に言うと「3年という期間を切って、あなたの夢に全力投球してみませんか」という提案です。そのために
        </p>

        <div className="pl-4 border-l-4 border-red-900 py-2">
          <ol className="list-decimal pl-5 space-y-2">
            <li>同じ目標を持つものの共同生活の場を作り</li>
            <li>家賃を低家賃にすることで、より多くの時間を目標のために注いでもらい</li>
            <li>漫画業界の先人であるメンター（甲斐谷忍）が、必要な助言やサポートを行う</li>
          </ol>
        </div>

        <p>それがニューベリー時代の甲斐谷荘でした。</p>
        <p>
          トキワ荘プロジェクトは運営がニューベリーからレジカに代わり、レジカは「レジカスタジオ」を立ち上げ「協働してプロを目指す」という思想に変わりました。ウェブトウーン時代において、「優秀なチームの一員」を目指すその戦略はありなのでしょう。ですが自分が共感したニューベリーの活動の根幹は「自立の支援」であり、また自身漫画家である甲斐谷忍にとって、プロ漫画家は「強い個であるべき」というのが条でもあります。
        </p>
        <p className="font-semibold">
          ですのでニューベリー時代の思想を受け継ぐべく、レジカとの関係を解消し「甲斐谷寮」としてリスタートすることになりました。甲斐谷療になっても「強い個を育てる」姿勢は変わりません。「自立するクリエーター育成」のため引き続き活動していきます。
        </p>
      </div>
    </section>
  );
};