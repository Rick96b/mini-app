import { Group, Header } from '@vkontakte/vkui'
import { BaseBuilding, Building } from 'entities/buildings'
import { BaseItem, Item } from 'entities/item'
import React from 'react'

import styles from './ShoppingsList.module.scss'

interface ShoppingsListProps {
    items: Item[]
    buildings: Building[]
    deleteBuilding: (building: Building) => void
    deleteItem: (item: Item) => void
}

const ShoppingsList:React.FC<ShoppingsListProps> = props => {
    const {
        items,
        buildings,
        deleteBuilding,
        deleteItem
    } = props

    

    return (
        <div>
            <div className={styles.list}>
                {buildings.map(building =>
                    <BaseBuilding 
                        building={building}
                        onSubmit={() => deleteBuilding(building)}
                        buttonName='Удалить из корзины'
                    />
                )}
            </div>
            <div className={styles.list}>
                {items.map(item =>
                    <BaseItem 
                        item={item}
                        onSubmit={() => deleteItem(item)}
                        buttonName='Удалить из корзины'
                    />
                )}
            </div>

        </div>
    )
}

export default ShoppingsList