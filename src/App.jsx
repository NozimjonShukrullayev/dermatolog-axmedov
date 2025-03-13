import { useAnimation } from 'framer-motion'
import React, { Fragment, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ToastContainer } from 'react-toastify'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import PreLoader from './components/PreLoader'
import Results from './components/Results'
import ScrollTopBtn from './components/ScrollTopBtn'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import YoutubeVideos from './components/YoutubeVideos'

function App() {
	const controls = useAnimation()
	const [, inView] = useInView()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<Fragment>
			{isLoading ? (
				<PreLoader />
			) : (
				<Fragment>
					<ToastContainer position='top-center' />
					<div className='min-h-screen bg-gradient-to-b from-primary/5 to-white'>
						<Header />
						<Hero />
						<Results />
						<Services />
						<Gallery />
						<YoutubeVideos />
						<Testimonials />
						<Contact />
						<Footer />
						<Fragment>
							<ScrollTopBtn />
						</Fragment>
					</div>
				</Fragment>
			)}
		</Fragment>
	)
}

export default App
