/* eslint-disable max-len */
import React from "react"

interface IconProps {
    color?: string;
}

const LogoutIcon: React.FC<IconProps> = ({ color = "#25282B" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 21H5c-.53 0-1.04-.21-1.414-.586C3.21 20.04 3 19.53 3 19V5c0-.53.21-1.04.586-1.414C3.96 3.21 4.47 3 5 3h4M16 17l5-5-5-5M21 12H9"/>
    </svg>
)

export default LogoutIcon
