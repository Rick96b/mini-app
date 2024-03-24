import { Tabs, TabsItem } from '@vkontakte/vkui'
import React from 'react'

import styles from './ConstructionTabs.module.scss'

interface ConstructionTabsProps {
    selected: string
    setSelected: (selected:'active' | 'process' | 'archive') => void
}

const ConstructionTabs:React.FC<ConstructionTabsProps> = props => {
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
                id="tab-construction-requests"
                aria-controls="tab-content-construction-requests"
            >
                Активные
            </TabsItem>
            <TabsItem
                selected={selected === 'process'}
                onClick={() => {
                    setSelected('process');
                }}
                id="tab-in-construction-requests"
                aria-controls="tab-content-in-construction-requests"
            >
                В стройке
            </TabsItem>
            <TabsItem
                selected={selected === 'archive'}
                onClick={() => {
                    setSelected('archive');
                }}
                id="tab-construction-requests-archive"
                aria-controls="tab-construction-content-requests-archive"
            >
                Построенные
            </TabsItem>
        </Tabs>
    )
}

export default ConstructionTabs