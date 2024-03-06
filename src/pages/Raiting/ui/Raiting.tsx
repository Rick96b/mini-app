import { Panel } from '@vkontakte/vkui'
import { Command, getAllCommands } from 'entities/command';
import React, { useEffect, useState } from 'react'

import styles from './Raiting.module.scss'
import { Collapse } from '@mui/material';

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
    <Panel nav={nav} className={styles.raitingPanel}>

      {commands.map(command => 
        <div className={styles.commandsContainer}>
          <div className={styles.command} key={command.name} onClick={() => setActiveCommand(command.name)}>
            <p>{command.name}</p>
            <p className={styles.raiting}>{command.raiting}</p>
          </div>
          <Collapse in={command.name === activeCommand}>
            {
              command.raiting_history.map(raitingRow => 
                <div>
                  <p>{raitingRow.message}</p>
                  <p>{raitingRow.raiting}</p>
                </div>
              )
            }
          </Collapse>
        </div>
      )}
    </Panel>
  )
}

export default Raiting