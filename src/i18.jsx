import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import ruTranslation from '../src/locales/ru.json'
import uzTranslation from '../src/locales/uz.json'

const launguage = localStorage.getItem('i18nextLng') || 'uz'

i18n
	//backend qismi
	.use(Backend)
	//Tilni aniqlash
	.use(LanguageDetector)
	// i18nextni react-i18next bilan bog'lab beradi
	.use(initReactI18next)

	.init({
		fallbackLng: 'en',
		lng: launguage,
		debug: true,
		resources: {
			uz: { translation: uzTranslation },
			ru: { translation: ruTranslation },
		},
	})

export default i18n
