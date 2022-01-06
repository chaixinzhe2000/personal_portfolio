import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Header, Menu } from './components';
import * as styles from './styles'

function App() {
	return (
		<div css={styles.content}>
			<Header />
			<Menu />
		</div>
	);
}

export default App;
