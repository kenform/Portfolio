import './style.scss';

// import vk from '../../img/icons/vk.svg';
// import instagram from '../../icons/instagram.svg';
// import gitHub from '../../img/icons/gitHub.svg';
// import linkedIn from '../../img/icons/linkedIn.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__content'>
					{/* <ul className='social'>
						<li className='social__item'>
							<a href='#!'>
								<img src={vk} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!' className='tooltip'>
								<img src={instagram} alt='Link' />
							</a>
						</li>

						<li className='social__item'>
							<a href='https://github.com/kenform'>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!'>
								<img src={linkedIn} alt='Link' />
							</a>
						</li>
					</ul> */}
					<div className='copyright'>
						<p>© 2023 Sergey. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;