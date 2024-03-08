import { Command } from 'entities/command'
import React from 'react'

import styles from './RaitingRow.module.scss'
import { Avatar } from '@vkontakte/vkui'

interface RaitingRowProps {
    command: Command
    place: number
    onClick: () => void
}

const RaitingRow: React.FC<RaitingRowProps> = props => {
    const {
        command,
        place,
        onClick
    } = props

    return (
        <div className={styles.command} key={command.name} onClick={onClick}>
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