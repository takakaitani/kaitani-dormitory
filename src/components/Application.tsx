import React, { useState } from 'react';

export const Application: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false);
  
  return (
    <section id="application" className="section">
      <h2 className="section-title">甲斐谷寮に入寮したい方</h2>
      <div className="mt-8 space-y-6 text-lg leading-relaxed">
        <p className="font-medium">
          今回は2025年度新寮生の募集ですので春（4～5月）に入居ができる方を対象に募集します。
        </p>
        
        <div className="card">
          <h3 className="text-xl font-bold text-red-900 mb-4">参加条件</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>18歳～30歳の日本国籍を有する方</li>
            <li>最低1作品漫画完成原稿を仕上げたことのある方</li>
            <li>本気でプロ漫画家を目指し、かつ適切な共同生活を営むことができる方</li>
            <li>2025年4～5月に入居が可能な方</li>
          </ul>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-bold text-red-900 mb-4">甲斐谷寮でのルール（一部）</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>全室禁煙です</li>
            <li>女子寮は男子禁制です</li>
            <li>男子寮個室は女子禁制です</li>
            <li>ペットの飼育不可です</li>
          </ul>
        </div>
        
        <button 
          onClick={() => setFormVisible(!formVisible)}
          className="w-full py-4 bg-red-900 text-white rounded-lg font-bold text-xl hover:bg-red-800 transition-colors shadow-lg"
        >
          応募フォームを{formVisible ? '閉じる' : '開く'}
        </button>
        
        {formVisible && (
          <div className="card mt-6 animate-fade-in">
            <h3 className="text-xl font-bold text-red-900 mb-6">応募フォーム</h3>
            <p className="mb-6">
              ご興味を持った方は以下の項目をご記入の上 <span className="font-bold">kaigaya.ryo@example.com</span> にメール下さい。
            </p>
            
            <ol className="list-decimal pl-5 space-y-4">
              <li>氏名（フリガナも）</li>
              <li>性別</li>
              <li>年齢</li>
              <li>電話番号</li>
              <li>メールアドレス</li>
              <li>現住所（都道府県、市町村までで結構です）</li>
              <li>漫画投稿歴受賞歴</li>
              <li>好きな漫画作品（甲斐谷作品は書かないでください）</li>
              <li>自己アピール（プロ漫画家に絶対になる！という思いを存分にお書きください）</li>
              <li>（もしございましたら）甲斐谷についての質問</li>
            </ol>
            
            <div className="mt-8 bg-red-50 p-4 rounded-lg">
              <p>
                メールをくださった皆さんに審査のご案内をいたします。審査通過なさった方が正式に入寮となります。
              </p>
              <p className="font-bold mt-2">
                締切り 2025年 3月20日
              </p>
              <p className="text-sm mt-1">
                （ですが、審査通過の順に入居のご案内をしますのでお早めにお申し込みください）
              </p>
            </div>
          </div>
        )}
        
        <div className="text-center text-2xl font-bold text-red-900 mt-10">
          お待ちしております
        </div>
      </div>
    </section>
  );
};