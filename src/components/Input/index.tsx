import React, { RefObject, useState } from "react"

import EyeHide from "../../assets/eyeHide"

import EyeShow from "../../assets/eyeShow"
import Warning from "../../assets/warning"
import Text from "../Text"
import { FRComponent } from "../../types/commonTypes"

import { Container, IconContainer, InputStyled, WrapperError } from "./styles"

interface Props extends FRComponent {
  id?: string;
  name?: string;
  label?: string;
  inputMode?: string;
  pattern?: string;
  maxLength?: number;
  type?:
    | "password"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  value: any;
  onChange: (object: any) => void;
  onIconClick?: () => void;
  placeholder?: string;
  disabled?: boolean;
  checked?: boolean;
  customIcon?: any;
  showIconPassword?: boolean;
  messageError?: string | null;
  inputError?: boolean | null;
  inputTestId?: string;
  onClick?: () => void;
  forwardRef?: RefObject<HTMLDivElement>
  readonly?: boolean,
  customInputProps?: React.InputHTMLAttributes<HTMLInputElement>,
}

const Input: React.FC<Props> = ({
    id,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    maxLength,
    disabled = false,
    checked = false,
    customStyles,
    onIconClick,
    customIcon,
    messageError = null,
    showIconPassword = false,
    inputError = false,
    testId,
    inputTestId,
    onClick,
    forwardRef,
    readonly,
    customInputProps,
}) => {
    const [showPassword, setShowPassword] = useState(false)

    const hasIcon = checked || showIconPassword || customIcon

    function handleShowPassword() {
        if (setShowPassword) setShowPassword(!showPassword)
    }

    function handleIconClick() {
        if (showIconPassword) {
            handleShowPassword()
        } else {
            if (onIconClick) onIconClick()
        }
    }

    function handleType(type: string) {
        if (type === "password" && showPassword) {
            return "text"
        }

        if (type === "password" && !showPassword) {
            return "password"
        }

        return type
    }

    return (
        <Container data-testid={testId} ref={forwardRef}>
            <InputStyled
                id={id}
                name={name}
                type={handleType(type)}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                disabled={disabled}
                messageError={!!messageError || inputError}
                customStyles={customStyles}
                data-testid={inputTestId}
                onClick={onClick}
                readOnly={readonly}
                autoComplete="off"
                {...customInputProps}
            />

            {hasIcon && (
                <IconContainer onClick={handleIconClick}>
                    {showIconPassword && (
                        <div>{showPassword ? <EyeHide /> : <EyeShow />}</div>
                    )}
                    {customIcon && customIcon}
                </IconContainer>
            )}

            {messageError && (
                <WrapperError>
                    <Warning />
                    <Text size="12" fontWeight="normal">
                        {messageError}
                    </Text>
                </WrapperError>
            )}
        </Container>
    )
}

export default Input
