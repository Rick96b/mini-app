import { Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useState } from 'react'
import StoreTabs from './Tabs/StoreTabs'

import styles from './Store.module.scss'
import { ItemsList } from 'widgets/itemsList'
import { BuildingsList } from 'widgets/buildingList'

interface StoreProps
{
  nav: string
}

const Store:React.FC< StoreProps > = props => 
{
    const { 
      nav 
    } = props
    const [selectedTab, setSelectedTab] = useState('items')

    return (
      <Panel nav = { nav }>
        <PanelHeader className={styles.storeHeader}>
          <StoreTabs
            selected={selectedTab}
            setSelected={(selected:string) => setSelectedTab(selected)}
          />
        </PanelHeader>
        {
          selectedTab === 'items' &&
          <ItemsList />
        }
        {
          selectedTab === 'buildings' &&
          <BuildingsList />
        }
      </Panel>
    )
}

export default Store