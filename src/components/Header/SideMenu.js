// src/components/SideMenu.js

import React from "react";
import "components/Header/SideMenu.scss";
import footerlogo from "assets/images/side-logo.png";
import { Link } from "react-router-dom";
const SideMenu = ({ isOpen, closeNavbar }) => {
  const menuClass = isOpen ? "side-menu open" : "side-menu";
  return (
    <div className={menuClass}>
      <div className='menu-content'>
        <Link to='/' className='mobilenav-link' onClick={closeNavbar}>
          <img loading="lazy" src={footerlogo} alt='footerlogo' className='footerlogo' />
        </Link>

        {/* Add your menu items here */}
        <ul className='side-menu-list'>
          <li>
            <div className='mobilemenu-item'>
              <Link to='/service' className='mobilenav-link' onClick={closeNavbar}>
                <span className='menu-name'>Services</span>
                <span className='jp-text'>事業紹介</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="mobilemenu-item">
              <Link to="#" className="mobilenav-link" onClick={closeNavbar}>
                <span className="menu-name">Work</span>
                <span className="jp-text">実績</span>
              </Link>
            </div>
          </li>
          <li>
            <div className='mobilemenu-item'>
              <Link to='/about' className='mobilenav-link' onClick={closeNavbar}>
                <span className='menu-name'>About</span>
                <span className='jp-text'>会社情報</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="mobilemenu-item">
              <Link to="#" className="mobilenav-link" onClick={closeNavbar}>
                <span className="menu-name">Blog</span>
                <span className="jp-text">ブログ</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="mobilemenu-item">
              <Link to="#" className="mobilenav-link" onClick={closeNavbar}>
                <span className="menu-name">News</span>
                <span className="jp-text">お知らせ</span>
              </Link>
            </div>
          </li>
          <li>
            <div className='mobilemenu-item'>
              <Link to='/careers' className='mobilenav-link' onClick={closeNavbar}>
                <span className='menu-name'>Careers</span>
                <span className='jp-text'>採用</span>
              </Link>
            </div>
          </li>
        </ul>
        <div className='btns-group'>
          <Link to='/contact' className='sidebar-contact-btn' onClick={closeNavbar}>
            お問い合わせ
          </Link>
          <button className='sidelang-button'>
            <span className='sidelang-en'>EN </span>
            <span className='sidelang-slash'> / </span>
            <span className='sidelang-jp'> JP</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
