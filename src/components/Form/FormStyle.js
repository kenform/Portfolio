import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding-bottom: 34px;
`;

export const ContactForm = styled.form`
	width: 100%;
	max-width: 660px;
	display: flex;
	flex-direction: column;
	padding: 30px;
	border-radius: 18px;
	gap: 18px;
	background: var(--project-bg-card);
	border: 1px solid rgba(255, 255, 255, 0.12);
	box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);

	@media (max-width: 600px) {
		padding: 18px;
		border-radius: 16px;
		gap: 14px;
	}
`;

export const ContactTitle = styled.div`
	font-size: 24px;
	margin-bottom: 4px;
	font-weight: 700;

	@media (max-width: 600px) {
		font-size: 20px;
	}
`;

export const ContactInput = styled.input`
	background-color: transparent;
	border: 1px solid rgba(177, 178, 179, 0.7);
	outline: none;
	font-size: 17px;
	border-radius: 12px;
	padding: 13px 16px;
	color: inherit;
	transition: border-color 0.2s ease, box-shadow 0.2s ease;

	&:focus {
		border-color: #5c62ec;
		box-shadow: 0 0 0 3px rgba(92, 98, 236, 0.14);
	}
`;

export const ContactInputMessage = styled.textarea`
	background-color: transparent;
	border: 1px solid rgba(177, 178, 179, 0.7);
	outline: none;
	font-size: 17px;
	border-radius: 12px;
	padding: 13px 16px;
	color: inherit;
	min-height: 170px;
	resize: vertical;
	transition: border-color 0.2s ease, box-shadow 0.2s ease;

	&:focus {
		border-color: #5c62ec;
		box-shadow: 0 0 0 3px rgba(92, 98, 236, 0.14);
	}
`;

export const ContactButton = styled.button`
	cursor: pointer;
	width: 100%;
	text-align: center;
	padding: 18px 16px;
	margin-top: 2px;
	border-radius: 12px;
	border: 1px solid transparent;
	font-size: 18px;
	font-weight: 800;
	transition: all 0.25s ease;

	@media (max-width: 600px) {
		padding: 16px;
		font-size: 16px;
	}

	&:hover {
		transform: translateY(-2px);
		border-color: rgba(92, 98, 236, 0.45);
	}
`;

export const PopupModal = styled.div`
	padding: 28px 42px;
	border-radius: 16px;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 22px;
	align-items: center;
	justify-content: space-between;
	font-size: 34px;
	text-align: center;

	@media (max-width: 767.9px) {
		padding: 34px 18px;
		font-size: 26px;
	}
`;

export const PopupContent = styled.div`
	margin: auto;
	font-family: 'Nunito';
	font-weight: bold;
`;

export const PopupActions = styled.div`
	width: 220px;

	@media (max-width: 767.9px) {
		width: 100%;
	}
`;
