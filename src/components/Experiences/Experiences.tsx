import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import { Section } from '../Section'
import { ExperienceItem } from './ExperienceItem'

export function Experiences() {
  const rightContent = (
    <React.Fragment>
      <ExperienceItem
        title="Incoming Software Engineer Intern"
        company="Meta Platforms"
        date="May 2022"
        description=""
        location="Seattle, WA"
      />
      <ExperienceItem
        title="Software Engineering Intern, Frontend"
        company="Zumper"
        date="July - September 2021"
        description="I developed the customer-facing Multifamily Analytics Dashboard with React and Redux. Extensively tested all components with Jest and Cypress test suite. Contributed 15+ reusable web components for Zumper's UI library, providing standardized components across different frontend services."
        location="San Francisco, CA"
      />
      <ExperienceItem
        title="Web Development Intern"
        company="Keva Health"
        date="July - August 2020"
        description="I rebuilt the company website from scratch using WordPress and custom CSS, which now generates 1500+ monthly views. Coordinated with different team for website content production; completed site migration and provided timely support during downtime.
				"
        location="Lexington, MA"
      />
    </React.Fragment>
  )
  return <Section left="Experiences" right={rightContent} customStyle={styles.wrapper} />
}
