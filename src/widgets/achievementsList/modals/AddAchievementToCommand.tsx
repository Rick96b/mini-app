import { Button, FormItem, Input, ModalCard, Select } from '@vkontakte/vkui'
import { Achievements, addToCommand } from 'entities/achievements'
import React, { useState } from 'react'

import styles from './AchievementModal.module.scss'
import { Command } from 'entities/command'

interface AddAchievementToCommandProps {
    onClose: () => void
    id: string
    achievement: Achievements
    commands: Command[]
}


const AddAchievementToCommand:React.FC<AddAchievementToCommandProps> = props => {
    const {
        id,
        onClose,
        achievement,
        commands
    } = props

    const [command, setCommand] = useState('')

    return (
        <ModalCard id={id} onClose={onClose}>
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
            <Button onClick={() => addToCommand(achievement, command)}>Назначить</Button>
        </ModalCard>
    )
}

export default AddAchievementToCommand