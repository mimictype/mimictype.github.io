import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <img 
              src="/logo_250x80.PNG" 
              alt="MimicType Logo" 
              className="logo"
            />
            <nav className="nav">
              <button 
                className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button 
                className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
              <button 
                className={`nav-button ${activeSection === 'business' ? 'active' : ''}`}
                onClick={() => scrollToSection('business')}
              >
                Business
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>MimicType</h1>
          <p>既存の技術を巧みに組み合わせ、あたかも本物のように機能するソリューションを提供します</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About</h2>
          
          <div className="about-grid">
            <div className="about-card">
              <h3>名前の意味</h3>
              <h4>Mimic（ミミック）</h4>
              <p>
                Mimicは、既存の技術や要素を巧みに組み合わせ、あたかも本物のように機能するものを意味する。
                ゼロからすべてを作らなくても、手元にあるものでそれらしく動かすことはできる。
              </p>
              <p>
                MimicTypeの思想の根幹には、<br />
                <strong>「目的達成のためなら、見せかけでも構わない」</strong><br />
                という柔軟な実現主義がある。
              </p>
            </div>

            <div className="about-card">
              <h4>Type（タイプ）</h4>
              <p>
                Typeは、IT業界で広く使われる「型（データ型）」を指す専門用語。
                この言葉を加えることで、技術・開発・IT分野との結びつきを自然に連想させる名前となっている。
              </p>
              <p>
                また、Prototype（プロトタイプ）の進化形という意味合いも内包し、<br />
                <strong>「素早く、かたちにする」</strong><br />
                というスタンスを象徴している。
              </p>
            </div>
          </div>

          <div className="philosophy">
            <h3>理念</h3>
            <p><strong>目的はひとつ。方法は無限。</strong></p>
            <p>
              目的を達成するために、必ずしもゼロから全てを作る必要はない。
              既存の技術も、既製品も、時には迂回路さえも、最速で目的地にたどり着くための手段になる。
            </p>
            <p>
              MimicTypeは、<strong>「突破」より「発想の転換」</strong>で、限界の先に行く。
            </p>
          </div>

          <div className="representative">
            <h3>代表紹介</h3>
            <p>林　翔</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact">
            <p>お気軽にお問い合わせください</p>
            <div className="contact-email">s@mimictype.com</div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="section">
        <div className="container">
          <h2>Business</h2>
          <div className="business-grid">
            <div className="business-item">
              <h4>作れるもの</h4>
              <p>Webアプリケーション、モバイルアプリ、システム開発など、様々なソリューションを提供します</p>
            </div>
            <div className="business-item">
              <h4>依頼の流れ</h4>
              <p>お問い合わせから要件定義、開発、納品まで、スムーズなプロセスで進めます</p>
            </div>
            <div className="business-item">
              <h4>実績</h4>
              <p>多数のプロジェクトを手がけ、クライアントのニーズに応じたソリューションを提供しています</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 MimicType. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
