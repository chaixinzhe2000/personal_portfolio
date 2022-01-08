import { css } from '@emotion/react'
import { blue, gray } from '../../../constants'

export const wrapper = css`
  font-family: 'Circular Std Book';
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }

  label: wrapper;
`

export const description = css`
  margin-top: 8px;
  width: 100%;

  font-size: 15px;
  word-break: normal;

  label: description;
`

export const image = css`
  width: 140px;
  height: 100%;
  margin-right: 10px;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 100%;
    height: 170px;
    margin-right: 0;
  }

  label: image;
`

export const title = css`
  color: ${blue};
  width: max-content;
  label: title;
`

export const infoWrapper = css`
  padding: 18px;
  label: infoWrapper;
`
