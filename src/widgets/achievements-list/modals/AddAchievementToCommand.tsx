import { Button, FormItem, ModalCard, Select } from '@vkontakte/vkui'
import { Achievements, addToCommand } from 'entities/achievements'
import React, { useEffect, useState } from 'react'

import styles from './AchievementModal.module.scss'
import { Command, getAllCommands } from 'entities/command'
import { useMetaParams } from '@vkontakte/vk-mini-apps-router'

interface AddAchievementToCommandProps {
    id: string
}


const AddAchievementToCommand:React.FC<AddAchievementToCommandProps> = props => {
    const {
        id,
    } = props

    const [command, setCommand] = useState('')
    const achievement = useMetaParams<{event: Achievements}>()?.event
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
                    id="command"
                    options={commands.map(command => {return {label: command.name, value: command.name}})}
                    value={command}
                    onChange={event => setCommand(event.target.value)}
                />
            </FormItem>
            <Button onClick={() => addToCommand(achievement as Achievements, command)}>Назначить</Button>
        </ModalCard>
    )
}

export default AddAchievementToCommand