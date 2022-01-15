import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

export function Menu() {
	const introText =
		'I am a junior studying Computer Science at Brown University. I am passionate abo' +
		'ut building exciting experience for everyone, through web technologies such as R' +
		'eact, Redux, and Express. I am never afraid to take on engineering challenges wi' +
		'th a learning mind, but I am probably drinking Aloe water while I tackle them.'

	return (
		<div css={styles.menu}>
			<div css={styles.leftMenu}>
				<div css={styles.menuItem}>Projects</div>
				<div css={styles.menuItem}>Experiences</div>
				<div css={styles.menuItem}>Education</div>
				<div css={styles.menuItem}>Skills</div>
			</div>
			<div css={styles.intro}>{introText}</div>
		</div>
	)
}
