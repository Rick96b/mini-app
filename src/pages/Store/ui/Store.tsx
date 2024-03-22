import { Button, FixedLayout, Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useContext, useEffect, useState } from 'react'
import StoreTabs from './Tabs/StoreTabs'

import styles from './Store.module.scss'
import { Building, getAllBuildings } from 'entities/buildings'
import { ShoppingCart } from 'widgets/shopping-cart'
import { Item, getAllItems } from 'entities/item'
import { BaseProductsList } from 'widgets/base-products-list'
import { StoreContext } from 'shared/storeContext/storeContext'
import { UserContext } from 'entities/user'

interface StoreProps
{
  nav: string
}

const Store:React.FC< StoreProps > = props => 
{
    const { 
      nav 
    } = props
    const {user} = useContext(UserContext)
    const rootStore = useContext(StoreContext)
    const [selectedTab, setSelectedTab] = useState('items')
    const [buildings, setBuildings] = useState<Building[]>([])
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
      getAllBuildings().then(response => setBuildings(response))
      getAllItems().then(response => setItems(response))
    }, [])

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
          <BaseProductsList 
            items={items}
            itemsType='Item'
          />
        }
        {
          selectedTab === 'buildings' &&
          <BaseProductsList 
            items={buildings}
            itemsType='Building'
          />
        }
        {
          selectedTab === 'cart' &&
          <ShoppingCart />
        }
        <FixedLayout vertical='bottom' className={styles.handlers}>
          <Button
            onClick={() => {
              rootStore?.requestStore.sendRequest(user?.group || '')
              rootStore?.requestStore.cleanStore()
            }}
            className={styles.sendRequest}
          >
            Отправить заявку
          </Button>
        </FixedLayout>
      </Panel>
    )
}

export default Store