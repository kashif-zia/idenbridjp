import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
// import CardDeck from "react-bootstrap/Card";
import "components/Home/Blog/blog.scss";
import { Link } from "react-router-dom";
import Blog1 from 'assets/images/blog/blog1.png';
import Blog2 from 'assets/images/blog/blog2.png';
import Blog3 from 'assets/images/blog/blog3.png';
import { ReactSVG } from "react-svg";
import RightArow from "assets/images/right-arrow-icon.svg";
import ConstructionImage from "assets/images/under-construction-icon.png";
import Modal from "react-bootstrap/Modal";

export default function Blog() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className='section-blog-listing'>
      <Container className='p-0'>
        <div className='blog-heading'>
          <h3> ブログ </h3>
        </div>
        <div className='blog-section-header'>
          <div className='blog-title'>
            <p> IDENBRID BLOG </p>
          </div>
          <div className='blog-view-more-button'>
            <Link  onClick={handleShow}>
              View More <ReactSVG className='right-arrow' src={RightArow} alt='iconimage' />
            </Link>
          </div>
        </div>
        <Row className='m-0'>
          <Col  sm={12} md={4} lg={4} xl={4}>
            <Card className='blog-card'>
              <Card.Img loading="lazy" variant='top' src={Blog1} alt='Blog' />
              <Card.Body className='blog-card-body'>
                <Card.Text>UI/UXデザインがビジネスにもたらす価値 - IDENBRIDが創る魅力的なアプリ開発</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className='blog-category-btn'>
                  <Link>UI/UX</Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <Card className='blog-card'>
              <Card.Img loading="lazy" variant='top' src={Blog2} alt='Blog' />
              <Card.Body className='blog-card-body'>
                <Card.Text>スマホアプリ開発がビジネスにもたらすメリットとは？</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className='blog-category-btn'>
                  <Link>アプリ開発</Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={4}  lg={4} xl={4}>
            <Card className='blog-card'>
              <Card.Img loading="lazy" variant='top' src={Blog3} />
              <Card.Body className='blog-card-body'>
                <Card.Text>コスト削減と品質向上の両立！IDENBRIDが提供するオフショア開発サービスの魅力</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className='blog-category-btn'>
                  <Link>オフショア開発</Link>
                </div>
              </Card.Footer>
            </Card>
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
