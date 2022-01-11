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
	image: 'https://s21.q4cdn.com/248165169/files/images/2018/02/nudge.crop_.jpg',
	source: 'hello world'
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
		'https://i.imgur.com/T7MR6UX.png',
	link: 'https://www.midpoint.fun/',
	source: 'Chai'
}
