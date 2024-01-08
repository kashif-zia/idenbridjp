import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "assets/css/service.scss";
import DSP from "assets/images/services/dsp-service.png";
import POA from "assets/images/services/poa-service.png";
import jpFlag from "assets/images/flags/jpFlag.svg";
import paskitanFlag from "assets/images/flags/paskitanFlag.svg";
import globalFlag from "assets/images/flags/globalFlag.svg";
import RightArow from "assets/images/right-arrow-icon.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import DigitalPeer from "components/DigitalPeer/DigitalPeer.js";
import CalltoAction from "components/CalltoAction/calltoaction";
import PageHeader from "components/PageHeader/PageHeader";
import { Helmet } from "react-helmet";
import ConstructionImage from "assets/images/under-construction-icon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-bootstrap/Modal";
import { ReactSVG } from "react-svg";

export default function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Helmet>
        <title>合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド</title>
        <meta
          name='description'
          content='“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。'
        />
      </Helmet>
      <section className='section-services'>
        <div className='service-bg-img'></div>

        <PageHeader title='Services' subtext='事業紹介' />
        <Container fluid className='p-0'>
          <div className='service-card'>
            <div className='services-card-content'>
              <div className='service-image'>
                <LazyLoadImage className='service-img' src={DSP} alt='serviceimage' />
              </div>
              <Col md={12} lg={9} className='p-0'>
                <div className='about-service-left'>
                  <Row className='m-0'>
                    <Col md={5} className='p-0'>
                      <div className='about-service-left-content'>
                        <div className='business-name'>
                          <h3>受託開発サービス</h3>
                        </div>
                        <div className='business-title'>
                          <p>DSP：Data Solution Program</p>
                        </div>
                        <div className='country-flags'>
                          <div className='services-country-flags'>
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
                    <Col md={7} className='p-0'>
                      <div className='about-service-right-content'>
                        <div className='business-desc'>
                          <p>
                            受託開発「DSP」はお客様のユーザーペインつまりはビジネス課題に寄り添い、ITソリューションを通じてデータ・数値を改善する観点よりシステムやアプリの開発をします。
                          </p>
                          <div className='about-idenbrid-button'>
                            <Link to="/dsp">
                              View More
                              <ReactSVG className='right-arrow' src={RightArow} alt='iconimage' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>

            <div className='services-card-content'>
              <div className='service-image'>
                <LazyLoadImage className='service-img' src={POA} alt='serviceimage' />
              </div>
              <Row className='m-0'>
                <Col md={3} className='p-0'></Col>
                <Col md={12} lg={9} className='p-0'>
                  <div className='about-service-left about-service-right'>
                    <Row className='m-0'>
                      <Col md={5} className='p-0'>
                        <div className='about-service-left-content'>
                          <div className='business-name'>
                            <h3>パキスタンオフショア開発 </h3>
                          </div>
                          <div className='business-title'>
                            <p>POA：Pakistan Offshore Augmentation</p>
                          </div>
                          <div className='country-flags'>
                            <div className='services-country-flags'>
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
                      <Col md={7} className='p-0'>
                        <div className='about-service-right-content'>
                          <div className='business-desc'>
                            <p>
                              オフショア開発「POA」は弊社のパキスタンにおける最高峰ITエンジニアをご提供し、システムからアプリ開発まで企業の開発の加速をお手伝いします。
                            </p>
                            <div className='about-idenbrid-button'>
                              <Link to='/poa'>
                                View More
                                <ReactSVG  className='right-arrow' src={RightArow} alt='iconimage' />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <Container fluid className='space p-0'>
          <DigitalPeer />
        </Container>
        <CalltoAction />
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='under-construction'>
        <Modal.Header closeButton className='closebtnModal'></Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <img loading="lazy" className='ConstructionImage' src={ConstructionImage} alt='iconimage' />
          </div>
          The page is currently under development. Please be patient and wait.
        </Modal.Body>
      </Modal>
    </div>
  );
}
