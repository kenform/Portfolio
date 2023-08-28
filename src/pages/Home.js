import Header from './../components/header/Header'

const Home = () => {
	return (
		<div>
			<Header />
			<main className='section'>
				<div className='section__container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Frontend</h2>
							<p>
								HTML, CSS, SCSS, SVG, BEM, JavaScript, React, ReduxGit, GitHub,
								GitLab, Gulp, Webpack, node.js, npm, Figma / Scetch / Photoshop
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
	)
}

export default Home
