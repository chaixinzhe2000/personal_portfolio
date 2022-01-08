import React from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Education, Experiences, Header, Menu, Projects, Skills } from './components'
import * as styles from './styles'

function App() {
  return (
    <div css={styles.content}>
      <Header />
      <Menu />
      <Experiences />
      <Projects />
      <Education />
      <Skills />
    </div>
  )
}

export default App
