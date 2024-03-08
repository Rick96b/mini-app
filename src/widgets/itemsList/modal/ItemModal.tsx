import { Button, ModalCard } from '@vkontakte/vkui'
import React, { useContext } from 'react'

import styles from './ItemModal.module.scss'
import { UserContext } from 'entities/user'
import { Item } from 'entities/item'

interface ItemModalProps {
    onClose: () => void
    onSubmit: () => void
    id: string
    item: Item
}

const ItemModal:React.FC<ItemModalProps> = props => {
    const {user} = useContext(UserContext)
    const {
        id,
        onClose,
        item,
        onSubmit
    } = props

    return (
        <ModalCard id={id} onClose={onClose}>
            <img src={item.imageLink} alt='Здание' />
            <p className={styles.buildingName}>{item.name}</p>
            <p>Рейтинг: {item.rating}</p>
            <p>Цена: {item.price}</p>
            {user?.role === 'Manager' &&
                <Button onClick={() => onSubmit()}>Купить</Button>
            }
        </ModalCard>
    )
}

export default ItemModal