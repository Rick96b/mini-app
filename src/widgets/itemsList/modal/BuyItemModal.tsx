import { Button, FormItem, Input, ModalCard } from '@vkontakte/vkui'
import React, { useState } from 'react'

import { Item, addToCommand } from 'entities/item'

interface BuyItemModalProps {
    onClose: () => void
    id: string
    item: Item
}


const BuyItemModal:React.FC<BuyItemModalProps> = props => {
    const {
        id,
        onClose,
        item,
    } = props

    const [command, setCommand] = useState('')

    return (
        <ModalCard id={id} onClose={onClose}>
            <FormItem
                htmlFor="command"
                top="Команда"
            >
                <Input  
                    id="command"
                    type="text"
                    name="command"
                    value={command}
                    required
                    onChange={event => setCommand(event.target.value)}
                />
            </FormItem>
            <Button onClick={() => addToCommand(item, command)}>Назначить</Button>
        </ModalCard>
    )
}

export default BuyItemModal