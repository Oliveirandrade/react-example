import styled, { css } from "styled-components"

import { mixins } from "../../styles"

import theme from "../../styles/variables"
import { FRComponent } from "../../types/commonTypes"

interface CustomProps extends FRComponent {
  direction?: string;
  background?: string;
  padding?: string;
  alignItems?: string;
  borderRadius?: string;
  shadow?: string;
  justify?: string;
  flex?: number;
}

const directionMap: { [name: string]: string } = {
    horizontal: "row",
    vertical: "column",
}

export const StyledContainer = styled.div<CustomProps>`
  padding: ${({ padding }) => padding || 0};
  ${({ direction = "horizontal", alignItems, justify }) =>
        mixins.flexPosition({
            justify,
            direction: directionMap[direction],
            align: alignItems,
        })}
  ${({ background }) =>
        background &&
    css`
      background: ${background};
    `}
  ${({ direction = "horizontal" }) => direction === "horizontal" &&
    css`& > div {
      margin-right: ${theme.spacing.SPACINGXS};
    };
    & > :last-child {
      margin-right: 0;
    };
  `}
  ${({ borderRadius }) =>
        borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
  ${({ shadow }) =>
        shadow &&
    css`
      box-shadow: ${shadow};
    `}
  ${({ flex }) =>
        flex &&
    css`
      flex: ${flex};
    `}
  ${({ customStyles = {}}) => customStyles};
`
