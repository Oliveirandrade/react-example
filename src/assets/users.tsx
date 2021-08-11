/* eslint-disable max-len */
import React from "react"

import * as theme from '../styles'

interface IconProps {
    color?: string;
}

const UsersIcon: React.FC<IconProps> = ({
    color = theme.styles.colors.FULL_SHADE,
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
        <g clipPath="url(#clip0)">
            <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 21.4v-2c0-1.061-.421-2.078-1.172-2.828-.75-.75-1.767-1.172-2.828-1.172H5c-1.06 0-2.078.421-2.828 1.171S1 18.34 1 19.4v2M9 11.4c2.21 0 4-1.791 4-4 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.209 1.79 4 4 4zM23 21.4v-2c0-.886-.296-1.747-.839-2.448-.543-.7-1.303-1.2-2.161-1.422M16 3.53c.86.22 1.623.72 2.168 1.422.544.702.84 1.565.84 2.453 0 .888-.296 1.75-.84 2.452-.545.702-1.308 1.203-2.168 1.423"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <path fill="#fff" d="M0 0H24V24H0z" transform="translate(0 .4)"/>
            </clipPath>
        </defs>
    </svg>
)

export default UsersIcon
