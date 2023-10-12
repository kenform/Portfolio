import React from 'react';
import styled from 'styled-components';
import '../../styles/style.scss';
import { skills } from '../../data/constants';

const Container = styled.div`
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
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 600;
	color: #5c62ec;
	margin-bottom: 15px;

	@media (max-width: 768px) {
		margin-bottom: 12px;
		font-size: 48px;
	}
`;

export const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	max-width: 600px;
	font-weight: 500;
	color: #000;
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const SkillsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
	gap: 30px;
	justify-content: center;
`;

const Skill = styled.div`
	width: 100%;
	max-width: 500px;
	background: #fff;
	border: 0.1px solid #5c62ec;
	box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
	border-radius: 16px;
	padding: 18px 36px;
	@media (max-width: 768px) {
		max-width: 400px;
		padding: 10px 36px;
	}
	@media (max-width: 500px) {
		max-width: 330px;
		padding: 10px 36px;
	}
`;

const SkillTitle = styled.h2`
	font-size: 28px;
	font-weight: 600;
	color: #000;
	text-align: center;
	margin: 10px 0 15px;
`;

const SkillList = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 12px;
	margin-bottom: 20px;
`;

const SkillItem = styled.div`
	font-size: 16px;
	font-weight: 400;
	color: #000;
	border: 1px solid #000;
	border-radius: 12px;
	padding: 12px 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	${
		'' /* @media (max-width: 768px) {
		font-size: 14px;
		padding: 8px 12px;
	}
	@media (max-width: 500px) {
		font-size: 14px;
		padding: 6px 12px;
	} */
	}
`;

const SkillImage = styled.img`
	width: 24px;
	height: 24px;
`;

const Skills = () => {
	return (
		<Container className='skills' id='skills'>
			<Wrapper className=' __container'>
				<Title className='skills-title'>Skills</Title>
				<Desc className='skills-description'>
					Here are some of the skills I've been working on over the last year.
				</Desc>
				<SkillsContainer>
					{skills.map((skill,i) => (
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
