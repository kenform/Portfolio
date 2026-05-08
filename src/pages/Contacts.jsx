import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { locales } from '../components/base/LanguageSwitcher/index';
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
	margin: 0 auto 38px;
	text-align: center;

	@media (max-width: 767.98px) {
		margin-bottom: 26px;
	}
`;

const Title = styled.div`
	font-size: 60px;
	font-weight: 700;
	letter-spacing: -0.04em;
	margin-bottom: 18px;

	@media (max-width: 767.98px) {
		font-size: 36px;
	}
`;

const Subtitle = styled.p`
	font-size: 18px;
	line-height: 1.65;
	opacity: 0.86;

	@media (max-width: 767.98px) {
		font-size: 16px;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1.18fr);
	gap: 24px;
	align-items: stretch;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled.div`
	border-radius: 22px;
	background: var(--project-bg-card);
	border: 1px solid rgba(92, 98, 236, 0.22);
	box-shadow: 0 18px 48px rgba(0, 0, 0, 0.18);

	@media (max-width: 767.98px) {
		border-radius: 18px;
	}
`;

const InfoCard = styled(Card)`
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 28px;

	@media (max-width: 767.98px) {
		padding: 22px;
	}
`;

const Eyebrow = styled.div`
	color: var(--purple);
	font-size: 13px;
	font-weight: 800;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	margin-bottom: 14px;
`;

const InfoTitle = styled.h2`
	font-size: 32px;
	line-height: 1.18;
	font-weight: 800;
	letter-spacing: -0.04em;
	margin-bottom: 16px;

	@media (max-width: 767.98px) {
		font-size: 26px;
	}
`;

const InfoText = styled.p`
	font-size: 16px;
	line-height: 1.7;
	opacity: 0.82;
`;

const MetaList = styled.div`
	display: grid;
	gap: 12px;
`;

const MetaItem = styled.div`
	padding: 14px 15px;
	border-radius: 14px;
	background: rgba(92, 98, 236, 0.07);
	border: 1px solid rgba(92, 98, 236, 0.14);
`;

const MetaLabel = styled.div`
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	opacity: 0.55;
	margin-bottom: 5px;
`;

const MetaValue = styled.div`
	font-size: 15px;
	font-weight: 700;
`;

const Socials = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;

const FormCard = styled(Card)`
	padding: 30px;

	@media (max-width: 767.98px) {
		padding: 20px;
	}
`;

const Contacts = () => {
	const { t, i18n } = useTranslation();
	const engLanguage = locales['en'].title;
	const isEnglish = i18n.resolvedLanguage === engLanguage;

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

				<Grid className='_anim-items _anim-no-hide anim_1'>
					<InfoCard className='project__color'>
						<div>
							<Eyebrow>{isEnglish ? 'Let’s build' : 'Связь'}</Eyebrow>
							<InfoTitle>
								{isEnglish
									? 'Tell me about your project'
									: 'Расскажите о задаче'}
							</InfoTitle>
							<InfoText>
								{isEnglish
									? 'I work on landing pages, interfaces and small web products with a focus on clarity, responsive layout and clean visual details.'
									: 'Я работаю с лендингами, интерфейсами и небольшими веб-проектами: аккуратная вёрстка, адаптив, понятная структура и чистый визуал.'}
							</InfoText>
						</div>

						<MetaList>
							<MetaItem>
								<MetaLabel>{isEnglish ? 'Status' : 'Статус'}</MetaLabel>
								<MetaValue>{isEnglish ? 'Open to selected projects' : 'Открыт к новым задачам'}</MetaValue>
							</MetaItem>
							<MetaItem>
								<MetaLabel>{isEnglish ? 'Focus' : 'Фокус'}</MetaLabel>
								<MetaValue>{isEnglish ? 'Frontend, landing pages, UI polish' : 'Frontend, лендинги, UI-полировка'}</MetaValue>
							</MetaItem>
						</MetaList>

						<Socials>
							<Button modifier='btn__Social' link='https://t.me/Kenform' icon='telegram' text='Telegram' />
							<Button modifier='btn__Social' link='https://www.linkedin.com/in/kenform/' icon='linkedIn' text='LinkedIn' />
						</Socials>
					</InfoCard>

					<FormCard>
						<Form />
					</FormCard>
				</Grid>
			</div>
		</Container>
	);
};

export default Contacts;
