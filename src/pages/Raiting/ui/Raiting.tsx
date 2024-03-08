import { Button, ModalRoot, Panel, PanelHeader, SplitLayout } from '@vkontakte/vkui'
import { Command, getAllCommands } from 'entities/command';
import React, { useContext, useEffect, useState } from 'react'

import styles from './Raiting.module.scss'
import RaitingRow from './RaitingRow/RaitingRow';
import UpdateRaitingModal from '../modals/UpdateRaitingModal/UpdateRaitingModal';
import { UserContext } from 'entities/user';

interface RaitingProps {
  nav: string;
  setModalPanel: (activeModal:string) => void
  setActiveCommand: (command: Command) => void
}

const Raiting:React.FC<RaitingProps> = props => {
  const {
    nav,
    setModalPanel,
    setActiveCommand
  } = props
  const {user} = useContext(UserContext)
  const [activeModal, setActiveModal] = useState<string | null>('')
  const [commands, setCommands] = useState<Command[]>([])

  const fetchRaiting = async () => {
    getAllCommands().then(response => setCommands(response))
  }

  useEffect(() => {
    fetchRaiting()
  }, [])

  const modal = (
    <ModalRoot activeModal={activeModal}>
      <UpdateRaitingModal 
        id='change_raiting' 
        onClose={() => setActiveModal(null)}
        commands={commands}
        refetch={fetchRaiting}
      />
    </ModalRoot>
  )

  return (
    <SplitLayout modal={modal}>
      <Panel nav={nav}>
        <PanelHeader >Рейтинг</PanelHeader>
        <div className={styles.commandsContainer}>
          {commands.sort((a, b) => b.raiting - a.raiting).map((command, index) => 
            <RaitingRow 
              command={command} 
              place={index}
              onClick={() => {
                setModalPanel('raitingView_panel')
                setActiveCommand(command)
              }}
            />
          )}
        </div>
        {
          user?.role === 'Manager' && 
          <Button
            onClick={() => {setActiveModal('change_raiting')}}
            style={{marginTop: 'auto'}}
          >
            Изменить рейтинг
          </Button>
        }
      </Panel>
    </SplitLayout>
  )
}

export default Raiting