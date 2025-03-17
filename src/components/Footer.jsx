import React from 'react'
import { FaInstagram, FaTelegram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { Logo } from '../assets'

function Footer() {
	return (
		<footer className='bg-primary text-white pt-16 pb-4 relative overflow-hidden'>
			<div className='container mx-auto px-6 relative z-10'>
				<div className='grid md:grid-cols-4 gap-12'>
					<div className='col-span-2'>
						<a href='/' className='mb-6 inline-block'>
							<img
								src={Logo}
								alt='Dermatolog Axmedov'
								className='w-44 filter brightness-0 invert'
							/>
						</a>
						<p className='text-white/80 mb-6 text-base md:text-lg'>
							Professional teri shifokori bilan teringizdagi kasalliklardan
							xalos bo'ling
						</p>
						<ul className='flex space-x-4'>
							<li>
								<a
									href='https://www.instagram.com/dermatolog_axmedov?igsh=a25oZnZvaXF5N285'
									className='text-white hover:text-white/80'
									target='_blank'
								>
									<FaInstagram size={24} />
								</a>
							</li>
							<li>
								<a
									href='https://t.me/doctor_axmedov'
									className='text-white hover:text-white/80'
									target='_blank'
								>
									<FaTelegram size={24} />
								</a>
							</li>
							<li>
								<a
									href='https://www.youtube.com/@Dermatolog_Axmedov'
									className='text-white hover:text-white/80'
									target='_blank'
								>
									<FaYoutube size={24} />
								</a>
							</li>
							<li>
								<a
									href='https://www.tiktok.com/@dermatolog_axmedov?_t=8rZjUSn8nSh&_r=1'
									className='text-white hover:text-white/80'
									target='_blank'
								>
									<FaTiktok size={24} />
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg  font-semibold mb-4'>Tezkor Havolalar</h3>
						<ul className='space-y-2'>
							<li>
								<a href='#services' className='hover:text-white/80'>
									Xizmatlar
								</a>
							</li>
							<li>
								<a href='#our-clinic' className='hover:text-white/80'>
									Bizning klinika
								</a>
							</li>
							<li>
								<a href='#results' className='hover:text-white/80'>
									Natijalar
								</a>
							</li>
							<li>
								<a href='#testimonials' className='hover:text-white/80'>
									Mijozlar fikri
								</a>
							</li>
							<li>
								<a href='#contact' className='hover:text-white/80'>
									Bog'lanish
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg  font-semibold mb-4'>Bog'lanish</h3>
						<ul className='space-y-2'>
							<li>Samarqand shahri, Royal Med klinikasi</li>
							<li>
								<a href='tel:+998910337060'>+998 91 033 70-60</a>
							</li>
							<li>Ish vaqti: 6/1 09:00 dan 17:00 gacha</li>
						</ul>
					</div>
				</div>
				<hr className='my-4' />
				<div className=''>
					<p className='font-normal text-xs md:text-base'>
						© {new Date().getFullYear()} Dermatolog Axmedov. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
