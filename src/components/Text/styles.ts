import styled, { css } from "styled-components"

import { FRComponent } from "../../types/commonTypes"
import theme from "../../styles/variables"

export interface CustomProps extends FRComponent {
  color?: string;
  fontWeight: string;
  size: string;
  letterSpacing: string;
  lineHeight: string;
  opacity: string;
  textAlign: string;
}

export const TextPrimary = styled.p(
    (props: CustomProps) => css`
    font-family: "Montserrat", sans-serif;
    font-stretch: normal;
    font-style: normal;

    text-align: ${props.textAlign};
    font-size: ${Number(props.size) ? `${props.size}px` : props.size};
    letter-spacing: ${Number(props.letterSpacing)
        ? `${props.letterSpacing}px`
        : props.letterSpacing};
    line-height: ${Number(props.lineHeight)
        ? `${props.lineHeight}px`
        : props.lineHeight};
    color: ${props.color || theme.colors.FULL_SHADE};
    opacity: ${props.opacity};
    font-weight: ${props.fontWeight};

    ${props.customStyles || {}}
  `
)
