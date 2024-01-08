import { useEffect } from 'react';
import 'assets/css/aboutcompany.scss';
import PageHeader from 'components/PageHeader/PageHeader';
import CalltoAction from 'components/CalltoAction/calltoaction';
import AboutMenu from 'components/AboutMenu/aboutmenu';
import { Helmet } from 'react-helmet';

export default function AboutCompany() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド</title>
        <meta
          name='description'
          content='“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。'
        />
      </Helmet>
      <section className='section-about-company-page'>
        <div className='company-bg'></div>
        <PageHeader title='Company' subtext='会社概要' />
        <div className='about-company-page-content'>
          <div className='container p-0'>
            <div className='about-company-content'>
              <div className='about-japan-company-content'>
                <div className='company-title'>
                  <h1>【日本法人】</h1>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>社名</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>アイデンブリッド合同会社</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>設立</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>2023年8月1日</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>資本金</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>100万円</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>代表者</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>池田　飛鳥 / Aska Ikeda</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>住所</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>東京都品川区東大井3丁目22番3-315</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>電話</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>050-1791-9216</h4>
                  </div>
                </div>
              </div>

              <div className='about-pakistan-company-content'>
                <div className='company-title'>
                  <h1>【パキスタン本社】</h1>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>社名</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>IDENBRID INC.</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>設立</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>2020年11月</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>資本金</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>100万円</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>代表者</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>中村　奏画 / Souga Nakamura</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>住所</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>B1F Building No.176 Y block, Street 11, DHA Phase 3, Lahore, Pakistan</h4>
                  </div>
                </div>
                <div className='company-item'>
                  <div className='about-company-label'>
                    <h3>電話</h3>
                  </div>
                  <div className='about-company-desc'>
                    <h4>(+92)03064041221</h4>
                  </div>
                </div>
              </div>

              <div className='main-business-content'>
                <div className='company-title business-title'>
                  <h1>主な事業内容</h1>
                </div>
                <div className='business-desc'>
                  <ul>
                    <li>
                      {' '}
                      DSP：Webシステム開発 / スマートフォン・タブレット向けアプリケーション開発 /
                      クラウドコンピューティング・インフラ構築・運用 / システムITアーキテクチャ設計 /
                      クリエイティブデザイン・UIUX設計 / システム及びサービスの運用保守サービス
                    </li>
                    <li> POA：IT開発オフショア人材提供</li>
                    <li> DigitalPeer by IDENBRIDのアプリケーション企画・開発・運営</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutMenu />
        <CalltoAction />
      </section>
    </div>
  );
}
