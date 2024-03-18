import { Tabs, TabsItem } from '@vkontakte/vkui';
import React from 'react'

import styles from './BankTabs.module.scss'

interface BankTabsProps {
    selected: string
    setSelected: (selected:string) => void
}

const BankTabs:React.FC<BankTabsProps> = props => {
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
                id="tab-active-requests"
                aria-controls="tab-content-active-requests"
            >
                Активные
            </TabsItem>
            <TabsItem
                selected={selected === 'archive'}
                onClick={() => {
                    setSelected('archive');
                }}
                id="tab-requests-archive"
                aria-controls="tab-content-requests-archive"
            >
                Оплаченные
            </TabsItem>
        </Tabs>
    )
}

export default BankTabs