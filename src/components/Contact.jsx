import React, { useRef, useState } from 'react'
import { PatternFormat } from 'react-number-format'
import { toast } from 'react-toastify'

export default function Contact() {
	const formRef = useRef()
	const [phone, setPhone] = useState('')
	const [isInValidPhone, setIsInValidPhone] = useState(false)
	const telegramApiUrl = import.meta.env.VITE_TELEGRAM_BOT_URL
	const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

	const handleSubmit = async e => {
		e.preventDefault()
		const formData = new FormData(formRef.current)
		const message = `Ism: ${formData.get(
			'firstName'
		)} \n\nTelefon: +998${phone}`

		try {
			if (phone.length == 9) {
				const response = await fetch(telegramApiUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: +chatId,
						text: message,
					}),
				})

				if (!response.ok)
					throw new Error('Telegramga xabar yuborishda xatolik yuz berdi.')

				toast.success("Ma'lumotlar muvaffaqiyatli yuborildi")
				formRef.current.reset()
				setPhone('')
				setIsInValidPhone(false)
			} else {
				setIsInValidPhone(true)
			}
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<section id='contact' className='py-16 bg-white'>
			<div className='container mx-auto px-6'>
				<div className='grid md:grid-cols-2 gap-12 md:min-h-[480px]'>
					<div className='bg-white rounded-xl shadow-lg p-8 md:py-14 md:px-8'>
						<h2 className='text-2xl font-bold text-gray-800 mb-8 md:mb-10'>
							Ma'lumotlaringizni qoldiring
						</h2>
						<form
							onSubmit={handleSubmit}
							ref={formRef}
							className='space-y-6'
							id='contact-form'
						>
							<div className='space-y-2'>
								<label htmlFor='firstName' className='block text-gray-700 mb-2'>
									Ismingiz
								</label>
								<input
									type='text'
									id='firstName'
									name='firstName'
									required
									className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary'
									placeholder='Ismingizni kiriting'
								/>
							</div>
							<div className='space-y-2'>
								<label htmlFor='phone' className='block text-gray-700 mb-2'>
									Telefon Raqamingiz
								</label>
								<PatternFormat
									format='+998 (##) ###-##-##'
									mask='_'
									id='phone'
									name='phone'
									value={phone}
									onValueChange={({ value }) => setPhone(value)}
									required
									className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary phone-input'
									placeholder='+998 (__) ___-__-__'
								/>
							</div>
							{isInValidPhone && (
								<p className='text-red-700 text-base md:text-lg'>
									Raqamni to'liq kiriting
								</p>
							)}
							<button type='submit' className='w-full primary-button'>
								Yuborish
							</button>
						</form>
					</div>
					<div className='rounded-xl border border-black/25 overflow-hidden shadow-lg'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3072.111416822548!2d66.95517!3d39.647207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM4JzUwLjAiTiA2NsKwNTcnMTguNiJF!5e0!3m2!1suz!2s!4v1741692840381!5m2!1suz!2s'
							className='w-full h-80 md:h-full'
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</div>
		</section>
	)
}
