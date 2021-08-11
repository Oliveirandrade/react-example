import styled, { css } from "styled-components"

import { FRComponent } from "../../types/commonTypes"
import theme, { spacing } from "../../styles/variables"

interface CustomProps extends FRComponent {
  width?: string | number;
  height?: string | number;
  isLoading?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  borderless?: boolean;
  square?: boolean;
  withIcon?: boolean;
  iconButton?: boolean;
  pill?: boolean;
  disableClick?: boolean;
}

const GhostButtonStyles = css<CustomProps>`
  font-size: ${theme.fontSizes.SIZE_9};
  color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.PRIMARY};
  text-decoration: underline;
  text-decoration-color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.PRIMARY};
  min-height: 10px;
  padding: 0 !important;
  background-color: transparent;
  &:hover {
    background-color: transparent;
    color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.SECONDARY};
    text-decoration-color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.SECONDARY};
  }
  &:active {
    background-color: transparent;
    color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.TERCIARY};
    text-decoration-color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.TERCIARY};
  }
`

const SecondaryButtonStyles = css<CustomProps>`
  background-color: ${theme.colors.EMPTY_SHADE};
  border: 1.5px solid
    ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.PRIMARY};
  color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.PRIMARY};
  &:hover {
    background-color: ${theme.colors.EMPTY_SHADE};
    border: 1.5px solid
      ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.SECONDARY};
    color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.SECONDARY};
  }
  &:active {
    background-color: ${theme.colors.EMPTY_SHADE};
    border: 1.5px solid
      ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.TERCIARY};
    color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.TERCIARY};
  }
`

const PillButtonStyles = css<CustomProps>`
  padding: 7px 16px;
  border-radius: 20px;
  border: solid 1.5px ${theme.colors.PRIMARY};
  ${({ disableClick, disabled }) => css`
    ${disableClick && css`
      cursor: default;
      pointer-events: none;
    `}
    &:hover{
      border: solid 1.5px ${theme.colors.SECONDARY};
      background-color: ${disabled ? theme.colors.MEDIUM_SHADE : theme.colors.SECONDARY};
    }
    &:active{
      border: solid 1.5px ${theme.colors.TERCIARY};
      background-color: ${theme.colors.PRIMARY};
    }
  `}
`

const StyledButton = styled.button<CustomProps>`
  font-family: ${theme.fontFamily};
  color: ${({ disabled }) =>
        disabled ? theme.colors.MEDIUM_SHADE : theme.colors.EMPTY_SHADE};
  font-size: ${theme.fontSizes.SIZE_6};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  height: ${({ height = "auto", square }) =>  square ? "72px" : height };
  width: ${({ width = "auto", square }) =>  square ? "88px" : width};
  background-color: ${({ disabled }) =>
        disabled ? theme.colors.LIGHT_SHADE : theme.colors.PRIMARY};
  border: 0;
  border-radius: ${theme.borders.RADIUS_1};
  padding: 8px 24px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease,
    width 0.3s ease, height 0.3s ease;
  &:hover {
    background-color: ${({ disabled }) =>
        disabled ? theme.colors.LIGHT_SHADE : theme.colors.SECONDARY};
  }
  &:active {
    background-color: ${({ disabled }) =>
        disabled ? theme.colors.LIGHT_SHADE : theme.colors.TERCIARY};
  }
  ${({ secondary }) => (secondary ? SecondaryButtonStyles : {})}
  ${({ ghost }) => (ghost ? GhostButtonStyles : {})}
  ${({ pill }) => (pill ? PillButtonStyles : {})}
  ${({ borderless }) => borderless && css`
    border: none;
    &:hover {
      border: none;
    }
  `}
  ${({ square, withIcon }) => (square || withIcon) && css`
    display: flex;
    align-items: center;
    justify-content: ${ withIcon ? "space-around" : "space-evenly"} ;
    flex-direction: ${ square ? "column" : "row"};
    ${!square && css`
      & > svg {
        margin-right: 5px;
      }
    `}
  `}
  ${({ iconButton, disabled }) => iconButton && css`
      padding: ${spacing.SPACINGXXS};
      min-height: initial;
      min-width: initial;
      border-radius: 100%;
      background-color: transparent;
      &:hover {
        background-color: ${disabled ? "transparent" : theme.colors.LIGHTEST_SHADE};
      }
      &:active {
        background-color: ${disabled ? "transparent" : theme.colors.LIGHT_SHADE};
      }
  `}

  ${({ customStyles }) => customStyles || {}}
`

export default StyledButton
