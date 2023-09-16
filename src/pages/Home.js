import '../styles/style.scss';
import Typewriter from 'typewriter-effect';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';

const Home = () => {
	return (
		<div>
			<main className='main'>
				<div className='section__intro'>
					<div className='intro __container fullscreen'>
						<div className='intro__body'>
							<h1 className='intro__title'>
								Hi, My name is Sergey
								<br />
								<span>
									I'm
									<Typewriter
										options={{
											strings: ['Programmer', 'Frontend developer'],
											autoStart: true,
											loop: true,
											delay: 120,
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
				<div className='section section__skills'>
					<Skills />
				</div>
				<div className='section section__experience'>
					<Experience />
				</div>
				<div className='section section__education'>
					<Education />
				</div>
			</main>
		</div>
	);
};

export default Home;
