import GitHubIcon from './gitHub-black.svg';
import './style.scss';

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target='_blank' rel='noreferrer' className='btn btn__Preview' alt='preview'>
			<svg
				width='55px'
				height='55px'
				strokeWidth='1.2'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				color='#000000'
			>
				<path
					d='M12 14a2 2 0 100-4 2 2 0 000 4z'
					stroke='#000000'
					strokeWidth='1.2'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>
				<path
					d='M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z'
					stroke='#000000'
					strokeWidth='1.2'
					strokeLinecap='round'
					strokeLinejoin='round'
				></path>
			</svg>
			Preview
		</a>
	);
};
export default BtnGitHub;