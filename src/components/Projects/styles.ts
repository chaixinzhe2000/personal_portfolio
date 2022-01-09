import { css } from '@emotion/react'
import { blue, gray } from '../../constants'

export const wrapper = css`
  margin-top: 50px;
  label: wrapper;
`

export const projectsWrapper = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  column-gap: 50px;
  row-gap: 28px;

  @media (max-width: 780px) {
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, calc(100vw - 72px));
  }

  label: projectsWrapper;
`

export const image = css`
  width: min(500px, 80vw);
  height: 200px;
  object-fit: cover;
  margin: 0;

  @media (max-width: 450px) {
    width: min(500px, 90vw);
  }

  label: image;
`

export const modalInfoWrapper = css`
  padding: 18px 30px 25px 30px;
  width: calc(min(500px, 80vw) - 60px);
  font-family: 'Circular Std Book';
  color: ${gray};

  @media (max-width: 450px) {
    padding: 15px 20px;
    width: calc(min(500px, 90vw) - 40px);
  }

  label: modalInfoWrapper;
`

export const title = css`
  font-size: 24px;
  color: ${blue};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  label: title;
`

export const pointerCursor = css`
  cursor: pointer;
`

export const description = css`
  font-size: 18px;
  margin-top: 8px;
  label: description;
`

export const technology = css`
  font-size: 15px;
  margin-top: 3px;
  color: ${blue};
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  label: technology;
`

export const language = css`
  font-size: 15px;
  margin-top: 3px;
  color: ${blue};
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  label: language;
`

export const languageItem = css`
  margin-right: 7px;
  label: languageItem;
`

export const techItem = css`
  margin-right: 7px;
  label: techItem;
`

export const linkIcon = css`
  width: 22px;
  height: 22px;
`

export const divider = css`
  border: none;
  border-top: 1px solid #e5e7eb;
  border-radius: 90;
  margin: 15px 0;
`

export const imageCredit = css`
  font-size: 12px;
  color: ${gray};
  margin-top: 20px;

  @media (max-width: 450px) {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  label: imageCredit;
`

export const languageTitle = css`
  margin-top: 10px;
  label: languageTitle;
`
