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
          
          <div className="subsection">
            <h3 className="subsection-title">実績</h3>
            <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="achievement-icon-steering"></i>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">ステアリング操作感検証用アプリ</h4>
                  <p className="achievement-description">
                    自動車部品メーカー向けに、他社製ハードウェアと通信しGUIを制御するアプリを開発。
                    操作感検証に特化した設計で、安定した動作環境を実現。
                  </p>
                  <div className="achievement-tech-container">
                    <span className="tech-tag">Unity（C#）</span>
                    <span className="tech-tag">UDP通信</span>
                  </div>
                </div>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="achievement-icon-car"></i>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">イベント向け自動車の空間利用検証システム</h4>
                  <p className="achievement-description">
                    自動車内のLED・モーター・ディスプレイ・音声を連動制御する演出システムを開発。
                    イベント当日はオンサイトサポートを行い、スムーズな運営を支援。
                  </p>
                  <div className="achievement-tech-container">
                    <span className="tech-tag">Max/MSP</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">C/C++</span>
                    <span className="tech-tag">MQTT</span>
                    <span className="tech-tag">Raspberry Pi</span>
                    <span className="tech-tag">OBS</span>
                  </div>
                </div>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="achievement-icon-vr"></i>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">VR触覚デバイス＆サンプルアプリ</h4>
                  <p className="achievement-description">
                    メタバース上の操作に触覚を付与するデバイス制御とサンプルアプリを開発。
                    オブジェクトごとに異なる触覚表現を提案・採用し、没入感の高い体験を提供。
                  </p>
                  <div className="achievement-tech-container">
                    <span className="tech-tag">Unity（C#）</span>
                    <span className="tech-tag">Arduino</span>
                    <span className="tech-tag">LeapMotion</span>
                    <span className="tech-tag">Bluetooth通信</span>
                  </div>
                </div>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="achievement-icon-walking"></i>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">歩行検出デバイス</h4>
                  <p className="achievement-description">
                    6軸（加速度・角速度）センサーを活用し、精度の高い歩数計測アルゴリズムと可視化アプリを開発。
                    歩行の量的定義による誤検出抑制が高く評価された。
                  </p>
                  <div className="achievement-tech-container">
                    <span className="tech-tag">C/C++</span>
                    <span className="tech-tag">Unity（C#）</span>
                    <span className="tech-tag">Bluetooth通信</span>
                  </div>
                </div>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-icon">
                  <i className="achievement-icon-sensor"></i>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">センサーデータ記録システム</h4>
                  <p className="achievement-description">
                    6軸（加速度・角速度）センサーデータを取得・保存するPCアプリとマイコン制御プログラムを開発。
                    複数デバイスの同時接続・自動転送機能を提案・実装し、操作性を向上。
                  </p>
                  <div className="achievement-tech-container">
                    <span className="tech-tag">C/C++</span>
                    <span className="tech-tag">Unity（C#）</span>
                    <span className="tech-tag">Arduino</span>
                    <span className="tech-tag">Bluetooth通信</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
