import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">甲斐谷寮とは</h2>
      <div className="mt-8 space-y-6 text-lg leading-relaxed">
        <p>
          漫画家・甲斐谷忍が、それまで住居＆アトリエとして使用していた2棟の建物を男子寮・女子寮という形でシェアハウス化し、漫画家を目指す若者に共同生活をしてもらいながら、プロ漫画家を目指してもらうという取り組みです。甲斐谷忍はずっとメンターとしてかかわっております（どのようにかかわっているかは後述）。
        </p>
        <p>
          2014年から10年間（甲斐谷荘）として運営しておりましたが、このたびレジカ（トキワ荘プロジェクト、トキワソウ団地などをを運営しているNPO団体）と関係を解消して「甲斐谷療」としてリスタートすることになりました。
        </p>
        <p className="font-semibold text-red-900">
          定員は男子寮7名、女子寮5名。現在、甲斐谷荘時代からの10名が引き続き入居しておりますが、2名空きが出ましたので、2025年度新寮生を募集します。
        </p>
      </div>
    </section>
  );
};