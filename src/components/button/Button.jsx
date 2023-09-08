import { ReactSVG as SVG } from 'react-svg';
import './style.scss';

const Button = ({ modifier, link, icon, text }) => {
	return (
		<a href={link} className={`btn ${modifier}`} target='new'>
			<SVG src={`../icons/${icon}.svg`} />
			<span>{text}</span>
		</a>
	);
};
export default Button;
