import { Button, ModalCard } from '@vkontakte/vkui'
import React, { useContext } from 'react'

import styles from './ItemModal.module.scss'
import { UserContext } from 'entities/user'
import { useMetaParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { AppModals } from 'shared/routes/routes'
import { BaseListItem, itemsType } from '../model/baseListLayoutModel'

interface ItemModalProps {
    id: string
}

const ItemModal:React.FC<ItemModalProps> = props => {
    const {user} = useContext(UserContext)
    const {
        id
    } = props
    const params = useMetaParams<{item: BaseListItem, itemsType: itemsType}>()
    
    const router = useRouteNavigator()

    return (
        <ModalCard id={id}>
            <img src={params?.item?.imageLink} alt='Элемент списка' />
            <p className={styles.itemName}>{params?.item?.name}</p>
            <p>{params?.item?.text}</p>
            {user?.role === 'Manager' &&
                <Button 
                    onClick={() => {
                        router.replace(
                            AppModals.BaseItemToCommandModal, 
                            {state: {item: params?.item, itemsType: params?.itemsType}}
                        )
                    }}
                >
                    Назначить команде
                </Button>
            }
        </ModalCard>
    )
}

export default ItemModal