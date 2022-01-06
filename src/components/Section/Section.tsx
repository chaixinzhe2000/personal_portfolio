import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import * as styles from './styles'

interface SectionProps {
  left: string
  right: React.ReactChild
  customStyle?: SerializedStyles
}

export function Section({ left, right, customStyle }: SectionProps) {
  function capitalize(s: string) {
    return s[0].toUpperCase() + s.slice(1)
  }

  return (
    <div css={[styles.content, customStyle]}>
      <div css={styles.leftContent}>{capitalize(left)}</div>
      <div css={styles.rightContent}>{right}</div>
    </div>
  )
}
