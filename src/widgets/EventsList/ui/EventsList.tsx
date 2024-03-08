import { useEffect, useState } from 'react'
import styles from './EventsList.module.scss'
import { ModalRoot, SplitLayout } from '@vkontakte/vkui'
import classNames from 'classnames'
import { Events, getAllEvents } from 'entities/events'
import { Command } from 'entities/command'
import EventModal from '../modals/EventModal'
import AddEventToCommand from '../modals/AddEventToCommand'

interface EventsListProps {
    commands: Command[]
}

const EventsList:React.FC<EventsListProps> = props => {
    const {
        commands
    } = props

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
            <EventModal 
                id='achievementModal' 
                onClose={modalBack} 
                onSubmit={() => changeActiveModal('AddAchievementToCommandModal')}
                achievement={activeEvent}
            />
            <AddEventToCommand
                id='AddAchievementToCommandModal' 
                onClose={modalBack} 
                event={activeEvent}
                commands={commands}
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