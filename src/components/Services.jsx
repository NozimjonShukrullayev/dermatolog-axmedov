import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { FaCalendarCheck, FaPhoneAlt, FaUserMd } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const allServices = [
	{
		icon: <FaUserMd className='text-4xl text-primary' />,
		title: 'Diagnostika',
		description: 'Zamonaviy uskunalar yordamida teri holatini tekshirish',
	},
	{
		icon: <FaCalendarCheck className='text-4xl text-primary' />,
		title: 'Davolash',
		description:
			'Individual yondashuv asosida davolash dasturini ishlab chiqish',
	},
	{
		icon: <FaPhoneAlt className='text-4xl text-primary' />,
		title: 'Online va offline konsultatsiya',
		description: 'Professional shifokorlar bilan maslahat va monitoring',
	},
]

function Services() {
	const controls = useAnimation()
	const [, inView] = useInView()

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<section
			id='services'
			className='py-16 bg-gradient-to-b from-white to-primary/20'
		>
			<div className='container mx-auto px-6'>
				<h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12'>
					Bizning Xizmatlar
				</h2>
				<div className='grid md:grid-cols-3 gap-8'>
					{allServices.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2'
						>
							<div className='flex flex-col items-center'>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
									{service.icon}
								</div>
								<h3 className='text-base md:text-xl font-semibold mb-4'>
									{service.title}
								</h3>
								<p className='text-gray-600 text-center'>
									{service.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
