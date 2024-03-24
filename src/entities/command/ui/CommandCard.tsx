import React from 'react'

import styles from './CommandCard.module.scss'
import { Command } from '../model/commandTypes'

interface CommandCard {
    command: Command
}

const CommandCard:React.FC<CommandCard> = props => {
    const {
        command
    } = props

    return (
        <article className={styles.commandCard}>
            <h2 className={styles.title}>{command.name}</h2>
            <p>{command.raiting}</p>
        </article>
    )
}

export default CommandCard;