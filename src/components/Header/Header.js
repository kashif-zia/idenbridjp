import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "components/Header/header.scss";
import Image from "assets/images/idenbrid-logo.svg";
import SideMenu from "components/Header/SideMenu.js";

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTranslator = () => {
    if (isEnglish) {
      i18n.changeLanguage("jp");
      setIsEnglish(false);
    } else {
      setIsEnglish(true);
      i18n.changeLanguage("en");
    }
  };
  return (
    <header className='main-header'>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container fluid>
          <Link to='/' className='idenbrid-logo'>
            <img loading="lazy" src={Image} width='186px' alt='idenbrid-logo' className='main-logo' />
          </Link>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <div className={`hamburger-menu ${isVisible ? "visible" : ""}`}>
            <div className='humbger-btn' onClick={toggleMenu}>
              <div className='menu-icon'>
                <div className={isMenuOpen ? "cross" : ""}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <SideMenu isOpen={isMenuOpen} closeNavbar={toggleMenu} />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link to='/service' className='nav-link'>
                <div className='menu-item'>
                  <span className='menu-name'>Services</span>
                  <span className='jp-text'>事業紹介</span>
                </div>
              </Link>
              <Link to="#" className="nav-link">
                <div className="menu-item">
                  <span className="menu-name">Work</span>
                  <span className="jp-text">実績</span>
                </div>
              </Link>
              <Link to='/about' className='nav-link'>
                <div className='menu-item'>
                  <span className='menu-name'>About</span>
                  <span className='jp-text'>会社情報</span>
                </div>
              </Link>
              <Link to="#" className="nav-link">
                <div className="menu-item">
                  <span className="menu-name">Blog</span>
                  <span className="jp-text">ブログ</span>
                </div>
              </Link>
              <Link to="#" className="nav-link">
                <div className="menu-item">
                  <span className="menu-name">News</span>
                  <span className="jp-text">お知らせ</span>
                </div>
              </Link>
              <Link to='/careers' className='nav-link'>
                <div className='menu-item'>
                  <span className='menu-name'>Careers</span>
                  <span className='jp-text'>採用</span>
                </div>
              </Link>
              <div className='btns-group'>
                <Link to='/contact' className='contact-btn'>
                  {t("navbar.inquiry")}
                </Link>
                <button className='lang-button' onClick={toggleTranslator}>
                  <span className={"lang-en " + (isEnglish && "active")}>EN </span>
                  <span className='lang-slash'> / </span>
                  <span className={"lang-jp " + (!isEnglish && "active")}> JP</span>
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
