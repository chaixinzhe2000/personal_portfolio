import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
// @ts-ignore
import Github from '../../images/github.svg'
// @ts-ignore
import Facebook from '../../images/fb.svg'
// @ts-ignore
import Email from '../../images/email.svg'
// @ts-ignore
import LinkedIn from '../../images/linkedin.svg'

export function Header() {
  return (
    <div css={styles.headerWrapper}>
      <div css={styles.content}>
        <div css={styles.name}>Xinzhe Chai</div>
        <div css={styles.tagline}>Software Developer</div>
        <div css={styles.iconGroup}>
          <a
            css={styles.icon}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/chaixinzhe2000"
          >
            <img css={[styles.githubIcon, styles.icon]} src={Github} alt="github" />
          </a>
          <a
            css={styles.icon}
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/xzchai/"
          >
            <img css={[styles.icon, styles.fbIcon]} src={Facebook} alt="facebook" />
          </a>
          <a
            css={styles.icon}
            target="_blank"
            rel="noreferrer"
            href="mailto:xinzhe_chai@brown.edu"
          >
            <img css={styles.icon} src={Email} alt="email" />
          </a>
          <a
            css={styles.icon}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/xzchai/"
          >
            <img css={styles.icon} src={LinkedIn} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}
