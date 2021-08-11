import styled from "styled-components"

import { fontStyle, globalStyle } from "../../styles/mixins"
import theme from "../../styles/variables"
import { FRComponent } from "../../types/commonTypes"

interface CustomProps extends FRComponent {
  messageError?: boolean | null;
  hasIcon?: any;
  onClick?: (object: any) => void;
}

export const InputStyled = styled.input<CustomProps>`
  caret-color: ${theme.colors.PRIMARY};
  background-color: ${theme.colors.LIGHTEST_SHADE};
  border-radius: 8px;
  width: 100%;
  height: 40px;
  padding: 8px 9px;
  border: solid 1.5px
    ${({ messageError }) =>
        messageError ? theme.colors.NEGATIVE : theme.colors.LIGHT_SHADE};

  ${fontStyle(
        theme.colors.FULL_SHADE,
        theme.fontSizes.SIZE_6,
        theme.fontWeights.NORMAL
    )};

  ${({ hasIcon }) => hasIcon && "padding-right: 30px;"}

  ${({ customStyles }) => customStyles}

	::placeholder {
    color: ${theme.colors.MEDIUM_SHADE};
  }

  :disabled {
    background-color: ${theme.colors.LIGHTEST_SHADE};
    cursor: not-allowed;
  }
`

export const Container = styled.div`
  ${globalStyle()}
  min-height: 62px;
  height: 100%;
  width: 100%;
  position: relative;
`

export const IconContainer = styled.button<CustomProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  width: 47px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const WrapperError = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  svg {
    margin-right: 4px;
  }
`
