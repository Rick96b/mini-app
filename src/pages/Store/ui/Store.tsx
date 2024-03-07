import { Panel } from '@vkontakte/vkui'
import React from 'react'

interface StoreProps
{
    nav: string
}

const Store:React.FC< StoreProps > = props => 
{
    const{ nav } = props

    return (
      <Panel nav = { nav }>Store</Panel>
    )
}

export default Store