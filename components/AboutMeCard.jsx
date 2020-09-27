import React from 'react';

function AboutMeCard() {
  return (
    <div className="card p-3 side-card">
      <p className="side-card-title">IT Tips とは</p>
      <img width="100%" alt="logo" src="/tips-logov2@2x.png" />
      <p>
        <strong>若手Webエンジニアのための情報メディア</strong>
        <br />
        「IT Tips」は、「20代と30代の若手Webエンジニアを応援する」をテーマに、若手Webエンジニアの活躍の様子や、最新の技術情報/Tipsを広くお届けするためのWebメディアです。
      </p>
    </div>
  );
}

export default AboutMeCard;
