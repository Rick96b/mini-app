import { Panel } from '@vkontakte/vkui'
import { UserContext } from 'entities/user'
import React, { useContext } from 'react'

interface HomeProps {
  nav: string
}

const Home: React.FC<HomeProps> = props => {
  const {
    nav
  } = props
  const {user} = useContext(UserContext)
  return (
    <Panel nav={nav}>
      <p>Heh</p>
    </Panel>
  )
}

export default Home