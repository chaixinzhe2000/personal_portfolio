import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import { Section } from '../Section'
import { EducationItem } from './EducationItem'

export function Education() {
	const rightContent = (
		<React.Fragment>
			<EducationItem
				title="Concurrent Sc.B. and Sc.M. in Computer Science"
				school="Brown University"
				date="May 2023"
				description="Relevant Coursework: Distributed Systems, Blockchains and Cryptocurrency, Software Engineering, Web Applications, Computer Systems, Deep Learning, Data Structures and Algorithms, Hypertext Systems, Statistical Inference, Programming Languages"
				location="Providence, RI"
				schoolLink="https://www.brown.edu/"
			/>
			<EducationItem
				title="International Baccalaureate"
				school="United World College Changshu China"
				date="2016 - 2019"
				description="I founded TEDxUWCChangshu and organized Mini-UWC Summer Program for 4 consecutive years."
				location="Changshu"
				schoolLink="https://www.uwc.org/"
			/>
		</React.Fragment>
	)
	return <Section left="Education" right={rightContent} customStyle={styles.wrapper} />
}
