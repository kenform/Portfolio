import "./style.scss"

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container	'>
			
				<h1 className='header__title'>
					<strong>
						Hi, my name is <em>Serge</em>
					</strong>
					<br />a Junior frontend developer
				</h1>
				<div className='header__text'>
					<p>with passion for learning and creating.</p>
				</div>
				<a href='#!' className='btn'>
					Download CV
				</a>
			</div>
		</header>
	)
}
 
export default Header;