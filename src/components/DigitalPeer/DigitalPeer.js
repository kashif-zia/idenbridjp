import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "components/DigitalPeer/digitalpeer.scss";
import Carimport from "assets/images/inhouseproducts/banner.png";
import Itorchard from "assets/images/inhouseproducts/itorchard.png";
import ProductTabIcon from "assets/images/inhouseproducts/product-right-arr-icon.svg";
import { Link } from "react-router-dom";
import RightArrow from "assets/images/right-arrow-icon.svg";
import { ReactSVG } from "react-svg";
import realestate from "assets/images/inhouseproducts/realestate.png";
import ConstructionImage from "assets/images/under-construction-icon.png";
import Modal from "react-bootstrap/Modal";

export default function DigitalPeer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className='section-digital-peer'>
        <div className='section-digital-peer-content'>
          <Container>
            <Row className='digitalpeer-above m-0'>
              <Col sm={12} md={12} lg={3} className='mb-3 custom-padding pl-0'>
                <div className='digital-peer-title'>
                  <h3>DigitalPeer</h3>
                  <span>by IDENBRID</span>
                </div>
              </Col>
              <Col sm={12} md={12} lg={9} className='mb-3 custom-padding'>
                <div className='inhouse-product-heading'>
                  <h3>Connect Everywhere with our IT Ecosystem</h3>
                </div>
                <div className='inhouse-product-desc'>
                  <p>
                    弊社IDENBRIDでは成長著しいパキスタン市場において、
                    生活に必要な様々なサービスがDPBIのID一つでなんでも利用できるというエコシステムを構築しています。
                    人口増加が急速に進むパキスタンにおいて人々の生活を支えるITインフラサービス開発を進めています。
                  </p>
                </div>
                <div className='inhouse-product-view-more-button'>
                  <Link onClick={handleShow}>
                    View More <ReactSVG src={RightArrow} alt='icon' className='rightarrow-svg' />
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className='m-0'>
              <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                <Col
                  sm={12}
                  xs={{ order: "last", span: 12 }}
                  md={{ order: "first", span: 12 }}
                  lg={3}
                  className='mb-3 custom-padding pl-0'
                >
                  <Nav variant='pills' className='flex-column'>
                    <Nav.Item>
                      <Nav.Link eventKey='first'>
                        Car Import <ReactSVG src={ProductTabIcon} alt='' />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='second'>
                        Real Estate <ReactSVG src={ProductTabIcon} alt='' />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='third'>
                        IT Orchard <ReactSVG src={ProductTabIcon} alt='' />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col
                  sm={12}
                  xs={{ order: "first", span: 12 }}
                  md={{ order: "first", span: 12 }}
                  lg={9}
                  className='mb-3 custom-padding'
                >
                  <Tab.Content>
                    <Tab.Pane eventKey='first'>
                      <img loading="lazy" src={Carimport} alt='img' width='100%' className='product-img' />
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>
                      <img loading="lazy" src={realestate} alt='img' width='100%' className='product-img' />
                    </Tab.Pane>
                    <Tab.Pane eventKey='third'>
                      <img loading="lazy" src={Itorchard} alt='img' width='100%' className='product-img' />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Tab.Container>
            </Row>
          </Container>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby='contained-modal-title-vcenter'
          centered
          className='under-construction'
        >
          <Modal.Header closeButton className='closebtnModal'></Modal.Header>
          <Modal.Body>
            <div className='mb-3'>
              <img loading="lazy" className='ConstructionImage' src={ConstructionImage} alt='iconimage' />
            </div>
            The page is currently under development. Please be patient and wait.
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}
