import { Button, FormItem, Input, ModalCard } from '@vkontakte/vkui'
import React, { useState } from 'react'

interface UpdateRaitingModalProps {
  onSubmit: (raiting: number, message: string) => void
  onClose: () => void
  id: string
}

const UpdateRaitingModal:React.FC<UpdateRaitingModalProps> = props => {
  const {
    onSubmit,
    id,
    onClose
  } = props

  const [raiting, setRaiting] = useState('')
  const [message, setMessage] = useState('')

  return (
    <ModalCard id={id} onClose={onClose}>
      <form>
        <FormItem
              htmlFor="raiting"
              top="Рейтинг"
              status={raiting ? 'valid' : 'error'}
            >
              <Input
                id="raiting"
                type="text"
                name="raiting"
                value={raiting}
                required
                onChange={event => {console.log(event.target.value);setRaiting(event.target.value)}}
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
            <Button onClick={() => onSubmit(parseInt(raiting), message)}>
              Изменить рейтинг
            </Button>
      </form>		
    </ModalCard>
  )
}

export default UpdateRaitingModal