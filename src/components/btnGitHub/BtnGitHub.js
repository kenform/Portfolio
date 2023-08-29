import './style.scss';

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target='_blank' rel='noreferrer' className='btn btn__Github btn-outline'>
			<svg
				width='45px'
				height='45px'
				stroke-width='1.2'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				color='#000000'
			>
				<path
					d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
					stroke='#000000'
					stroke-width='1.2'
					stroke-linecap='round'
					stroke-linejoin='round'
				></path>
				<path
					d='M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.18 2.18 0 00-.5-.781c2.093-.227 4.293-1 4.293-4.544 0-.906-.358-1.778-1-2.434a3.211 3.211 0 00-.06-2.448s-.787-.227-2.607.961a9.152 9.152 0 00-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.211 3.211 0 007 8.464a3.482 3.482 0 00-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.18 2.18 0 00-.496.773 2.134 2.134 0 00-.13.902V19M9.667 17.702c-2 .631-3.667 0-4.667-1.948'
					stroke='#000000'
					stroke-width='1.2'
					stroke-linecap='round'
					stroke-linejoin='round'
				></path>
			</svg>
			GitHub repo
		</a>
	);
};
//
export default BtnGitHub;
