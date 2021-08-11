import styled, { css } from "styled-components"

import * as theme from "../../styles"
import { FRComponent } from "../../types/commonTypes"

interface DrawerProps extends FRComponent {
    open?: boolean;
    secondary?: boolean;
}

export const DrawerContainer = styled.div<DrawerProps>`
    position: fixed;
    flex-direction: column;
    align-items: flex-end;
    z-index: ${({ secondary }) => secondary ? "3000" : "2000"};;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    display: ${({ open }) => open ? "flex" : "none"};
    @keyframes fadeIn {
        0% {
           background-color: rgba(0,0,0,0);
        }
        100% {
           background-color: rgba(0,0,0,0.4);
        }
    }
    animation: 0.6s linear 0s 1 fadeIn;
`

export const SideBar = styled.div(
    (props: DrawerProps) => css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 400px;
        max-width: 400px;
        height: 100%;
        padding: ${theme.styles.spacing.SPACINGXL};
        background-color: ${theme.styles.colors.EMPTY_SHADE};
        box-shadow: ${theme.styles.colors.LIGHT_SHADE};
        display: ${props.open ? "flex" : "none"};
        @keyframes slideInFromRight {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(0);
            }
        }
        transition: 0.2s linear;
        animation: slideInFromRight 0.2s linear 0s 1 alternate;
        ${props.customStyles || {}}
    `
)
