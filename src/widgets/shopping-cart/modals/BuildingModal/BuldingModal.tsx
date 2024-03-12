import { Button, ModalCard } from '@vkontakte/vkui'
import React, { useContext } from 'react'

import styles from './BuildingModal.module.scss'
import { UserContext } from 'entities/user'
import { Building } from 'entities/buildings'
import { useMetaParams } from '@vkontakte/vk-mini-apps-router'

interface BuildingModalProps {
    id: string
}

const BuildingModal:React.FC<BuildingModalProps> = props => {
    const {user} = useContext(UserContext)
    const params = useMetaParams<{
        building: Building,
    }>()

    const {
        id
    } = props

    return (
        <ModalCard id={id}>
            <img src={params?.building?.imageLink} alt='Здание' />
            <p className={styles.buildingName}>{params?.building?.name}</p>
            <p>Рейтинг: {params?.building?.rating}</p>
            <p>Цена: {params?.building?.price}</p>
            {user?.role === 'Manager' &&
                <Button onClick={() => {}}>Удалить из корзины</Button>
            }
        </ModalCard>
    )
}

export default BuildingModal