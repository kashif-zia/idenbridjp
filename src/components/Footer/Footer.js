import React from "react";
import "components/Footer/footer.scss";
import { Container, Row, Col }  from "react-bootstrap";
import Image from "assets/images/idenbrid-logo.svg";
import line from "assets/images/white-line.svg";
import mail from "assets/images/white-mail.svg";
import twitter from "assets/images/twitter.svg";
import youtube from "assets/images/youtube.svg";
import linkedin from "assets/images/linkedin.svg";
import facebook from "assets/images/facebook.svg";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Header() {
  return (
    <footer className="main-footer">
      <Container fluid>
        <Row>
          <Col>
            <div className="footertop-area">
              <div className="footer-logo">
              <Link to="/" className="idenbrid-logo">
                <LazyLoadImage src={Image} width="186px" alt="idenbrid-logo" />
                </Link>
              </div>
              <div className="socialbtn-group">
                <a href="https://lin.ee/VXTRVnC"  className="footer-btn" target="_blank" rel="noreferrer">
                  <LazyLoadImage src={line} width="20" alt="line-icon" />
                  LINEでお問い合わせ
                </a> 
                <Link to="/contact" className="footer-btn">
                  <LazyLoadImage src={mail} width="20" alt="mail-icon" />
                  お問い合わせフォーム
                </Link>
              </div> 
            </div>
            <div className="footer-menu-list">
              <div className="footer-menu"><Link to="/service" className="nav-link">Services</Link></div>
              {/* <div className="footer-menu"><Link to="/work" className="nav-link">Work</Link></div> */}
              <div className="footer-menu"><Link to="/about-company" className="nav-link">Company</Link></div>
              {/* <div className="footer-menu"><Link to="/blog" className="nav-link">Blog</Link></div> */}
              {/* <div className="footer-menu"><Link to="/news" className="nav-link">News</Link></div> */}
              <div className="social-icons">
                <div className="twitter-icon">
                  <a href="https://twitter.com/idenbridinc" target="_blank" rel="noreferrer"><ReactSVG src={twitter} width="20" alt="twitter-icon" /></a>
                </div>
                <div className="youtube-icon">
                <a href="https://www.youtube.com/channel/UC5ENsxgAQIqVfBIMy-Fp-0w" target="_blank" rel="noreferrer"><ReactSVG src={youtube} width="20" alt="youtube-icon" /></a>
                </div>
                <div className="linkedin-icon">
                <a href="https://www.linkedin.com/company/idenbrid" target="_blank" rel="noreferrer"><ReactSVG src={linkedin} width="20" alt="linkedin-icon" /></a>
                </div>
                <div className="facebook-icon">
                <a href="https://www.facebook.com/idenbrid/" target="_blank" rel="noreferrer"><ReactSVG src={facebook} width="20" alt="facebook-icon" /></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="copyright">
              <p className="m-0">
                ©IDENBRID INC. , 2023. ALL RIGHTS RESERVED.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
