import React from 'react';
import { CloseRounded, GitHub, LinkedIn, Visibility } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { locales } from '../base/LanguageSwitcher/index';
import { Modal } from '@mui/material';
import '../../styles/style.scss';

import {
	Container,
	Wrapper,
	Title,
	Desc,
	Image,
	Date,
	Tags,
	Tag,
	Label,
	Members,
	Member,
	MemberImage,
	MemberName,
	ButtonGroup,
	Button,
} from './ProjectDStyles';

const ProjectDetails = ({ openModal, setOpenModal }) => {
	const project = openModal?.project;
	const { t, i18n } = useTranslation();
	const engLanguage = locales['en'].title;
	return (
		<Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
			<Container
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						setOpenModal({ state: false, project: null });
					}
				}}
			>
				<Wrapper className='projects__bg ' onClick={(event) => event.stopPropagation()}>
					<CloseRounded
						className='project__color'
						style={{
							position: 'absolute',
							top: '2px',
							right: '6px',
							cursor: 'pointer',
							width: '50px',
							height: '50px',
						}}
						onClick={() => setOpenModal({ state: false, project: null })}
					/>
					<Image src={process.env.PUBLIC_URL + '/' + project?.image} alt={project?.title} />
					<Title className='project__color'>{project?.title}</Title>
					<Date>{i18n.resolvedLanguage === engLanguage ? project?.dateEng : project?.dateRu}</Date>
					<Tags>
						{project?.tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</Tags>

					<Desc className='project__color'>
						{i18n.resolvedLanguage === engLanguage
							? project?.descriptionEng
							: project?.descriptionRu}
					</Desc>

					{project.member && (
						<>
							<Label>{t('labels.members')}</Label>
							<Members>
								{project?.member.map((member) => (
									<Member key={member}>
										<MemberImage src={member.img} />
										<MemberName>{member.name}</MemberName>
										<a
											href={member.github}
											target='_blank' rel='noreferrer'
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											<GitHub />
										</a>
										<a
											href={member.linkedin}
											target='_blank' rel='noreferrer'
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											<LinkedIn />
										</a>
									</Member>
								))}
							</Members>
						</>
					)}
					<ButtonGroup>
						{project?.github && (
							<Button href={project?.github} target='_blank' rel='noreferrer'>
								<GitHub />
								<p>
									<span className='hide'> {t('projects.details.buttons.view-code1')}</span>
									{t('projects.details.buttons.view-code2')}
								</p>
							</Button>
						)}
						{project?.webapp && (
							<Button href={project?.webapp} target='_blank' rel='noreferrer'>
								<Visibility />
								<p>
									{t('projects.details.buttons.live-app1')}
									
									<span className='hide'> {t('projects.details.buttons.live-app2')}</span>
								</p>
							</Button>
						)}
					</ButtonGroup>
				</Wrapper>
			</Container>
		</Modal>
	);
};

export default ProjectDetails;
