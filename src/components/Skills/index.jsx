import React, { useEffect } from 'react';
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
	SkillBadge,
} from './SkillStyles.js';
import animScroll from '../../utils/animScroll';

const Skills = () => {
	const { t } = useTranslation();

	useEffect(() => {
		animScroll();
	}, []);

	return (
		<Container className='skills' id='skills'>
			<Wrapper className='__container'>
				<Title className='projects__title _anim-items _anim-no-hide anim_1'>
					{t('section.skills.title')}
				</Title>

				<Desc className='project__color _anim-items _anim-no-hide anim_1'>
					{t('section.skills.suptitle')}
				</Desc>

				<SkillsContainer>
					{skills.map((skill, i) => (
						<Skill key={i} className='_anim-items _anim-no-hide anim_2'>
							<SkillTitle>{skill.title}</SkillTitle>

							<SkillList>
								{skill.skills.map((item) => (
									<SkillItem key={item.name}>
										<SkillBadge>{item.name.slice(0, 2)}</SkillBadge>
										<span>{item.name}</span>
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
