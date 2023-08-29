import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectsList';

import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import BtnPreview from '../components/btnPreview/BtnPreview';

const Project = () => {
	const { id } = useParams();
	const project = projects[id];

	return (
		<main className='section'>
			<div className='section__container'>
				<div className='project-details '>
					<h1 className='title-1'>{project.title}</h1>
					<div className=''>
						<img src={project.imgBig} alt={project.title} className='project-details__cover' />
					</div>

					<div className='project-details__desc'>
						<p>Skilss: {project.skills}</p>
					</div>
					<div className='project__buttons'>
						{project.viewLink && <BtnPreview link={project.viewLink} />}
						{project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Project;
