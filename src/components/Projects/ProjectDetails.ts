export interface IProject {
	title: string
	technology: string[]
	description: string
	link?: string
	image: string
	language: string[]
	fineprint?: string
}

/**
 * BrowerFrame: https://browserframe.com/
 * Canva: https://www.canva.com/
 * Imgur: https://imgur.com/
 */
export const ProjectNudge: IProject = {
	title: 'Nudge',
	technology: ['React Native', 'Expo', 'Firebase', 'MongoDB'],
	language: ['TypeScript'],
	description:
		'A social to-do list app where users send small tasks to their friends, so everyday favors are done easily.',
	image: 'https://imgur.com/6THfskt.png',
	link: 'https://github.com/chaixinzhe2000/nudge',
	fineprint: 'Part of coursework for CSCI 1320 (Web App)',
}

export const ProjectEvolution: IProject = {
	title: 'Evolution',
	technology: ['JavaFX'],
	language: ['Java'],
	description:
		'A neural network powered Flappy Bird game where birds gradually learn when and where to jump.',
	image: 'https://static.keygames.com/2/113722/96298/672x448/flappybird-og.webp',
	fineprint: 'Image courtesy of Keygames',
}

export const ProjectMidPoint: IProject = {
	title: 'MidPoint',
	technology: ['React', 'Apache Maven', 'MongoDB', 'Firebase', 'Heroku', 'JWT'],
	language: ['Java', 'TypeScript'],
	description:
		'A fun polling site that allows user to post interesting questions to community and gauge public opinions.',
	image: 'https://i.imgur.com/NlgKXxf.png',
	link: 'https://www.midpoint.fun/',
	fineprint: 'Part of coursework for CSCI 0320 (Software Engineering)',
}

export const Project33sh: IProject = {
	title: '33sh',
	technology: ['Linux', 'Vagrant'],
	language: ['C'],
	description:
		'A custom shell implemented with C that takes in and parses user commands to operate functionality as Linux terminal.',
	image: 'https://i.imgur.com/kHtdeEH.png',
	fineprint: 'Part of coursework for CSCI 0330 (Computer Systems)',
}

export const ProjectTradeTracker: IProject = {
	title: 'TradeTracker',
	technology: ['Yahoo Finance API', 'argparse', 'pandas', 'numpy'],
	language: ['Python'],
	description:
		'A command line interface that helps day trader calculate cumulative earnings on any ticker over time.',
	image: 'https://i.imgur.com/xthhXPH.png',
	link: 'https://github.com/chaixinzhe2000/trade_tracker',
	fineprint: 'Hobby project in Summer 2020',
}

export const ProjectBIP: IProject = {
	title: 'BIP Website',
	technology: ['SCSS', 'Bootstrap', 'Github Pages'],
	language: ['HTML', 'JavaScript'],
	description:
		'Official website for Brown Initiative for Policy, a student-run policy and research organization.',
	image: 'https://i.imgur.com/w9PTkBO.png',
	link: 'https://brownpolicy.org/',
	fineprint: 'A Full Stack at Brown (FSAB) Project',
}

