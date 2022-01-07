import { css } from '@emotion/react'
import { blue, gray } from '../../constants'

export const wrapper = css`
  margin-top: 50px;
  label: wrapper;
`

export const projectsWrapper = css`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	column-gap: 20px;
  row-gap: 20px;

	@media (max-width: 780px) {
		margin-top: 5px;  
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(auto-fit, calc(100vw - 72px));
  }

	label: projectsWrapper;
`
