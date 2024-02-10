import { Panel } from '@vkontakte/vkui'
import React from 'react'

interface RaitingProps {
  nav: string;
}

const Raiting:React.FC<RaitingProps> = props => {
  const {
    nav
  } = props

  return (
    <Panel nav={nav}>
      
    </Panel>
  )
}

export default Raiting