import React from "react"

import { FRComponent } from "../../types/commonTypes"

import { TextPrimary } from "./styles"

export interface Props extends FRComponent {
  color?: string;
  fontWeight?: string;
  size?: string;
  letterSpacing?: string;
  lineHeight?: string;
  opacity?: string;
  textAlign?: string;
}

const Text: React.FC<Props> = ({
    color,
    letterSpacing = "normal",
    size = "18",
    lineHeight = "normal",
    opacity = "1",
    textAlign = "left",
    fontWeight = "normal",
    testId,
    customStyles,
    children,
}) => {
    return (
        <TextPrimary
            color={color}
            fontWeight={fontWeight}
            size={size}
            letterSpacing={letterSpacing}
            lineHeight={lineHeight}
            opacity={opacity}
            textAlign={textAlign}
            data-testid={testId}
            customStyles={customStyles}
        >
            {children}
        </TextPrimary>
    )
}

export default Text
