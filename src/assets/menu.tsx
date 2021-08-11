/* eslint-disable max-len */
import React from "react"

interface IconProps {
    color?: string;
}

const MenuIcon: React.FC<IconProps> = ({
    color = "#25282b"
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
    )
}

export default MenuIcon
