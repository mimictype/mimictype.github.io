import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import worksData from '../data/worksData';
import '../App.css';
import '../components/Works.css';

function WorksPage() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="section works-section" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="works-container">
              <div className="achievements-grid">
                {/* Adultopia 大人國 クリエイター募集サイト */}
                <div className="achievement-item">
                  <Link to="/works/creators-wanted" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-website"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">Adultopia 大人國 クリエイター募集サイト</h4>
                      <p className="achievement-description">
                        台湾開催の大型イベント向けに、クリエイター募集のための多言語対応Web応募フォームを開発。Googleフォーム・GAS連携によるファイルアップロードでバックエンドなどを省略し、動的なバリデーション、ユーザー体験を重視したUI設計を実装。
                      </p>
                      <div style={{ margin: '8px 0' }}>
                        <a
                          href="https://adultopia.github.io/creators-wanted/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="back-button"
                          style={{ marginBottom: '8px' }}
                          onClick={e => e.stopPropagation()}
                        >
                          サイトを見る ↗
                        </a>
                      </div>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">TypeScript</span>
                        <span className="tech-tag">styled-components</span>
                        <span className="tech-tag">Google Apps Script</span>
                        <span className="tech-tag">Google Forms</span>
                        <span className="tech-tag">i18next</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* 柏 菓子 | Haku Gashi の公式サイト */}
                <div className="achievement-item">
                  <Link to="/works/haku-gashi-tw" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-website"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">柏 菓子 | Haku Gashi の公式サイト</h4>
                      <p className="achievement-description">
                        台中市にある期間限定の聖代刨冰（かき氷）店の公式サイト
                      </p>
                      <div style={{ margin: '8px 0' }}>
                        <a
                          href="https://twsho.github.io/haku_gashi_tw/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="back-button"
                          style={{ marginBottom: '8px' }}
                          onClick={e => e.stopPropagation()}
                        >
                          サイトを見る ↗
                        </a>
                      </div>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">TypeScript</span>
                        <span className="tech-tag">CSS</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* イベント出展用体験型モック */}
                <div className="achievement-item">
                  <Link to="/works/event-mock" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-binoculars"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">イベント出展用体験型モック</h4>
                      <p className="achievement-description">
                        森の中で動物を探して観察する疑似体験システムを開発。6軸（加速度・角速度）センサーを活用し、体験者の回転に応じて音声と映像を切り替えるデバイスを実装。
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">C/C++</span>
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">Arduino</span>
                        <span className="tech-tag">UDP通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* ステアリング操作感検証用アプリ */}
                <div className="achievement-item">
                  <Link to="/works/steering-app" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-steering"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">ステアリング操作感検証用アプリ</h4>
                      <p className="achievement-description">
                        自動車部品メーカー向けに、他社製ハードウェアと通信し、GUIを制御するアプリを開発。操作感検証に特化した設計で、安定した動作環境を実現。
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">UDP通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* イベント向け自動車の空間利用検証システム */}
                <div className="achievement-item">
                  <Link to="/works/car-space-system" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-car"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">イベント向け自動車の空間利用検証システム</h4>
                      <p className="achievement-description">
                        自動車内のLED・モーター・ディスプレイ・音声を連動制御する演出システムを開発。イベント当日はオンサイトサポートを行い、スムーズな運営を支援。
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
                  </Link>
                </div>
                {/* VR触覚デバイス＆サンプルアプリ */}
                <div className="achievement-item">
                  <Link to="/works/vr-haptic" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-vr"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">VR触覚デバイス＆サンプルアプリ</h4>
                      <p className="achievement-description">
                        メタバース上の操作に触覚を付与するデバイス制御とサンプルアプリを開発。オブジェクトごとに異なる触覚表現を提案・採用し、没入感の高い体験を提供。
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">Arduino</span>
                        <span className="tech-tag">LeapMotion</span>
                        <span className="tech-tag">Bluetooth通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* 歩行検出デバイス */}
                <div className="achievement-item">
                  <Link to="/works/walking-device" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-walking"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">歩行検出デバイス</h4>
                      <p className="achievement-description">
                        6軸（加速度・角速度）センサーを活用し、精度の高い歩数計測アルゴリズムと可視化アプリを開発。歩行の量的定義による誤検出抑制が高く評価された。
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">C/C++</span>
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">Bluetooth通信</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* センサーデータ記録システム */}
                <div className="achievement-item">
                  <Link to="/works/sensor-system" className="achievement-link">
                    <div className="achievement-icon">
                      <i className="achievement-icon-sensor"></i>
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">センサーデータ記録システム</h4>
                      <p className="achievement-description">
                        6軸（加速度・角速度）センサーデータを取得・保存するPCアプリとマイコン制御プログラムを開発。複数デバイスの同時接続・自動転送機能を提案・実装し、操作性を向上。
                      </p>
                      <div className="achievement-tech-container">
                        <span className="tech-tag">C/C++</span>
                        <span className="tech-tag">Unity（C#）</span>
                        <span className="tech-tag">Arduino</span>
                        <span className="tech-tag">Bluetooth通信</span>
                      </div>
                    </div>
                  </Link>
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

export default WorksPage;
