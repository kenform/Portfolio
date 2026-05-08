import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/style.scss';
import {
	Container,
	Wrapper,
	Header,
	Title,
	Desc,
	SkillsContainer,
	Skill,
	SkillHead,
	SkillIcon,
	SkillTitleWrap,
	SkillTitle,
	SkillMeta,
	SkillList,
	SkillItem,
	SkillFooter,
	SkillCounter,
} from './SkillStyles.js';
import animScroll from '../../utils/animScroll';

const groups = {
	en: [
		{
			title: 'Frontend',
			meta: 'Interface development',
			icon: '</>',
			items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Responsive UI'],
		},
		{
			title: 'Build & workflow',
			meta: 'Project delivery',
			icon: '{}',
			items: ['Git', 'GitHub', 'Vite', 'Gulp', 'npm', 'REST API', 'Deploy', 'Code cleanup', 'Performance basics'],
		},
		{
			title: 'UI polish',
			meta: 'Visual quality',
			icon: 'UI',
			items: ['Figma', 'Adaptive layout', 'Component structure', 'Cross-browser', 'Accessibility basics', 'Animations', 'Design systems'],
		},
		{
			title: 'AI-assisted work',
			meta: 'Modern workflow',
			icon: 'AI',
			items: ['Prompting', 'Brief analysis', 'Landing generation', 'Refactoring', 'QA checklist', 'Content polish'],
		},
	],
	ru: [
		{
			title: 'Frontend',
			meta: 'Разработка интерфейсов',
			icon: '</>',
			items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Адаптив'],
		},
		{
			title: 'Сборка и процесс',
			meta: 'Доставка проекта',
			icon: '{}',
			items: ['Git', 'GitHub', 'Vite', 'Gulp', 'npm', 'REST API', 'Deploy', 'Чистка кода', 'База performance'],
		},
		{
			title: 'UI-polish',
			meta: 'Визуальное качество',
			icon: 'UI',
			items: ['Figma', 'Mobile-first', 'Компоненты', 'Кроссбраузерность', 'База accessibility', 'Анимации', 'Design system'],
		},
		{
			title: 'AI workflow',
			meta: 'Современный подход',
			icon: 'AI',
			items: ['Prompting', 'Разбор ТЗ', 'Генерация лендингов', 'Рефакторинг', 'QA-чеклист', 'Полировка текстов'],
		},
	],
};

const Skills = () => {
	const { t, i18n } = useTranslation();
	const isRu = (i18n.resolvedLanguage || '').toLowerCase().startsWith('ru');
	const skills = isRu ? groups.ru : groups.en;

	useEffect(() => {
		animScroll();
	}, []);

	return (
		<Container className='skills' id='skills'>
			<Wrapper className='__container'>
				<Header>
					<Title className='projects__title _anim-items _anim-no-hide anim_1'>
						{t('section.skills.title')}
					</Title>

					<Desc className='project__color _anim-items _anim-no-hide anim_1'>
						{isRu
							? 'Практический стек для аккуратных лендингов, адаптивных интерфейсов и быстрой полировки проектов до портфолио-уровня.'
							: 'A practical stack for clean landing pages, responsive interfaces and portfolio-level UI polish.'}
					</Desc>
				</Header>

				<SkillsContainer>
					{skills.map((group, i) => (
						<Skill key={group.title} className='_anim-items _anim-no-hide anim_2'>
							<SkillHead>
								<SkillIcon>{group.icon}</SkillIcon>

								<SkillTitleWrap>
									<SkillTitle>{group.title}</SkillTitle>
									<SkillMeta>{group.meta}</SkillMeta>
								</SkillTitleWrap>
							</SkillHead>

							<SkillList>
								{group.items.map((item) => (
									<SkillItem key={item}>
										<span>{item}</span>
									</SkillItem>
								))}
							</SkillList>

							<SkillFooter>
								<span>{isRu ? 'Практика' : 'Applied'}</span>
								<SkillCounter>{String(i + 1).padStart(2, '0')}</SkillCounter>
							</SkillFooter>
						</Skill>
					))}
				</SkillsContainer>
			</Wrapper>
		</Container>
	);
};

export default Skills;
