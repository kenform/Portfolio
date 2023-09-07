import styled from 'styled-components';
import '../styles/style.scss';
import Form from '../components/Form/Form';
import Button from '../components/button/Button';
import TestButton from '../components/testButton/TestButton';

export const Container = styled.div`
	padding: 150px 0px 100px 0;
`;
export const Wrapper = styled.div``;
export const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 600;
	color: #5c62ec;
	margin-bottom: 20px;
	@media (max-width: 767.98px) {
		margin-top: 12px;
		font-size: 32px;
	}
`;

export const SocialList = styled.ul`
	margin: 0 auto;
	max-width: toRem(570);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	row-gap: 40px;
	@media (max-width: 600) {
		row-gap: 20px;
	}
`;

export const SocialItem = styled.li`
	line-height: 24px;
	font-size: 18px;
	transition: all 0.3s;
	cursor: pointer;
	@media (max-width: 600) {
		font-size: 16px;
	}
`;

const Contacts = () => {
	return (
		<Container>
			<Wrapper className='__container'>
				<Title className='project__color'>Contacts</Title>
				<Form />

				<SocialList>
					<SocialItem>
						<Button
							modifier='btn__Github'
							link='https://t.me/Kenform'
							icon='telegram'
							name='Telegram'
							secondname='Telegram'
						/>
					</SocialItem>
					<SocialItem>
						<TestButton />
					</SocialItem>
				</SocialList>
			</Wrapper>
		</Container>
	);
};

export default Contacts;
