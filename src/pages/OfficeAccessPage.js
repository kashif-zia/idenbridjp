import { useEffect } from "react";
import PageHeader from "components/PageHeader/PageHeader.js";
import { Container, Row, Col } from "react-bootstrap";
import "assets/css/officeaccess.scss";
import AboutMenu from "components/AboutMenu/aboutmenu.js";
import Calltoaction from "components/CalltoAction/calltoaction.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import officeimage01 from "assets/images/office/office-01.png";
import officeimage02 from "assets/images/office/office-02.png";
import officeimage03 from "assets/images/office/office-03.png";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function OfficeAccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
        合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド
        </title>
        <meta
          name="description"
          content="“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。"
        />
      </Helmet>
      <div className="office-bg"></div>
      <PageHeader title="Office & Access" subtext="オフィス&アクセス" />
      <section className="office-environment-section">
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <div className="office-environment-section-content">
                <p className="office-subtext">
                  大切なのは、チームが働きたい環境構築
                </p>
                <h2 className="office-h2">Office Environment</h2>
                <div className="office-text">
                  <p>
                    私たちIDENBRID
                    INC.は、パキスタンのラホール及び日本の東京にオフィス拠点を構えるグローバルIT企業です。
                  </p>
                  <p>
                    当社はオフィスでの仕事を推奨しており、チームが一体となって仕事に取り組み、コミュニケーションを活発にとる事によって1人では解決できないような課題を全社一体となり乗り越えています。
                  </p>
                  <p>
                    そのためスタッフが心地よく仕事できるスペースづくりを大切にしており、チーム規模の拡張に合わせて日々オフィスも進化しています。
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md={12} lg={12} className="p-0">
              <Swiper
                spaceBetween={32}
                speed={1000}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                  1600: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  },
                }}
                // pagination={{
                //   clickable: true,
                // }}

                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <LazyLoadImage
                    className="office-img"
                    src={officeimage01}
                    alt="officeimage"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <LazyLoadImage
                    className="office-img"
                    src={officeimage02}
                    alt="officeimage"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage
                    className="office-img"
                    src={officeimage03}
                    alt="officeimage"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage
                    className="office-img"
                    src={officeimage01}
                    alt="officeimage"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage
                    className="office-img"
                    src={officeimage02}
                    alt="officeimage"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage
                    className="office-img"
                    src={officeimage03}
                    alt="officeimage"
                  />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
        <Container className="officemap-area">
          <Row>
            <Col lg={6}>
              <div className="office-environment-section-content">
              <p className="access-subtext">アクセス</p>
              <h2 className="access-h2">Access</h2>
              <div className="access-p">
                <p>パキスタン本社</p>
                <p className="access-address">
                  〒54000
                  <br />
                  B1F, 176 Y-Block, DHA Phase 3, Lahore
                </p>
                <p className="access-tel">
                  TEL : <a href="tel:+923064041221">(+92)03064041221</a>
                </p>
                <p className="access-mail">
                  MAIL :
                  <a href="mailto:contact@idenbrid.jp">contact@idenbrid.jp</a>
                </p>
                <p className="access-info">
                ラホール空港より車にて15分<br />
                グルバーグ市内より車にて20分
                </p>

                <p>日本支社</p>
                <p className="access-address">
                〒140-0011
                  <br />
                  東京都品川区東大井3-22-3-315
                </p>
                
                <p className="access-info">
                JR大井町駅より徒歩5分<br />
                羽田空港より20分
                </p>
                {/* <p className="acess-map-url">
                  <a
                    href="https://www.google.com/maps/place/IDENBRID+INC.+%2F+%E3%82%A2%E3%82%A4%E3%83%87%E3%83%B3%E3%83%96%E3%83%AA%E3%83%83%E3%83%89%E7%A4%BE,+Basement+1+Floor+176,+DHA+Y-block+Lahore,+54000,+Pakistan/@31.472199,74.376714,17z/data=!4m6!3m5!1s0x391907530d966bf3:0x99ab6b175fc81d7d!8m2!3d31.4721991!4d74.3767135!16s%2Fg%2F11r_xrnc9g?hl=en&gl=US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GOOGLE MAP
                  </a>
                </p> */}
              </div>
              </div>
            </Col>

            <Col lg={6}>
            <div className="office-environment-section-content">
              <iframe
                title="office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.618214275195!2d74.37514746364891!3d31.47226346153606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907530d966bf3%3A0x99ab6b175fc81d7d!2zSURFTkJSSUQgSU5DLiAvIOOCouOCpOODh-ODs-ODluODquODg-ODieekvg!5e0!3m2!1sen!2s!4v1693818124159!5m2!1sen!2s"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="map-iframe"
              />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AboutMenu />
      <Calltoaction />
    </div>
  );
}
