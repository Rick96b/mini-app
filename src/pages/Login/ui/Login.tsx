import { DatePickerDateFormat, Panel } from '@vkontakte/vkui'
import React, { useContext, useRef, useState } from 'react'

import styles from './Login.module.scss'
import { LoginForm } from 'widgets/login-form'
import { UserContext, UserInfo, addUserToDb } from 'entities/user'
import DefaultLogin from './DefaultLogin'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'

interface LoginProps {
  nav: string
}

const Login:React.FC<LoginProps> = props => {
  const {
    nav
  } = props
  const {setUser} = useContext(UserContext)
  const router = useRouteNavigator()
  const [userData, setUserData] = useState<UserInfo | null>(null)

  const handleUserAffiliationChange = (role: 'User' | 'Manager', group: string) => {
    setUserData({...userData, role: role, group: group})
  }

  const handleUserDataChange = (name:string, studyPlace: string, birthDate: DatePickerDateFormat) => {
    const userToAdd = {
      ...userData, 
      name: name, 
      studyPlace: studyPlace, 
      birthDate:birthDate,
      isDocumentsApproved: false

    }
    addUserToDb(userToAdd)
    setUser && setUser(userToAdd)
    router.push('/')
  }

  return (
    <>
      <Panel nav={nav} className={styles.loginPage}>
        {userData ?
          <LoginForm changeUserData={handleUserDataChange}/>
          :
          <DefaultLogin changeUserRole={handleUserAffiliationChange}/>
        }
      </Panel>
    </>
  )
}


export default Login