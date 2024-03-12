import { getAllAchievements } from 'entities/achievements/api/achievements_api'
import { Achievements } from 'entities/achievements/model/achievements_types'
import { useContext, useEffect, useState } from 'react'

import styles from './AchievementsList.module.scss'
import classNames from 'classnames'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppModals } from 'shared/routes/routes'
import { UserContext } from 'entities/user'
import { Avatar } from '@vkontakte/vkui'

const AchievementsList:React.FC = () => {
    const {user} = useContext(UserContext)
    const [achievements, setAchievements] = useState<Achievements[]>([])
    const router = useRouteNavigator()
    
    useEffect(() => {
        getAllAchievements().then(response => setAchievements(response))
    }, [])

    return (
        <div className={styles.achievementsContainer}>
            {achievements.map(achievement => 
                <div 
                    className={styles.achievement} 
                    onClick={() => (user?.role === 'Manager' || achievement.commandName) && router.push(
                        AppModals.Achievement, 
                        {state: {achievement: achievement}}
                    )}
                >
                    <div 
                        className={
                            classNames(
                                styles.imageContainer, 
                                !achievement.commandName && styles.blur
                            )
                        }   
                    >
                        <Avatar src={achievement.imageLink} alt='Тайна' style={{
                            width: '300px',
                            height: '300px'
                        }}/>
                    </div>
                    {
                        achievement.commandName && 
                        <p className={styles.commandName}>{achievement.commandName}</p>
                    }
                    {achievement.name}
                </div>
            )}
        </div>
    )
}

export default AchievementsList