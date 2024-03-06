import { Panel } from '@vkontakte/vkui'
import { Command, getAllCommands } from 'entities/command';
import React, { useEffect, useState } from 'react'

import styles from './Raiting.module.scss'
import RaitingRow from './RaitingRow/RaitingRow';

interface RaitingProps {
  nav: string;
}

const Raiting:React.FC<RaitingProps> = props => {
  const {
    nav
  } = props
  const [activeCommand, setActiveCommand] = useState('')
  const [commands, setCommands] = useState<Command[]>([])

  useEffect(() => {
    getAllCommands().then(response => setCommands(response))
  }, [])

  return (
    <Panel nav={nav}>
      <div className={styles.commandsContainer}>
        {commands.map(command => 
          <RaitingRow 
            command={command} 
            activeCommand={activeCommand} 
            setActiveCommand={setActiveCommand} 
          />
        )}
      </div>
    </Panel>
  )
}

export default Raiting