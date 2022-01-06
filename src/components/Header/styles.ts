import { css } from "@emotion/react";
import { blue, gray } from "../../constants";

export const headerWrapper = css`
	width: 100%;
	font-family: "Circular Std Book";
	label: headerwrapper;
`

export const name = css`
	color: ${blue};
	cursor: pointer;
	font-weight: 500;
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
	font-size: 24px;
	letter-spacing: -0.7px;
	label: content;
`

export const iconGroup = css`
	width: max-content;
	display: flex;
	gap: 15px;
	margin-top: 8px;
	label: icongroup;
`

export const icon = css`
	height: 18px;
	cursor: pointer;
	label: icon;

	&:hover {
		filter: invert(31%) sepia(73%) saturate(2777%) hue-rotate(204deg) brightness(101%) contrast(90%);
	}
`

export const fbIcon = css`
	margin-top: 0.5px;
`

export const githubIcon = css`
	margin-top: 1px;
`