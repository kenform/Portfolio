import styled from 'styled-components';
export const Container = styled.div`
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

export const Wrapper = styled.div`
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

export const ContactForm = styled.form`
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

export const ContactTitle = styled.div`
	font-size: 24px;
	margin-bottom: 6px;
	font-weight: 600;
	@media (max-width: 600px) {
		font-size: 20px;
	}
`;

export const ContactInput = styled.input`
	flex: 1;
	background-color: transparent;
	border: 1px solid rgb(177, 178, 179);
	outline: none;
	font-size: 18px;
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid #5c62ec;
	}
`;

export const ContactInputMessage = styled.textarea`
	flex: 1;
	background-color: transparent;
	border: 1px solid rgb(177, 178, 179);
	outline: none;
	font-size: 18px;
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid #5c62ec;
	}
`;

export const ContactButton = styled.button`
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

export const PopupModal = styled.div`
	padding: 25px 75px;
	border-radius: 15px;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 25px;
	align-items: center;
	justify-content: space-between;
	font-size: 48px;
	@media (max-width: 767.9px) {
		padding: 52px 15px;
		font-size: 32px;
	}
`;
export const PopupContent = styled.div`
	margin: auto;
	font-family: 'Nunito';
	font-weight: bold;
`;

export const PopupActions = styled.div`
	width: 250px;
	bottom: 0;
	@media (max-width: 767.9px) {
		width: 230px;
	}
`;
