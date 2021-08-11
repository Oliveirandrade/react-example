import React, { useState, useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import { Container, Input, Text, Button } from '../components'
import { colors, spacing, borders } from '../styles/variables'

const INITIAL_ERRORS = {
  invalidEmail: null,
  invalidPassword: null,
  invalidPayload: null,
}

const LoginPage: React.FC = (): JSX.Element => {
  const { handleLogin } = useContext(AuthContext)

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(INITIAL_ERRORS)

  const errorInput =  errors.invalidPassword
  ? errors.invalidPassword
  : errors.invalidPayload

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(INITIAL_ERRORS)
    setLoginData({ ...loginData, [event.target.name]: event.target.value })
  }

  const isEmailValid = (email: string | null | undefined):boolean => {
    const reg = /[^@]+@[^@]+/
    if(!email) return false

    return reg.test(email)
  }

  const isValidData = () => {
    let payloadError: any = {}

    if (!loginData?.email) {
        payloadError = {
            invalidEmail: 'Invalid email',
        }
    } else {
        if (!isEmailValid(loginData?.email)) {
            payloadError = {
                invalidEmail: 'Invalid email',
            }
        }
    }
    
    if (!loginData?.password) {
        payloadError = {
            ...payloadError,
            invalidPassword: 'invalid password',
        }
    }

    if (Object.keys(payloadError).length !== 0) {
        setErrors({ ...INITIAL_ERRORS, ...payloadError })
        return false
    } else {
        return true
    }
  }

  const handleSubmit = async () => {
    if (!isValidData()) return

    setLoading(true)

    try {
        await handleLogin({
          email: loginData?.email,
          password: loginData?.password
        })

    } catch (error) {
      const { message, status } = error?.response?.data
        if(status === 401) alert(message)
        if(status !== 401) alert('Não foi possível conectar ao servidor, contate o suporte.')
        setLoading(false)
    }
  }

  return (
    <React.Fragment>
      <Container
        justify={'center'}
        alignItems={'center'}
        customStyles='height: 100vh'
      >
        <Container
          borderRadius={borders.RADIUS_1}
          background={colors.EMPTY_SHADE}
          padding={spacing.SPACINGM}
          shadow={`0 1.5px 3px 1.5px ${colors.LIGHT_SHADE}`}
          direction='vertical'
          customStyles='width: 50%; max-width: 400px; height: 260px;'
        >
          <Text
            textAlign='center'
            customStyles='margin-bottom: 20px;'
          >Hello user</Text>
          <Input 
            name='email'
            value={loginData?.email} 
            onChange={handleOnChange}
            maxLength={40}
            placeholder='example@email.com'
            disabled={loading}
            messageError={errors.invalidEmail || ''}
          />
          <Input 
            showIconPassword
            type='password'
            name='password'
            value={loginData?.password} 
            onChange={handleOnChange}
            maxLength={40}
            placeholder='password'
            disabled={loading}
            messageError={errorInput}
          />
          <Button
            isLoading={loading}
            type='submit'
            onClick={handleSubmit}
          >LOGIN</Button>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default LoginPage