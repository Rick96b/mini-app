import { ModalRoot, SplitLayout } from '@vkontakte/vkui'
import React, { useState } from 'react'
import ItemModal from './modal/ItemModal'
import { Item } from '../model/item_types'

import styles from './Item.module.scss'

interface ItemProps {
    onSubmit: (building: Item) => void
    item: Item
    buttonName?: string
}


const BaseItem:React.FC<ItemProps> = props => {
    const {
        onSubmit,
        item,
        buttonName
    } = props

    const [activeModal, setActiveModal] = useState<string | null>(null)
            
    const modals = (
        <ModalRoot activeModal={activeModal}>
            <ItemModal 
                id='itemModal' 
                onClose={() => setActiveModal(null)} 
                onSubmit={() => onSubmit(item)}
                item={item}
                buttonName={buttonName}
            />
        </ModalRoot>
    )


    return (
        <SplitLayout modal={modals}>
            <div 
                className={styles.item} 
                onClick={() => {
                    setActiveModal('itemModal')
                }}
            >
                <img src={item.imageLink} alt='Предмет' style={{width: '100%', height: '100%'}}/>
                {item.name}
                <p className={styles.price}>{item.price}</p>
                <p className={styles.rating}>{item.rating}</p>
            </div>
        </SplitLayout>
    )
}

export default BaseItem