import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as styles from './styles'
import Github from '../../images/github.svg'
import Facebook from '../../images/fb.svg'
import Email from '../../images/email.svg'
import LinkedIn from '../../images/linkedin.svg'

export function Header() {
	return (
		<div css={styles.headerWrapper}>
			<div css={styles.content}>
				<div css={styles.name}>Xinzhe Chai</div>
				<div css={styles.tagline}>Software Developer</div>
				<div css={styles.iconGroup}>
					<img css={[styles.githubIcon, styles.icon]} src={Github} alt="github" />
					<img css={[styles.icon, styles.fbIcon]} src={Facebook} alt="facebook" />
					<img css={styles.icon} src={Email} alt="email" />
					<img css={styles.icon} src={LinkedIn} alt="linkedin" />
				</div>
			</div>
		</div>
	);
}