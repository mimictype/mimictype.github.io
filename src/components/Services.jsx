import './Services.css';

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        
        <div className="services-container">
          <div className="subsection">
            <h3 className="subsection-title">作れるもの</h3>
            <div className="services-grid">
              <div className="service-card">
                <h4 className="service-title">Webサイト・アプリケーション</h4>
                <p className="service-description">
                  企業サイト、ランディングページ、Webアプリケーション等の設計・開発
                </p>
              </div>
              
              <div className="service-card">
                <h4 className="service-title">業務効率化システム</h4>
                <p className="service-description">
                  社内業務の自動化、効率化ツールの開発
                </p>
              </div>
              
              <div className="service-card">
                <h4 className="service-title">システム連携・API開発</h4>
                <p className="service-description">
                  既存システムの連携、APIの開発・導入支援
                </p>
              </div>
            </div>
          </div>
          
          <div className="subsection">
            <h3 className="subsection-title">依頼の流れ</h3>
            <div className="process-container">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4 className="step-title">お問い合わせ</h4>
                  <p className="step-description">
                    メールにてご連絡ください。簡単なご要望をお伝えいただくだけでOKです。
                  </p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4 className="step-title">ヒアリング・提案</h4>
                  <p className="step-description">
                    ご要望に基づいて、最適な解決策を提案します。
                  </p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4 className="step-title">開発・実装</h4>
                  <p className="step-description">
                    合意いただいた内容に基づき、開発を進めます。途中経過も随時共有します。
                  </p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4 className="step-title">納品・サポート</h4>
                  <p className="step-description">
                    完成したものを納品し、必要に応じてサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="subsection">
            <h3 className="subsection-title">実績</h3>
            <div className="achievements">
              <p className="achievements-text">準備中</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
