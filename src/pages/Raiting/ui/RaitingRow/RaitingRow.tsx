import { Command } from 'entities/command'
import React from 'react'

import styles from './RaitingRow.module.scss'

interface RaitingRowProps {
    command: Command
    activeCommand: string
    setActiveCommand: (activeCommand: string) => void
    refetch: () => void
}

const RaitingRow: React.FC<RaitingRowProps> = props => {
    const {
        command,
        activeCommand,
        setActiveCommand
    } = props



    return (
        <div className={styles.command} key={command.name} onClick={() => setActiveCommand(
            command.name === activeCommand ? '' : command.name
        )}>
            <p>{command.imageLink}</p>
            <p className={styles.raiting}>{command.raiting}</p>
        </div>               
    )
}

export default RaitingRow