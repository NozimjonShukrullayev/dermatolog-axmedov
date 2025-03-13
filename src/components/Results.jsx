import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { allResults } from '../constants'

function Results() {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<section id='results' className='py-16 bg-white'>
			<div className='container mx-auto px-6'>
				<h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12'>
					Bizning natijalar raqamlarda
				</h2>
				<div className='grid md:grid-cols-4 gap-8'>
					{allResults.map((stat, index) => (
						<motion.div
							key={index}
							ref={ref}
							initial={{ opacity: 0, y: 20 }}
							animate={controls}
							variants={{
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className='text-center'
						>
							<div className='text-4xl  font-bold text-primary mb-2'>
								<CountUp end={stat.number} duration={2.5} suffix='+' />
							</div>
							<p className='text-gray-600'>{stat.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Results
