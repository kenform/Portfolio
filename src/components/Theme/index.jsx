import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set } from './slice';
import './style.scss';
import { ReactComponent as Sun } from './svg/sun.svg';
import { ReactComponent as Moon } from './svg/moon.svg';

const Theme = () => {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();
	let clickedClass = 'active';
	React.useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const handleChange = () => {
		const next = theme === 'dark' ? 'light' : 'dark';
		dispatch(set(next));
	};

	return (
		<div className='dark__mode'>
			<input
				className={`dark__mode-input + ${theme === 'dark' ? clickedClass : ''}`}
				type='checkbox'
				id='dark__mode-toggle'
				onChange={handleChange}
			/>
			<label className='dark__mode-label' htmlFor='dark__mode-toggle'>
				<Sun className='dark-mode-btn__icon' />
				<Moon className='dark-mode-btn__icon' />
			</label>
		</div>
	);
};

export default Theme;
