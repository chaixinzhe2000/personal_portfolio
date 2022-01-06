import { css } from '@emotion/react'
import { blue, gray, red } from '../../constants'

export const leftMenu = css`
  min-width: 250px;
  label: menu;
`

export const menuItem = css`
  font-size: 18px;
  color: ${blue};
  cursor: pointer;
  font-family: 'Circular Std Book';
  line-height: 25px;

  :hover {
    color: ${gray};
  }

  label: menuItem;
`

export const menu = css`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const intro = css`
  font-size: 18px;
  color: ${gray};
  font-family: 'Circular Std Book';
	width: calc(100% - 230px);
	max-width: 800px;

	@media (max-width: 710px) {
		width: 100%;
	}
`
