import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "components/Home/About/about.scss";
import RightIcon from "assets/images/right-arrow-icon.svg";
import AboutIdenbrid from "assets/images/about-section-idenbrid.svg";
import { ReactSVG } from "react-svg";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function About() { 
    return (
        <section className='section-about'>
            <Container>
                <Row>
                    <Col sm={12} xs={{ order: "last", span: 12 }} md={{ order: "first", span: 8 }}>
                        <div className='about-left-col-content'>
                            <div className='about-section-title'>
                                <h1>IdentityとHybridを由来とする<br/>グローバルな会社名”アイデンブリッド”</h1>
                            </div>
                         
                           
                            <div className='about-section-desc'>
                                <p>
                                IDENBRIDではお客様のユーザーペインを<br/>
                                解決するをモットーに日々お仕事をしています。<br/>
                                日本そしてグローバルのクライアント様が<br/>
                                困っている事業課題やビジネスビジョンに<br/>
                                徹底的に向き合い、アプリやシステムにて<br/>
                                その改善をご提案します。
                                </p>
                            </div>
                            <div className='about-idenbrid-button'>
                                <Link to="/about">
                                    About IDENBRID <ReactSVG src={RightIcon} alt='icon' className="arrowright-svg"/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} mb={5} xs={{ order: "first", span: 12 }} md={{ order: "last", span: 4 }} className='my-md-auto'>
                        <div className='about-right-col-content'>
                            <LazyLoadImage src={AboutIdenbrid} alt='idenbridImage' className="aboutidenbrid-icon"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}