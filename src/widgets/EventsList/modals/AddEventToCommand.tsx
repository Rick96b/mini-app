import { Button, FormItem, ModalCard, Select } from '@vkontakte/vkui'
import { addToCommand } from 'entities/achievements'
import React, { useState } from 'react'

import styles from './AddEventToCommand.module.scss'
import { Command } from 'entities/command'
import { Events } from 'entities/events'

interface AddEventToCommandProps {
    onClose: () => void
    id: string
    event: Events
    commands: Command[]
}


const AddEventToCommand:React.FC<AddEventToCommandProps> = props => {
    const {
        id,
        onClose,
        event,
        commands
    } = props

    const [commandName, setCommandName] = useState('')

    return (
        <ModalCard id={id} onClose={onClose}>
            <FormItem
                htmlFor="command"
                top="Команда"
            >
                <Select  
                    options={commands.map(command => {return {label: command.name, value: command.name}})}
                    value={commandName}
                    onChange={event => setCommandName(event.target.value)}
                />
            </FormItem>
            <Button onClick={() => addToCommand(event, commandName)}>Назначить</Button>
        </ModalCard>
    )
}

export default AddEventToCommand