import GitHubIcon from "./gitHub-black.svg"
import "./style.scss"

const BtnGitHub = ({link}) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className='  btn__Github btn-outline'
		>
			<img  alt='' />
			GitHub repo
		</a>
	)
}
//  src = { GitHubIcon }
export default BtnGitHub;