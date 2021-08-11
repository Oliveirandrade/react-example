import React, { useContext } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AuthContext, { AuthProvider } from './contexts/AuthContext'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const PrivateRoute = ({ isPrivate, ...props }: any) => {
  const { authenticated } = useContext(AuthContext)

  if (isPrivate && !authenticated) {
    return <Redirect to='/login'/>
  }
  return <Route { ...props } />
}

const App: React.FC = () => {
  
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <PrivateRoute path='/login' exact component={() => <LoginPage />} />
          <PrivateRoute isPrivate path='/home' exact component={() => <HomePage />} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </AuthProvider>
      </Switch>
    </Router>
  )
}

export default App
