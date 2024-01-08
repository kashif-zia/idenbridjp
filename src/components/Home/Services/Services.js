import { React } from 'react'
import 'components/Home/Services/services.scss'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import jpFlag from 'assets/images/flags/jpFlag.svg'
import pakistanFlag from 'assets/images/flags/paskitanFlag.svg'
import globalFlag from 'assets/images/flags/globalFlag.svg'
import Dsp from 'assets/images/homeServices/dsp.png'
import SDH from 'assets/images/homeServices/sdh.png'
import LineIcon from 'assets/images/socialicons/icon_LINE.svg'
import MailIcon from 'assets/images/socialicons/mail.svg'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Services() {
	return (
		<section className='section-home-services'>
			<Container className=''>
				<Row>
					<Col sm={12} xs={{ order: 'last', span: 12 }} md={{ order: 'first', span: 5 }} className=''>
						<div className='home-services-col-left-content'>
							<div className='home-services-title'>
								<h1>受託開発サービス</h1>
							</div>
							<div className='home-services-heading'>
								<p>DSP：Data Solution Program</p>
							</div>
							<div className='home-services-country-flags'>
								<div className='flag jp'>
									<LazyLoadImage src={jpFlag} alt='flagImage' />
								</div>
								<div className='flag pk'>
									<ReactSVG src={pakistanFlag} alt='pakistanFlag' />
								</div>
								<div className='flag global'>
									<ReactSVG src={globalFlag} alt='globalFlag' />
								</div>
							</div>
							<div className='home-services-desc'>
								<p>
									受託開発「DSP」
									<br />
									はお客様のユーザーペインつまりはビジネス課題に寄り添い、
									<br />
									ITソリューションを通じてデータ・
									<br />
									数値を改善する観点よりシステムやアプリの開発をします。
								</p>
							</div>
							<div className='view-more-services-button'>
								<Link to='/dsp'>View More</Link>
							</div>
						</div>
					</Col>
					<Col sm={12} mb={5} xs={{ order: 'first', span: 12 }} md={{ order: 'last', span: 7 }} className=''>
						<div className='home-services-col-right-content'>
							<LazyLoadImage src={Dsp} alt='ServiceImage' width='100%' />
						</div>
					</Col>
				</Row>
				<hr className='home-services-divider' />
				<Row>
					<Col sm={12} xs={{ order: 'last', span: 12 }} md={{ order: 'first', span: 5 }} className=''>
						<div className='home-services-col-left-content'>
							<div className='home-services-title'>
								<h1>パキスタンオフショア開発</h1>
							</div>
							<div className='home-services-heading'>
								<p>POA：Pakistan Offshore Augmentation</p>
							</div>
							<div className='home-services-country-flags'>
								<div className='flag jp'>
									<ReactSVG src={jpFlag} alt='flagImage' />
								</div>
								<div className='flag global'>
									<ReactSVG src={globalFlag} alt='globalFlag' />
								</div>
							</div>
							<div className='home-services-desc'>
								<p>
									オフショア開発「POA」
									<br />
									は弊社のパキスタンにおける最高峰ITエンジニアをご提供し、
									<br />
									システムからアプリ開発まで企業の開発の加速をお手伝いします。
								</p>
							</div>
							<div className='view-more-services-button'>
								<Link to='/poa'>View More</Link>
							</div>
						</div>
					</Col>
					<Col sm={12} mb={5} xs={{ order: 'first', span: 12 }} md={{ order: 'last', span: 7 }} className=''>
						<div className='home-services-col-right-content'>
							<LazyLoadImage src={SDH} alt='ServiceImage' width='100%' />
						</div>
					</Col>
				</Row>
				{/* <hr className="home-services-divider" /> */}
				<div className='services-social-buttons'>
					<div className='service-line-link social-link line'>
						<a href='https://lin.ee/VXTRVnC' target='_blank' rel='noreferrer'>
							<ReactSVG src={LineIcon} alt='lineIcon' /> LINEでお問い合わせ
						</a>
					</div>
					<div className='service-mail-link social-link mail'>
						<Link to='/contact'>
							<ReactSVG src={MailIcon} alt='lineIcon' /> お問い合わせフォーム
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}
