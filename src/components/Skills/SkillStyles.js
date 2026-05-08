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
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 12px;
`;

export const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 700;
	margin-bottom: 14px;
	letter-spacing: -0.04em;

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
	line-height: 1.6;
	opacity: 0.86;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

export const SkillsContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 22px;
	margin-top: 34px;

	@media (max-width: 991.98px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
		gap: 16px;
	}
`;

export const Skill = styled.article`
	width: 100%;
	border-radius: 22px;
	padding: 26px;
	background: var(--project-bg-card);
	border: 1px solid rgba(92, 98, 236, 0.24);
	box-shadow: 0 18px 44px rgba(0, 0, 0, 0.18);
	transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

	&:hover {
		transform: translateY(-4px);
		border-color: rgba(92, 98, 236, 0.5);
		box-shadow: 0 22px 52px rgba(0, 0, 0, 0.22);
	}

	@media (max-width: 768px) {
		padding: 20px;
		border-radius: 18px;
	}
`;

export const SkillTitle = styled.h2`
	font-size: 24px;
	font-weight: 800;
	color: var(--project-color);
	margin-bottom: 20px;
	letter-spacing: -0.02em;
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
	background: rgba(92, 98, 236, 0.1);
	border: 1px solid rgba(92, 98, 236, 0.24);
	font-size: 14px;
	font-weight: 700;
	transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		border-color: rgba(92, 98, 236, 0.5);
		background: rgba(92, 98, 236, 0.16);
	}
`;

export const SkillBadge = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background: var(--purple);
	color: #fff;
	font-size: 10px;
	font-weight: 900;
	text-transform: uppercase;
`;

// Compatibility export: protects build if an old import is still cached somewhere.
export const SkillImage = styled.img`
	display: none;
`;
