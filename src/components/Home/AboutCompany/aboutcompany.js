import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'components/Home/AboutCompany/aboutcompany.scss';
import idenceo from 'assets/images/iden_0065.png';
import idenframe from 'assets/images/idenframe.png';
import officeaccess from 'assets/images/office-access.png';
import member from 'assets/images/member.png';
import company from 'assets/images/comppany-profile.png';
import ceoimage from 'assets/images/memebers/ceosouga.png';
import cdoimage from 'assets/images/memebers/cdo-image.png';
import profileimage from 'assets/images/memebers/profile-image.png';
import profileimage2 from 'assets/images/memebers/profileimage2.png';
import Hamzaishfaq from 'assets/images/memebers/devhamza.png';
import Azeem from 'assets/images/memebers/devazeem.png';
import Faizan from 'assets/images/memebers/bdfaizan.png';
import Arshia from 'assets/images/memebers/hrarshia.png';
import Snobar from 'assets/images/memebers/hrsnobar.png';
import Hira from 'assets/images/memebers/bdhira.png';
import Bushra from 'assets/images/memebers/hrbushra.png';
import RightArow from 'assets/images/right-arrow-icon.svg';
import Shan from 'assets/images/memebers/officeshan.png';
import Shahnwaz from 'assets/images/memebers/officeshahnawaz.png';
import Ahmad from 'assets/images/memebers/pmahmad.png';
import Kashif from 'assets/images/memebers/devkashif.png';
import Waleed from 'assets/images/memebers/waleed.png';
import AhmadZahid from 'assets/images/memebers/Ahmad.png';
import hmzaSiddique from 'assets/images/memebers/hmzaSiddique.png';
import Zain from 'assets/images/memebers/Zain.png';
import {ReactSVG} from 'react-svg';
import {LazyLoadImage} from 'react-lazy-load-image-component';

export default function aboutcompany() {
  return (
    <section className='aboutcompany-section'>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={5}>
            <span className='about-subtext'>IDENBRIDについて</span>
            <h2 className='about-h2'>About IDENBRID</h2>
            <div className='divider'></div>
            <p className='about-text'>
              IDENBRIDについての企業情報、 <br />
              方針・取り組みなどを掲載しています。
            </p>
            <Link to='/company' className='about-viewbtn'>
              View More
            </Link>
          </Col>

          <Col xs={12} sm={12} md={8} lg={7}>
            <div className='top-cards'>
              <Card className='custom-card-left'>
                <Link to='/message'>
                  <Card.Img loading="lazy" variant='top' src={idenceo} className='cardImage-left' alt='About Company' />
                  <Card.Body>
                    <Card.Title>トップメッセージ</Card.Title>
                    <Card.Text>当社のめざす経営方針をお伝えします</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card className='custom-card-right'>
                <Link to='/'>
                  <Card.Img loading="lazy" variant='top' src={idenframe} className='cardImage-right' alt='About Company' />
                  <Card.Body>
                    <Card.Title>経営理念</Card.Title>
                    <Card.Text>IDENBRIDの「ミッション」「ビジョン」「バリュー」をご紹介します。</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </div>
            <div className='bottom-cards'>
              <Card style={{width: '14rem'}} className='bg-dark text-white border-0'>
                <Link to='/about-company'>
                  <Card.Img loading="lazy" src={company} alt='Card image' className='company-img' />
                  <Card.ImgOverlay className='company-img-overlay'>
                    <Card.Title className='imageover-text'>会社概要</Card.Title>
                  </Card.ImgOverlay>
                </Link>
              </Card>
              <Card style={{width: '14rem'}} className='bg-dark text-white border-0'>
                <Link to='/member'>
                  <Card.Img loading="lazy" src={member} alt='Card image' className='member-img' />
                  <Card.ImgOverlay className='member-img-overlay'>
                    <Card.Title className='imageover-text'>メンバー</Card.Title>
                  </Card.ImgOverlay>
                </Link>
              </Card>
              <Card style={{width: '14rem'}} className='bg-dark text-white border-0'>
                <Link to='/office-access'>
                  <Card.Img loading="lazy" src={officeaccess} alt='Card image' className='office-img' />
                  <Card.ImgOverlay className='office-img-overlay'>
                    <Card.Title className='imageover-text'>オフィス&アクセス</Card.Title>
                  </Card.ImgOverlay>
                </Link>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='member-slider-section'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='member-heading-box'>
                <div className='member-heading'>
                  <h2 className='member-h2'>IDENBRID Member</h2>
                  <p className='member-subtext'>メンバー紹介</p>
                </div>
                <div className='viewmore-lightbtn'>
                  <Link to='/member'>
                    View More
                    <ReactSVG loading="lazy" className='right-arrow' src={RightArow} alt='iconimage' />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className='slider-container'>
          <Row>
            <Col>
              <Swiper
                spaceBetween={0}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1600: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                // pagination={{
                //   clickable: true,
                // }}

                modules={[Autoplay]}
                className='mySwiper'>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={ceoimage} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={cdoimage} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={profileimage} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={profileimage2} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Ahmad} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Bushra} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Arshia} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Snobar} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Hira} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Hamzaishfaq} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Kashif} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Azeem} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Waleed} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={AhmadZahid} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={hmzaSiddique} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Zain} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Faizan} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Shan} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
                <SwiperSlide>
                  <LazyLoadImage className='member-img' src={Shahnwaz} alt='memberimage' style={{width: '100%'}} />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
