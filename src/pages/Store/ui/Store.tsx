import { Button, FixedLayout, Panel, PanelHeader } from '@vkontakte/vkui'
import React, { useEffect, useState } from 'react'
import StoreTabs from './Tabs/StoreTabs'

import styles from './Store.module.scss'
import { Building, getAllBuildings } from 'entities/buildings'
import { Item, getAllItems } from 'entities/item'
import { BaseProductsList } from 'widgets/base-products-list'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppPanels } from 'shared/routes/routes'

interface StoreProps
{
  nav: string
}

const Store:React.FC< StoreProps > = props => 
{
    const { 
      nav 
    } = props
    const router = useRouteNavigator()
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
        <FixedLayout vertical='bottom' className={styles.handlers}>
          <Button
            onClick={() => router.push(AppPanels.ShoppingCart)}
            className={styles.sendRequest}
          >
            Корзина
          </Button>
        </FixedLayout>
      </Panel>
    )
}

export default Store