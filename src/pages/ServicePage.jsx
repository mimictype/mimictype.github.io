import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import '../components/Service.css';

function ServicePage() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section id="service" className="section service-section" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="service-container">
              <div className="subsection">
                <h3 className="subsection-title">作れるもの</h3>
                <div className="service-showcase">
                  <div className="service-card-large">
                    <div className="service-icon">
                      <i className="service-icon-hardware"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="service-title">電子工作・ハードウェア制御</h4>
                      <div className="service-features">
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>小型電子工作デバイスの製作</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>センサー・アクチュエータの制御（角速度センサー、サーボモーター、LEDなど）</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>他デバイスとの統合制御システム構築</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-card-large">
                    <div className="service-icon">
                      <i className="service-icon-app"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="service-title">アプリケーション開発</h4>
                      <div className="service-features">
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>PCアプリ（Windows / macOS）</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>モバイルアプリ（iOS / Android）</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>Webアプリ・Webサイト制作</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>LINE Bot 開発</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-card-large">
                    <div className="service-icon">
                      <i className="service-icon-game"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="service-title">ゲーム開発</h4>
                      <div className="service-features">
                        <div className="feature-item">
                          <span className="feature-dot"></span>
                          <span>ハイパーカジュアルゲーム制作</span>
                        </div>
                      </div>
                    </div>
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
                        メールにてお気軽にご連絡ください。「こんなことできる？」というざっくりした内容でも大丈夫です。
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4 className="step-title">ヒアリングと提案</h4>
                      <p className="step-description">
                        詳細をお聞きしながら、ご要望や課題に沿った解決策をご提案します。必要に応じて複数案もご用意します。
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4 className="step-title">契約</h4>
                      <p className="step-description">
                        お見積りをご確認いただき、ご納得いただけた場合のみご契約となります。成果報酬型のため、無駄な費用は発生しません。
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4 className="step-title">開発</h4>
                      <p className="step-description">
                        合意いただいた内容に基づき、開発を進めます。
                      </p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h4 className="step-title">納品・サポート</h4>
                      <p className="step-description">
                        完成品を納品後、必要な使い方や注意点をご案内します。納品後の不明点や軽微な修正も、一定期間サポートします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServicePage;
