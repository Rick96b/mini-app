import { Button, ModalCard } from '@vkontakte/vkui'
import { Achievements } from 'entities/achievements'
import React, { useContext } from 'react'

import styles from './AchievementModal.module.scss'
import { UserContext } from 'entities/user'

interface AchievementModalProps {
    onClose: () => void
    onSubmit: () => void
    id: string
    achievement: Achievements
}

const AchievementModal:React.FC<AchievementModalProps> = props => {
    const {user} = useContext(UserContext)
    const {
        id,
        onClose,
        achievement,
        onSubmit
    } = props

    return (
        <ModalCard id={id} onClose={onClose}>
            <img src={achievement.imageLink} alt='Тайна' />
            <p className={styles.achievementName}>{achievement.name}</p>
            <p>{achievement.text}</p>
            {user?.role === 'Manager' &&
                <Button onClick={() => onSubmit()}>Назначить команде</Button>
            }
        </ModalCard>
    )
}

export default AchievementModal