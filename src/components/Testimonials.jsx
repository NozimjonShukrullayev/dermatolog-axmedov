import React from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { Autoplay, Grid, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { allTestimonials } from '../constants'

function Testimonials() {
	return (
		<section id='testimonials' className='py-16 bg-primary/5'>
			<div className='container mx-auto px-6'>
				<h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12'>
					Mijozlarimiz fikrlari
				</h2>
				<Swiper
					modules={[Grid, Pagination, Autoplay]}
					loop={true}
					grabCursor={true}
					pagination={{ clickable: true }}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						1024: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
					}}
					autoplay={{ delay: 5000 }}
					className='testimonial-slider'
				>
					{allTestimonials.map(testimonial => (
						<SwiperSlide key={testimonial.id}>
							<div className='bg-white p-8 mb-14 rounded-2xl shadow-lg h-60 md:h-56'>
								<p className='text-gray-600 mb-4 text-lg'>{testimonial.text}</p>
								<div className='flex items-center'>
									<div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center'>
										{testimonial.name[0]}
									</div>
									<div className='ml-4'>
										<h4 className='font-semibold'>{testimonial.name}</h4>
										<div className='flex text-yellow-400'>
											{Array(testimonial.rating).fill('★')}
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Testimonials
