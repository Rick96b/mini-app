import { Button, CustomSelectOptionInterface, FormItem, Input, ModalCard, SegmentedControl, SegmentedControlValue, Select } from '@vkontakte/vkui'
import { Command, updateRaiting } from 'entities/command'
import React, { useState } from 'react'

import styles from './UpdateRaitingModal.module.scss'

interface UpdateRaitingModalProps {
  onClose: () => void
  id: string
  commands: Command[]
  refetch: () => Promise<void>
}

const UpdateRaitingModal:React.FC<UpdateRaitingModalProps> = props => {
  const {
    id,
    onClose,
    commands,
    refetch
  } = props

  const [raiting, setRaiting] = useState('')
  const [message, setMessage] = useState('')
  const [commandName, setCommandName] = useState('')
  const [option, setOption] = useState<SegmentedControlValue>('+')

  return (
    <ModalCard id={id} onClose={onClose}>
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
              ).then(() => refetch().then(() => onClose()));              
            }} 
            className={styles.updateRaitingButton}
          >
            Изменить рейтинг
          </Button>
      </form>		
    </ModalCard>
  )
}

export default UpdateRaitingModal