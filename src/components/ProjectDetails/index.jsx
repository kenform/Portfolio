import React from 'react';
import styled from 'styled-components';
import { CloseRounded, GitHub, LinkedIn, Visibility } from '@mui/icons-material';
import { Modal } from '@mui/material';
import '../../styles/style.scss';
const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #000000a7;
	display: flex;
	align-items: top;
	justify-content: center;
	overflow-y: scroll;
	transition: all 0.5s ease;
`;

const Wrapper = styled.div`
	max-width: 800px;
	width: 100%;
	border-radius: 16px;
	margin: 50px 12px;
	height: min-content;
	color: ${({ theme }) => theme.text_primary};
	padding: 20px;
	display: flex;
	flex-direction: column;
	position: relative;
	line-height: 1.6rem;
`;

const Title = styled.div`
	font-size: 28px;
	font-weight: 600;
	margin: 15px 6px 0px 6px;
	@media only screen and (max-width: 600px) {
		font-size: 24px;
		margin: 6px 6px 0px 6px;
	}
`;

const Date = styled.div`
	font-size: 16px;
	margin: 2px 6px;
	font-weight: 400;
	color: ${({ theme }) => theme.text_secondary};
	@media only screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

const Desc = styled.div`
	font-size: 16px;
	font-weight: 400;
	margin: 8px 6px;
	@media only screen and (max-width: 600px) {
		font-size: 14px;
		margin: 6px 6px;
	}
`;

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 12px;
	margin-top: 30px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
	font-size: 20px;
	font-weight: 600;
	color: ${({ theme }) => theme.text_primary};
	margin: 8px 6px;
	@media only screen and (max-width: 600px) {
		font-size: 16px;
		margin: 8px 6px;
	}
`;

const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 8px 0px;
	@media only screen and (max-width: 600px) {
		margin: 4px 0px;
	}
`;

const Tag = styled.div`
	font-size: 14px;
	font-weight: 400;
	color: ${({ theme }) => theme.primary};
	margin: 4px;
	padding: 4px 8px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.primary + 20};
	@media only screen and (max-width: 600px) {
		font-size: 12px;
	}
`;

const Members = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	flex-wrap: wrap;
	margin: 12px 6px;
	@media only screen and (max-width: 600px) {
		margin: 4px 6px;
	}
`;

const Member = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const MemberImage = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: 4px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	@media only screen and (max-width: 600px) {
		width: 32px;
		height: 32px;
	}
`;

const MemberName = styled.div`
	font-size: 16px;
	font-weight: 500;
	width: 200px;
	color: ${({ theme }) => theme.text_primary};
	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 12px 0px;
	gap: 12px;
`;

const Button = styled.a`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
	color: #fff;
	padding: 20px 16px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.primary};
	cursor: pointer;
	text-decoration: none;
	transition: all 0.3s ease;
	&:hover {
		background-color: ${({ theme }) => theme.primary + 99};
	}
	@media only screen and (max-width: 600px) {
		gap: 10px;
	}
`;

const index = ({ openModal, setOpenModal }) => {
	const project = openModal?.project;
	return (
		<Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
			<Container>
				<Wrapper className='projects__bg '>
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
					<Image src={project?.image} />
					<Title className='project__color'>{project?.title}</Title>
					<Date>{project.date}</Date>
					<Tags>
						{project?.tags.map((tag) => (
							<Tag>{tag}</Tag>
						))}
					</Tags>
					<Desc className='project__color'>{project?.description}</Desc>
					{project.member && (
						<>
							<Label>Members</Label>
							<Members>
								{project?.member.map((member) => (
									<Member>
										<MemberImage src={member.img} />
										<MemberName>{member.name}</MemberName>
										<a
											href={member.github}
											target='new'
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											<GitHub />
										</a>
										<a
											href={member.linkedin}
											target='new'
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
						<Button href={project?.github} target='new'>
							<GitHub />
							<p>
								<span className='hide'> View</span>
								Code
							</p>
						</Button>
						<Button href={project?.webapp} target='new'>
							<Visibility />
							<p>
								View <span className='hide'>Live App</span>
							</p>
						</Button>
					</ButtonGroup>
				</Wrapper>
			</Container>
		</Modal>
	);
};

export default index;
