import React from 'react';
import { useState } from 'react';

import {
	Container,
	Wrapper,
	Title,
	Desc,
	CardContainer,
	ToggleButtonGroup,
	ToggleButton,
	Divider,
} from './ProjectsStyle';
import '../../styles/style.scss';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';
const Projects = ({ openModal, setOpenModal }) => {
	const [toggle, setToggle] = useState('all');
	return (
		<Container className='projects__bg' id='projects'>
			<Wrapper className='__container'>
				<Title className='projects__title'>Projects</Title>
				<Desc className='project__color'>
					I have worked on a wide range of projects. From web apps to android apps. Here are some of
					my projects.
				</Desc>
				<ToggleButtonGroup>
					{toggle === 'all' ? (
						<ToggleButton active value='all' onClick={() => setToggle('all')}>
							All
						</ToggleButton>
					) : (
						<ToggleButton value='all' onClick={() => setToggle('all')}>
							All
						</ToggleButton>
					)}
					<Divider />

					{toggle === 'store' ? (
						<ToggleButton active value='store' onClick={() => setToggle('store')}>
							Store
						</ToggleButton>
					) : (
						<ToggleButton value='store' onClick={() => setToggle('store')}>
							Store
						</ToggleButton>
					)}
					<Divider />
					{toggle === 'landing' ? (
						<ToggleButton active value='landing' onClick={() => setToggle('landing')}>
							Landing
						</ToggleButton>
					) : (
						<ToggleButton value='landing' onClick={() => setToggle('landing')}>
							Landing
						</ToggleButton>
					)}
					<Divider />
					{toggle === 'other' ? (
						<ToggleButton active value='other' onClick={() => setToggle('other')}>
							Other
						</ToggleButton>
					) : (
						<ToggleButton value='other' onClick={() => setToggle('other')}>
							Other
						</ToggleButton>
					)}
				</ToggleButtonGroup>
				<CardContainer>
					{toggle === 'all' &&
						projects.map((project) => (
							<ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
						))}
					{projects
						.filter((item) => item.category === toggle)
						.map((project) => (
							<ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
						))}
				</CardContainer>
			</Wrapper>
		</Container>
	);
};

export default Projects;
