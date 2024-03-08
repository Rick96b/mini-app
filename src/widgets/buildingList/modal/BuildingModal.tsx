import { Button, ModalCard } from '@vkontakte/vkui'
import React, { useContext } from 'react'

import styles from './BuildingModal.module.scss'
import { UserContext } from 'entities/user'
import { Building } from 'entities/buildings'

interface BuildingModalProps {
    onClose: () => void
    onSubmit: () => void
    id: string
    building: Building
}

const BuildingModal:React.FC<BuildingModalProps> = props => {
    const {user} = useContext(UserContext)

    const {
        id,
        onClose,
        building,
        onSubmit
    } = props

    return (
        <ModalCard id={id} onClose={onClose}>
            <img src={building.imageLink} alt='Здание' />
            <p className={styles.buildingName}>{building.name}</p>
            <p>Рейтинг: {building.rating}</p>
            <p>Цена: {building.price}</p>
            {user?.role === 'Manager' &&
                <Button onClick={() => onSubmit()}>Купить</Button>
            }
        </ModalCard>
    )
}

export default BuildingModal