import { ReactSVG as SVG } from 'react-svg';
import './style.scss';
const Button = ({ modifier, link, icon, name }) => {
	return (
		<a href={link} className={`btn ${modifier}`} target='_blank' rel='noreferrer'>
			<SVG src={`../icons/${icon}.svg`} />
			<span>{name}</span>
		</a>
	);
};
export default Button;
