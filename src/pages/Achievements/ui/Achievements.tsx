import { Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useEffect, useState } from 'react'

import styles from './Achievements.module.scss'
import AchievementTabs from '../Tabs/AchievementsTabs'
import { Events, getAllEvents } from 'entities/events'
import { Achievements, getAllAchievements } from 'entities/achievements'
import { BaseListLayout } from 'widgets/base-list'

interface AchievementsProps {
    nav: string
}

const AchievementsPage:React.FC<AchievementsProps> = props => {
    const {
        nav
    } = props
    const [selectedTab, setSelectedTab] = useState('achievements')
    const [events, setEvents] = useState<Events[]>([])
    const [achievements, setAchievements] = useState<Achievements[]>([])
        

    useEffect(() => {
        getAllEvents().then(response => setEvents(response))
        getAllAchievements().then(response => setAchievements(response))
    }, [])
    
    return (
        <Panel nav={nav}>
            <PanelHeader className={styles.storeHeader}>
                <AchievementTabs
                    selected={selectedTab}
                    setSelected={(selected:string) => setSelectedTab(selected)}
                />
            </PanelHeader>
            {
                selectedTab === 'achievements' &&
                <BaseListLayout
                    items={achievements}
                    itemsType='Achievements'
                />
            }
            {
                selectedTab === 'events' && 
                <BaseListLayout
                    items={events}
                    itemsType='Events'
                />
            }
        </Panel>
    )
}

export default AchievementsPage