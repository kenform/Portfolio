import React, { useState } from 'react';
import { ReactSVG as SVG } from 'react-svg';
import { useTranslation } from 'react-i18next';
import './style.scss';

export const locales = {
	en: { title: 'en' },
	ru: { title: 'ru' },
};

export const LanguageSwitcher = () => {
	// Костыль, временно поставил, надо исправить на выпадающий список

	const { i18n } = useTranslation();
	const [language, setLanguage] = useState('false');

	const i18Value = localStorage.getItem('i18nextLng');
	console.log(i18Value);
	const labelLanguage = i18Value ? i18Value : 'en';

	const handleChangeLanguage = (lang) => {
		lang ? i18n.changeLanguage('en') : i18n.changeLanguage('ru');
		setLanguage(!lang);
	};

	return (
		<div className='language__switcher'>
			<button onClick={() => handleChangeLanguage(language)}>
				<SVG src={`../icons/language.svg`} alt='planet icon' />
				<div className='language__text'>{labelLanguage}</div>
			</button>
		</div>
	);
};

export default LanguageSwitcher;
