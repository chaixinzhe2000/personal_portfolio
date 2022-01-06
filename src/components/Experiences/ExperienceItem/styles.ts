import { css } from '@emotion/react'
import { blue, gray } from '../../../constants'

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
  label: grayText;
`

export const description = css`
  margin-top: 6px;
  font-size: 18px;
  color: ${gray};
  label: firstLine;
`
