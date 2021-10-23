import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as styles from './styles'

export function Header() {
	return (
		<div css={styles.headerWrapper}>
			<div css={styles.content}>
			<div css={styles.name}>Xinzhe Chai</div>
			<div css={styles.tagline}>Software Developer</div>

			</div>
		</div>
	);
}