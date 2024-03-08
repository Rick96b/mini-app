import { Tabs, TabsItem } from '@vkontakte/vkui';
import React from 'react'

import styles from './AchievementsTabs.module.scss'

interface AchievementTabsProps {
    selected: string
    setSelected: (selected:string) => void
}

const AchievementTabs:React.FC<AchievementTabsProps> = props => {
    const {
        selected,
        setSelected
    } = props

    return (
        <Tabs className={styles.tabsContainer}>
            <TabsItem
                selected={selected === 'achievements'}
                onClick={() => {
                    setSelected('achievements');
                }}
                id="tab-achievements"
                aria-controls="tab-content-achievements"
            >
                Тайны
            </TabsItem>
            <TabsItem
                selected={selected === 'events'}
                onClick={() => {
                    setSelected('events');
                }}
                id="tab-events"
                aria-controls="tab-content-events"
            >
                Конкурсы
            </TabsItem>
        </Tabs>
    )
}

export default AchievementTabs