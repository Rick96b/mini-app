import { IconButton, Panel, PanelHeader } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react'

import styles from './RaitingView.module.scss'
import { Command } from 'entities/command';
import { Icon24ArrowLeftOutline } from '@vkontakte/icons';

interface RaitingViewProps {
    nav: string;
    setModalPanel: (activeModal:string) => void
    activeCommand?: Command
}


const RaitingView:React.FC<RaitingViewProps> = props => {
    const {
        nav,
        setModalPanel,
        activeCommand
    } = props

    return (
        <Panel nav={nav}>
            <PanelHeader
                before={
                    <Icon24ArrowLeftOutline 
                        onClick={() => setModalPanel('raiting_panel')}
                        style={{cursor: 'pointer'}}
                    />
                }
            >
                История рейтинга
            </PanelHeader>
            {activeCommand?.raiting_history.map(row => 
                <div className={styles.raitingContainer}>
                    <p>{row.message}</p>
                    <p>{row.raiting}</p>
                </div>
            )}
        </Panel>
    )
}

export default RaitingView