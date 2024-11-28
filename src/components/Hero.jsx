import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Accordion from './Accardion'
const Hero = () => {
	const { t } = useTranslation()
	useEffect(() => {
		// AOS kutubxonasini birinchi marta ishga tushiramiz
		AOS.init({
			duration: 1000, // Animatsiya davomiyligi
			once: false, // Har safar scroll qilinganda animatsiya ishlaydi
		})

		// Scroll hodisasini kuzatib, AOSni yangilaymiz
		const handleScroll = () => {
			AOS.refresh() // Scroll harakatida AOS animatsiyalarini yangilash
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	const items = [
		{ title: t('faq-flex.faq-title1'), content: t('faq-flex.faq-info1') },
		{ title: t('faq-flex.faq-title2'), content: t('faq-flex.faq-info2') },
		{ title: t('faq-flex.faq-title3'), content: t('faq-flex.faq-info3') },
	]
	return (
		<section className='main_box'>
			<section
				id='main'
				className='home mt-[213px] max-w-[1560px] mx-auto z-1 flex  justify-between items-center px-[15px]'
			>
				<div className='home_left max-w-[780px]'>
					<h1
						data-aos='fade-right'
						className='text-[#093fb3] leading-[80px] mb-[35px] text-[70px] max-w-[350px] font-medium z-[-1]'
					>
						{t('home.dizenfeksiya-xizmati')}
					</h1>
					<p data-aos='fade-right' className='max-w-[350px]'>
						{t('home.home-info')}
					</p>
					<img
						className='h-[300px] w-[350px] relative z-[-3]  mt-[-211px] ml-[395px] '
						src='https://www.dezinfeksiyatashkent.uz/assets/diz-main-ee209cbc.png'
						alt='home-img2'
					/>
					<a href='#contact'>
						<button className='w-[200px] h-[60px] rounded-[25px] bg-[#2137FB] text-[#fff] px-[10px] py-[2px] ml-[0px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out flex justify-center items-center'>
							{t('boglanish')}
						</button>
					</a>
				</div>
				<div className='home_right max-w-[750px] h-[700px]'>
					<img
						data-aos='fade-left'
						src='https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg'
						alt='home-img'
						className='rounded-[10px] object-cover size-full'
					/>
				</div>
			</section>
			<section
				id='about'
				className='about  mt-[53px] max-w-[1560px] mx-auto z-1 px-[15px]'
			>
				<div className='about_top'>
					<h1 className='about_top_title'>{t('biz-haqimizda')}</h1>
					<div className='about_top_card'>
						<div className='about_card'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 16 16'
								className='about_card_icon'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z'></path>
							</svg>
							<h1>{t('about.about-info-title1')}</h1>
							<p>{t('about.about-info-text1')}</p>
						</div>
						<div className='about_card'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 256 256'
								className='about_card_icon'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M176,96a48,48,0,1,1-48-48A48,48,0,0,1,176,96Z'
									opacity='0.2'
								></path>
								<path d='M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z'></path>
							</svg>
							<h1>{t('about.about-info-title1')}</h1>
							<p>{t('about.about-info-text1')}</p>
						</div>
						<div className='about_card'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 24 24'
								className='about_card_icon'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path fill='none' d='M0 0h24v24H0z'></path>
								<path d='M12.22 19.85c-.18.18-.5.21-.71 0a.504.504 0 010-.71l3.39-3.39-1.41-1.41-3.39 3.39c-.19.2-.51.19-.71 0a.504.504 0 010-.71l3.39-3.39-1.41-1.41-3.39 3.39c-.18.18-.5.21-.71 0a.513.513 0 010-.71l3.39-3.39-1.42-1.41-3.39 3.39c-.18.18-.5.21-.71 0a.513.513 0 010-.71L9.52 8.4l1.87 1.86c.95.95 2.59.94 3.54 0 .98-.98.98-2.56 0-3.54l-1.86-1.86.28-.28c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83l-8.2 8.2zm9.61-6.78a4.008 4.008 0 000-5.66l-4.24-4.24a4.008 4.008 0 00-5.66 0l-.28.28-.28-.28a4.008 4.008 0 00-5.66 0L2.17 6.71a3.992 3.992 0 00-.4 5.19l1.45-1.45a2 2 0 01.37-2.33l3.54-3.54c.78-.78 2.05-.78 2.83 0l3.56 3.56c.18.18.21.5 0 .71-.21.21-.53.18-.71 0L9.52 5.57l-5.8 5.79c-.98.97-.98 2.56 0 3.54.39.39.89.63 1.42.7a2.458 2.458 0 002.12 2.12 2.458 2.458 0 002.12 2.12c.07.54.31 1.03.7 1.42.47.47 1.1.73 1.77.73.67 0 1.3-.26 1.77-.73l8.21-8.19z'></path>
							</svg>
							<h1>{t('about.about-info-title1')}</h1>
							<p>{t('about.about-info-text1')}</p>
						</div>
					</div>
				</div>
				<div className='about_bottom'>
					<div className='about_bottom_rgb'>
						<div className='about_bottom_wrap'>
							<h1>{t('about.about-bottom-title')}</h1>
							<p>{t('about.about-bottom-text')}</p>
							<a href='#contact'>
								<button className='w-[200px] h-[60px] mt-[90px] rounded-[25px] bg-[#2137FB] text-[#fff] px-[10px] py-[2px] ml-[0px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out flex justify-center items-center'>
									{t('boglanish')}
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section
				id='serv'
				className='serves mt-[53px] max-w-[1560px] mx-auto z-1 px-[15px]'
			>
				<h1 className='serves_title'>{t('xizmatlar')}</h1>
				<p className='serves_info'>{t('serves.serves-info')}</p>
				<div className='serves_card'>
					<img
						src='https://www.dezinfeksiyatashkent.uz/assets/dizinfeksiya-52660f2d.png'
						alt='serves_card_img1'
					/>
					<div>
						<h1 className='serves_card_title'>
							{t('serves.serves-card-title1')}
						</h1>
						<p className='serves_card_info'>{t('serves.serves-card-info1')}</p>
					</div>
				</div>
				<div className='serves_card'>
					<img
						src='https://www.dezinfeksiyatashkent.uz/assets/dezinyeksiya-bea8e70f.png'
						alt='serves_card_img2'
					/>
					<div>
						<h1 className='serves_card_title'>
							{t('serves.serves-card-title2')}
						</h1>
						<p className='serves_card_info'>{t('serves.serves-card-info2')}</p>
					</div>
				</div>
				<div className='serves_card'>
					<img
						src='https://www.dezinfeksiyatashkent.uz/assets/derazatsiya-83b522bf.png'
						alt='serves_card_img3'
					/>
					<div>
						<h1 className='serves_card_title'>
							{t('serves.serves-card-title3')}
						</h1>
						<p className='serves_card_info'>{t('serves.serves-card-info3')}</p>
					</div>
				</div>
			</section>
			<section className='serves_type serves mt-[53px] max-w-[1560px] mx-auto z-1 px-[15px]'>
				<h1 className='serves_type_title'>
					{t('serves-type.serves-type-title')}
				</h1>
				<div className='serves_type_cards'>
					<div className='serves_type_card'>
						<h1 className='type_card_name'>
							{t('serves-type.type-card-name1')}
						</h1>
						<p className='type_card_info'>{t('serves-type.type-card-info1')}</p>
						<img
							src='https://www.dezinfeksiyatashkent.uz/assets/klopi-6c1f42ef.jpg'
							alt='serves_type_card_img1'
						/>
						<a href='#contact'>
							<button className='type_card_btn w-[190px] h-[50px] rounded-[25px] bg-[#2137FB] text-[#fff] px-[10px] py-[2px] ml-[0px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out flex justify-center items-center'>
								{t('boglanish')}
							</button>
						</a>
					</div>
					<div className='serves_type_card'>
						<h1 className='type_card_name'>
							{t('serves-type.type-card-name2')}
						</h1>
						<p className='type_card_info'>{t('serves-type.type-card-info2')}</p>
						<img
							src='https://www.dezinfeksiyatashkent.uz/assets/tarakan-d8b430bd.jpg'
							alt='serves_type_card_img2'
						/>
						<a href='#contact'>
							<button className='type_card_btn w-[190px] h-[50px] rounded-[25px] bg-[#2137FB] text-[#fff] px-[10px] py-[2px] ml-[0px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out flex justify-center items-center'>
								{t('boglanish')}
							</button>
						</a>
					</div>
					<div className='serves_type_card'>
						<h1 className='type_card_name'>
							{t('serves-type.type-card-name3')}
						</h1>
						<p className='type_card_info'>{t('serves-type.type-card-info3')}</p>
						<img
							src='https://www.dezinfeksiyatashkent.uz/assets/skarpion-6902a7a9.jpg'
							alt='serves_type_card_img3'
						/>
						<a href='#contact'>
							<button className='type_card_btn w-[190px] h-[50px] rounded-[25px] bg-[#2137FB] text-[#fff] px-[10px] py-[2px] ml-[0px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out flex justify-center items-center'>
								{t('boglanish')}
							</button>
						</a>
					</div>
					<div className='serves_type_card'>
						<h1 className='type_card_name'>
							{t('serves-type.type-card-name4')}
						</h1>
						<p className='type_card_info'>{t('serves-type.type-card-info4')}</p>
						<img
							src='https://www.dezinfeksiyatashkent.uz/assets/grizuni-de8c9315.jpg'
							alt='serves_type_card_img4'
						/>
						<a href='#contact'>
							<button className='type_card_btn w-[190px] h-[50px] rounded-[25px] bg-[#2137FB] text-[#fff] px-[10px] py-[2px] ml-[0px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out flex justify-center items-center'>
								{t('boglanish')}
							</button>
						</a>
					</div>
					<div className='serves_type_card'>
						<h1 className='type_card_name'>
							{t('serves-type.type-card-name5')}
						</h1>
						<p className='type_card_info'>{t('serves-type.type-card-info5')}</p>
						<img
							src='	https://www.dezinfeksiyatashkent.uz/assets/bloxi-7e06d020.jpg'
							alt='serves_type_card_img4'
						/>
						<a href='#contact'>
							<button className='type_card_btn w-[190px] h-[50px] rounded-[25px] bg-[#2137FB] text-[#fff] px-[10px] py-[2px] ml-[0px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out flex justify-center items-center'>
								{t('boglanish')}
							</button>
						</a>
					</div>
				</div>
				<div className='ser_license max-w-[1560px]'>
					<div className='ser_license_left'>
						<img
							src='	https://www.dezinfeksiyatashkent.uz/assets/cleanT-f1a5f564.jpg'
							alt='ser_license_left_img'
						/>
					</div>
					<div className='ser_license_right'>
						<img
							src='https://www.dezinfeksiyatashkent.uz/assets/d3icons-b8f1c170.svg'
							alt='ser_license_right_img'
						/>
						<h1 className='ser_license_right_title'>
							{t('serves-type.ser-license-right-title')}
						</h1>
						<a href='#contact'>
							<button className='w-[200px] h-[60px] mt-[50px] rounded-[25px] bg-[#2137FB] text-[#fff] px-[10px] py-[2px] ml-[0px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out flex justify-center items-center'>
								{t('boglanish')}
							</button>
						</a>
					</div>
				</div>
			</section>
			<section
				id='faq'
				className='mt-[100px] max-w-[1560px] mx-auto z-1 flex  justify-between px-[15px]'
			>
				<div className='faq_flex'>
					<h1>{t('faq')}</h1>
					<div className='faq_right'>
						<Accordion items={items} />
					</div>
				</div>
			</section>
			<section
				id='contact'
				className=' mt-[100px] max-w-[1560px] mx-auto z-1 flex  justify-between px-[15px]'
			>
				<div className='contact  pt-[60px] w-[1560px]'>
					<div className='contact_left'>
						<form action=''>
							<label htmlFor='fname' className='contact_title'>
								{t('contact.contact-title')}
							</label>
							<br />
							<input
								className='card_left_input'
								type='text'
								id='fname'
								name='fname'
								placeholder={t('contact.contact-name')}
							/>
							<br />
							<input
								className='card_left_input'
								type='tel'
								id='telnumber'
								name='telnumber'
								placeholder='+998 90 123 45 67'
								pattern='^\+998 \d{2} \d{3} \d{2} \d{2}$'
								required
							/>
							<br />
							<input
								className='card_left_btn'
								type='button'
								value={t('contact.contact-btn')}
							/>
						</form>
					</div>
					<div className='contact_right'>
						<img
							src='	https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png'
							alt='contact_img'
						/>
					</div>
				</div>
			</section>
		</section>
	)
}

export default Hero
