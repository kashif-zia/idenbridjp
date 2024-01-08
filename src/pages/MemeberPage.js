import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card} from 'react-bootstrap';
import PageHeader from 'components/PageHeader/PageHeader.js';
import 'assets/css/member.scss';
import Calltoaction from 'components/CalltoAction/calltoaction.js';
import AboutMenu from 'components/AboutMenu/aboutmenu.js';
import Ceo from 'assets/images/memebers/ceosouga.png';
import Aska from 'assets/images/memebers/cdo-image.png';
import Koji from 'assets/images/memebers/profile-image.png';
import Dai from 'assets/images/memebers/profileimage2.png';
import Ahmad from 'assets/images/memebers/pmahmad.png';
import Bushra from 'assets/images/memebers/hrbushra.png';
import Arshia from 'assets/images/memebers/hrarshia.png';
import Snobar from 'assets/images/memebers/hrsnobar.png';
import Hira from 'assets/images/memebers/bdhira.png';
import Faizan from 'assets/images/memebers/bdfaizan.png';
import Kashif from 'assets/images/memebers/devkashif.png';
import Azeem from 'assets/images/memebers/devazeem.png';
import Shahnwaz from 'assets/images/memebers/officeshahnawaz.png';
import Hamza from 'assets/images/memebers/devhamza.png';
import Waleed from 'assets/images/memebers/waleed.png';
import AhmadZahid from 'assets/images/memebers/Ahmad.png';
import hmzaSiddique from 'assets/images/memebers/hmzaSiddique.png';
import Zain from 'assets/images/memebers/Zain.png';
import Shan from 'assets/images/memebers/officeshan.png';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Helmet} from 'react-helmet';

export default function MemberPage() {
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
      <section className='section-member'>
        <div className='member-bg-img'></div>
        <div id='memeber-page-header'>
          <PageHeader title='Member' subtext='メンバー' />
        </div>
        <div className='section-member-content'>
          <Container>
            <Row className='row row-cols-2 row-cols-md-2 row-cols-lg-4'>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='CEO' src={Ceo} className='member-img' alt='CEO' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Souga Nakamura</Card.Title>
                    <Card.Text className='member-designation'>CEO</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Aska' src={Aska} className='member-img' alt='ASKA' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Aska Ikeda</Card.Title>
                    <Card.Text className='member-designation'>CDO</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Koji Endo' src={Koji} className='member-img' alt='KOJI ANDO' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Koji Endo</Card.Title>
                    <Card.Text className='member-designation'>Project Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Dai Katsumura' src={Dai} className='member-img' alt='DAI KATSUMURA' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Dai Katsumura</Card.Title>
                    <Card.Text className='member-designation'>Project Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Muhammad Ahmad' src={Ahmad} className='member-img' alt='PM AHMAD' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Muhammad Ahmad</Card.Title>
                    <Card.Text className='member-designation'>Project Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Bushra Riaz' src={Bushra} className='member-img' alt='HR BUSHRA' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Bushra Riaz</Card.Title>
                    <Card.Text className='member-designation'>HR Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Arshia Iqbal' src={Arshia} className='member-img' alt='HR ARSHIA' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Arshia Iqbal</Card.Title>
                    <Card.Text className='member-designation'>HR Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Snobar' src={Snobar} className='member-img' alt='HR Snobar' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Snobar</Card.Title>
                    <Card.Text className='member-designation'>HR Manager</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Hamza Ashfaq' src={Hamza} className='member-img' alt='HAMZA DEVELOPER' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Hamza Ashfaq</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage
                    title='Muhammad Kashif Zia'
                    src={Kashif}
                    className='member-img'
                    alt='KASHIF DEVELOPER'
                  />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Muhammad Kashif Zia</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Azeem Ul Hassan' src={Azeem} className='member-img' alt='AZEEM DEVELOPER' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Azeem Ul Hassan</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Waleed Ahmad' src={Waleed} className='member-img' alt='Waleed Ahmad' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Waleed Ahmad</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Ahmad Zahid' src={AhmadZahid} className='member-img' alt='Ahmad Zahid' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Ahmad Zahid</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage
                    title='Hamza Siddique'
                    src={hmzaSiddique}
                    className='member-img'
                    alt='Hamza Siddique'
                  />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Hamza Siddique</Card.Title>
                    <Card.Text className='member-designation'>Software Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Zain Ishtiaq' src={Zain} className='member-img' alt='Zain Ishtiaq' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Zain Ishtiaq</Card.Title>
                    <Card.Text className='member-designation'>Ui / Ux Designer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Hira Ijaz' src={Hira} className='member-img' alt='Hira Ijaz' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Hira Ijaz</Card.Title>
                    <Card.Text className='member-designation'>Business Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Faizan Haider' src={Faizan} className='member-img' alt='BD FAIZAN' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Faizan Haider</Card.Title>
                    <Card.Text className='member-designation'>Business Developer</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Shahnawaz' src={Shahnwaz} className='member-img' alt='SHAHNAWAZ ASSISTANT' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Shahnawaz</Card.Title>
                    <Card.Text className='member-designation'>CEO Assistant</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='member-col'>
                <Card className='member-card'>
                  <LazyLoadImage title='Ali Shan' src={Shan} className='member-img' alt='SHAN' />
                  <Card.Body className='member-card-body'>
                    <Card.Title className='member-name'>Ali Shan</Card.Title>
                    <Card.Text className='member-designation'>Facilities Maintenance</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <AboutMenu />
        <Calltoaction />
      </section>
    </div>
  );
}
