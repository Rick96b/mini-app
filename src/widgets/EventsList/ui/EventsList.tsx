import { useEffect, useState } from 'react'
import styles from './EventsList.module.scss'
import { ModalRoot, SplitLayout } from '@vkontakte/vkui'
import AchievementModal from '../modals/AchievementModal'
import AddAchievementToCommand from '../modals/AddAchievementToCommand'
import classNames from 'classnames'
import { Events, getAllEvents } from 'entities/events'

const EventsList = () => {
    const [events, setEvents] = useState<Events[]>([])
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const [modalHistory, setModalHistory] = useState<string[]>([]);
    const [activeEvent, setActiveEvent] = useState<Events>(events[0])
    
    useEffect(() => {
        getAllEvents().then(response => setEvents(response))
    }, [])

    
    
    const changeActiveModal = (activeModal: string | null) => {
        activeModal = activeModal || null;
        let localModalHistory = modalHistory ? [...modalHistory] : [];

        if (activeModal === null) {
        localModalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
        localModalHistory = localModalHistory.splice(0, localModalHistory.indexOf(activeModal) + 1);
        } else {
        localModalHistory.push(activeModal);
        }

        setActiveModal(activeModal);
        setModalHistory(localModalHistory);
    };

    const modalBack = () => {
        changeActiveModal(modalHistory[modalHistory.length - 2]);
    };

    const modals = (
        <ModalRoot activeModal={activeModal}>
            <AchievementModal 
                id='achievementModal' 
                onClose={modalBack} 
                onSubmit={() => changeActiveModal('AddAchievementToCommandModal')}
                achievement={activeEvent}
            />
            <AddAchievementToCommand
                id='AddAchievementToCommandModal' 
                onClose={modalBack} 
                achievement={activeEvent}
            />
        </ModalRoot>
    )

    return (
        <SplitLayout className={styles.achievementsContainer} modal={modals}>
            {events.map(event => 
                <div 
                    className={styles.achievement} 
                    onClick={() => {
                        setActiveEvent(event)
                        changeActiveModal('achievementModal')
                    }}
                >
                    <div className={classNames(!event.commandName && styles.blur)}>
                        <img src={event.imageLink} alt='Тайна' />
                    </div>
                    {
                        event.commandName && 
                        <p className={styles.commandName}>{event.commandName}</p>
                    }
                    {event.name}
                </div>
            )}
        </SplitLayout>
    )
}

export default EventsList