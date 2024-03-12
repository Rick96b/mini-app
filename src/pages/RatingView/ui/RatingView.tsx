import { Panel, PanelHeader } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react'

import styles from './RatingView.module.scss'
import { Command, getCommandByName } from 'entities/command';
import { Icon24ArrowLeftOutline } from '@vkontakte/icons';
import { useMetaParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

interface RaitingViewProps {
    nav: string;
}


const RaitingView:React.FC<RaitingViewProps> = props => {
    const {
        nav
    } = props
    const route = useRouteNavigator()
    const commandName = useMetaParams<{name: string}>()?.name
    const [command, setCommand] = useState<Command>()

    useEffect(() => {
        if(commandName) {
            getCommandByName(commandName).then(response => setCommand(response))
        } else {
            throw new Error('Несуществующее имя команды')
        }
    }, [])

    return (
        <Panel nav={nav}>
            <PanelHeader
                before={
                    <Icon24ArrowLeftOutline 
                        onClick={() => route.back()}
                        style={{cursor: 'pointer'}}
                    />
                }
            >
                История рейтинга
            </PanelHeader>
            <div className={styles.container}>
                {command?.raiting_history.map(row => 
                    <div className={styles.raitingContainer}>
                        <p>{row.message}</p>
                        <p>{row.raiting}</p>
                    </div>
                )}
            </div>
        </Panel>
    )
}

export default RaitingView