import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Experiences, Header, Menu, Section } from './components'
import * as styles from './styles'

function App() {
  return (
    <div css={styles.content}>
      <Header />
      <Menu />
      <Experiences />
    </div>
  )
}

export default App
