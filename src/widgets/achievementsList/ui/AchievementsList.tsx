import { getAllAchievements } from 'entities/achievements/api/achievements_api'
import { Achievements } from 'entities/achievements/model/achievements_types'
import { useEffect, useState } from 'react'

import styles from './AchievementsList.module.scss'
import { ModalRoot, SplitLayout } from '@vkontakte/vkui'
import AchievementModal from '../models/AchievementModal'
import AddAchievementToCommand from '../models/AddAchievementToCommand'
import classNames from 'classnames'

const AchievementsList = () => {
    const [achievements, setAchievements] = useState<Achievements[]>([])
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const [modalHistory, setModalHistory] = useState<string[]>([]);
    const [activeAchievement, setActiveAchievement] = useState<Achievements>(achievements[0])
    
    useEffect(() => {
        getAllAchievements().then(response => setAchievements(response))
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
                achievement={activeAchievement}
            />
            <AddAchievementToCommand
                id='AddAchievementToCommandModal' 
                onClose={modalBack} 
                achievement={activeAchievement}
            />
        </ModalRoot>
    )

    return (
        <SplitLayout className={styles.achievementsContainer} modal={modals}>
            {achievements.map(achievement => 
                <div 
                    className={styles.achievement} 
                    onClick={() => {
                        setActiveAchievement(achievement)
                        changeActiveModal('achievementModal')
                    }}
                >
                    <div className={classNames(!achievement.commandName && styles.blur)}>
                        <img src={achievement.imageLink} alt='Тайна' />
                    </div>
                    {
                        achievement.commandName && 
                        <p className={styles.commandName}>{achievement.commandName}</p>
                    }
                    {achievement.name}
                </div>
            )}
        </SplitLayout>
    )
}

export default AchievementsList