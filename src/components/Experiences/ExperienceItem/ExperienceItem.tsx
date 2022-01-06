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
}

export function ExperienceItem({
  title,
  company,
  date,
  description,
  location,
}: ExperienceItemProps) {
  return (
    <div css={styles.wrapper}>
      <div css={styles.firstLine}>
        <div>{title}</div>
        <div>{date}</div>
      </div>
      <div css={styles.secondLine}>
        <div>{company}</div>
        <div css={styles.grayText}>{location}</div>
      </div>
      <div css={styles.description}>{description}</div>
    </div>
  )
}
