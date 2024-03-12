import { Command } from 'entities/command'
import React from 'react'

import styles from './RatingRow.module.scss'
import { Avatar } from '@vkontakte/vkui'
import { createPanel, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppPanels } from 'shared/routes/routes'
import { PageWithParams } from '@vkontakte/vk-mini-apps-router/dist/page-types/common'

interface RatingRowProps {
    command: Command
    place: number
}

const RaitingRow: React.FC<RatingRowProps> = props => {
    const {
        command,
        place,
    } = props
    const router = useRouteNavigator() 

    return (
        <div 
            className={styles.command} 
            key={command.name} 
            onClick={() => router.push(AppPanels.RatingView, {state: { name: command.name}})}
        >
            <Avatar src={command.imageLink} alt='Команда' size={88}/>
            <div className={styles.infoContainer}>
                <p>{command.name}</p>
                <p>{place + 1} место</p>
            </div>
            <p className={styles.raiting}>{command.raiting}</p>
        </div>               
    )
}

export default RaitingRow