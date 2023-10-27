import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../styles/style.scss';
import Form from '../components/Form';
import Button from '../components/base/Button';
import animScroll from '../utils/animScroll';

const Container = styled.div`
	padding: 135px 0px 100px 0;
	@media (max-width: 767.98px) {
		padding: 120px 0px 50px 0;
	}
`;
const Wrapper = styled.div``;

const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 600;
	margin-bottom: 20px;
	@media (max-width: 767.98px) {
		font-size: 32px;
	}
`;

const SocialList = styled.ul`
	transition: all 0.8s ease 0.3s;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	@media (max-width: 600px) {
		gap: 20px;
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
	const { t } = useTranslation();
	animScroll();

	return (
		<Container className='projects__bg'>
			<Wrapper className='__container'>
				<Title className='projects__title _anim-items _anim-no-hide anim_1'>
					{t('section.contacts.title')}
				</Title>
				<Form className='_anim-items _anim-no-hide anim_1' />

				<SocialList className='_anim-items _anim-no-hide anim_1'>
					<SocialItem>
						<Button
							modifier='btn__Social'
							link='https://t.me/Kenform'
							icon='telegram'
							text='Telegram'
						/>
					</SocialItem>
					<SocialItem>
						<Button
							modifier='btn__Social'
							link='https://www.linkedin.com/in/kenform/'
							icon='linkedin'
							text='LinkedIn '
						/>
					</SocialItem>
				</SocialList>
			</Wrapper>
		</Container>
	);
};

export default Contacts;
