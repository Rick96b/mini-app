import { getAllAchievements } from 'entities/achievements/api/achievements_api'
import { Achievements } from 'entities/achievements/model/achievements_types'
import { useEffect, useState } from 'react'

import styles from './AchievementsList.module.scss'
import { ModalRoot, SplitLayout } from '@vkontakte/vkui'
import AchievementModal from '../models/AchievementModal'

const AchievementsList = () => {
    const [achievements, setAchievements] = useState<Achievements[]>([])
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const [activeAchievement, setActiveAchievement] = useState<Achievements>()
    
    useEffect(() => {
        getAllAchievements().then(response => setAchievements(response))
    }, [])

    const modals = (
        <ModalRoot activeModal={activeModal}>
            <AchievementModal 
                id='achievementModal' 
                onClose={() => setActiveModal(null)} 
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
                        setActiveModal('achievementModal')
                    }}
                >
                    {achievement.name}
                </div>
            )}
        </SplitLayout>
    )
}

export default AchievementsList