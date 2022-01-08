export interface IProject {
  title: string
  technology: string
  description: string
  link?: string
  image: string
}

export const ProjectEvolution: IProject = {
  title: 'Evolution',
  technology: 'React, TypeScript, Redux, Webpack, Emotion, Styled Components',
  description:
    'A Flappy Bird game where neural networks help birds to learn when and where to jump.',
  image: 'https://static.keygames.com/2/113722/96298/672x448/flappybird-og.webp',
}

export const ProjectMidPoint: IProject = {
  title: 'MidPoint',
  technology: 'React, TypeScript, Redux, Webpack, Emotion, Styled Components',
  description:
    'A fun polling site that allows user to post interesting questions to community and gauge public opinions.',
  image:
    'https://www.democracydocket.com/wp-content/uploads/2021/04/revisiting-polling-places-NEW-WEB.png',
  link: 'https://midpoint.fun/',
}
