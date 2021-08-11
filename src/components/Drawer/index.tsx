import React from 'react'

import { FRComponent } from '../../types/commonTypes'

import CloseButton from '../../assets/closeButton'

import Container from '../Container'
import * as theme from '../../styles'

import { DrawerContainer, SideBar } from './styles'

interface Props extends FRComponent {
    open: boolean;
    toggleOpen: () => void;
    secondary?: boolean;
}

const Drawer: React.FC<Props> = ({
    open,
    toggleOpen,
    secondary,
    customStyles,
    children,
}) => {
    return (
        <DrawerContainer open={open} onClick={toggleOpen} secondary={secondary}>
            <SideBar
                open={open}
                onClick={(e) => { e.stopPropagation() }}
                customStyles={customStyles}
            >
                <Container
                    justify='flex-end'
                    customStyles={{
                        width: '100%',
                        marginBottom: theme.styles.spacing.SPACINGS,
                    }}
                >
                    <div style={{ cursor: 'pointer' }} onClick={toggleOpen}>
                        <CloseButton />
                    </div>
                </Container>
                {children}
            </SideBar>
        </DrawerContainer>
    )
}

export default Drawer
