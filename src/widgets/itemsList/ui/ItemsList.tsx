import { SplitLayout } from '@vkontakte/vkui'
import { BaseItem, Item, getAllItems } from 'entities/item'
import React, { useEffect, useState } from 'react'

import styles from './ItemsList.module.scss'

interface ItemsListProps {
    addItem: (newItem: Item) => void
}

const ItemsList:React.FC<ItemsListProps> = props => {
    const {
        addItem
    } = props

    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        getAllItems().then(response => setItems(response))
    },[])

    return (
        <div className={styles.itemsContainer}>
            {items.map(item => 
                <BaseItem
                    item={item}
                    onSubmit={addItem}
                />
            )}
        </div>
    )
}

export default ItemsList