import { Tabs, TabsItem } from '@vkontakte/vkui'
import React from 'react'

import styles from './StockTabs.module.scss'

interface StockTabsProps {
    selected: string
    setSelected: (selected:'active' | 'archive') => void
}

const StockTabs:React.FC<StockTabsProps> = props => {
    const {
        selected,
        setSelected
    } = props

    return (
        <Tabs className={styles.tabsContainer}>
            <TabsItem
                selected={selected === 'active'}
                onClick={() => {
                    setSelected('active');
                }}
                id="tab-stock-requests"
                aria-controls="tab-content-stock-requests"
            >
                Активные
            </TabsItem>
            <TabsItem
                selected={selected === 'archive'}
                onClick={() => {
                    setSelected('archive');
                }}
                id="tab-stock-requests-archive"
                aria-controls="tab-stock-content-requests-archive"
            >
                Выданные
            </TabsItem>
        </Tabs>
    )
}

export default StockTabs