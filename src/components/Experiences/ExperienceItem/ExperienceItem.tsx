import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'
import { cpuUsage } from 'process'

interface ExperienceItemProps {
  title: string
  company: string
  date: string
  description: string | React.ReactChild
  location: string
  companyLink: string
}

export function ExperienceItem({
  title,
  company,
  date,
  description,
  location,
  companyLink,
}: ExperienceItemProps) {
  return (
    <div css={styles.wrapper}>
      <div css={styles.firstLine}>
        <div>{title}</div>
        <div css={styles.date}>{date}</div>
      </div>
      <div css={styles.secondLine}>
        <div>
          <a href={companyLink} css={styles.blueText} target="_blank" rel="noreferrer">
            {company}
          </a>
        </div>
        <div css={styles.grayText}>{location}</div>
      </div>
      <div css={styles.description}>{description}</div>
    </div>
  )
}
