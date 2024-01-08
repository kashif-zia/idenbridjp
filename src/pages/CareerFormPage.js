import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { toast } from 'react-toastify'
import { ColorRing } from 'react-loader-spinner'
import 'assets/css/careerpage.scss'
import PageHeader from 'components/PageHeader/PageHeader'
import { Form, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function CareerPage() {
	const location = useLocation()
	const [isLoading, setLoading] = useState(false)
	const [careerData, setCareerData] = useState({
		applicationType: location.state.type,
		username: '',
		email: '',
		phoneNo: '',
	})
	const [errors, setErrors] = useState({
		applicationType: '',
		username: '',
		email: '',
		phoneNo: '',
	})

	const validateForm = () => {
		let newErrors = {
			applicationType: '',
			username: '',
			email: '',
			phoneNo: '',
		}

		// Perform form validation
		let isValid = true

		if (!careerData.applicationType) {
			newErrors.applicationType = 'アプリケーションの種類を選択してください。'
			isValid = false
		}

		if (!careerData.username) {
			newErrors.username = 'ユーザー名が必要です。'
			isValid = false
		}

		if (!careerData.email) {
			newErrors.email = 'Eメールが必要です。'
			isValid = false
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(careerData.email)) {
			newErrors.email = 'メールアドレスが無効です。'
			isValid = false
		}

		if (!careerData.phoneNo) {
			newErrors.phoneNo = '電話番号は必須。'
			isValid = false
		}

		setErrors(newErrors)

		return isValid
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setCareerData({ ...careerData, [name]: value })
	}
	const postCareerSubmission = async (e) => {
		e.preventDefault()
		if (!validateForm()) {
			return
		}
		try {
			setLoading(true)
			let { message } = await API.post('idenbridjpcareerapi', '/career', {
				body: careerData,
			})
			toast.success(message)
			setLoading(false)
			setCareerData({
				applicationType: '',
				username: '',
				email: '',
				phoneNo: '',
			})
		} catch (error) {
			setLoading(false)
			console.log('error', error.message)
			toast.error('Submission failed. Please retry.')
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Helmet>
				<title>合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド</title>
				<meta
					name='description'
					content='“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。'
				/>
			</Helmet>
			<section className='section-career-page'>
				<div className='career-bg-img'></div>
				<PageHeader className='mx-auto' title='Careers' subtext='採用 応募フォーム' />
				<div className='container p-0'>
					<div className='career-form-content'>
						<div className='career-title'>
							<h1>以下のフォームにご入力の上、送信をお願いします。</h1>
						</div>
						<div className='career-form'>
							<Form>
								<div className='career-form-input'>
									<div className='input-label'>
										<label htmlFor='application-type'>応募職種</label>
										<span className='label-tag'>必須</span>
									</div>
									<div className='form-input'>
										<Form.Control
											as='select'
											id='application-type'
											disabled
											name='applicationType'
											value={careerData.applicationType}
											onChange={handleChange}
											className={errors.applicationType ? 'error-validation' : ''}>
											<option value='' disabled>
												入力テキスト
											</option>
											<option value='プロジェクトマネージャー'>プロジェクトマネージャー</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
										</Form.Control>
										<span className='error'>{errors.applicationType}</span>
									</div>
								</div>
								<div className='career-form-input'>
									<div className='input-label'>
										<label htmlFor='applicant-name'>名前</label>
										<span className='label-tag'>必須</span>
									</div>
									<div className='form-input'>
										<input
											type='text'
											id='applicant-name'
											value={careerData.username}
											name='username'
											onChange={handleChange}
											className={errors.username ? 'error-validation' : ''}
										/>
										<span className='error'>{errors.username}</span>
									</div>
								</div>
								<div className='career-form-input'>
									<div className='input-label'>
										<label htmlFor='applicant-email'>メール</label>
										<span className='label-tag'>必須</span>
									</div>
									<div className='form-input'>
										<input
											type='email'
											id='applicant-email'
											value={careerData.email}
											name='email'
											onChange={handleChange}
											className={errors.email ? 'error-validation' : ''}
										/>
										<span className='error'>{errors.email}</span>
									</div>
								</div>
								<div className='career-form-input'>
									<div className='input-label'>
										<label htmlFor='applicant-phone-number'>電話番号</label>
										<span className='label-tag'>必須</span>
									</div>
									<div className='form-input'>
										<input
											type='tel'
											id='applicant-phone-number'
											value={careerData.phoneNo}
											name='phoneNo'
											onChange={handleChange}
											className={errors.phoneNo ? 'error-validation' : ''}
										/>
										<span className='error'>{errors.phoneNo}</span>
									</div>
								</div>
							</Form>
						</div>
						<div className='career-agree-title'>
							<p>
								次の「送信する」ボタンをクリックすることで、
								<Link to='/privacy' className='privacy-link'>
									プライバシーポリシー{' '}
								</Link>
								に同意したことになります。
							</p>
						</div>
						<Button
							className='career-form-submit-btn'
							variant='primary'
							disabled={isLoading}
							onClick={postCareerSubmission}>
							{!isLoading ? (
								'送信する'
							) : (
								<ColorRing
									visible={true}
									height='40'
									width='40'
									ariaLabel='blocks-loading'
									wrapperStyle={{}}
									wrapperClass='blocks-wrapper'
									colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
								/>
							)}
						</Button>
					</div>
				</div>
			</section>
		</>
	)
}
