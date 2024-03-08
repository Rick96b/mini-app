import { Panel } from '@vkontakte/vkui'
import React from 'react'
import { EventsList } from 'widgets/EventsList'

interface EventProps
{
    nav: string
}

const Events:React.FC< EventProps > = props => 
{
    const{ nav } = props

    return (
      <Panel nav = { nav }>
        <EventsList />
      </Panel>
    )
}

export default Events