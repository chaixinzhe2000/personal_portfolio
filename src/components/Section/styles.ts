import { css } from '@emotion/react'
import { blue, gray } from '../../constants'

export const leftContent = css`
  min-width: 230px;
  label: menu;
  font-family: 'Circular Std Book';
  color: ${gray};
  font-size: 26px;
  line-height: 1.1em;
  letter-spacing: -0.5px;

	@media (max-width: 480px) {
    min-width: 0;
  }

	label: leftContent;
`

export const content = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 780px) {
    flex-wrap: wrap;
  }

  label: content;
`

export const rightContent = css`
  font-size: 18px;
  color: ${gray};
  font-family: 'Circular Std Book';
  width: calc(100% - 230px);
  max-width: 800px;

  @media (max-width: 780px) {
    margin-top: 20px;
    width: 100%;
  }
`
