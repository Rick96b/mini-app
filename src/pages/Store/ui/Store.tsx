import { Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useState } from 'react'
import StoreTabs from './Tabs/StoreTabs'

import styles from './Store.module.scss'
import { ItemsList } from 'widgets/items-list'
import { BuildingsList } from 'widgets/building-list'
import { Building } from 'entities/buildings'
import { ShoppingCart } from 'widgets/shopping-cart'
import { Item } from 'entities/item'

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
    const [activeBuildings, setActiveBuildings] = useState<Building[]>([])
    const [activeItems, setActiveItems] = useState<Item[]>([])

    const deleteBuilding = (building: Building) => setActiveBuildings((prevBuildings) => {
      let result = prevBuildings
      for(let i = 0; i < prevBuildings.length; i++) {
        if(prevBuildings[i] === building) {
          result.splice(i, 1)
          break
        }
      }
      return result
    })

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
          <ItemsList 
            addToCart={
              (item: Item) => setActiveItems((prevItems) => [...prevItems, item])
            }
          />
        }
        {
          selectedTab === 'buildings' &&
          <BuildingsList 
            addToCart={
              (building: Building) => setActiveBuildings((prevBuildins) => [...prevBuildins, building])
            }
          />
        }
        {
          selectedTab === 'cart' &&
          <ShoppingCart 
            activeBuildings={activeBuildings}
            activeItems={activeItems}
          />
        }
      </Panel>
    )
}

export default Store