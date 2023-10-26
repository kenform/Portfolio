import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import '../../styles/style.scss';
import { Container, Wrapper, Title, Desc, TimelineSection } from './style.js';

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