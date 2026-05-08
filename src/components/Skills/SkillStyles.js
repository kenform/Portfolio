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
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 12px;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 700;
	margin-bottom: 15px;
	letter-spacing: -0.04em;

	@media (max-width: 768px) {
		margin-bottom: 12px;
		font-size: 38px;
	}
`;

export const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	max-width: 720px;
	font-weight: 500;
	line-height: 1.6;
	opacity: 0.82;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

export const SkillsContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 34px;
	gap: 24px;

	@media (max-width: 991.98px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`;

export const Skill = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
	border-radius: 24px;
	padding: 26px;
	background:
		radial-gradient(circle at top right, rgba(92, 98, 236, 0.2), transparent 34%),
		linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.025));
	border: 1px solid rgba(255, 255, 255, 0.11);
	box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
	transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 26px;
		width: 54px;
		height: 4px;
		border-radius: 0 0 999px 999px;
		background: var(--purple);
		box-shadow: 0 0 24px rgba(92, 98, 236, 0.6);
	}

	&:hover {
		transform: translateY(-6px);
		border-color: rgba(92, 98, 236, 0.6);
		box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
	}

	@media (max-width: 768px) {
		padding: 22px;
		border-radius: 20px;
	}
`;

export const SkillTitle = styled.h2`
	font-size: 24px;
	font-weight: 800;
	text-align: left;
	margin: 6px 0 20px;
	letter-spacing: -0.02em;
`;

export const SkillList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;

export const SkillItem = styled.div`
	font-size: 14px;
	font-weight: 700;
	border-radius: 999px;
	padding: 10px 13px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	background: rgba(92, 98, 236, 0.1);
	border: 1px solid rgba(92, 98, 236, 0.18);
	transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;

	&:hover {
		transform: translateY(-2px);
		background: rgba(92, 98, 236, 0.16);
		border-color: rgba(92, 98, 236, 0.35);
	}

	@media (max-width: 500px) {
		font-size: 13px;
		padding: 9px 11px;
	}
`;

export const SkillImage = styled.img`
	width: 22px;
	height: 22px;
	object-fit: contain;
`;
