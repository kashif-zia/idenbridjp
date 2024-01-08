import { useEffect, useState } from 'react'
import 'assets/css/about.scss'
import PageHeader from 'components/PageHeader/PageHeader'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AboutCeo from 'assets/images/aboutpage/about-ceo.png'
import AboutCompany from 'assets/images/aboutpage/image_about_company.png'
import AboutMember from 'assets/images/aboutpage/image_about_member.png'
import AboutOffice from 'assets/images/aboutpage/image_about_office.png'
import AboutPhilosophy from 'assets/images/aboutpage/image_about_philosophy.svg'
import CalltoAction from 'components/CalltoAction/calltoaction'
import ConstructionImage from 'assets/images/under-construction-icon.png'
import Modal from 'react-bootstrap/Modal'
import { Helmet } from 'react-helmet'

export default function AboutPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<div>
			<Helmet>
				<title>合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド</title>
				<meta
					name='description'
					content='“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。'
				/>
			</Helmet>
			<section className='section-about-page'>
				<div className='about-bg-img'></div>
				<PageHeader title='About' subtext='企業情報' />
				<div className='section-about-page-content'>
					<div className='container'>
						<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
							<Col className='about-page-col'>
								<Link to='/message'>
									<Card className='about-page-card border-right'>
										<Card.Img variant='top' src={AboutCeo} />
										<Card.Body className='about-card-body'>
											<Card.Title className='about-card-title'>代表メッセージ</Card.Title>
											<Card.Text className='about-card-text'>弊社CEO中村のメッセージをお伝えします。</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>

              <Col className='about-page-col'>
                <Link to='/company'>
                  <Card className='about-page-card border-right'>
                    <Card.Img variant='top' src={AboutCompany} />
                    <Card.Body className='about-card-body'>
                      <Card.Title className='about-card-title'>経営理念</Card.Title>
                      <Card.Text className='about-card-text'>IDENBRIDの経営理念をご紹介します。</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

							<Col className='about-page-col'>
								<Link to='/about-company'>
									<Card className='about-page-card'>
										<Card.Img variant='top' src={AboutMember} />
										<Card.Body className='about-card-body'>
											<Card.Title className='about-card-title'>会社概要</Card.Title>
											<Card.Text className='about-card-text'>IDENBRIDの基本的な情報をご紹介します。</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>

							<Col className='about-page-col'>
								<Link to='/member'>
									<Card className='about-page-card border-right'>
										<Card.Img variant='top' src={AboutOffice} />
										<Card.Body className='about-card-body'>
											<Card.Title className='about-card-title'>メンバー</Card.Title>
											<Card.Text className='about-card-text'>IDENBRIDの社員をご紹介します。</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>

							<Col className='about-page-col'>
								<Link to='/office-access'>
									<Card className='about-page-card border-right'>
										<Card.Img variant='top' src={AboutPhilosophy} />
										<Card.Body className='about-card-body'>
											<Card.Title className='about-card-title'>オフィス&アクセス</Card.Title>
											<Card.Text className='about-card-text'>
												弊社のオフィス、会社アクセスについてご紹介します。
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						</div>
					</div>
				</div>
				<CalltoAction />
			</section>
			<Modal
				show={show}
				onHide={handleClose}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				className='under-construction'>
				<Modal.Header closeButton className='closebtnModal'></Modal.Header>
				<Modal.Body>
					<div className='mb-3'>
						<img className='ConstructionImage' src={ConstructionImage} alt='iconimage' />
					</div>
					The page is currently under development. Please be patient and wait.
				</Modal.Body>
			</Modal>
		</div>
	)
}
