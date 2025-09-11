import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import '../components/About.css';

function AboutPage() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <section id="about" className="section about-section" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="subsection">
              <h3 className="subsection-title">名前の意味</h3>
              
              <div className="name-meaning">
              <p className="subsection-description">
                mimictypeは「mimic（模倣・擬態）」と「type（型・形式）」を組み合わせた造語。
              </p>

                <div className="name-item">
                  <h4 className="name-title">mimic（ミミック）</h4>
                  <p className="name-description">
                    既存の技術や要素を巧みに組み合わせ、あたかも本物のように機能するものを意味する。
                    ゼロからすべてを作らなくても、手元にあるものでそれらしく動かすことはできる。
                    mimictypeの思想の根幹には、「目的達成のためなら、見せかけでも構わない」という柔軟な実現主義がある。
                  </p>
                </div>
                
                <div className="name-item">
                  <h4 className="name-title">type（タイプ）</h4>
                  <p className="name-description">
                    IT業界で広く使われる「型（データ型）」を指す専門用語。
                    この言葉を加えることで、技術・開発・IT分野との結びつきを自然に連想させる名前となっている。
                    また、Prototype（プロトタイプ）の進化形という意味合いも内包し、「素早く、かたちにする」というスタンスを象徴している。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">理念</h3>
              <div className="philosophy">
                <p className="philosophy-text">
                  目的はひとつ、方法は無限。<br />
                  目的を達成するために、必ずしもゼロから全てを作る必要はない。<br />
                  既存の技術も、既製品も、時には迂回路さえも、最速で目的地にたどり着くための手段になる。<br />
                  mimictypeは、「突破」より「発想の転換」で、限界の先に行く。
                </p>
              </div>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">代表紹介</h3>
              <div className="representative">
                <div className="representative-flex">
                  <img src="/sho2.jpg" alt="林 翔" className="representative-photo" />
                  <div className='representative-info'>
                    <h4 className="representative-name">林　翔</h4>
                    <h4 className="representative-name-yomi">Hayashi Sho</h4>
                    <p className='representative-text'>s@mimictype.com</p>
                    <p className='representative-text'>ITの力でこの世界を変えたい</p>
                    
                    
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

export default AboutPage;
