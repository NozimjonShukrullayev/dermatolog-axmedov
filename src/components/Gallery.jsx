import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCompress } from 'react-icons/fa'
import {
	GalleryImgFive,
	GalleryImgFour,
	GalleryImgOne,
	GalleryImgThree,
	GalleryImgTwo,
} from '../assets'

const images = [
	GalleryImgOne,
	GalleryImgTwo,
	GalleryImgThree,
	GalleryImgFour,
	GalleryImgFive,
]

export default function Gallery() {
	const [selectedImage, setSelectedImage] = useState(null)

	const closeSelectedImageModal = e => {
		if (
			e.target.id === 'selected-img-backdrop' ||
			e.target.id === 'close-button'
		)
			setSelectedImage(null)
	}

	return (
		<section id='our-clinic' className='py-16 bg-gray-100'>
			<div className='container mx-auto px-6'>
				<h2 className='text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8'>
					Bizning Klinikamiz
				</h2>
				<div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8'>
					{images.map((src, index) => (
						<motion.div
							key={index}
							className='overflow-hidden rounded-lg shadow-lg cursor-pointer'
							whileHover={{ scale: 1.05 }}
							onClick={() => setSelectedImage(src)}
						>
							<img
								src={src}
								alt={`Clinic ${index + 1}`}
								className='w-[100%] h-60 md:h-80 lg:h-96 object-cover'
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Lightbox modal */}
			{selectedImage && (
				<div
					id='selected-img-backdrop'
					className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[55] cursor-pointer'
					onClick={closeSelectedImageModal}
				>
					<div className='relative w-[90%] max-w-3xl md:w-full'>
						<button
							id='close-button'
							className='absolute top-4 right-4 bg-white p-2 rounded-full shadow'
							onClick={closeSelectedImageModal}
						>
							<FaCompress size={24} className='pointer-events-none' />
						</button>
						<img
							src={selectedImage}
							alt='Selected'
							className='w-full h-72 sm:h-96 md:h-[540px] lg:w-[680px] lg:h-[680px] object-cover rounded-lg'
						/>
					</div>
				</div>
			)}
		</section>
	)
}
