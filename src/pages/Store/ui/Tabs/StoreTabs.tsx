import { Tabs, TabsItem } from '@vkontakte/vkui';
import React from 'react'

import styles from './StoreTabs.module.scss'

interface StoreTabsProps {
    selected: string
    setSelected: (selected:string) => void
}

const StoreTabs:React.FC<StoreTabsProps> = props => {
    const {
        selected,
        setSelected
    } = props

    return (
        <Tabs className={styles.tabsContainer}>
            <TabsItem
                selected={selected === 'items'}
                onClick={() => {
                    setSelected('items');
                }}
                id="tab-items"
                aria-controls="tab-content-items"
            >
                Предметы
            </TabsItem>
            <TabsItem
                selected={selected === 'buildings'}
                onClick={() => {
                    setSelected('buildings');
                }}
                id="tab-buildings"
                aria-controls="tab-content-buildings"
            >
                Здания
            </TabsItem>
            <TabsItem
                selected={selected === 'cart'}
                onClick={() => {
                    setSelected('cart');
                }}
                id="tab-cart"
                aria-controls="tab-content-cart"
            >
                Корзина
            </TabsItem>
        </Tabs>
    )
}

export default StoreTabs