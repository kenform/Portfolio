import '../styles/style.scss';
import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

import animScroll from '../utils/animScroll';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
const Home = () => {
	const { t } = useTranslation();
	useEffect(() => {
		animScroll();
	}, []);
	return (
		<div>
			<main className='main'>
				<div className='section__intro'>
					<div className='intro __container fullscreen'>
						<div className='intro__body _anim-items _anim-no-hide anim_1'>
							<h1 className='intro__title'>
								{t('intro.title')}
								<br />
								<span>
									{t('intro.IM')}
									<Typewriter
										options={{
											strings: [t('intro.typeWritter-programmer'), t('intro.typeWritter-frontend')],
											autoStart: true,
											loop: true,
											delay: 120,
										}}
									/>
								</span>
							</h1>

							<div className='intro__text'>
								<p>{t('intro.text')}</p>
							</div>
						</div>

						<div className='intro__image _anim-items _anim-no-hide anim_2'>
							<img src='Intro__profile.png' alt='My profile' />
						</div>
					</div>
				</div>
				<div className='section section__skills'>
					<Skills />
				</div>
				{/* <div className='section section__experience'>
					<Experience />
				</div> */}
				{/* <div className='section section__education'>
					<Education />
				</div> */}
			</main>
		</div>
	);
};

export default Home;
