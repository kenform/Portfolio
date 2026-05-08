import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const Wrapper = styled.div`
	width: 100%;
`;

export const ContactForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 0;
	background: transparent;
	border: 0;
	box-shadow: none;
`;

export const ContactTitle = styled.div`
	font-size: 24px;
	font-weight: 800;
	margin-bottom: 8px;
	color: var(--project-color);

	@media (max-width: 600px) {
		font-size: 21px;
	}
`;

export const ContactInput = styled.input`
	width: 100%;
	background: rgba(255, 255, 255, 0.035);
	border: 1px solid rgba(177, 178, 179, 0.5);
	outline: none;
	font-size: 16px;
	border-radius: 12px;
	padding: 14px 16px;
	color: var(--project-color);
	transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

	&:focus {
		border-color: rgba(92, 98, 236, 0.75);
		background: rgba(92, 98, 236, 0.06);
		box-shadow: 0 0 0 3px rgba(92, 98, 236, 0.12);
	}
`;

export const ContactInputMessage = styled.textarea`
	width: 100%;
	min-height: 180px;
	resize: vertical;
	background: rgba(255, 255, 255, 0.035);
	border: 1px solid rgba(177, 178, 179, 0.5);
	outline: none;
	font-size: 16px;
	border-radius: 12px;
	padding: 14px 16px;
	color: var(--project-color);
	transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

	&:focus {
		border-color: rgba(92, 98, 236, 0.75);
		background: rgba(92, 98, 236, 0.06);
		box-shadow: 0 0 0 3px rgba(92, 98, 236, 0.12);
	}
`;

export const ContactButton = styled.button`
	cursor: pointer;
	width: 100%;
	text-align: center;
	padding: 16px;
	border-radius: 12px;
	border: 1px solid rgba(92, 98, 236, 0.6);
	background: var(--purple);
	color: #fff;
	font-size: 17px;
	font-weight: 800;
	transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		filter: brightness(1.06);
		box-shadow: 0 12px 26px rgba(92, 98, 236, 0.22);
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
