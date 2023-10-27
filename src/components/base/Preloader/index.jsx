import './style.scss';

const Preloader = ({ className }) => {
	return (
		<div id='preloader' className={`preloader ${className}`}>
			<span className='preloader__span1'></span>
			<span className='preloader__span2'></span>
			<span className='preloader__span3'></span>
			<span className='preloader__span4'></span>
			<img src='icons/preloader.svg' alt='tag' />
		</div>
	);
};

export default Preloader;
