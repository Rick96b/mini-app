import React, { useState } from 'react'

import styles from './Building.module.scss'
import { ModalRoot, SplitCol, SplitLayout } from '@vkontakte/vkui'
import BuildingModal from './modal/BuildingModal'
import { Building } from '../model/buildings_types'

interface BuildingProps {
    onSubmit: (building: Building) => void
    building: Building
    buttonName?: string
}

const BaseBuilding:React.FC<BuildingProps> = props => {
    const {
        onSubmit,
        building,
        buttonName
    } = props

    const [activeModal, setActiveModal] = useState<string | null>(null)

    const modals = (
        <ModalRoot activeModal={activeModal}>
            <BuildingModal 
                id='buildingModal' 
                onClose={() => setActiveModal(null)} 
                onSubmit={() => onSubmit(building)}
                building={building}
                buttonName={buttonName}
            />
        </ModalRoot>
    )

    return (
        <SplitLayout 
            modal={modals}
        >
            <SplitCol 
                className={styles.building} 
                onClick={() => {
                    setActiveModal('buildingModal')
                }}
            >
                <img src={building.imageLink} alt='Строение' style={{width: '100%', height: '100%'}}/>
                {building.name}
                <p className={styles.price}>{building.price}</p>
                <p className={styles.rating}>{building.rating}</p>
            </SplitCol>
        </SplitLayout>
    )
}

export default BaseBuilding