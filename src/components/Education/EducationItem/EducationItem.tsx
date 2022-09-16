import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

interface ExperienceItemProps {
  title: string
  school: string
  date: string
  description: string | React.ReactChild
  location: string
  schoolLink: string
}

export function EducationItem({
  title,
  school,
  date,
  description,
  location,
  schoolLink,
}: ExperienceItemProps) {
  return (
    <div css={styles.wrapper}>
      <div css={styles.firstLine}>
        <div>{title}</div>
        <div css={styles.date}>{date}</div>
      </div>
      <div css={styles.secondLine}>
        <div>
          <a href={schoolLink} css={styles.blueText} target="_blank" rel="noreferrer">
            {school}
          </a>
        </div>
        <div css={styles.grayText}>{location}</div>
      </div>
      <div css={styles.description}>{description}</div>
    </div>
  )
}
