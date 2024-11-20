import React, { useEffect, useState } from 'react'
const Navbar = () => {
	const [scrolling, setScrolling] = useState(false)
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
			className={`fixed top-0 left-0 w-full bg-white p-4 transition-shadow duration-300 ${
				scrolling ? 'shadow-lg' : ''
			}`}
		>
			<div className='container max-width: 1560px;  px-[15px] mx-auto'>
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
							<a
								href='#main'
								className='mr-[25px] text-[20px] font-medium text-[#00000098] border-b-2 border-transparent pb-1  hover:text-zinc-950 hover:border-b-2 hover:border-black pb-1 transition-all duration-300 ease-in-out'
							>
								Асосий
							</a>
							<a
								href='#about'
								className='mr-[25px] text-[20px] font-medium text-[#00000098] border-b-2 border-transparent pb-1  hover:text-zinc-950 hover:border-b-2 hover:border-black pb-1 transition-all duration-300 ease-in-out'
							>
								Биз ҳақимизда
							</a>
							<a
								href='#serv'
								className='mr-[25px] text-[20px] font-medium text-[#00000098] border-b-2 border-transparent pb-1  hover:text-zinc-950 hover:border-b-2 hover:border-black pb-1 transition-all duration-300 ease-in-out'
							>
								Хизматлар
							</a>
							<a
								href='#faq'
								className='mr-[25px] text-[20px] font-medium text-[#00000098] border-b-2 border-transparent pb-1  hover:text-zinc-950 hover:border-b-2 hover:border-black pb-1 transition-all duration-300 ease-in-out'
							>
								ФАҚ
							</a>
						</div>
						<div className='header_lang_and_header_btn flex justify-between items-center'>
							<div className='header_custom_dropdown '>
								<select
									name=''
									id=''
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
									Богланиш
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
