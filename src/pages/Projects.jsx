import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import '../styles/style.scss';
import ProjectCard from '../components/Cards/ProjectCards';
import { projects } from '../data/constants';

const Container = styled.div`
	padding: 150px 0px 100px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 12px;
	@media (max-width: 991.98px) {
		flex-direction: column;
	}
`;

const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 600;
	@media (max-width: 767.98px) {
		font-size: 32px;
	}
`;

const Desc = styled.div`
	font-size: 18px;
	line-height: 1.6;
	text-align: center;
	max-width: 600px;
	@media (max-width: 767.98px) {
		margin-top: 12px;
		font-size: 16px;
	}
`;

const ToggleButtonGroup = styled.div`
	display: flex;
	border: 1.5px solid #5c62ec;
	color: #5c62ec;
	align-items: center;
	font-size: 16px;
	border-radius: 12px;
	font-weight: 500;
	margin: 22px 0px;
	@media (max-width: 767.98px) {
		font-size: 14px;
	}
`;

const ToggleButton = styled.div`
	padding: 15px 30px;
	border-radius: 6px;
	cursor: pointer;

	${({ active }) =>
		active &&
		`
    background: rgba(92, 98, 236, 0.125)};
    `}

	@media (max-width: 767.98px) {
		padding: 10px 15px;
		border-radius: 4px;
	}
`;
const Divider = styled.div`
	width: 1.5px;
	background: #5c62ec;
	
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 28px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 32px;
	grid-auto-rows: minmax(100px, auto);
	@media (max-width: 991.98px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 767.98px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Projects = ({ openModal, setOpenModal }) => {
	const { t } = useTranslation();
	const [toggle, setToggle] = useState('all');
	return (
		<Container className='projects__bg' id='projects'>
			<Wrapper className='__container'>
				<Title className='projects__title'>{t('section.projects.title')}</Title>
				<Desc className='project__color'>{t('section.projects.suptitle')}</Desc>
				<ToggleButtonGroup>
					{toggle === 'all' ? (
						<ToggleButton active value='all' onClick={() => setToggle('all')}>
							{t('projects.toggle-button.all')}
						</ToggleButton>
					) : (
						<ToggleButton value='all' onClick={() => setToggle('all')}>
							{t('projects.toggle-button.all')}
						</ToggleButton>
					)}
					<Divider />

					{toggle === 'store' ? (
						<ToggleButton active value='store' onClick={() => setToggle('store')}>
							{t('projects.toggle-button.store')}
						</ToggleButton>
					) : (
						<ToggleButton value='store' onClick={() => setToggle('store')}>
							{t('projects.toggle-button.store')}
						</ToggleButton>
					)}
					<Divider />
					{toggle === 'landing' ? (
						<ToggleButton active value='landing' onClick={() => setToggle('landing')}>
							{t('projects.toggle-button.landing')}
						</ToggleButton>
					) : (
						<ToggleButton value='landing' onClick={() => setToggle('landing')}>
							{t('projects.toggle-button.landing')}
						</ToggleButton>
					)}
					<Divider />
					{toggle === 'other' ? (
						<ToggleButton active value='other' onClick={() => setToggle('other')}>
							{t('projects.toggle-button.others')}
						</ToggleButton>
					) : (
						<ToggleButton value='other' onClick={() => setToggle('other')}>
							{t('projects.toggle-button.others')}
						</ToggleButton>
					)}
				</ToggleButtonGroup>
				<CardContainer>
					{toggle === 'all' &&
						projects.map((project, id) => (
							<ProjectCard
								key={id}
								project={project}
								openModal={openModal}
								setOpenModal={setOpenModal}
							/>
						))}
					{projects
						.filter((item) => item.category === toggle)
						.map((project) => (
							<ProjectCard
								project={project}
								openModal={openModal}
								setOpenModal={setOpenModal}
								key={project}
							/>
						))}
				</CardContainer>
			</Wrapper>
		</Container>
	);
};

export default Projects;
