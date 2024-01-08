import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "components/CalltoAction/calltoaction.scss";
import line from "assets/images/line.svg";
import mail from "assets/images/mail.svg";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
export default function Banner() {
  return ( 
    <Container fluid className="calltoAction">
      <section className="call-to-action">
        <Container>

          <Row xs={1} sm={1}  md={2} lg={2}>
            <Col md={5}>
              <h2 className="contactus-h2">Contact US</h2>
              <p className="contactus-p">
                まずはお気軽にお問い合わせくださいLINEでも受け付けております。
              </p>
            </Col>
            <Col md={7}>
            <div className="action-btn-group">
              <a  href="https://lin.ee/VXTRVnC" className="action-btn" target="_blank" rel="noreferrer"><ReactSVG src={line} width="20" alt="line-icon" />LINEでお問い合わせ</a>
              <Link  to="/contact" className="action-btn"><ReactSVG src={mail} width="20" alt="mail-icon" />お問い合わせフォーム</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </Container>
      );
    }
      
