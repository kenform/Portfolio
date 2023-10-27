import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';
import '../../styles/style.scss';
import { useTranslation } from 'react-i18next';
import {
	Container,
	Wrapper,
	ContactForm,
	ContactInput,
	ContactInputMessage,
	ContactButton,
	ContactTitle,
	PopupModal,
	PopupContent,
	PopupActions,
} from './FormStyle';

const Form = () => {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const [popupOpen, setPopupOpen] = useState(false);
	const formErrors = errors.user_email || errors.user_name || errors.textarea;
	const form = useRef();
	useEffect(() => {
		formErrors === undefined ? setPopupOpen(true) : setPopupOpen(false);
	}, [formErrors]);

	const sendEmail = () => {
		emailjs.sendForm('service_amgdxf9', 'template_29nxnxi', form.current, 'i2XvsVo2YJWLiCGao').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			},
		);
		reset();
	};
	return (
		<Container>
			<Wrapper>
				<ContactForm
					ref={form}
					onSubmit={handleSubmit(sendEmail)}
					className='project__color box__shadow _anim-items _anim-no-hide anim_1 '
					action='#'
					name='form'
				>
					<ContactTitle className='project__color'>{t('Form.title')}🚀</ContactTitle>

					<ContactInput
						{...register('user_email', {
							required: 'Email is require field!',
							pattern: {
								value: /^\S+@\S\S+$/i,
								message: 'Please enter valid email! Example: kenfo@gmail.com',
							},
						})}
						className='project__color input__email'
						placeholder={t('Form.placeholder-email')}
						name='user_email'
						id='email'
						type='mail'
					/>

					{errors.user_email && (
						<div style={{ color: 'red', marginTop: '-10px' }}>{errors.user_email.message}</div>
					)}

					<ContactInput
						{...register('user_name', { required: 'Name is require field!' })}
						className='project__color input__name'
						placeholder={t('Form.placeholder-name')}
						type='text'
						name='user_name'
						id='name'
					/>

					{errors.user_name && (
						<div style={{ color: 'red', marginTop: '-10px' }}>{errors.user_name.message}</div>
					)}
					<ContactInputMessage
						{...register('textarea', { required: 'Message is require field!' })}
						className='project__color input__textarea'
						placeholder={t('Form.placeholder-message')}
						rows='10'
						cols={30}
						name='textarea'
					/>
					{errors.textarea && (
						<div style={{ color: 'red', marginTop: '-10px' }}>{errors.textarea.message}</div>
					)}

					<Popup
						trigger={
							<ContactButton id='button' className='button__bg' type='submit'>
								{t('Form.Button-submit')}
							</ContactButton>
						}
						modal
						closeOnDocumentClick
					>
						{popupOpen ? (
							(close) => (
								<PopupModal className='popup__bg'>
									<PopupContent className='project__color'>
										{t('Form.Button-sent')}
										<p></p>
									</PopupContent>

									<PopupActions>
										<ContactButton
											className='button__bg '
											onClick={() => {
												close();
											}}
										>
											{t('Form.Button-close')}
										</ContactButton>
									</PopupActions>
								</PopupModal>
							)
						) : (
							<></>
						)}
					</Popup>
				</ContactForm>
			</Wrapper>
		</Container>
	);
};

export default Form;
