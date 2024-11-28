import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()
	return (
		<footer>
			<section className='footer_card pt-[100px] max-w-[1560px] mx-auto z-1 px-[15px]'>
				<a href='#'>
					<img
						src='https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png'
						alt='foote_logo'
					/>
				</a>
				<div className='footer_connect'>
					<a href='' className='connect'>
						<i className='fas fa-location-dot connect_phone'></i>
						<p>{t('footer-location')}</p>
						<i className='fa-solid fa-arrow-right'></i>
					</a>

					<a href='' className='connect'>
						<i className='fas fa-phone connect_phone'></i>
						<p>+998 99 119 99 33</p>
						<i className='fa-solid fa-arrow-right'></i>
					</a>
				</div>
			</section>
		</footer>
	)
}

export default Footer
