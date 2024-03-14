import React from 'react'

import styles from './BaseProductsList.module.scss'
import { BaseItem, itemsType } from '../model/types'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppModals } from 'shared/routes/routes'

interface ItemsListProps {
    items: BaseItem[]
    itemsType: itemsType
    isDelete?: boolean
}

const ItemsList:React.FC<ItemsListProps> = props => {
    const {
        items,
        itemsType,
        isDelete
    } = props
    const router = useRouteNavigator()

    return (
        <div className={styles.itemsContainer}>
            {items.map(item => 
                <div 
                    className={styles.item} 
                    onClick={() => 
                        router.push(AppModals.BaseProductItemModal,
                        {state: {item: item, itemsType: itemsType, isDelete: isDelete}}
                    )}
                >
                    <img src={item.imageLink} alt='Тайна' style={{width: '100%', height: '100%'}}/>
                    {item.name}
                    <p className={styles.price}>{item.price}</p>
                    <p className={styles.rating}>{item.rating}</p>
                </div>
            )}
        </div>
    )
}

export default ItemsList