import React, { useContext, useState } from 'react'
import AuthContext from '../contexts/AuthContext'
import { Container, Text, Button, Drawer, Chart, UsersForm } from '../components'
import { MenuIcon, LogoutIcon, UsersIcon } from '../assets/'
import { colors, spacing } from '../styles/variables'

const HomePage: React.FC = (): JSX.Element => {
    const { user, handleLogout } = useContext(AuthContext)

    const [openDrawer, setOpenDrawer] = useState(false)
    const [usersForm, setUsersForm] = useState(false)


    return (
        <React.Fragment>
            <Container
                justify='initial'
                alignItems='center'
                customStyles='height: 100vh'
                direction='vertical'
            >
                <Container
                justify='space-between'
                alignItems='center'
                background={colors.EMPTY_SHADE}
                padding={spacing.SPACINGM}
                shadow={`0 1.5px 3px 1.5px ${colors.LIGHT_SHADE}`}
                direction='horizontal'
                customStyles={`width: 100%; height: ${spacing.SPACINGXXL9}; z-index: 1;`}
                >
                    <Text textAlign='center'>Olá, {`${user.firstName} ${user.lastName}`}</Text>
                    <Button iconButton type='submit' onClick={handleLogout}>
                    <LogoutIcon/>
                    </Button>
                </Container>

                <Container
                background={colors.EMPTY_SHADE}
                direction='horizontal'
                customStyles='width: 100%; height: 100%'
                >
                    {
                        user.admin ? (<Container
                            background={colors.EMPTY_SHADE}
                            padding={spacing.SPACINGM}
                            direction='vertical'
                        >
                             <Button 
                                iconButton 
                                onClick={() => setOpenDrawer(true)}
                            >
                             <MenuIcon />
                             </Button>
                            <Drawer
                             open={openDrawer}
                             toggleOpen={() => setOpenDrawer(false)}
                            >
                                
                                { usersForm ?  
                                        (<Button 
                                            withIcon
                                            secondary
                                            type='submit' 
                                            onClick={() => setUsersForm(false)}
                                        >
                                            see graphic
                                            
                                        </Button>)
                                    : 
                                        (<Button 
                                            withIcon
                                            secondary
                                            type='submit' 
                                            onClick={() => setUsersForm(true)}
                                        >
                                            <UsersIcon/>
                                            user management
                                            
                                        </Button>)
                                }
                            </Drawer>
                        </Container>)
                        : (<></>)
                    }
                    { usersForm ?
                        (<UsersForm/>)
                        :
                        (<Container
                            background={colors.EMPTY_SHADE}
                            padding={spacing.SPACINGM}
                            customStyles='width: 100%; height: 100%; overflow-x: scroll;'
                            direction='horizontal'
                            justify='center'
                            alignItems='flex-start'
                        >
                        
                            <Chart
                            barOptions={[
                                {
                                dataKey: 'CPU',
                                fill: '#45aaf2'
                                },
                                {
                                dataKey: 'Memory',
                                fill: '#fed330'
                                }
                            ]}
                            brushOptions={{}}
                            data={[
                                {
                                    CPU: 62,
                                    Memory: 118,
                                    label: '8/4'
                                },
                                {
                                    CPU: 67,
                                    Memory: 36,
                                    label: '9/4'
                                },
                            ]}
                            responsiveHeight='90%'
                            legendOptions={{}}
                            type="bar"
                            responsiveWidth='90%'
                            />
                            <Container
                            justify='center'
                            alignItems='center'
                            customStyles='height: 10%;'
                            >
                                <Text textAlign='center'>Status Cluster:</Text>
                                <div style={{ border: '1px solid', borderRadius: '100%', width: '30px', height: '30px', background: 'lightgreen'}}></div>
                            </Container>
                        
                        </Container>)
                    }
                </Container>

            </Container>
        </React.Fragment>
    );
}

export default HomePage
