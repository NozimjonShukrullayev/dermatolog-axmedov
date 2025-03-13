import React, { Fragment, useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollTopBtn() {
	const [isVisibleScrollTop, setIsVisibleScrollTop] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (250 <= window.scrollY) {
				setIsVisibleScrollTop(true)
			} else {
				setIsVisibleScrollTop(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleScrollTop = () => {
		window.scrollTo({ top: 0 })
	}

	return (
		<Fragment>
			{isVisibleScrollTop && (
				<button
					className='bg-primary z-50 border border-white shadow-2xl p-4 cursor-pointer fixed bottom-7 right-7 rounded-full'
					onClick={handleScrollTop}
				>
					<FaArrowUp className='text-white text-2xl' />
				</button>
			)}
		</Fragment>
	)
}

export default ScrollTopBtn
