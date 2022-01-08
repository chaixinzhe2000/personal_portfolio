import { css } from '@emotion/react'
import { blue, lightBlue, lightGray } from '../../../constants'

export const description = css`
  margin-top: 7px;
  width: 100%;
  word-break: normal;

  label: description;
`

export const title = css`
  color: ${blue};
  width: max-content;
  label: title;
`

export const wrapper = css`
  font-family: 'Circular Std Book';
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;

    .css-${title.name} {
      color: ${lightBlue};
    }

    .css-${description.name} {
      color: ${lightGray};
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }

  label: wrapper;
`

export const infoWrapper = css`
  label: infoWrapper;
`
