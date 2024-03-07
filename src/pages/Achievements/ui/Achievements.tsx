import { Panel, PanelHeader } from '@vkontakte/vkui'
import React from 'react'
import { AchievementsList } from 'widgets/achievementsList'

interface AchievementsProps {
    nav: string
}

const Achievements:React.FC<AchievementsProps> = props => {
    const {
        nav
    } = props
    
    return (
        <Panel nav={nav}>
            <PanelHeader>Тайны</PanelHeader>
            <AchievementsList />
        </Panel>
    )
}

export default Achievements