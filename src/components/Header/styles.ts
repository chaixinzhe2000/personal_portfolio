import { css } from "@emotion/react";
import { gray, red } from "../../constants";

export const headerWrapper = css`
	width: 100%;
	font-family: "Circular Std Book";
	label: headerwrapper;
`

export const name = css`
	color: ${red};
	cursor: pointer;
	font-weight: 600;
	label: name;
`

export const tagline = css`
	color: ${gray};
	margin-top: 2px;
	margin-left: -2px;
	line-height: 0.95em;
	label: tagline;
`

export const content = css`
	font-size: 26px;
	margin: 25px 36px;
	label: content;
`

export const iconGroup = css`
	width: max-content;
	display: flex;
	gap: 15px;
	margin-top: 10px;
	label: icongroup;
`

export const icon = css`
	height: 18px;
	cursor: pointer;
	label: icon;
`

export const fbIcon = css`
margin-top: 0.5px;
`

export const githubIcon = css`
margin-top: 1px;
`