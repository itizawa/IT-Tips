import React from 'react';

function AboutMeCard() {
  return (
    <div className="card p-3 side-card">
      <p className="side-card-title">IT Tips とは</p>
      <img width="100%" alt="it-tips-logo" src="/tips-logov2@2x.png" />
      <p className="text-center">
        <strong className="text-center">若手社会人のためのIT情報専門メディア</strong>
      </p>
      <p>
        「IT Tips」は、<strong>「若手社会人のIT知識を底上げする」</strong>をテーマに、管理人の実務経験を通じて獲得した知見や最新の技術情報/Tipsを広くお届けするためのWebメディアです。
      </p>
    </div>
  );
}

export default AboutMeCard;
