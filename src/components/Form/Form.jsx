import React from 'react';
import styled from 'styled-components';
import '../../styles/style.scss';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
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
	max-width: 1350px;
	padding-bottom: 50px;
	gap: 12px;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

const ContactForm = styled.form`
	width: 95%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.card};
	padding: 32px;
	border-radius: 16px;
	box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
	gap: 20px;
	@media (max-width: 600px) {
		padding: 15px;
	}
`;

const ContactTitle = styled.div`
	font-size: 24px;
	margin-bottom: 6px;
	font-weight: 600;
	color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
	flex: 1;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.text_secondary};
	outline: none;
	font-size: 18px;
	color: ${({ theme }) => theme.text_primary};
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
`;

const ContactInputMessage = styled.textarea`
	flex: 1;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.text_secondary};
	outline: none;
	font-size: 18px;
	color: ${({ theme }) => theme.text_primary};
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
`;

const ContactButton = styled.input`
	cursor: pointer;
	width: 100%;
	text-decoration: none;
	text-align: center;
	background: hsla(276, 100%, 50%, 1);

	padding: 13px 16px;
	margin-top: 2px;
	border-radius: 12px;
	border: none;
	color: ${({ theme }) => theme.text_primary};
	font-size: 18px;
	font-weight: 600;
	transition: background 0.5s ease;
	&:hover {
		background: #5c32ea;
	}
`;

const Form = () => {
	return (
		<Container>
			<Wrapper>
				{/* method='POST' */}
				<ContactForm class='form' action='#' encТype='multipart/form-data'>
					<ContactTitle>Email Me 🚀</ContactTitle>
					<ContactInput
						className='input__email'
						placeholder='Your Email'
						name='email'
						type='mail'
					/>

					<ContactInput className='input__name' placeholder='Your Name' name='name' type='text' />

					<ContactInput placeholder='Subject' name='subject' />
					<ContactInputMessage
						className='input__textarea'
						placeholder='Message'
						rows='10'
						cols={30}
						name='message'
						type='textarea'
					/>

					<ContactButton type='submit' />
				</ContactForm>
			</Wrapper>
		</Container>
	);
};

export default Form;
