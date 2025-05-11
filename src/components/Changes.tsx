import React from 'react';

export const Changes: React.FC = () => {
  return (
    <section id="changes" className="section">
      <h2 className="section-title">甲斐谷荘→甲斐谷寮になって何が変わったか</h2>
      <div className="mt-8 space-y-10 text-lg leading-relaxed">
        <p>
          すでに述べたように、甲斐谷荘が甲斐谷寮になっても、活動のコンセプトや方針はほとんど変わりませんが、以下の点が大きく変わりました。
        </p>

        <div className="card">
          <h3 className="text-2xl font-bold text-red-900 mb-4">1. QOL向上のためリフォームを行いました</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>女子荘の共有スペースは5.5畳と少々手だったので、定員を6名から5名に減らすことで共有スペースを13.5畳のゆったりスペースにリフォームしました</li>
            <li>女子荘のお風呂が最新のものだったのに対し、男子荘のお風呂が古いタイプのものだったので、最新のお風呂にリフォームしました</li>
            <li>さらに男子荘はほとんどの部屋のフローリング、壁紙、収納をリフォームしました</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-2xl font-bold text-red-900 mb-4">2. 家賃を大きく下げました</h3>
          <p className="mb-4">
            「家賃を低く抑え、そのぶん目標のために時間を注ぐ」がコンセプトの甲斐谷寮ですのでそれまでトキワ荘プロジェクト内で最安であった家賃をさらに17000円ほど値下げしました。これにより甲斐谷寮の家賃は
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>家賃：11000円~17000円（税込）</li>
              <li className="font-medium ml-5">最多家賃帯 14000円（税込）</li>
              <li>共益費・ライフライン料：10000円</li>
              <li>入居時手続料：50000円（税込）</li>
            </ul>
          </div>
          <p className="mt-4">
            一番高い部屋でも月々27000円で、家賃+すべての光熱費ネット費用までまかなえる計算で（ただし共益費・ライフライン料は電力料値上げなどで変更することがあります）
          </p>
        </div>

        <div className="card">
          <h3 className="text-2xl font-bold text-red-900 mb-4">3. 入居者は甲斐谷が決めます</h3>
          <p>
            甲斐谷荘ではあくまで入居者はサブリース管理者であるレジカとの住居契約でしたので、入所者はレジカが決めていました。しかしこのたびレジカとのサブリース契約は解消され、大家である（株）甲斐谷プロダクツの直営となりましたので、入居者は、甲斐谷忍が直接決めることになります。
          </p>
          <p className="mt-4 font-semibold text-red-900">
            甲斐谷寮ではなにより「情熱」を最も重視します。現状が下手でも、実績がなくても全然問題ありません。「絶対にプロ漫画家になるんだ」という情熱がある人は、必ず成長します。そんな人を応援したいです。
          </p>
        </div>
      </div>
    </section>
  );
};