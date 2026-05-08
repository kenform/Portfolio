import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;
	width: 100%;
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 12px;
`;

export const ContactForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 28px;
	border-radius: 22px;
	background: var(--project-bg-card);
	border: 1px solid rgba(255, 255, 255, 0.08);
	box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
	transition: border-color 0.2s ease, box-shadow 0.2s ease;
	gap: 16px;

	@media (max-width: 767.98px) {
		padding: 20px;
		border-radius: 18px;
		gap: 14px;
	}
`;

export const ContactTitle = styled.div`
	font-size: 24px;
	margin-bottom: 2px;
	font-weight: 700;
	line-height: 1.25;
	letter-spacing: -0.02em;

	@media (max-width: 600px) {
		font-size: 21px;
	}
`;

const fieldStyles = `
	width: 100%;
	background: transparent;
	border: 1px solid rgba(177, 178, 179, 0.24);
	outline: none;
	font-size: 16px;
	line-height: 1.5;
	border-radius: 14px;
	padding: 14px 16px;
	color: var(--project-color);
	transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

	&::placeholder {
		color: var(--project-color);
		opacity: 0.5;
	}

	&:focus {
		border-color: rgba(92, 98, 236, 0.68);
		background: rgba(92, 98, 236, 0.03);
		box-shadow: 0 0 0 3px rgba(92, 98, 236, 0.12);
	}
`;

export const ContactInput = styled.input`
	${fieldStyles}
`;

export const ContactInputMessage = styled.textarea`
	${fieldStyles}
	resize: vertical;
	min-height: 170px;
`;

export const ContactButton = styled.button`
	cursor: pointer;
	width: 100%;
	text-align: center;
	padding: 16px 18px;
	margin-top: 4px;
	border-radius: 14px;
	border: 1px solid rgba(92, 98, 236, 0.2);
	font-size: 17px;
	font-weight: 800;
	line-height: 1.2;
	transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

	@media (max-width: 600px) {
		padding: 15px 16px;
		font-size: 16px;
	}

	&:hover {
		transform: translateY(-1px);
	}
`;

export const PopupModal = styled.div`
	padding: 24px 28px;
	border-radius: 18px;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: space-between;
	font-size: 32px;
	max-width: min(520px, calc(100vw - 24px));

	@media (max-width: 767.9px) {
		padding: 22px 16px;
		font-size: 24px;
	}
`;

export const PopupContent = styled.div`
	margin: auto;
	font-family: 'Nunito';
	font-weight: 700;
	text-align: center;
	line-height: 1.35;
`;

export const PopupActions = styled.div`
	width: min(250px, 100%);
	bottom: 0;
`;
