import { useEffect } from 'react';
import PageHeader from 'components/PageHeader/PageHeader.js';
import { Container, Row, Col } from 'react-bootstrap';
import CeoImage from 'assets/images/ceo-meeage.png';
import 'assets/css/message.scss';
import Calltoaction from 'components/CalltoAction/calltoaction.js';
import AboutMenu from 'components/AboutMenu/aboutmenu.js';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import linkedin from "assets/images/linkedin.svg";
import facebook from "assets/images/facebook.svg";
import { ReactSVG } from "react-svg";
export default function Message() {
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
      <div className='message-bg'></div>
      <PageHeader title='Message' subtext='代表メッセージ' />

      <section className='message-first-section'>
        <Container>
          <Row>
            <Col xs={{order: 'last', span: 12}} md={{order: 'last', span: 12}} lg={{order: 'first', span: 6}}>
              <h2 className='message-h2'>日本人が創業したパキスタンから 世界一必要とされるIT企業になる</h2>
              <div className='ceo-text'>
                <p>2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。</p>
                <p>
                  それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
                </p>
                <p>
                  毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
                </p>
                <p>
                  私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
                </p>
                <p>
                  そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
                </p>
                <p className='mb-0'>皆様のご支援、応援、何卒引き続きよろしくお願いします。</p>
              </div>
              <div className='ceo-bottom-info'>
                <p className='date'>2023年11月</p>
                <p className='comapany-name'>IDENBRID INC. CEO兼創業代表</p>
                <p className='ceo-name'>中村 奏画</p>
              </div>
            </Col>

            <Col xs={{order: 'first', span: 12}} md={{order: 'first', span: 12}} lg={{order: 'last', span: 6}}>
              <LazyLoadImage className='ceo-img' src={CeoImage} alt='' />
              <div className='social-icons'>
                <div className='facebook-icon'>
                  <a href='https://www.facebook.com/souganakamura9' target='_blank' rel='noreferrer'>
                    <ReactSVG src={facebook} width='20' alt='facebook-icon' />
                  </a>
                </div>
                <div className='linkedin-icon'>
                  <a href='https://www.linkedin.com/in/souganakamura/' target='_blank' rel='noreferrer'>
                    <ReactSVG src={linkedin} width='20' alt='linkedin-icon' />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className='message-second-section'>
        <Container>
          <Row>
            <Col sm={{ order: 'first', span: 12 }} md={{ order: 'first', span: 12 }} lg={{ order: 'first', span: 6 }}>
              <LazyLoadImage className='ceo-img' src={CeoImage} alt='' />
            </Col>
            <Col sm={{ order: 'first', span: 12 }} md={{ order: 'first', span: 12 }} lg={{ order: 'last', span: 6 }}>
              <h2 className='message-h2'>日本人が創業したパキスタンから 世界一必要とされるIT企業になる</h2>
              <div className='ceo-text'>
                <p>2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。</p>
                <p>
                  それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
                </p>
                <p>
                  毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
                </p>
                <p>
                  私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
                </p>
                <p>
                  そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
                </p>
                <p className='mb-0'>皆様のご支援、応援、何卒引き続きよろしくお願いします。</p>
              </div>
              <div className='ceo-bottom-info'>
                <p className='date'>2022年10月</p>
                <p className='comapany-name'>IDENBRID INC.創業者兼CEO</p>
                <p className='ceo-name'>中村 奏画</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <AboutMenu />
      <section>
        <Calltoaction />
      </section>
    </div>
  );
}
