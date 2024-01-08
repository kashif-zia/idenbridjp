import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import RightArow from "assets/images/right-arrow-icon.svg";
import "components/Home/News/news.scss";
import { ReactSVG } from "react-svg";
import ConstructionImage from "assets/images/under-construction-icon.png";
import Modal from "react-bootstrap/Modal";

export default function News() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="news-section">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={3} lg={2} className="mb-sm-3">
            <h2 className="news-h2">News</h2>
            <div className="viewmore-button"> 
              <Link onClick={handleShow}>
                View More
                <ReactSVG className="right-arrow" src={RightArow} alt="iconimage" />
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={9} lg={10}>
          <Row>
            <div className="news-box">
            
              <div className="news-item">
                <div className="meta-info">
                  <span className="news-date">2023.01.05</span>
                  <span className="news-category">NEWS</span>
                </div>
                <p className="news-text">2022年8月稼働について</p>
              </div>

              <div className="news-item">
                <div className="meta-info">
                  <span className="news-date">2023.01.05</span>
                  <span className="news-category">NEWS</span>
                </div>
                <p className="news-text">IdenSpire（パキスタンにおけるプログラミング教室）サービス開始</p>
              </div>

              <div className="news-item">
                <div className="meta-info">
                  <span className="news-date">2023.01.05</span>
                  <span className="news-category">NEWS</span>
                </div>
                <p className="news-text">IdenSpire（パキスタンにおけるプログラミング教室）サービス開始</p>
              </div>

              <div className="news-item">
                <div className="meta-info">
                  <span className="news-date">2023.01.05</span>
                  <span className="news-category">NEWS</span>
                </div>
                <p className="news-text">ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト</p>
              </div>

              <div className="news-item">
                <div className="meta-info">
                  <span className="news-date">2023.01.05</span>
                  <span className="news-category">NEWS</span>
                </div>
                <p className="news-text">IdenSpire（パキスタンにおけるプログラミング教室）サービス開始</p>
              </div>

              <div className="news-item">
                <div className="meta-info">
                  <span className="news-date">2023.01.05</span>
                  <span className="news-category">NEWS</span>
                </div>
                <p className="news-text">IdenSpire（パキスタンにおけるプログラミング教室）サービス開始</p>
              </div>
            
            </div>
            </Row>
          </Col>
        
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="under-construction"
      >
        <Modal.Header closeButton className="closebtnModal"></Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <img
              loading="lazy"
              className="ConstructionImage"
              src={ConstructionImage}
              alt="iconimage"
            />
          </div>
          The page is currently under development. Please be patient and wait.
        </Modal.Body>
      </Modal>
    </section>
  );
}


