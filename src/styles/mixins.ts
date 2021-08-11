/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { css } from "styled-components"

import styles from "./variables"

export const flexPosition = ({ align = "", justify = "", direction = "" }) => `
  display: flex;
  ${align && `align-items: ${align};`}
  ${justify && `justify-content: ${justify};`}
  ${direction && `flex-direction: ${direction};`}
`

export const fontStyle = (color: string, fontSize: string | number, fontWeight: string | number) => `
  ${color && `color: ${color};`}
  ${fontSize && `font-size: ${fontSize};`}
  ${fontWeight && `font-weight: ${fontWeight};`}
`

export const globalStyle = () => css`
	&,
	* {
		font-family: "Montserrat", sans-serif;
		box-sizing: border-box;
		text-decoration: none;
	}
`

export const getColSize = (colSize = 1) => {
    let col = colSize < 0 ? 1 : colSize
    col = colSize > 12 ? 12 : colSize
    const spacing =
		colSize === 1
		    ? styles.grid.COL_SPACING
		    : styles.grid.COL_SPACING * (colSize - 1)
    return `${col * styles.grid.COL_SIZE + spacing}px`
}

export const tableDefaultPadding = () => {
    return css`padding: ${styles.spacing.SPACINGS} ${styles.spacing.SPACINGXL}`
}
