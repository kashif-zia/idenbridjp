import { useEffect } from 'react';
import PageHeader from 'components/PageHeader/PageHeader.js';
import 'assets/css/dsp.scss';
import { Container, Row, Col } from 'react-bootstrap';
import aboutsdhImage from 'assets/images/services/dsp-service.png';
import jpFlag from 'assets/images/flags/jpFlag.svg';
import paskitanFlag from 'assets/images/flags/paskitanFlag.svg';
import globalFlag from 'assets/images/flags/globalFlag.svg';
import Calltoaction from 'components/CalltoAction/calltoaction.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet';

export default function PoaPage() {
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
      <div className='sdh-bg'></div>
      {/* Pass the subtext as a prop */}
      <PageHeader title='DSP：Data Solution Program' subtext='受託開発サービス' />
      {/* Other content */}
      <section className='aboutsdh-section'>
        <Container>
          <Row>
            <Col
              xs={{ order: 'last', span: 12 }}
              md={{ order: 'last', span: 12 }}
              lg={{ order: 'first', span: 6 }}
              className='mb-3'
            >
              <div className='box-left'>
                <h2 className='aboutsdh-h2'>
                  スマートフォンアプリ、クラウドシステム、
                  <br />
                  システム開発、UIUX設計をする
                </h2>
                <p className='aboutsdh-p'>
                  IDENBRIDではワンストップにて、ウェブシステムとスマホアプリ開発を得意とするソフトウェア開発会社です。
                  要件定義からシステム設計、UIUXデザインそして開発、またウェブからスマホそしてクラウドまで一社で完結開発致します。
                </p>
                <div className='sdhcountry-flags'>
                  <p className='flag-text'>事業展開エリア</p>
                  <div className='sdh-country-flags'>
                    <div className='flag jp'>
                      <LazyLoadImage src={jpFlag} alt='flagImage' />
                    </div>
                    <div className='flag pk'>
                      <LazyLoadImage src={paskitanFlag} alt='pakistanFlag' />
                    </div>
                    <div className='flag global'>
                      <LazyLoadImage src={globalFlag} alt='globalFlag' />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              xs={{ order: 'first', span: 12 }}
              md={{ order: 'first', span: 12 }}
              lg={{ order: 'last', span: 6 }}
              className='mb-3'
            >
              <LazyLoadImage className='aboutsdh-image' src={aboutsdhImage} alt='' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='idenbrid-developement-section'>
        <Container fluid className='p-0'>
          <Row>
            <Col md={12}>
              <div className='developement-above-sec'>
                <h2 className='dev-h2'>アイデンブリッドの開発主義</h2>
                <p className='dev-p'>
                  IDENBRIDではワンストップにて、ウェブシステムとスマホアプリ開発を得意とするソフトウェア開発会社です。
                  要件定義からシステム設計、UIUXデザインそして開発、またウェブからスマホそしてクラウドまで一社で完結開発致します
                </p>
                <p className='dev-p mb-0'>
                  要件定義、基本設計など他社が見切り発車しがちな開発の基礎となる設計・書類作成フェーズを丁寧に行い、お客様が実現されたいシステムとの乖離がないようにきちんと対応します。そして単純にソフトウェアの開発だけではなく、お客さまが何に困られているのかつまり「ユーザーペイン」をきちんとヒアリングし、その課題の解消を得意としています。
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className='p-0'>
          <Row>
            <Col md={12} className='p-0'>
              <div className='silder-item'>
                <Swiper
                  slidesPerView={1.6}
                  spaceBetween={40}
                  loop={true}
                  autoplay={true}
                  speed = {1000}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 1.3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1.18,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 1.6,
                      spaceBetween: 40,
                    },
                    1800: {
                      slidesPerView: 2.6,
                      spaceBetween: 40,
                    },
                  }}
                  className='devSlider'
                >
                  <SwiperSlide>
                    <div className='slider-box'>
                      <div className='count-no'>01</div>
                      <h3 className='slider-h3'>
                        AWSクラウド環境にて
                        <br />
                        最先端の開発から運用
                      </h3>
                      <p className='slider-p'>
                        私たちはAWSのクラウド技術を中心に 設計、開発、運用保守を行っており、
                        従来型の開発と一線を画す技術にて お客様のシステムを支えます。
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-box'>
                      <div className='count-no'>02</div>
                      <h3 className='slider-h3'>
                        お客様のビジネスビジョンを
                        <br />
                        アプリ、システムにて改善解決
                      </h3>
                      <p className='slider-p'>
                        お客様が抱えられている事業の課題や向き合おうとされている社会課題を乗り越えるためにITソルーションを提供するだけではなく、そのビジョンに寄り添います。
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-box'>
                      <div className='count-no'>03</div>
                      <h3 className='slider-h3'>
                        洗練されたモダンなUI
                        <br />
                        直感的にも使いやすいUXの実現
                      </h3>
                      <p className='slider-p'>
                        デザインはユーザーとアプリ・システムの接点であり非常に大切です。当社では利用されるユーザーが使いやすいことはもちろんのこと、初めて利用される方にも高い利便性を実現したデザインをお届けします。
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-box'>
                      <div className='count-no'>04</div>
                      <h3 className='slider-h3'>
                        ご予算、品質、そして納期
                        <br />
                        お客様の優先事項に合わせた提案
                      </h3>
                      <p className='slider-p'>
                        プロジェクトの費用そしてアプリケーションの品質、そしてリリースのための納期などお客様には譲れない要件があります。弊社ではお客様のニーズに合わせて、プロジェクトを成功させるためにユーザーファーストを徹底します。
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-box'>
                      <div className='count-no'>01</div>
                      <h3 className='slider-h3'>
                        AWSクラウド環境にて
                        <br />
                        最先端の開発から運用
                      </h3>
                      <p className='slider-p'>
                        私たちはAWSのクラウド技術を中心に 設計、開発、運用保守を行っており、
                        従来型の開発と一線を画す技術にて お客様のシステムを支えます。
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-box'>
                      <div className='count-no'>02</div>
                      <h3 className='slider-h3'>
                        お客様のビジネスビジョンを
                        <br />
                        アプリ、システムにて改善解決
                      </h3>
                      <p className='slider-p'>
                        お客様が抱えられている事業の課題や向き合おうとされている社会課題を乗り越えるためにITソルーションを提供するだけではなく、そのビジョンに寄り添います。
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-box'>
                      <div className='count-no'>03</div>
                      <h3 className='slider-h3'>
                        洗練されたモダンなUI
                        <br />
                        直感的にも使いやすいUXの実現
                      </h3>
                      <p className='slider-p'>
                        デザインはユーザーとアプリ・システムの接点であり非常に大切です。当社では利用されるユーザーが使いやすいことはもちろんのこと、初めて利用される方にも高い利便性を実現したデザインをお届けします。
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-box'>
                      <div className='count-no'>04</div>
                      <h3 className='slider-h3'>
                        ご予算、品質、そして納期
                        <br />
                        お客様の優先事項に合わせた提案
                      </h3>
                      <p className='slider-p'>
                        プロジェクトの費用そしてアプリケーションの品質、そしてリリースのための納期などお客様には譲れない要件があります。弊社ではお客様のニーズに合わせて、プロジェクトを成功させるためにユーザーファーストを徹底します。
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Calltoaction />
      </section>
    </div>
  );
}
