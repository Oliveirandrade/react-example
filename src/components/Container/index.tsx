import React from "react"

import { spacing } from "../../styles/variables"
import { FRComponent } from "../../types/commonTypes"

import { StyledContainer } from "./styles"

interface Props extends FRComponent {
  direction?: "horizontal" | "vertical";
  alignItems?: "center" | "flex-start" | "flex-end" | "baseline";
  background?: string;
  ref?: any;
  padding?: spacing;
  borderRadius?: string;
  shadow?: string;
  flex?: number;
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "initial" | "inherit";
}

const Container: React.FC<Props> = ({
    children,
    customStyles,
    direction,
    ref,
    background,
    padding,
    alignItems,
    borderRadius,
    shadow,
    testId,
    justify = "initial",
    flex,
}) => {
    return (
        <StyledContainer
            ref={ref}
            data-testid={testId}
            customStyles={customStyles}
            direction={direction}
            background={background}
            padding={padding}
            alignItems={alignItems}
            borderRadius={borderRadius}
            shadow={shadow}
            justify={justify}
            flex={flex}
        >
            {children}
        </StyledContainer>
    )
}

export default Container
