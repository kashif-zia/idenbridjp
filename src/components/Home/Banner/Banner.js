import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import 'components/Home/Banner/banner.scss'
import { Link } from 'react-router-dom'
import bannerImg from 'assets/videos/main_visual-movie.webp'

export default function Banner() {
	const { t } = useTranslation('common')
	return (
		<section className='main-banner'>
			<Container>
				<div className='custom-row'>
					<div className='text-col'>
						<div className='banner-h1'>
							<h1 className='mb-0'>Update</h1>
							<h1 className='mb-0'>the future</h1>
							<h1>in style</h1>
						</div>
						<div className='banner-text'>
							<p>
								当社は<span>『Innovation × Strategy × Growth』</span>を結びつけた
								​【ビジネスソリューションの究極の実現】企業です。
							</p>
						</div>
						<div className='banner-btn'>
							<Link to='/contact' className='contact-btn'>
								{t('banner.inquiry')}
							</Link>
						</div>
					</div>
					<div className='video-col'>
							<img src='https://emailimages.idenbrid.com/images/assets/main_visual-movie.webp' alt='banner' className='banner-video' />
					</div>
				</div>
			</Container>
		</section>
	)
}
