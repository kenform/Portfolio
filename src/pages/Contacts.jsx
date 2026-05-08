import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../styles/style.scss';
import Form from '../components/Form';
import Button from '../components/base/Button';
import animScroll from '../utils/animScroll';
import React, { useEffect } from 'react';

const Container = styled.div`
	padding: 125px 0 86px;

	@media (max-width: 767.98px) {
		padding: 105px 0 56px;
	}
`;

const Header = styled.div`
	max-width: 760px;
	margin: 0 auto 34px;
	text-align: center;

	@media (max-width: 767.98px) {
		margin-bottom: 24px;
	}
`;

const Title = styled.div`
	font-size: 60px;
	font-weight: 700;
	letter-spacing: -0.04em;
	margin-bottom: 16px;

	@media (max-width: 767.98px) {
		font-size: 34px;
		margin-bottom: 14px;
	}
`;

const Subtitle = styled.p`
	max-width: 720px;
	margin: 0 auto;
	font-size: 18px;
	line-height: 1.7;
	opacity: 0.84;

	@media (max-width: 767.98px) {
		font-size: 16px;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
	gap: 24px;
	align-items: start;

	@media (max-width: 991.98px) {
		grid-template-columns: 1fr;
	}
`;

const InfoCard = styled.aside`
	padding: 28px;
	border-radius: 22px;
	background: var(--project-bg-card);
	border: 1px solid rgba(255, 255, 255, 0.08);
	box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);

	@media (max-width: 767.98px) {
		padding: 20px;
		border-radius: 18px;
	}
`;

const Eyebrow = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 7px 12px;
	border-radius: 999px;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	border: 1px solid rgba(92, 98, 236, 0.22);
	color: var(--projects-title);
	background: rgba(92, 98, 236, 0.08);
`;

const Dot = styled.span`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #5c62ec;
`;

const InfoTitle = styled.h2`
	margin: 18px 0 12px;
	font-size: 34px;
	line-height: 1.12;
	font-weight: 700;
	letter-spacing: -0.03em;
	color: var(--project-color);

	@media (max-width: 767.98px) {
		font-size: 28px;
	}
`;

const InfoText = styled.p`
	margin: 0;
	font-size: 16px;
	line-height: 1.7;
	opacity: 0.82;
	color: var(--project-color);
`;

const StatusCard = styled.div`
	margin-top: 22px;
	padding: 16px 18px;
	border-radius: 18px;
	border: 1px solid rgba(255, 255, 255, 0.08);
	background: rgba(255, 255, 255, 0.03);
`;

const StatusLabel = styled.div`
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	opacity: 0.68;
	color: var(--project-color);
`;

const StatusValue = styled.div`
	margin-top: 8px;
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 16px;
	font-weight: 600;
	color: var(--project-color);
`;

const StatusSignal = styled.span`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #5c62ec;
	box-shadow: 0 0 0 4px rgba(92, 98, 236, 0.14);
	flex: 0 0 auto;
`;

const MetaList = styled.div`
	margin-top: 22px;
	display: grid;
	gap: 12px;
`;

const MetaItem = styled.div`
	padding: 14px 16px;
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.02);
	border: 1px solid rgba(255, 255, 255, 0.07);
`;

const MetaLabel = styled.div`
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	opacity: 0.64;
	color: var(--project-color);
`;

const MetaValue = styled.div`
	margin-top: 6px;
	font-size: 15px;
	line-height: 1.6;
	color: var(--project-color);
`;

const SocialList = styled.ul`
	margin: 24px 0 0;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 12px;
	padding: 0;
	list-style: none;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const SocialItem = styled.li`
	display: flex;
	min-width: 0;

	& > * {
		width: 100%;
	}
`;

const FormCard = styled.div`
	padding: 0;
	border-radius: 22px;

	@media (max-width: 767.98px) {
		border-radius: 18px;
	}
`;

const Contacts = () => {
	const { t, i18n } = useTranslation();
	const isEnglish = (i18n.resolvedLanguage || '').toLowerCase().startsWith('en');

	useEffect(() => {
		animScroll();
	}, []);

	return (
		<Container className='projects__bg'>
			<div className='__container'>
				<Header>
					<Title className='projects__title _anim-items _anim-no-hide anim_1'>
						{t('section.contacts.title')}
					</Title>

					<Subtitle className='project__color _anim-items _anim-no-hide anim_1'>
						{isEnglish
							? 'Have a project, landing page or website idea? Send a message — I will help turn it into a clean, responsive interface.'
							: 'Есть идея сайта, лендинга или проекта? Напишите — помогу превратить её в аккуратный, адаптивный интерфейс.'}
					</Subtitle>
				</Header>

				<Grid>
					<InfoCard className='_anim-items _anim-no-hide anim_1'>
						<Eyebrow>
							<Dot />
							{isEnglish ? 'Contact' : 'Связь'}
						</Eyebrow>

						<InfoTitle>
							{isEnglish ? 'Let’s discuss your idea calmly and clearly.' : 'Обсудим идею спокойно и по делу.'}
						</InfoTitle>

						<InfoText>
							{isEnglish
								? 'Websites, landing pages, redesigns and interface polishing — if you already have a task or just a rough direction, send a message.'
								: 'Сайты, лендинги, редизайн и полировка интерфейсов — если задача уже есть или пока только направление, можно просто написать.'}
						</InfoText>

						<StatusCard>
							<StatusLabel>{isEnglish ? 'Availability' : 'Статус'}</StatusLabel>
							<StatusValue>
								<StatusSignal />
								{isEnglish ? 'Usually reply within the day' : 'Обычно отвечаю в течение дня'}
							</StatusValue>
						</StatusCard>

						<MetaList>
							<MetaItem>
								<MetaLabel>{isEnglish ? 'Format' : 'Формат'}</MetaLabel>
								<MetaValue>
									{isEnglish ? 'Landing pages, portfolio, business websites' : 'Лендинги, портфолио, сайты услуг'}
								</MetaValue>
							</MetaItem>

							<MetaItem>
								<MetaLabel>{isEnglish ? 'Preferred contact' : 'Удобнее всего'}</MetaLabel>
								<MetaValue>Telegram / LinkedIn</MetaValue>
							</MetaItem>
						</MetaList>

						<SocialList className='_anim-items _anim-no-hide anim_1'>
							<SocialItem>
								<Button modifier='btn__Social' link='https://t.me/Kenform' icon='telegram' text='Telegram' />
							</SocialItem>
							<SocialItem>
								<Button
									modifier='btn__Social'
									link='https://www.linkedin.com/in/kenform/'
									icon='linkedIn'
									text='LinkedIn'
								/>
							</SocialItem>
						</SocialList>
					</InfoCard>

					<FormCard className='_anim-items _anim-no-hide anim_1'>
						<Form />
					</FormCard>
				</Grid>
			</div>
		</Container>
	);
};

export default Contacts;
