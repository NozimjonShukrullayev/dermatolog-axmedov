import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

function PreLoader() {
	const controls = useAnimation()
	const [, inView] = useInView()

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<motion.div
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 1 }}
			className='fixed inset-0 flex items-center justify-center bg-white z-50'
			style={{ clipPath: 'circle(100% at 50% 50%)' }}
		>
			<div className='relative'>
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{ duration: 2, repeat: 1 }}
					className='w-32 h-32 bg-primary/20 rounded-full absolute'
				/>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className='text-4xl text-primary  font-bold relative z-10'
				>
					Dermatolog Axmedov
				</motion.div>
			</div>
		</motion.div>
	)
}

export default PreLoader
