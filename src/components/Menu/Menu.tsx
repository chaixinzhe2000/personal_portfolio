import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

export function Menu() {
	const introText = "I am a rising junior concentrating in Computer Science at BROWN UNIVERSITY. At the moment, I am an intern @ Zumper working on the frontend team, and I am passionate about building exciting experience for everyone. As I keep on learning new skills every day, I created this website to document my everyday projects and experiences."

	return (
		<div css={styles.menu}>
			<div css={styles.leftMenu}>
				<div css={styles.menuItem}>Projects</div>
				<div css={styles.menuItem}>Experiences</div>
				<div css={styles.menuItem}>Education</div>
				<div css={styles.menuItem}>Skills</div>
			</div>
			<div css={styles.intro}>
				{introText}
			</div>
		</div>

	)
}