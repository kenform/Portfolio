const Contacts = () => {
	return (
		<main className='section'>
			<div className='section__container'>
				<h1 className='title-1'>Contacts</h1>

				<ul className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Location</h2>
						<p>Moscow, Russia</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Telegram </h2>

						<span className='svg__icon'>
							<a href='https://t.me/Kenform'>
								<svg
									width='75px'
									height='75px'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									color='#000000'
								>
									<path
										d='M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277'
										stroke='#000000'
										strokeLinecap='round'
										fill='#11d6e4'
									></path>
								</svg>
							</a>
						</span>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Email</h2>
						<p>
							<a href='mailto:webdev@protonmail.com'>kenformgod@gmail.com</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default Contacts;
