import { ModalRoot, SplitLayout } from '@vkontakte/vkui'
import React, { useEffect, useState } from 'react'

import styles from './BuildingsList.module.scss'
import { Building, getAllBuildings } from 'entities/buildings'
import BuildingModal from '../modal/BuildingModal'
import BuyBuildingModal from '../modal/BuyBuildingModal'

interface BuildingsListProps {
    addToCart: (building: Building) => void
}

const BuildingsList:React.FC<BuildingsListProps> = props => {
    const {
        addToCart
    } = props

    const [buildings, setBuildings] = useState<Building[]>([])
    const [activeBuilding, setActiveBuilding] = useState<Building>(buildings[0])
    const [activeModal, setActiveModal] = useState<string | null>('')
    const [modalHistory, setModalHistory] = useState<string[]>([]);

    useEffect(() => {
        getAllBuildings().then(response => setBuildings(response))
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
            <BuildingModal 
                id='achievementModal' 
                onClose={modalBack} 
                onSubmit={() => addToCart(activeBuilding)}
                building={activeBuilding}
            />
        </ModalRoot>
    )

    return (
        <SplitLayout className={styles.buildingsContainer} modal={modals}>
            {buildings.map(building => 
                <div 
                    className={styles.building} 
                    onClick={() => {
                        setActiveBuilding(building)
                        changeActiveModal('achievementModal')
                    }}
                >
                    <img src={building.imageLink} alt='Тайна' style={{width: '100%', height: '100%'}}/>
                    {building.name}
                    <p className={styles.price}>{building.price}</p>
                    <p className={styles.rating}>{building.rating}</p>
                </div>
            )}
        </SplitLayout>
    )
}

export default BuildingsList