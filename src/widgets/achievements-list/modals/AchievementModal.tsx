import { Button, ModalCard } from '@vkontakte/vkui'
import { Achievements } from 'entities/achievements'
import React, { useContext } from 'react'

import styles from './AchievementModal.module.scss'
import { UserContext } from 'entities/user'
import { useMetaParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppModals } from 'shared/routes/routes'

interface AchievementModalProps {
    id: string
}

const AchievementModal:React.FC<AchievementModalProps> = props => {
    const {user} = useContext(UserContext)
    const {
        id,
    } = props
    const achievement = useMetaParams<{achievement: Achievements}>()?.achievement
    const router = useRouteNavigator()

    return (
        <ModalCard id={id}>
            <img src={achievement?.imageLink} alt='Тайна' />
            <p className={styles.achievementName}>{achievement?.name}</p>
            <p>{achievement?.text}</p>
            {user?.role === 'Manager' &&
                <Button 
                    onClick={() => {
                        router.replace(
                            AppModals.AddAchievement, 
                            {state: {achievement: achievement}}
                        )
                    }}
                >
                    Назначить команде
                </Button>
            }
        </ModalCard>
    )
}

export default AchievementModal