import { Panel, PanelHeader } from '@vkontakte/vkui'
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

  const fetchRaiting = () => {
    getAllCommands().then(response => setCommands(response))
  }

  useEffect(() => {
    fetchRaiting()
  }, [])

  return (
    <Panel nav={nav}>
      <PanelHeader>Рейтинг</PanelHeader>
      <div className={styles.commandsContainer}>
        {commands.map(command => 
          <RaitingRow 
            command={command} 
            activeCommand={activeCommand} 
            setActiveCommand={setActiveCommand} 
            refetch={fetchRaiting}
          />
        )}
      </div>
    </Panel>
  )
}

export default Raiting