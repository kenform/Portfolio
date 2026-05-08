import styled from 'styled-components';

export const Container = styled.section`
	position: relative;
	z-index: 1;
	padding: 18px 0 8px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Header = styled.div`
	max-width: 780px;
	margin: 0 auto 34px;
	text-align: center;

	@media (max-width: 768px) {
		margin-bottom: 24px;
	}
`;

export const Title = styled.div`
	font-size: 58px;
	text-align: center;
	font-weight: 800;
	margin-bottom: 14px;
	letter-spacing: -0.045em;

	@media (max-width: 768px) {
		font-size: 38px;
	}
`;

export const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	max-width: 720px;
	margin: 0 auto;
	font-weight: 500;
	line-height: 1.65;
	opacity: 0.82;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

export const SkillsContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 20px;
	margin-top: 8px;

	@media (max-width: 760px) {
		grid-template-columns: 1fr;
		gap: 16px;
	}
`;

export const Skill = styled.article`
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	min-height: 270px;
	border-radius: 22px;
	padding: 24px;
	background:
		radial-gradient(circle at 0 0, rgba(92, 98, 236, 0.14), transparent 34%),
		var(--project-bg-card);
	border: 1px solid rgba(92, 98, 236, 0.22);
	box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
	transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;

	&::after {
		content: '';
		position: absolute;
		top: 22px;
		right: 24px;
		width: 42px;
		height: 1px;
		background: linear-gradient(90deg, rgba(92, 98, 236, 0.55), transparent);
		opacity: 0.55;
	}

	&:hover {
		transform: translateY(-3px);
		border-color: rgba(92, 98, 236, 0.42);
		box-shadow: 0 24px 58px rgba(0, 0, 0, 0.22);
	}

	@media (max-width: 768px) {
		min-height: auto;
		padding: 20px;
		border-radius: 18px;
	}
`;

export const SkillHead = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
	margin-bottom: 20px;
	padding-right: 44px;
`;

export const SkillIcon = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 48px;
	width: 48px;
	height: 48px;
	border-radius: 16px;
	color: #fff;
	background: rgba(92, 98, 236, 0.22);
	border: 1px solid rgba(92, 98, 236, 0.38);
	font-size: 14px;
	font-weight: 900;
	letter-spacing: -0.04em;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
`;

export const SkillTitleWrap = styled.div`
	min-width: 0;
`;

export const SkillTitle = styled.h2`
	font-size: 23px;
	font-weight: 850;
	color: var(--project-color);
	margin-bottom: 5px;
	letter-spacing: -0.028em;
`;

export const SkillMeta = styled.div`
	font-size: 12px;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.14em;
	opacity: 0.48;
`;

export const SkillList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;

export const SkillItem = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 9px 12px;
	border-radius: 999px;
	color: var(--project-color);
	background: rgba(255, 255, 255, 0.035);
	border: 1px solid rgba(177, 178, 179, 0.18);
	font-size: 14px;
	font-weight: 750;
	transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

	&::before {
		content: '';
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--purple);
		opacity: 0.85;
	}

	&:hover {
		transform: translateY(-2px);
		background: rgba(92, 98, 236, 0.11);
		border-color: rgba(92, 98, 236, 0.38);
	}
`;

export const SkillFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	margin-top: auto;
	padding-top: 22px;
	font-size: 11px;
	font-weight: 850;
	text-transform: uppercase;
	letter-spacing: 0.16em;
	opacity: 0.52;
`;

export const SkillCounter = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	border-radius: 50%;
	border: 1px solid rgba(92, 98, 236, 0.3);
	opacity: 0.9;
`;

// Compatibility exports.
export const SkillImage = styled.img`
	display: none;
`;

export const SkillBadge = styled.span`
	display: none;
`;
