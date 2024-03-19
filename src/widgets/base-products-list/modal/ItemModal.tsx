import { Button, ModalCard } from '@vkontakte/vkui'
import React, { useContext } from 'react'

import styles from './ItemModal.module.scss'
import { useMetaParams } from '@vkontakte/vk-mini-apps-router'
import { BaseItem, itemsType } from '../model/types'
import { StoreContext } from 'shared/storeContext/storeContext'

interface ItemModalProps {
    id: string
}

const ItemModal:React.FC<ItemModalProps> = props => {
    const rootStore = useContext(StoreContext)
    const {
        id
    } = props
    const params = useMetaParams<{item: BaseItem, itemsType: itemsType, isDelete: boolean}>()

    return (
        <ModalCard id={id}>
            <img src={params?.item?.imageLink} alt='Здание' />
            <p className={styles.buildingName}>{params?.item?.name}</p>
            <p>Рейтинг: {params?.item?.rating}</p>
            <p>Цена: {params?.item?.price}</p>
            <Button 
                onClick={() => {
                    if(params?.itemsType === 'Item') {
                        if(params?.isDelete) {
                            rootStore?.requestStore.deleteItemFromRequest(params?.item)
                        } else {
                            rootStore?.requestStore.addItemToRequest(params?.item)
                        }
                    } else {
                        if(params?.isDelete) {
                            rootStore?.requestStore.deleteBuildingFromRequest(params?.item)
                        } else {
                            rootStore?.requestStore.addBuildingToRequest(params?.item!)
                        }
                    }
                }}
            >
                Купить
            </Button>
        </ModalCard>
    )
}

export default ItemModal