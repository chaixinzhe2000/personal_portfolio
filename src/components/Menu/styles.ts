import { css } from '@emotion/react'
import { blue, gray } from '../../constants'

export const leftMenu = css`
  min-width: 230px;

  @media (max-width: 480px) {
    min-width: 0;
  }

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

  @media (max-width: 780px) {
    flex-wrap: wrap;
  }

  label: menu;
`

export const intro = css`
  font-size: 18px;
  color: ${gray};
  font-family: 'Circular Std Book';
  width: calc(100% - 230px);
  max-width: 800px;

  @media (max-width: 780px) {
    margin-top: 20px;
    width: 100%;
  }

  label: intro;
`
