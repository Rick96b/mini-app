import { Button, FormItem, ModalCard, Select } from '@vkontakte/vkui'
import { addToCommand } from 'entities/events'
import React, { useEffect, useState } from 'react'

import styles from './AddEventToCommand.module.scss'
import { Command, getAllCommands } from 'entities/command'
import { Events } from 'entities/events'
import { useMetaParams } from '@vkontakte/vk-mini-apps-router'

interface AddEventToCommandProps {
    id: string
}


const AddEventToCommand:React.FC<AddEventToCommandProps> = props => {
    const {
        id
    } = props

    const [commandName, setCommandName] = useState('')
    const event = useMetaParams<{event: Events}>()?.event
    const [commands, setCommands] = useState<Command[]>([])

    useEffect(() => {
        getAllCommands().then(response => setCommands(response))
    },[])

    return (
        <ModalCard id={id}>
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
            <Button onClick={() => addToCommand(event as Events, commandName)}>Назначить</Button>
        </ModalCard>
    )
}

export default AddEventToCommand