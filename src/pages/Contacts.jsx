import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { locales } from '../components/base/LanguageSwitcher/index';
import '../styles/style.scss';
import Form from '../components/Form';
import Button from '../components/base/Button';
import animScroll from '../utils/animScroll';
import React, { useEffect } from 'react';
const Container = styled.div`
	padding: 128px 0 84px;
	@media (max-width: 767.98px) {
		padding: 108px 0 56px;
	}
`;
const Wrapper = styled.div``;
const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 700;
	margin-bottom: 16px;
	letter-spacing: -0.04em;
	@media (max-width: 767.98px) {
		font-size: 34px;
		margin-bottom: 14px;
	}
`;
const Subtitle = styled.p`
	max-width: 700px;
	margin: 0 auto 28px;
	text-align: center;
	font-size: 18px;
	line-height: 1.7;
	opacity: 0.84;
	@media (max-width: 767.98px) {
		font-size: 16px;
		margin-bottom: 22px;
	}
`;
const ContactPanel = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 24px;
	padding: 30px;
	background: var(--project-bg-card);
	border: 1px solid rgba(255, 255, 255, 0.08);
	box-shadow: 0 16px 42px rgba(0, 0, 0, 0.14);
	@media (max-width: 767.98px) {
		padding: 18px;
		border-radius: 18px;
	}
`;
const SocialList = styled.ul`
	margin: 24px auto 0;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 14px;
	padding: 0;
	list-style: none;
	width: 100%;
	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		gap: 12px;
	}
`;
const SocialItem = styled.li`
	display: flex;
	width: 100%;
	min-width: 0;
	& > * {
		width: 100%;
	}
	& a,
	& button {
		width: 100%;
		min-height: 52px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 14px;
		padding: 0 18px;
		line-height: 1.2;
		white-space: nowrap;
	}
	@media (max-width: 600px) {
		& a,
		& button {
			min-height: 50px;
		}
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