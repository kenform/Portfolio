import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.scss';
import Button from '../base/Button';
import Theme from '../Theme';
import LanguageSwitcher from '../base/LanguageSwitcher';

const Header = () => {
	const { t } = useTranslation();
	const [click, setClick] = useState(false);

	const activeLink = 'menu__link menu__link--active';
	const normalLink = 'menu__link';

	const setBodyLock = (value) => {
		document.body.classList.toggle('_lock', value);
	};

	const onClickIcon = () => {
		setClick((current) => {
			const next = !current;
			setBodyLock(next);
			return next;
		});
	};

	const closeMobileMenu = () => {
		setClick(false);
		setBodyLock(false);
	};

	useEffect(() => {
		return () => setBodyLock(false);
	}, []);

	const navLinks = [
		{ to: '/', label: t('header.About') },
		{ to: '/projects', label: t('header.projects') },
		{ to: '/reviews', label: t('header.reviews') },
		{ to: '/contacts', label: t('header.contacts') },
	];

	return (
		<div className='header'>
			<div className={`header__container menu ${click ? 'menu-open' : ''}`}>
				<NavLink to='/' className='logo' onClick={closeMobileMenu}>
					<div className='logo__body'>
						<div className='logo__icon'>
							<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'>
								<path
									fill='#5c62ec'
									d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
								/>
							</svg>
						</div>

						<div className='logo__title'>
							<p>{t('header.logo-title')}</p>
						</div>
					</div>
				</NavLink>

				<Theme />

				<button
					type='button'
					className='menu__icon icon-menu'
					aria-label={t('a11y.burger')}
					aria-expanded={click}
					onClick={onClickIcon}
				>
					<span></span>
				</button>

				<nav className='menu__body' aria-label='Main navigation'>
					<ul className='menu__list'>
						{navLinks.map((link) => (
							<li className='menu__item' key={link.to}>
								<NavLink
									to={link.to}
									onClick={closeMobileMenu}
									className={({ isActive }) => (isActive ? activeLink : normalLink)}
								>
									{link.label}
								</NavLink>
							</li>
						))}

						<li className='menu__item menu__item--mobile-github'>
							<a
								className='menu__github-link'
								href='https://github.com/kenform'
								target='_blank'
								rel='noreferrer'
								onClick={closeMobileMenu}
							>
								GitHub
							</a>
						</li>
					</ul>
				</nav>

				<Button
					modifier='header__button'
					link='https://github.com/kenform'
					icon='github'
					text={t('header.Button')}
					alt={t('a11y.githubIcon')}
				/>

				<LanguageSwitcher />
			</div>
		</div>
	);
};

export default Header;
