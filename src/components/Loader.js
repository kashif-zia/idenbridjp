import React, { useState, useEffect } from 'react'
// import { RotateSpinner } from 'react-spinners-kit'
import LoaderImg from 'assets/images/logo_introduction.png'

function Overlay() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false)
		}, 3000)
		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className='overlay'>
			{loading ? (
				<div className='spinnerContainer'>
					<div className='spinner'>
						<img src={LoaderImg} alt='logo' />
					</div>
				</div>
			) : null}
		</div>
	)
}

export default Overlay
