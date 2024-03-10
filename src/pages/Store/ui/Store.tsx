import { Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useState } from 'react'
import StoreTabs from './Tabs/StoreTabs'

import styles from './Store.module.scss'
import { ItemsList } from 'widgets/itemsList'
import { BuildingsList } from 'widgets/buildingList'
import { Item } from 'entities/item'
import { Building } from 'entities/buildings'
import { ShoppingsList } from 'widgets/ShoppingsList'

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
    const [selectedItems, setSelectedItems] = useState<Item[]>([])
    const [selectedBuildings, setSelectedBuildings] = useState<Building[]>([])

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
          <ItemsList addItem={(newItem: Item) => setSelectedItems(
            (prevItems) => [...prevItems, newItem])
          }/>
        }
        {
          selectedTab === 'buildings' &&
          <BuildingsList 
            addBuilding={(newBuilding: Building) => setSelectedBuildings(
              (prevBuildings) => [...prevBuildings, newBuilding])
            }
          />
        }
        {
          selectedTab === 'cart' &&
          <ShoppingsList 
            items={selectedItems}
            buildings={selectedBuildings}
            deleteItem={
              (itemToDelete) => setSelectedItems((prevItems) => {
                return prevItems.filter(prevItem => prevItem !== itemToDelete)
              })
            }
            deleteBuilding={
              (buildingToDelete) => setSelectedItems((prevBuildings) => {
                return prevBuildings.filter(prevBuilding => prevBuilding
                  
                  !== buildingToDelete)
              })
            }
          />
        }
      </Panel>
    )
}

export default Store