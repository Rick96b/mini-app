import { useContext, useEffect, useState } from 'react'
import styles from './EventsList.module.scss'
import classNames from 'classnames'
import { Events, getAllEvents } from 'entities/events'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppModals } from 'shared/routes/routes'
import { UserContext } from 'entities/user'

const EventsList:React.FC = () => {
    const {user} = useContext(UserContext)
    const [events, setEvents] = useState<Events[]>([])
    const router = useRouteNavigator()
    
    useEffect(() => {
        getAllEvents().then(response => setEvents(response))
    }, [])

    return (
        <div className={styles.achievementsContainer}>
            {events.map(event => 
                <div 
                    className={styles.achievement} 
                    onClick={
                        () => user?.role === 'Manager' && 
                        router.push(AppModals.Event, {state: {event: event}})
                    }
                >
                    <div 
                        className={
                            classNames(
                                styles.imageContainer, 
                                !event.commandName && styles.blur
                            )
                        }   
                    >
                        <img src={event.imageLink} alt='Конкурс' />
                    </div>
                    {
                        event.commandName && 
                        <p className={styles.commandName}>{event.commandName}</p>
                    }
                    {event.name}
                </div>
            )}
        </div>
    )
}

export default EventsList