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
	width: 100%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	padding: 32px;
	border-radius: 16px;

	gap: 20px;
	@media (max-width: 600px) {
		padding: 15px;
	}
`;

const ContactTitle = styled.div`
	font-size: 24px;
	margin-bottom: 6px;
	font-weight: 600;
	@media (max-width: 600px) {
		font-size: 20px;
	}
`;

const ContactInput = styled.input`
	flex: 1;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.text_secondary};
	outline: none;
	font-size: 18px;
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
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
`;

const ContactButton = styled.input`
	cursor: pointer;
	width: 100%;
	text-align: center;

	padding: 25px 16px;
	margin-top: 2px;
	border-radius: 12px;
	border: none;
	font-size: 20px;
	font-weight: 800;
	transition: all 0.5s ease;
	@media (max-width: 600px) {
		padding: 20px 16px;
		font-size: 18px;
	}
	&:hover {
		background: #5c32ea;
	}
`;

const Form = () => {
	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		sendMessage(form);
		async function sendMessage(form) {
			const formData = new FormData(form);
			if (formData) {
				const url = 'sendmessage.php';
				const response = await fetch(url, {
					method: 'POST',
					body: formData,
				});
				if (response.ok) {
					// form.reset();
					alert('Form sent!');
					console.log(formData);
				} else {
					alert('Error');
				}
			}
		}
	};

	return (
		<Container>
			<Wrapper>
				<ContactForm
					onSubmit={handleSubmit}
					className='project__color box__shadow'
					action='#'
					name='form'
				>
					<ContactTitle className='project__color'>Email Me 🚀</ContactTitle>
					<ContactInput
						className='project__color input__email'
						placeholder='Your Email'
						name='email'
						id='email'
						data-reg='^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$'
						type='mail'
					/>

					<ContactInput
						className='project__color input__name'
						placeholder='Your Name'
						type='text'
						name='name'
						id='name'
					/>

					<ContactInputMessage
						className='project__color input__textarea'
						placeholder='Message'
						rows='10'
						cols={30}
						name='message'
						type='textarea'
					/>

					<ContactButton id='button' className='button__bg' type='submit' />
				</ContactForm>
			</Wrapper>
		</Container>
	);
};

export default Form;
