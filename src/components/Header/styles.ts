import { css } from "@emotion/react";
import { gray, red } from "../../constants";

export const headerWrapper = css`
	width: 100%;
	font-family: "Circular Std Book";
	label: headerwrapper;
`

export const name = css`
	color: ${red};
	label: name;
`

export const tagline = css`
	color: ${gray};
	margin-top: -3px;
	label: tagline;
`

export const content = css`
	font-size: 26px;
	margin: 25px 36px;
	label: content;
`