import React from 'react';

function AboutMeCard() {
  return (
    <div className="card p-3 side-card">
      <p className="side-card-title">IT Tips とは</p>
      <img width="100%" alt="logo" src="/tips-logov2@2x.png" />
      <p>
        <strong>若手社会人のためのIT情報専門メディア</strong>
        <br />
        「IT Tips」は、「20代と30代の若手社会人のIT知識を底上げする」をテーマに、管理人の実務経験を通じて獲得した知見や最新の技術情報/Tipsを広くお届けするためのWebメディアです。
      </p>
    </div>
  );
}

export default AboutMeCard;
