import React from 'react'

import styles from './ShoppingCart.module.scss'
import { Building } from 'entities/buildings'
import { Group } from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppModals } from 'shared/routes/routes'
import { Item } from 'entities/item'

interface ShoppingCartProps {
    activeBuildings: Building[]
    activeItems: Item[]
}

const ShoppingCart:React.FC<ShoppingCartProps> = props => {
    const {
        activeBuildings,
        activeItems
    } = props
    const router = useRouteNavigator()

    return (
        <div className={styles.cart}>
            <Group header={<h2>Здания</h2>} className={styles.buildings}>
            {activeBuildings.map(building => 
                <div 
                    className={styles.building}
                    onClick={() => router.push(
                        AppModals.Building, 
                        {state: {
                            building: building,
                        }}
                    )}
                >
                    <img src={building.imageLink} />
                    <p className={styles.name}>{building.name}</p>    
                </div>
            )}
            </Group>
            <Group header={<h2>Предметы</h2>} className={styles.buildings}>
            {activeItems.map(building => 
                <div 
                    className={styles.building}
                    onClick={() => router.push(
                        AppModals.Building, 
                        {state: {
                            building: building,
                        }}
                    )}
                >
                    <img src={building.imageLink} />
                    <p className={styles.name}>{building.name}</p>    
                </div>
            )}
            </Group>
        </div>
    )
}

export default ShoppingCart