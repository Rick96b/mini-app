import { Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useEffect, useState } from 'react'
import { AchievementsList } from 'widgets/achievementsList'

import styles from './Achievements.module.scss'
import AchievementTabs from '../Tabs/AchievementsTabs'
import { EventsList } from 'widgets/EventsList'
import { Command, getAllCommands } from 'entities/command'

interface AchievementsProps {
    nav: string
}

const Achievements:React.FC<AchievementsProps> = props => {
    const {
        nav
    } = props
    const [selectedTab, setSelectedTab] = useState('achievements')
    const [commands, setCommands] = useState<Command[]>([])

    useEffect(() => {
        getAllCommands().then(response => setCommands(response))
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
                <AchievementsList commands={commands}/>
            }
            {
                selectedTab === 'events' && 
                <EventsList commands={commands}/>
            }
        </Panel>
    )
}

export default Achievements