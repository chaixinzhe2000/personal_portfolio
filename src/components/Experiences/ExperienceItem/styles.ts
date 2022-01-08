import { css } from '@emotion/react'
import { blue, gray, lightBlue } from '../../../constants'

export const wrapper = css`
  font-family: 'Circular Std Book';
  margin-bottom: 28px;
  label: wrapper;
`

export const firstLine = css`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${gray};
  label: firstLine;
`

export const secondLine = css`
  color: ${blue};
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label: secondLine;
`

export const grayText = css`
  color: ${gray} !important;
  text-align: right;
  label: grayText;
`

export const blueText = css`
  color: ${blue} !important;
  text-decoration: none;

	&:hover {
		color: ${lightBlue} !important;
	}
	
  label: blueText;
`

export const description = css`
  margin-top: 7px;
  font-size: 18px;
  color: ${gray};

  @media (max-width: 580px) {
    font-size: 17px;
  }

  label: description;
`

export const date = css`
  text-align: right;

  @media (max-width: 580px) {
    display: none;
  }
`
