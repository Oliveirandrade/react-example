import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../contexts/AuthContext'
import { Container, Text, Button, Drawer, Chart, UsersForm } from '../components'
import { MenuIcon, LogoutIcon, UsersIcon } from '../assets/'
import { colors, spacing } from '../styles/variables'
import { graphicRequest } from '../config/axios'

const HomePage: React.FC = (): JSX.Element => {
    const { user, handleLogout } = useContext(AuthContext)

    const [openDrawer, setOpenDrawer] = useState(false)
    const [usersForm, setUsersForm] = useState(false)
    const [clusterStatus, setClusterStatus] = useState('white')
    const [cpuStatus, setCpuStatus] = useState({
        labels: [],
        data: []
    })
    const [memoryStatus, setMemoryStatus] = useState({
        labels: [],
        data: []
    })
    const [graphicData, setGraphicData] = useState([{
        CPU: 0,
        Memory: 0,
        label: ''
    }])

    useEffect(() => {
        (async ()=>{
            try {
                const getClusterStatus = await graphicRequest.get('cab2791c-7c85-4461-b95c-86bc1a12dc72')
                setClusterStatus(getClusterStatus.data.status)

                const getCpuStatus= await graphicRequest.get('b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f')
                setCpuStatus(getCpuStatus.data)

                const getMemoryStatus = await graphicRequest.get('d23c3262-967e-4567-b7f6-2fd263748811')
                setMemoryStatus(getMemoryStatus.data)
            } catch(err) {
                console.log(err)
            }
        })()
    }, [])

    useEffect(() => {
        const populateGraphicData: any = []
        cpuStatus?.labels.forEach((item: any, index: number) => {
            populateGraphicData.push({
                CPU: cpuStatus.data[index],
                Memory: memoryStatus.data[index],
                label: item
            })
        })

        setGraphicData(populateGraphicData)
        
    }, [cpuStatus, memoryStatus])

    useEffect(() => {
        console.log(graphicData)
    }, [graphicData])

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
                            data={graphicData}
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
                                <div style={{ border: '1px solid', borderRadius: '100%', width: '30px', height: '30px', background: `light${clusterStatus}`}}></div>
                            </Container>
                        
                        </Container>)
                    }
                </Container>

            </Container>
        </React.Fragment>
    );
}

export default HomePage
