import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/style.scss';
import { skills } from '../../data/constants';
import {
	Container,
	Wrapper,
	Title,
	Desc,
	SkillsContainer,
	SkillList,
	SkillTitle,
	Skill,
	SkillItem,
	SkillImage,
} from './SkillStyles.js';

const Skills = () => {
	const { t } = useTranslation();
	return (
		<Container className='skills' id='skills'>
			<Wrapper className=' __container'>
				<Title className='projects__title'> {t('section.skills.title')}</Title>
				<Desc className='project__color'>{t('section.skills.suptitle')}</Desc>
				<SkillsContainer>
					{skills.map((skill, i) => (
						<Skill key={i} className='skills-block'>
							<SkillTitle className='skills-block__title'>{skill.title}</SkillTitle>
							<SkillList>
								{skill.skills.map((item, name) => (
									<SkillItem key={name} className='skills-item'>
										<SkillImage src={item.image} />
										{item.name}
									</SkillItem>
								))}
							</SkillList>
						</Skill>
					))}
				</SkillsContainer>
			</Wrapper>
		</Container>
	);
};

export default Skills;
