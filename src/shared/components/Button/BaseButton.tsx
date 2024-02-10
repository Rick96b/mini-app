import { Button, ButtonProps } from '@vkontakte/vkui';
import React from 'react'

import styles from './BaseButton.module.scss'
import classNames from 'classnames';

export const BaseButton:React.FC<ButtonProps> = props => {


  return (
    <Button {...props} className={classNames(styles.baseButton, props.className)}>{props.children}</Button>
  )
}