import { Button, DatePickerDateFormat, FormItem, Input, Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useContext, useState } from 'react'
import { BaseButton } from 'shared/components'

import styles from './Login.module.scss'
import classNames from 'classnames'
import { LoginForm } from 'widgets/login-form'
import { UserContext, UserInfo, addUserToDb, checkUserCode } from 'entities/user'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import DefaultLogin from './DefaultLogin'

interface LoginProps {
  nav: string
}

const Login:React.FC<LoginProps> = props => {
  const {
    nav
  } = props
  const {setUser} = useContext(UserContext)

  const [userData, setUserData] = useState<UserInfo | null>(null)

  const handleUserAffiliationChange = (role: 'User' | 'Manager', group: string) => {
    setUserData({...userData, role: role, group: group})
  }

  const handleUserDataChange = (name:string, studyPlace: string, birthDate: DatePickerDateFormat) => {
    const userToAdd = {...userData, name: name, studyPlace: studyPlace, birthDate:birthDate}
    addUserToDb(userToAdd)
    setUser && setUser(userToAdd)
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