import './style.scss';
import DecorLayer from '../decor/DecorLayer';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='footer'>
			<DecorLayer variant='footer' />
			<div className='footer__container'>
				<div className='footer__content'>
					<div className='footer__brand'>
						<a className='footer__logo' href='/'>
							Kenform
						</a>
						<p>
							Frontend portfolio: landing pages, responsive interfaces and clean website
							experiments built with React, Next.js and modern UI patterns.
						</p>
					</div>

					<nav className='footer__nav' aria-label='Footer navigation'>
						<a href='/'>Home</a>
						<a href='/projects'>Projects</a>
						<a href='/contacts'>Contacts</a>
						<a href='https://github.com/kenform' target='_blank' rel='noreferrer'>
							GitHub
						</a>
					</nav>

					<div className='footer__bottom'>
						<p>© {year} Sergey / Kenform. All rights reserved.</p>
						<p>Built with React, SCSS and a little stubborn curiosity.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
