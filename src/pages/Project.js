import { useParams } from 'react-router-dom'
import { projects } from '../helpers/projectsList'

import BtnGitHub from '../components/btnGitHub/BtnGitHub'

const Project = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>
					<a href={project.viewLink} target='_blank' rel='noreferrer'>
						<img
							src={project.imgBig}
							alt={project.title}
							className='project-details__cover'
						/>
					</a>

					<div className='project-details__desc'>
						<p>Skilss: {project.skills}</p>
					</div>
					{project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
				</div>
			</div>
		</main>
	)
}

export default Project
