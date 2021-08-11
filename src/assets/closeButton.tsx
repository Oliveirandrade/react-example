/* eslint-disable max-len */
import React from "react"

import * as theme from "../styles"

interface IconProps {
    backgroundColor?: string;
    color?: string;
    size?: string;
}

const CloseButton: React.FC<IconProps> = ({
    color = theme.styles.colors.FULL_SHADE,
    backgroundColor = theme.styles.colors.EMPTY_SHADE,
    size = "32",
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 32 32">
        <path fill={backgroundColor} d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"/>
        <path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M10.375 10.375l11.25 11.25M10.375 21.625l11.25-11.25"/>
    </svg>
)

export default CloseButton
