import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.scss';
import Button from '../base/Button';
import Theme from '../Theme';
import LanguageSwitcher from '../base/LanguageSwitcher';

const Header = () => {
	const { t } = useTranslation();
	const [click, setClick] = useState();
	const activeLink = 'menu__link menu__link--active';
	const normalLink = 'menu__link';

	const onClickIcon = () => {
		setClick(!click);
		document.body.classList.toggle('_lock');
	};
	const closeMobileMenu = () => {
		setClick(false);
		document.body.classList.remove('_lock');
	};
	return (
		<div className='header'>
			<div className={`header__container menu ${click ? 'menu-open' : ''}`}>
				<NavLink to='/' className='logo'>
					<div className='logo__body' onClick={closeMobileMenu}>
						<div className='logo__icon'>
							<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'>
								<path
									fill='#5c62ec'
									d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
								/>
							</svg>
						</div>

						<div className='logo__title'>
							<p> {t('header.logo-title')}</p>
						</div>
					</div>
				</NavLink>
				<Theme />
				<button
					type='button'
					className='menu__icon icon-menu'
					alt='burger menu'
					onClick={onClickIcon}
				>
					<span></span>
				</button>

				<nav className='menu__body'>
					<ul className='menu__list'>
						<li className='menu__item'>
							<NavLink
								to='/'
								onClick={closeMobileMenu}
								className={({ isActive }) => (isActive ? activeLink : normalLink)}
							>
								{t('header.About')}
							</NavLink>
						</li>

						<li className='menu__item'>
							<NavLink
								to='/projects'
								onClick={closeMobileMenu}
								className={({ isActive }) => (isActive ? activeLink : normalLink)}
							>
								{t('header.projects')}
							</NavLink>
						</li>

						<li className='menu__item'>
							<NavLink
								to='/contacts'
								onClick={closeMobileMenu}
								className={({ isActive }) => (isActive ? activeLink : normalLink)}
							>
								{t('header.contacts')}
							</NavLink>
						</li>
						<li>
							<Button
								modifier='header__button menu-list__body'
								link='https://github.com/kenform'
								icon='github'
								text={t('header.Button')}
								alt='github icon'
							/>
						</li>
					</ul>
				</nav>

				<Button
					modifier='header__button'
					link='https://github.com/kenform'
					icon='github'
					text={t('header.Button')}
					alt='github icon'
				/>
				<LanguageSwitcher />
			</div>
		</div>
	);
};
export default Header;
