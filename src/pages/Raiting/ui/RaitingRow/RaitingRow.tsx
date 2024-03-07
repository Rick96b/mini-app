import { Command, updateRaiting } from 'entities/command'
import React, { useContext, useState } from 'react'

import styles from './RaitingRow.module.scss'
import { Collapse } from '@mui/material'
import { UserContext } from 'entities/user'
import { Button, ModalRoot, SplitCol, SplitLayout } from '@vkontakte/vkui'
import UpdateRaitingModal from 'pages/Raiting/modals/UpdateRaitingModal/UpdateRaitingModal'

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
        refetch,
        setActiveCommand
    } = props
    const {user} = useContext(UserContext)
    const [activeModal, setActiveModal] = useState<string | null>(null)

    const onSubmit = (raiting: number, message: string) => {
        updateRaiting(command, raiting, message)
        refetch()
        setActiveModal(null)
    }

    const modal = (
        <ModalRoot activeModal={activeModal}>
            <UpdateRaitingModal onSubmit={onSubmit} id='updateRaiting' onClose={() => setActiveModal(null)}/>
        </ModalRoot>
    )
    return (
        <SplitLayout modal={modal}>
            <SplitCol className={styles.commandContainer}>
                <div className={styles.command} key={command.name} onClick={() => setActiveCommand(
                    command.name === activeCommand ? '' : command.name
                )}>
                    <p>{command.name}</p>
                    {
                        user?.role === 'Manager' && 
                        <Button 
                            className={styles.changeRaitingButton}
                            onClick={(event) => {
                                event.stopPropagation()
                                setActiveModal('updateRaiting')
                            }}
                        >Изменить рейтинг</Button>
                    }
                    <p className={styles.raiting}>{command.raiting}</p>
                </div>
                <Collapse in={command.name === activeCommand}>
                    <div className={styles.historyContainer}>
                        {
                            command.raiting_history.map(raitingRow => 
                            <div className={styles.historyRow}>
                                <p>{raitingRow.message}</p>
                                <p>{raitingRow.raiting}</p>
                            </div>
                            )
                        }
                    </div>
                </Collapse>                 
            </SplitCol>
        </SplitLayout>
    )
}

export default RaitingRow