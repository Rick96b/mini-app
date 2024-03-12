import { Button, FormItem, Input, ModalCard } from '@vkontakte/vkui'
import { Achievements } from 'entities/achievements'
import React, { useState } from 'react'

import styles from './AchievementModal.module.scss'
import { Building, addToCommand } from 'entities/buildings'

interface BuyBuildingModalProps {
    onClose: () => void
    id: string
    building: Building
}


const BuyBuildingModal:React.FC<BuyBuildingModalProps> = props => {
    const {
        id,
        onClose,
        building,
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
            <Button onClick={() => addToCommand(building, command)}>Назначить</Button>
        </ModalCard>
    )
}

export default BuyBuildingModal