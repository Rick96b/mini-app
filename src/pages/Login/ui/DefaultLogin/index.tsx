import styles from './DefaultLogin.module.scss'
import React, { useState } from 'react';
import { checkUserCode } from 'entities/user';
import classNames from 'classnames';
import { FormItem, Input } from '@vkontakte/vkui';
import { BaseButton } from 'shared/components';

interface DefaultLoginProps {
    changeUserRole: (role: 'User' | 'Manager', group: string) => void
}

const DefaultLogin:React.FC<DefaultLoginProps> = props => {
  const {
    changeUserRole
  } = props

  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [codeInputVisivility, setCodeInputVisibility] = useState(false)

  const getUserRole = (code: string) => {
    const userData = checkUserCode(code)
    if(userData) {
      changeUserRole(userData.role, userData.group)
    }
    else {
      setError('Такого кода не существует!')
    }
  }

  return (
    <div className={styles.defaultLogin}>
      <img src='/img/logo.png' width={286} height={116}/>
      <div className={styles.uiContainer}>
        <form
          className={classNames(styles.codeInput, codeInputVisivility ? styles.codeInputActive : '')}
        >
          <FormItem 
            htmlFor="code"
            bottom={
              error ? error : ''
            }
            status={error ? 'error' : 'default'}
          >
            <Input 
              id="code" 
              type="text" 
              name="code"
              value={code}
              required
              onChange={(event) => setCode(event.target.value)}
              placeholder="Введите код" 
            />
          </FormItem>
          <FormItem>
            <BaseButton className={styles.codeInputButton} onClick={() => getUserRole(code)}>
              Отправить
            </BaseButton>
          </FormItem>
        </form>
        <BaseButton 
          className={classNames(styles.loginParticipant, codeInputVisivility ? styles.loginParticipantDisabled : '')}
          onClick={() => setCodeInputVisibility(true)}
          disabled={codeInputVisivility ? true : false}
        >
            Ввести код
        </BaseButton>
      </div>
    </div>
  )
}
  
  export default DefaultLogin