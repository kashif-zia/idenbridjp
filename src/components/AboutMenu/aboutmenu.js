import React from "react";
import { Container} from "react-bootstrap";
import rightImage from "assets/images/right-arrow-icon.svg";
import "components/AboutMenu/aboutmenu.scss";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
export default function aboutmenu() {
  return (
    <Container fluid>
      <div className="about-idenbrid-box">
        <Container>
          <div>
            <h2 className="heading-box">
              <span className="about-h2">About IDENBRID</span>
              <ReactSVG className="right-arrowimg" src={rightImage} alt="" />
            </h2>
          </div>
          <div>
            <ul className="menu-idenbrid">
              <li><Link to="/message">代表メッセージ</Link></li>
              <li><Link>経営理念</Link></li>
              <li><Link to="/about-company">会社概要</Link></li>
              <li><Link to="/member">メンバー</Link></li>
              <li><Link to="/office-access">オフィス&アクセス</Link></li>
            </ul>
          </div>
        </Container>
      </div>
    </Container>
  );
}
