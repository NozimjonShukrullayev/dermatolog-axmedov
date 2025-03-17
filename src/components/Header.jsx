import React from 'react'
import { Logo } from '../assets'

function Header() {
	return (
		<header className='bg-white shadow-lg sticky top-0 z-50'>
			<nav className='container mx-auto px-6 py-1'>
				<div className='flex items-center justify-between'>
					{/* logo */}
					<a href='/' className='flex items-center logo'>
						<img src={Logo} alt='logo' className='w-44' />
					</a>
					<div className='hidden md:flex md:items-center space-x-8'>
						<a href='#results' className='text-gray-600 hover:text-primary'>
							Natijalar
						</a>
						<a href='#services' className='text-gray-600 hover:text-primary'>
							Xizmatlar
						</a>
						<a
							href='#testimonials'
							className='text-gray-600 hover:text-primary'
						>
							Mijozlar fikri
						</a>
						<a href='#contact' className='text-gray-600 hover:text-primary'>
							Bog'lanish
						</a>
					</div>
					<a href='tel:+998910337060' className='primary-button cursor-pointer'>
						Bog'lanish
					</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
