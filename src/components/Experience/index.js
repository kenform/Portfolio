import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import '../../styles/style.scss';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
	padding: 40px 0px 80px 0px;
	@media (max-width: 960px) {
		padding: 0px;
	}
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

const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 600;
	color: #5c62ec;
	margin-bottom: 15px;

	@media (max-width: 768px) {
		margin-bottom: 12px;
		font-size: 32px;
	}
`;

const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	max-width: 600px;
	line-height: 1.5;

	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 16px;
	}
`;

const TimelineSection = styled.div`
	width: 100%;
	max-width: 1000px;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;

const index = () => {
	return (
		<Container className='experience' id='experience'>
			<Wrapper className='__container'>
				<Title className='skills-title'>Experience</Title>
				<Desc className='skills-description'>
					My work experience as a software engineer and working on different companies and projects.
				</Desc>
				<TimelineSection>
					<Timeline>
						{experiences.map((experience, index) => (
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot variant='outlined' color='secondary' />
									{index !== experiences.length - 1 && (
										<TimelineConnector style={{ background: '#5c62ec' }} />
									)}
								</TimelineSeparator>
								<TimelineContent sx={{ py: '12px', px: 2 }}>
									<ExperienceCard experience={experience} />
								</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				</TimelineSection>
			</Wrapper>
		</Container>
	);
};

export default index;
