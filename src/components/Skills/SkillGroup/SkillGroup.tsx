import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

interface SkillGroupProps {
  title: string
  skillArray: string[]
}

export function SkillGroup({ title, skillArray }: SkillGroupProps) {
  return (
    <div css={styles.wrapper}>
      <div>{title}</div>
      <div css={styles.description}>
        {skillArray.map((skill, i) => {
          return (
            <div css={styles.skill} key={i}>
              {skill}
            </div>
          )
        })}
      </div>
    </div>
  )
}
