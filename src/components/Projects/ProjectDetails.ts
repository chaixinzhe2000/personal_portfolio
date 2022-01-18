export interface IProject {
	title: string
	technology: string[]
	description: string
	link?: string
	image: string
	language: string[]
	source: string
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
	source: 'Figma'
}

export const ProjectEvolution: IProject = {
	title: 'Evolution',
	technology: ['JavaFX'],
	language: ['Java'],
	description:
		'A neural network powered Flappy Bird game where birds gradually learn when and where to jump.',
	image: 'https://static.keygames.com/2/113722/96298/672x448/flappybird-og.webp',
	source: 'Keygames'
}

export const ProjectMidPoint: IProject = {
	title: 'MidPoint',
	technology: [
		'React',
		'Apache Maven',
		'MongoDB',
		'Firebase',
		'Heroku',
		'JWT'
	],
	language: ['Java', 'TypeScript'],
	description:
		'A fun polling site that allows user to post interesting questions to community and gauge public opinions.',
	image:
		'https://i.imgur.com/NlgKXxf.png',
	link: 'https://www.midpoint.fun/',
	source: 'Xinzhe Chai'
}
