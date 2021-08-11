import React, { useState, useEffect } from 'react'
import { Container, Input, Button } from '../'
import { colors, spacing, borders } from '../../styles/variables'
import api from '../../config/axios'

const UsersForm: React.FC = (): JSX.Element => {
  const [listUsers, setListUsers] = useState<any>([{
    id: '',
    email: '',
    password: '',
    firstName: '',
    type: ''
  }])
  const [listUpdated, setListUpdated] = useState(false)
  const [formNewUser, setformNewUser] = useState(false)
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    firstName: '',
    type: ''
  })

  const handleOnChangeWithList = (event: React.ChangeEvent<HTMLInputElement>, data: any) => {
    const newList= listUsers.map((user: any) => {
      if(user.id === data.id) {
        return {
          ...user,
          [event.target.name]: event.target.value,
        }
      }

      return user
    })
    console.log('newlist', newList)
    console.log(data)
    setListUsers(newList)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/user')
        setListUsers(response?.data)
        setListUpdated(true)
      } catch (error) {
        alert('Não foi possível obter a lista de usuários')
      }
    })()
  }, [listUpdated])

  const createUser = async () => {
    try {
        await api.post('/user/create', newUser)
        setListUpdated(false)
    } catch (error) {
      const { message, status } = error?.response?.data
        if(status === 401) alert(message)
        if(status !== 401) alert('Não foi possível conectar ao servidor, contate o suporte.')
    }
  }

  const updateUser = async (user: any) => {
    try {
        await api.post('/user/update', {
          email: user.email,
          type: user.type
        }, {
          headers: {
            id: user.id
          }
        })
        setListUpdated(false)
    } catch (error) {
      console.log(error)
      const { message, status } = error?.response?.data
        if(status === 401) alert(message)
        if(status !== 401) alert('Não foi possível conectar ao servidor, contate o suporte.')
    }
  }

  const deleteUser = async (user: any) => {
    try {
        await api.delete('/user/delete', {
          headers: {
            id: user.id
          }
        })
        setListUpdated(false)
    } catch (error) {
      const { message, status } = error?.response?.data
        if(status === 401) alert(message)
        if(status !== 401) alert('Não foi possível conectar ao servidor, contate o suporte.')
    }
  }

  return (
    <React.Fragment>
      <Container
        justify={'flex-start'}
        alignItems={'center'}
        direction='vertical'
        customStyles='width: 100%; margin-top: 20px;'
      >
       <Container
        borderRadius={borders.RADIUS_1}
        background={colors.EMPTY_SHADE}
        padding={spacing.SPACINGM}
        shadow={`0 1.5px 3px 1.5px ${colors.LIGHT_SHADE}`}
        direction='vertical'
        customStyles='width: 100%; max-width: 600px;'
       >
        <Container
            justify={'flex-end'}
            alignItems={'center'}
            customStyles='margin-bottom: 20px;'
          >
            <Button type='submit' onClick={() => setformNewUser(formNewUser? false: true)}>{formNewUser ? 'x': '+'}</Button>
          </Container>
          <Container
            justify={'center'}
            alignItems={'center'}
            customStyles='width: 100%;'
            direction='vertical'
          >
            {
              formNewUser ?  <Container
              direction='vertical'
              customStyles=' '
            >
              <Input 
                name='firstName'
                value={newUser?.firstName} 
                onChange={handleOnChange}
                maxLength={40}
                placeholder='User name'
              />
              <Input 
                name='email'
                value={newUser?.email} 
                onChange={handleOnChange}
                maxLength={40}
                placeholder='example@email.com'
              />
              <Input 
                name='type'
                value={newUser?.type} 
                onChange={handleOnChange}
                maxLength={40}
                placeholder='operator or administrator'
              />
              <Input 
                showIconPassword
                type='password'
                name='password'
                value={newUser?.password} 
                onChange={handleOnChange}
                maxLength={40}
                placeholder='password'
              />
              <Button
                type='submit'
                onClick={createUser}
              >CREATE</Button>
            </Container>: <>
            {
            listUsers.map((user: any): any => <Container
                justify='space-between'
                direction='horizontal'
                customStyles='width: 100%;'
              >
                <Input 
                  name='email'
                  value={user?.email} 
                  onChange={(event) => handleOnChangeWithList(event, user)}
        
                />
                <Input 
                  name='type'
                  value={user?.type} 
                  onChange={(event) => handleOnChangeWithList(event, user)}
                />
                <Button 
                  type='submit' 
                  onClick={() => updateUser(user)}
                  customStyles='height: 40px; margin-right: 10px'
                  >A</Button>
                <Button 
                  secondary 
                  type='submit' 
                  onClick={() => deleteUser(user)}
                  customStyles='height: 40px;'
                  >X</Button>
            </Container>
          )}</> 
            }
          </Container>
       </Container>
      </Container>
    </React.Fragment>
  );
}

export default UsersForm