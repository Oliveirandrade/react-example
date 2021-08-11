import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import api from '../config/axios'
import Loader from '../components/Loader'

interface AuthContextData {
    user: any;
    authenticated: boolean;
    handleLogin: any;
    handleLogout: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const history = useHistory()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        admin: false
    })
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        handleToken()
    }, [])

    const handleToken = () => {
        const token: any= localStorage.getItem('token')
        if (token) {
            const parsedToken = JSON.parse(token)
            const { firstName, lastName, type }: any = jwtDecode(parsedToken)
            api.defaults.headers.Authorization = parsedToken

            setUser({ firstName, lastName, admin: (type === 'administrator') })
            setAuthenticated(true)
        }

        setLoading(false)
    }

    const handleLogin = async (body: any): Promise<any> => {
        const { data: { token } } = await api.post('/user/login', body)
        localStorage.setItem('token', JSON.stringify(token))
        const { firstName, lastName, type }: any = jwtDecode(token)
        api.defaults.headers.Authorization = token
        
        setUser({ firstName, lastName, admin: (type === 'administrator') })
        setAuthenticated(true)
        history.push('/home')
    }

    const handleLogout = async (): Promise<any> => {
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        
        setAuthenticated(false)
        history.push('/login')
    }

    if(loading) {
        return (
            <Loader 
                primary
                loaderSize={100}
            />
        )
    }

    return (
        <AuthContext.Provider value={{ user, authenticated, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext