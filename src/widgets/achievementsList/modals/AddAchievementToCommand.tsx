import { Button, FormItem, Input, ModalCard } from '@vkontakte/vkui'
import { Achievements, addToCommand } from 'entities/achievements'
import React, { useState } from 'react'

import styles from './AchievementModal.module.scss'

interface AddAchievementToCommandProps {
    onClose: () => void
    id: string
    achievement: Achievements
}


const AddAchievementToCommand:React.FC<AddAchievementToCommandProps> = props => {
    const {
        id,
        onClose,
        achievement,
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
            <Button onClick={() => addToCommand(achievement, command)}>Назначить</Button>
        </ModalCard>
    )
}

export default AddAchievementToCommand