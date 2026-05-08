import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { locales } from '../components/base/LanguageSwitcher/index';
import '../styles/style.scss';
import Form from '../components/Form';
import Button from '../components/base/Button';
import animScroll from '../utils/animScroll';
import React, { useEffect } from 'react';

const Container = styled.div`
	padding: 135px 0 90px;

	@media (max-width: 767.98px) {
		padding: 110px 0 56px;
	}
`;

const Wrapper = styled.div``;

const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 700;
	margin-bottom: 18px;
	letter-spacing: -0.04em;

	@media (max-width: 767.98px) {
		font-size: 34px;
	}
`;

const Subtitle = styled.p`
	max-width: 680px;
	margin: 0 auto 30px;
	text-align: center;
	font-size: 18px;
	line-height: 1.65;
	opacity: 0.84;

	@media (max-width: 767.98px) {
		font-size: 16px;
		margin-bottom: 24px;
	}
`;

const ContactPanel = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 24px;
	padding: 30px;
	background: var(--project-bg-card);
	border: 1px solid rgba(92, 98, 236, 0.22);
	box-shadow: 0 18px 55px rgba(0, 0, 0, 0.18);

	@media (max-width: 767.98px) {
		padding: 18px;
		border-radius: 18px;
	}
`;

const SocialList = styled.ul`
	margin: 26px auto 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	padding: 0;

	@media (max-width: 600px) {
		gap: 12px;
		flex-direction: column;
	}
`;

const SocialItem = styled.li`
	display: flex;
	line-height: 24px;
	font-size: 18px;
	transition: all 0.3s;
	cursor: pointer;

	@media (max-width: 600px) {
		font-size: 16px;
		width: 100%;
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
			<Wrapper className='__container'>
				<Title className='projects__title _anim-items _anim-no-hide anim_1'>
					{t('section.contacts.title')}
				</Title>

				<Subtitle className='project__color _anim-items _anim-no-hide anim_1'>
					{isEnglish
						? 'Have a project, landing page or website idea? Send a message — I will help turn it into a clean, responsive interface.'
						: 'Есть идея сайта, лендинга или проекта? Напишите — помогу превратить её в аккуратный, адаптивный интерфейс.'}
				</Subtitle>

				<ContactPanel className='_anim-items _anim-no-hide anim_1'>
					<Form />

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
				</ContactPanel>
			</Wrapper>
		</Container>
	);
};

export default Contacts;
