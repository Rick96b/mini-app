import { Button, Panel, PanelHeader } from '@vkontakte/vkui'
import { Command, getAllCommands } from 'entities/command';
import React, { useContext, useEffect, useState } from 'react'

import styles from './Rating.module.scss'
import RaitingRow from './RatingRow/RatingRow';
import { UserContext } from 'entities/user';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { AppModals } from 'shared/routes/routes';
import useCommands from 'entities/command/hooks/useCommands';

interface RatingProps {
  nav: string;
}

const Raiting:React.FC<RatingProps> = props => {
  const {
    nav
  } = props
  const {user} = useContext(UserContext)
  const router = useRouteNavigator()
  const {commands} = useCommands()

  return (
      <Panel nav={nav}
      >
        <PanelHeader 
          after={
            user?.role === 'Manager' && 
            <Button
              onClick={() => {router.showModal(AppModals.UpdateRating)}}
              style={{marginRight: '10px'}}
            >
              Изменить рейтинг
            </Button>
          }
        >Рейтинг</PanelHeader>
        <div className={styles.commandsContainer}>
          {commands.sort((a, b) => b.raiting - a.raiting).map((command, index) => 
            command.name !== 'Администраторы' &&
            <RaitingRow 
              command={command} 
              place={index}
            />
          )}
        </div>
      </Panel>
  )
}

export default Raiting