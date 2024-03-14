import React, { useContext, useEffect, useState } from 'react'

import styles from './ShoppingCart.module.scss'
import { Group } from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { StoreContext } from 'shared/storeContext/storeContext'
import { BaseProductsList } from 'widgets/base-products-list'
import { observer } from 'mobx-react-lite'


const ShoppingCart:React.FC = () => {
    const rootStore = useContext(StoreContext)
    const router = useRouteNavigator()

    return (
        <div className={styles.cart}>
            <Group header={<h2>Здания</h2>} className={styles.buildings}>
                <BaseProductsList
                    items={rootStore?.requestStore.request.itemsRequest?.items || []}
                    itemsType='Item'
                />
            </Group>
            <Group header={<h2>Предметы</h2>} className={styles.buildings}>
                <BaseProductsList
                    items={rootStore?.requestStore.request.buildingsRequest?.buildings || []}
                    itemsType='Building'
                />
            </Group>
        </div>
    )
}

export default observer(ShoppingCart)