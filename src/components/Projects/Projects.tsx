import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import { Section } from '../Section'
import { ProjectItem } from './ProjectItem'

export function Projects() {
	const rightContent = (
		<div css={styles.projectsWrapper}>
			<ProjectItem
				title="Evolution"
				technology=""
				description="A book database that allows logged in users to query a sample catalog of more than 5,000 popular books."
				link="https://www.google.com"
				image='https://www.discovery.org/m/2019/10/evolution-bacteria-beethoven-prageru.jpg'
			/>
			<ProjectItem
				title="MidPoint"
				technology="React, TypeScript, Emotion, Styled Components"
				description="A fun polling site that allows user to post interesting questions to community and gauge public opinions."
				link="https://www.google.com"
				image='https://www.democracydocket.com/wp-content/uploads/2021/04/revisiting-polling-places-NEW-WEB.png'
			/>
		</div>
	)
	return <Section left="Projects" right={rightContent} customStyle={styles.wrapper} />
}
