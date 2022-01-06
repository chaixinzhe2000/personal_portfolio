import { css } from "@emotion/react";
import { blue, gray, red } from "../../constants";

export const leftMenu = css`
min-width:  230px;
	label: menu;
`

export const menuItem = css`
	font-size: 18px;
	color: ${blue};
	cursor: pointer;
	font-family: "Circular Std Book";
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
	color: ${blue};
	font-family: "Circular Std Book";
`