import { Button, ModalCard } from '@vkontakte/vkui'
import { Achievements } from 'entities/achievements'
import React, { useContext, useEffect, useState } from 'react'

import styles from './EventModal.module.scss'
import { UserContext } from 'entities/user'
import { useMetaParams, useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { Events, getEventByName } from 'entities/events'
import { AppModals } from 'shared/routes/routes'

interface EventModalProps {
    id: string
}

const EventModal:React.FC<EventModalProps> = props => {
    const {user} = useContext(UserContext)
    const {
        id
    } = props
    const event = useMetaParams<{event: Events}>()?.event
    const router = useRouteNavigator()

    return (
        <ModalCard id={id}>
            <img src={event?.imageLink} alt='Тайна' />
            <p className={styles.achievementName}>{event?.name}</p>
            <p>{event?.text}</p>
            {user?.role === 'Manager' &&
                <Button 
                    onClick={() => {
                        router.replace(
                            AppModals.AddEvent, 
                            {state: {event: event}}
                        )
                    }}
                >
                    Назначить команде
                </Button>
            }
        </ModalCard>
    )
}

export default EventModal