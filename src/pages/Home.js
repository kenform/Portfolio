import '../styles/style.scss';
import Typewriter from 'typewriter-effect';

const Home = () => {
	return (
		<div>
			<main className='main'>
				<div className='section__intro'>
					<div className='intro __container fullscreen'>
						<div className='intro__body'>
							<h1 className='intro__title'>
								Hi, My name is Serge
								<br />
								<span>
									I'm
									<Typewriter
										options={{
											strings: ['Programmer', 'Frontend developer'],
											autoStart: true,
											loop: true,
											delay: 150,
										}}
									/>
								</span>
							</h1>

							<div className='intro__text'>
								<p>
									I am a motivated and versatile individual, always eager to take on new challenges.
									With a passion for learning I am dedicated to delivering high-quality results.
									With a positive attitude and a growth mindset, I am ready to make a meaningful
									contribution and achieve great things.
								</p>
							</div>
						</div>

						<div className='intro__image'>
							<img src='Intro__profile.png' alt='My profile' />
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
