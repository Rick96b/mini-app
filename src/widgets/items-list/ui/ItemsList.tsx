import { ModalRoot, SplitLayout } from '@vkontakte/vkui'
import { Item, getAllItems } from 'entities/item'
import React, { useEffect, useState } from 'react'

import styles from './ItemsList.module.scss'
import ItemModal from '../modal/ItemModal'
import BuyItemModal from '../modal/BuyItemModal'


interface ItemsListProps {
    addToCart: (building: Item) => void
}

const ItemsList:React.FC<ItemsListProps> = props => {
    const {
        addToCart
    } = props

    const [items, setItems] = useState<Item[]>([])
    const [activeItem, setActiveItem] = useState<Item>(items[0])
    const [activeModal, setActiveModal] = useState<string | null>('')
    const [modalHistory, setModalHistory] = useState<string[]>([]);

    useEffect(() => {
        getAllItems().then(response => setItems(response))
    },[])

        
    const changeActiveModal = (activeModal: string | null) => {
        activeModal = activeModal || null;
        let localModalHistory = modalHistory ? [...modalHistory] : [];

        if (activeModal === null) {
        localModalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
        localModalHistory = localModalHistory.splice(0, localModalHistory.indexOf(activeModal) + 1);
        } else {
        localModalHistory.push(activeModal);
        }

        setActiveModal(activeModal);
        setModalHistory(localModalHistory);
    };

    const modalBack = () => {
        changeActiveModal(modalHistory[modalHistory.length - 2]);
    };

    const modals = (
        <ModalRoot activeModal={activeModal}>
            <ItemModal 
                id='achievementModal' 
                onClose={modalBack} 
                onSubmit={() => addToCart(activeItem)}
                item={activeItem}
            />
        </ModalRoot>
    )

    return (
        <SplitLayout className={styles.itemsContainer} modal={modals}>
            {items.map(item => 
                <div 
                    className={styles.item} 
                    onClick={() => {
                        setActiveItem(item)
                        changeActiveModal('achievementModal')
                    }}
                >
                    <img src={item.imageLink} alt='Тайна' style={{width: '100%', height: '100%'}}/>
                    {item.name}
                    <p className={styles.price}>{item.price}</p>
                    <p className={styles.rating}>{item.rating}</p>
                </div>
            )}
        </SplitLayout>
    )
}

export default ItemsList