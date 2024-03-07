import { Panel } from '@vkontakte/vkui'
import React from 'react'

interface EventProps
{
    nav: string
}

const Events:React.FC< EventProps > = props => 
{
    const{ nav } = props

    return (
      <Panel nav = { nav }>Events</Panel>
    )
}

export default Events