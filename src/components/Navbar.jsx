import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
const Navbar = () => {
	const [scrolling, setScrolling] = useState(false)
	const { t, i18n } = useTranslation()
	const langOption = localStorage.getItem('i18nextLng')

	const handleChange = event => {
		const selectedLanguage = event?.target?.value
		i18n.changeLanguage(selectedLanguage)
	}
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolling(true)
			} else {
				setScrolling(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<header
			className={`fixed z-50 border-solid border-red-400 border-2 top-0 left-0 mb-[100px] w-full bg-white p-4 transition-shadow duration-300 ${
				scrolling ? 'shadow-lg' : ''
			}`}
		>
			<div className='container max-w-[1560px]  px-[15px] mx-auto'>
				<div className='header_flex flex justify-between items-center'>
					<a className='header_logo_link' href='#main'>
						<img
							className='header_logo_pic w-[300px] h-[80px]'
							src='https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png'
							alt='header_logo_pic'
						/>
					</a>
					<div className='header_right_box flex justify-between items-center'>
						<div className='header_right_navigations flex justify-between items-center'>
							{[
								{ href: '#main', text: t('asosiy') },
								{ href: '#about', text: t('biz-haqimizda') },
								{ href: '#serv', text: t('xizmatlar') },
								{ href: '#faq', text: t('faq') },
							].map((item, index) => (
								<a
									key={index}
									href={item.href}
									className='mr-[25px] text-[20px] font-medium text-[#00000098] border-b-2 border-transparent pb-1 hover:text-zinc-950 hover:border-b-2 hover:border-black transition-all duration-300 ease-in-out'
								>
									{item.text}
								</a>
							))}
						</div>
						<div className='header_lang_and_header_btn flex justify-between items-center'>
							<div className='header_custom_dropdown '>
								<select
									onChange={handleChange}
									name='Lng'
									id='lng'
									value={langOption}
									className='lang_option border-2 border-[#0000007a] rounded-[10px] border-solid focus:outline-none px-[5px] py-[7px] text-[#000000a6] font-[700] text-[20px]'
								>
									<option value='ru' className='lang_options font-[700]'>
										Русский
									</option>
									<option value='uz' className='lang_options font-[700]'>
										Ўзбекча
									</option>
								</select>
							</div>
							<a href='#contact' className='header_btn_link'>
								<button className='header_btn w-[200px] h-[60px] rounded-[25px] bg-blue-700 text-[#fff] px-[10px] ml-[50px] font-medium text-[25px] hover:bg-blue-800  transform active:scale-95 transition-transform duration-150 transition-all duration-300 ease-in-out'>
									{t('boglanish')}
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
