import '../styles/main.scss';

const Home = () => {
	return (
		<div>
			<main className='main'>
				<div className='section__intro'>
					<div className='intro __container'>
						<div className='intro__body'>
							<h1 className='intro__title'>
								<strong>
									Hi, my name is <em>Serge</em>
								</strong>
								<br />a Frontend developer
							</h1>

							<div className='intro__text'>
								<p>with passion for learning and creating.</p>
							</div>
							{/* <a href='#!' className='btn'>
										Download CV
								</a> */}
						</div>
					</div>
				</div>

				<div className='section__content section'>
					<ul className='content-list __container'>
						<li className='content-list__item'>
							<h2 className='title-2'>Frontend</h2>
							<p>
								HTML, CSS, SCSS, SVG, BEM, JavaScript, React, ReduxGit, GitHub, GitLab, Gulp,
								Webpack, node.js, npm, Figma / Scetch / Photoshop
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Backend</h2>
							<p>NodeJS, MySQL, PHP,</p>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
};

export default Home;
