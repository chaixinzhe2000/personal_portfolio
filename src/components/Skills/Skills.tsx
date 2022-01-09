import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import { Section } from '../Section'
import { SkillGroup } from './SkillGroup'

export function Skills() {
  const rightContent = (
    <React.Fragment>
      <SkillGroup
        title="Languages"
        skillArray={[
          'TypeScript',
          'Python',
          'Java',
          'C',
          'C++',
          'Racket',
          'HTML',
          'CSS',
          'JavaScript',
          'MATLAB',
          'SQL',
          'R',
        ]}
      />
      <SkillGroup
        title="Frontend"
        skillArray={[
          'React',
          'React Native',
          'Redux',
          'SASS',
          'Emotion',
          'jQuery',
          'Jest',
          'Cypress',
        ]}
      />
      <SkillGroup
        title="Backend"
        skillArray={[
          'Express',
          'Flask',
          'Django',
          'Firebase',
          'MongoDB',
          'Node.js',
          'REST',
        ]}
      />
      <SkillGroup
        title="DevOps"
        skillArray={[
          'Docker',
          'Github Action',
          'Rollbar',
          'CircleCI',
          'Heroku',
          'AWS Lightsail',
        ]}
      />
      <SkillGroup
        title="Other Tools"
        skillArray={[
          'Git',
          'Adobe XD',
          'Figma',
          'Numpy',
          'Adobe Lightroom',
          'WordPress',
          'SolidWorks',
        ]}
      />
    </React.Fragment>
  )
  return <Section left="Skills" right={rightContent} customStyle={styles.wrapper} />
}
