import React, { useContext } from 'react'

import styles from './BaseListLayout.module.scss'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { UserContext } from 'entities/user'
import { AppModals } from 'shared/routes/routes'
import classNames from 'classnames'
import { Avatar } from '@vkontakte/vkui'
import { BaseListItem, itemsType } from '../model/baseListLayoutModel'

interface BaseListLayoutProps {
    items: BaseListItem[]
    itemsType: itemsType
}

const BaseListLayout:React.FC<BaseListLayoutProps> = props => {
    const {
        items,
        itemsType
    } = props
    const {user} = useContext(UserContext)
    const router = useRouteNavigator()

    return (
        <ul className={styles.baseContainer}>
            {items.map(item => 
                <div 
                    className={styles.item} 
                    onClick={
                        () => (user?.role === 'Manager' || item.commandName) && 
                        router.push(
                            AppModals.BaseItemModal, 
                            {state: {item: item, itemsType:itemsType}}
                        )
                    }
                >
                    <div 
                        className={
                            classNames(
                                styles.imageContainer, 
                                !item.commandName && styles.blur
                            )
                        }   
                    >
                        <Avatar src={item.imageLink} alt='Конкурс' style={{
                            width: '300px',
                            height: '300px'
                        }}/>
                    </div>
                    {
                        item.commandName && 
                        <p className={styles.commandName}>{item.commandName}</p>
                    }
                    {item.name}
                </div>
            )}
        </ul>
    )
}

export default BaseListLayout