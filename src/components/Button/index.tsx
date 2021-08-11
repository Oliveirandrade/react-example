import React from "react"

import Loader from "../Loader"
import { FRComponent } from "../../types/commonTypes"

import StyledButton from "./styles"


export interface ButtonProps extends FRComponent {
  id?: string;
  className?: string;
  isLoading?: boolean;
  type?: "button" | "reset" | "submit";
  width?: string;
  height?: string;
  disabled?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  loaderSize?: number;
  ghost?: boolean;
  borderless?: boolean;
  forwardRef?: React.RefObject<HTMLButtonElement>;
  square?: boolean;
  withIcon?: boolean;
  iconButton?: boolean;
  loadingActionable?: boolean;
  pill?: boolean;
  disableClick?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    id,
    className = "",
    isLoading,
    type,
    width,
    height,
    disabled,
    customStyles,
    onClick = () => null,
    children,
    secondary,
    loaderSize,
    ghost,
    borderless,
    testId,
    forwardRef,
    square,
    withIcon,
    iconButton,
    loadingActionable,
    pill,
    disableClick,
}) => (
    <StyledButton
        ref={forwardRef}
        id={id}
        className={`btn-APP ${className}`}
        type={type}
        width={width}
        height={height}
        isLoading={isLoading}
        disabled={disabled}
        customStyles={customStyles}
        onClick={!isLoading || loadingActionable ? onClick : undefined}
        secondary={secondary}
        ghost={ghost}
        data-testid={testId}
        borderless={borderless}
        square={square}
        withIcon={withIcon}
        iconButton={iconButton}
        pill={pill}
        disableClick={disableClick}
    >
        {isLoading ? (
            <Loader primary={!!secondary} loaderSize={loaderSize} />
        ) : (
            children
        )}
    </StyledButton>
)

export default Button
