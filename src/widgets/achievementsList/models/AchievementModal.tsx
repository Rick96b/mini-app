import { ModalCard, ModalRoot } from '@vkontakte/vkui'
import { Achievements } from 'entities/achievements'
import React from 'react'

interface AchievementModalProps {
    onClose: () => void
    id: string
    achievement?: Achievements
}

const AchievementModal:React.FC<AchievementModalProps> = props => {
    const {
        id,
        onClose,
        achievement
    } = props

    return (
        <ModalCard id={id} onClose={onClose}>
            <p>{achievement?.name}</p>
        </ModalCard>
    )
}

export default AchievementModal