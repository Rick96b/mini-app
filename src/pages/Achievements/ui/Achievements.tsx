import { Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useState } from 'react'
import { AchievementsList } from 'widgets/achievements-list'

import styles from './Achievements.module.scss'
import AchievementTabs from '../Tabs/AchievementsTabs'
import { EventsList } from 'widgets/events-list'

interface AchievementsProps {
    nav: string
}

const Achievements:React.FC<AchievementsProps> = props => {
    const {
        nav
    } = props
    const [selectedTab, setSelectedTab] = useState('achievements')
    
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
                <AchievementsList/>
            }
            {
                selectedTab === 'events' && 
                <EventsList/>
            }
        </Panel>
    )
}

export default Achievements