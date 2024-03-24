import { Button, CustomSelectOptionInterface, FormItem, Input, ModalCard, SegmentedControl, SegmentedControlValue, Select } from '@vkontakte/vkui'
import { Command, getAllCommands, updateRaiting } from 'entities/command'
import React, { useEffect, useState } from 'react'

import styles from './UpdateRatingModal.module.scss'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'

interface UpdateRatingModalProps {
  id: string
}

const UpdateRatingModal:React.FC<UpdateRatingModalProps> = props => {
  const {
    id
  } = props
  const router = useRouteNavigator()
  const [raiting, setRaiting] = useState('')
  const [message, setMessage] = useState('')
  const [commands, setCommands] = useState<Command[]>([])
  const [commandName, setCommandName] = useState('')
  const [option, setOption] = useState<SegmentedControlValue>('+')

  useEffect(() => {
    getAllCommands().then(response => setCommands(response))
  })

  return (
    <ModalCard id={id}>
      <form className={styles.form}>
        <FormItem>
          <Select
            options={
              commands.map(command => {return {label: command.name, value: command.name} as CustomSelectOptionInterface})
            }
            value={commandName}
            onChange={(event) => setCommandName(event.target.value)}
          />
        </FormItem>
        <FormItem
            htmlFor="raiting"
            top="Рейтинг"
          >
            <Input
              id="raiting"
              type="text"
              name="raiting"
              value={raiting}
              required
              onChange={event => setRaiting(event.target.value)}
            />
          </FormItem>
          <FormItem>
          <SegmentedControl
            options={[
              {
                'label': 'Прибавить',
                'value': '+',
                'aria-label': 'Прибавить',
              },
              {
                'label': 'Отнять',
                'value': '-',
                'aria-label': 'Отнять',
              },
            ]}
            value={option}
            onChange={(value) => setOption(value)}
          />
          </FormItem>
          <FormItem top="Заголовок" htmlFor="message">
            <Input 
              id="message" 
              type="text" 
              placeholder="Введите заголовок" 
              value={message}
              required
              onChange={event => setMessage(event.target.value)}
            />
          </FormItem>
          <Button 
            onClick={() => {
              updateRaiting(
              commands.filter(command => command.name === commandName)[0],
              parseInt(option?.toString() + raiting.toString()),
              message
              ).then(() => router.hideModal());              
            }} 
            className={styles.updateRaitingButton}
          >
            Изменить рейтинг
          </Button>
      </form>		
    </ModalCard>
  )
}

export default UpdateRatingModal