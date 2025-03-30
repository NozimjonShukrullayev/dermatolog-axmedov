import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { DoctorImg } from '../assets'

function Hero() {
	const controls = useAnimation()
	const [, inView] = useInView()

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<section className='container mx-auto px-6 py-16'>
			<div className='grid md:grid-cols-2 gap-12 items-center'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className='text-4xl md:text-5xl/tight lg:text-6xl/tight font-bold text-gray-800 mb-6'>
						<span className='text-primary'>Husnbuzarlardan xalos bo‘ling</span>{' '}
						va ishonchingizni qaytaring!
					</h1>
					<p className='text-lg font-normal text-gray-500 mb-8'>
						Husnbuzarlar va teri muammolari sizni bezovta qilyaptimi? Bizning
						tajribali dermatologimiz husnbuzarlarning sabablarini aniqlab,
						samarali davolash usullarini taklif qiladi. Teringizni sog‘lom va
						tiniq holga keltirishga yordam beramiz!
					</p>
					<a href='tel:+998910337060' className='primary-button cursor-pointer'>
						Bog'lanish
					</a>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className='relative'
				>
					<div className='blob absolute inset-0 bg-gradient-to-t from-white bg-primary/35 -z-10'></div>
					<img
						src={DoctorImg}
						alt='Doktor Axmedov'
						className='w-full rounded-2xl relative z-10'
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
