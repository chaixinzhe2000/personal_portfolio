import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

interface ProjectItemProps {
  title: string
  technology: string[]
  description: string
  link?: string
  image: string
  toggleOpen: () => void
}

export function ProjectItem({
  title,
  technology,
  description,
  link,
  image,
  toggleOpen,
}: ProjectItemProps) {
  return (
    <div css={styles.wrapper} onClick={toggleOpen}>
      <div css={styles.infoWrapper}>
        <div css={styles.title}>{title}</div>
        <div css={styles.description}>{description}</div>
      </div>
    </div>
  )
}
